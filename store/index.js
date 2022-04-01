import Vuex from 'vuex'
import Cookie from 'js-cookie'
import {
  SET_POSTS,
  ADD_POST,
  EDIT_POST,
  SET_TOKEN,
  CLEAR_TOKEN,
} from './-listMutations'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null,
    },
    mutations: {
      [SET_POSTS](state, posts) {
        state.loadedPosts = posts
      },
      [ADD_POST](state, post) {
        state.loadedPosts.push(post)
      },
      [EDIT_POST](state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        )
        state.loadedPosts[postIndex] = editedPost
      },
      [SET_TOKEN](state, token) {
        state.token = token
      },
      [CLEAR_TOKEN](state) {
        state.token = null
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        console.log(vuexContext)
        return context.app.$axios
          .$get('posts.json')
          .then((data) => {
            const postsArray = []
            for (const key in data) {
              postsArray.push({ ...data[key], id: key })
            }
            vuexContext.commit('SET_POSTS', postsArray)
          })
          .catch((e) => context.error(e))
      },
      addPost(vuexContext, post) {
        const createdPost = { ...post, updatedDate: new Date() }
        return this.$axios
          .$post('posts.json?auth=' + vuexContext.state.token, createdPost)
          .then((data) => {
            vuexContext.commit('ADD_POST', { ...createdPost, id: data.name })
          })
          .catch((e) => console.log(e))
      },
      editPost(vuexContext, editedPost) {
        return this.$axios
          .$put(
            'posts/' + editedPost.id + '.json?auth=' + vuexContext.state.token,
            editedPost
          )
          .then((res) => {
            vuexContext.commit('EDIT_POST', editedPost)
          })
          .catch((e) => console.log(e))
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('SET_POSTS', posts)
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' +
          process.env.fbAPIKey
        if (!authData.isLogin) {
          authUrl =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' +
            process.env.fbAPIKey
        }
        return this.$axios
          .$post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          })
          .then((result) => {
            vuexContext.commit('SET_TOKEN', result.idToken)
            localStorage.setItem('token', result.idToken)
            localStorage.setItem(
              'tokenExpiration',
              new Date().getTime() + +result.expiresIn * 1000
            )
            Cookie.set('jwt', result.idToken)
            Cookie.set(
              'expirationDate',
              new Date().getTime() + +result.expiresIn * 1000
            )
            return this.$axios.$post('http://localhost:3000/api/track-data', {
              data: 'Authenticated!',
            })
          })
          .catch((e) => console.log(e))
      },

      initAuth(vuexContext, req) {
        let token
        let expirationDate
        if (req) {
          if (!req.headers.cookie) {
            const jwtCookie = req.headers.cookie
              .split(';')
              .find((key) => key.trim().startsWith('jwt='))
            if (!jwtCookie) {
              return
            }
            token = jwtCookie.split('=')[1]
            expirationDate = req.headers.cookie
              .split(';')
              .find((key) => key.trim().startsWith('expirationDate='))
              .split('=')[1]
          }
        } else {
          token = localStorage.getItem('token')
          expirationDate = localStorage.getItem('tokenExpiration')
        }
        if (new Date().getTime() > +expirationDate || !token) {
          console.log('No token or invalid token')
          vuexContext.dispatch('logout')
          return
        }
        vuexContext.commit('SET_TOKEN', token)
      },
      logout(vuexContext) {
        this.commit('CLEAR_TOKEN')
        Cookie.remove('token')
        Cookie.remove('expirationDate')
        if (process.client) {
          localStorage.removeItem('token')
          localStorage.removeItem('tokenExpiration')
        }
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
      isAuthenticated(state) {
        return state.token != null
      },
    },
  })
}

export default createStore
