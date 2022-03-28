import Vuex from 'vuex'

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return new Promise((resolve, reject) => {
          // eslint-disable-next-line nuxt/no-timing-in-fetch-data
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First Post',
                previewText: 'This is our first post',
                thumbnail:
                  'https://www.garlicandzest.com/wp-content/uploads/2015/10/irish-mocha-latte-21.jpg',
              },
              {
                id: '2',
                title: 'Second Post',
                previewText: 'This is our second post',
                thumbnail:
                  'https://www.garlicandzest.com/wp-content/uploads/2015/10/irish-mocha-latte-21.jpg',
              },
              {
                id: '3',
                title: 'Third Post',
                previewText: 'This is our third post',
                thumbnail:
                  'https://www.garlicandzest.com/wp-content/uploads/2015/10/irish-mocha-latte-21.jpg',
              },
            ])
            resolve()
          }, 1000)
        })
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts)
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },
    },
  })
}

export default createStore
