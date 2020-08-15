// import axios from 'axios'
// import getEmails from 'get-emails'

const state = {
  user: {},
};

const getters = {
  twitter: state => state.user
};

const actions = {
  async fetchTwitter({ commit } /* , username */) {
    // TODO deal with errors
    // if (typeof username !== 'string') {
    //     throw new TypeError(`Expected \`username\` to be of type \`string\` but received type \`${typeof username}\``);
    // }

    try {
      const user = []
      // const user = await axios.get(`https://twitter.com/${username}`)
      commit("setTwitter", user);

    } catch (error) {
      // TODO deal with errors
      // if (error.response.statusCode === 404) {
      //     error.message = `User "${username}" not found`;
      // }
      // throw error;
    }
  }
}

const mutations = {
   setTwitter: (state, user) => (
     state.user = {
       ...user,
   })
}

export default {
  state,
  getters,
  actions,
  mutations,
};
