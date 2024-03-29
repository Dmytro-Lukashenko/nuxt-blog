import Cookie from 'js-cookie'
import {
  SET_POSTS,
  ADD_POST,
  EDIT_POST,
  DELETE_POST,
  SET_TOKEN,
  CLEAR_TOKEN,
} from './-listMutations'

const postIndex = (state, editedPost) => {
  return state.loadedPosts.findIndex((post) => post.id === editedPost.id)
}

export const state = () => ({
  loadedPosts: [],
  token: null,
})

export const mutations = {
  [SET_POSTS](state, posts) {
    state.loadedPosts = posts
  },
  [ADD_POST](state, post) {
    state.loadedPosts.push(post)
  },
  [EDIT_POST](state, editedPost) {
    state.loadedPosts[postIndex(state, editedPost)] = editedPost
  },
  [SET_TOKEN](state, token) {
    state.token = token
  },
  [CLEAR_TOKEN](state) {
    state.token = null
  },
  [DELETE_POST](state, editedPost) {
    const id = state.loadedPosts[postIndex(state, editedPost)].id
    state.loadedPosts = state.loadedPosts.filter((post) => post.id !== id)
  },
}

export const actions = {
  nuxtServerInit({ dispatch }, context) {
    return context.app.$axios
      .$get('posts.json')
      .then((data) => {
        const postsArray = []
        for (const key in data) {
          postsArray.push({ ...data[key], id: key })
        }
        dispatch('setPosts', postsArray)
      })
      .catch((e) => context.error(e))
  },
  addPost({ state, commit }, post) {
    const createdPost = { ...post, updatedDate: new Date() }
    return this.$axios
      .$post('posts.json?auth=' + state.token, createdPost)
      .then((data) => {
        commit('ADD_POST', { ...createdPost, id: data.name })
      })
      .catch((e) => console.log(e))
  },
  editPost({ state, commit }, editedPost) {
    return this.$axios
      .$put('posts/' + editedPost.id + '.json?auth=' + state.token, editedPost)
      .then((res) => {
        commit('EDIT_POST', editedPost)
      })
      .catch((e) => console.log(e))
  },
  deletePost({ state, commit }, editedPost) {
    return this.$axios
      .delete('posts/' + editedPost.id + '.json?auth=' + state.token)
      .then((res) => {
        commit('DELETE_POST', editedPost)
      })
      .catch((e) => console.log(e))
  },
  setPosts({ commit }, posts) {
    commit('SET_POSTS', posts)
  },
  authenticateUser({ commit }, authData) {
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
        commit('SET_TOKEN', result.idToken)
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
  initAuth({ commit, dispatch }, req) {
    let token
    let expirationDate
    if (req) {
      if (!req.headers.cookie) {
        return
      }
      const jwtCookie = req.headers.cookie
        .split(';')
        .find((key) => key.trim().startsWith('jwt='))
      if (!jwtCookie) {
        return
      }
      if (!req.headers.cookie.includes(';')) {
        return
      }
      const expirationDateCookie = req.headers.cookie
        .split(';')
        .find((key) => key.trim().startsWith('expirationDate='))
        .split('=')[1]
      if (!expirationDateCookie) {
        return
      }
      token = jwtCookie.split('=')[1]
      expirationDate = expirationDateCookie
    } else {
      token = localStorage.getItem('token')
      expirationDate = localStorage.getItem('tokenExpiration')
    }
    if (new Date().getTime() > +expirationDate || !token) {
      console.log('No token or invalid token')
      dispatch('logout')
      return
    }
    commit('SET_TOKEN', token)
  },
  logout() {
    this.commit('CLEAR_TOKEN')
    Cookie.remove('token')
    Cookie.remove('expirationDate')
    if (process.client) {
      localStorage.removeItem('token')
      localStorage.removeItem('tokenExpiration')
    }
  },
}

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  },
  isAuthenticated(state) {
    return !!state.token
  },
}
