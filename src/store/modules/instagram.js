import axios from 'axios'
import getEmails from 'get-emails'
import msTo from 'ms-to'

const state = {
  user: {}
}

const getters = {
  instagram: state => state.user
}

const actions = {
  async fetchInstagram({ commit }, username) {
    // TODO deal with errors
    // if (typeof username !== 'string') {
    //     throw new TypeError(`Expected \`username\` to be of type \`string\` but received type \`${typeof username}\``);
    // }

    try {
      const {data} = await axios.get(`https://www.instagram.com/${username}/?__a=1`)
      const user = data.graphql.user
      user.username = username
      user.posts = posts(user.edge_owner_to_timeline_media.edges)
      const {comments, likes, engagement, frequency} = analytics(user.posts, user.edge_followed_by.count)
      user.comments = comments
      user.likes = likes
      user.engagement = engagement
      user.frequency = frequency
      commit("setInstagram", user);

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
  setInstagram: (state, user) => (
    state.user = {
      biography: user.biography,
      email: getEmails(user.biography).values().next().value || '',
      followers: user.edge_followed_by.count,
      following: user.edge_follow.count,
      username: user.username,
      full_name: user.full_name,
      url: user.url,
      website: user.external_url,
      business_account: user.is_business_account,
      business_category_name: user.business_category_name,
      verified: user.is_verified,
      joined_recently: user.is_joined_recently,
      profile_pic_url: user.profile_pic_url,
      posts: user.posts,
      comments: user.comments, 
      likes: user.likes,
      engagement: user.engagement,
      frequency: user.frequency
    })
}

export default {
  state,
  getters,
  actions,
  mutations,
}

const posts = (posts) => {
  try {
    return posts.map((p) => {
      return {
        image: p.node.display_url,
        caption: p.node.edge_media_to_caption.edges.length
          ? p.node.edge_media_to_caption.edges[0].node.text
          : "",
        date: new Date(p.node.taken_at_timestamp * 1000),
        timestamp: p.node.taken_at_timestamp,
        likes: p.node.edge_media_preview_like.count,
        comments: p.node.edge_media_to_comment.count,
      };
    });
  } catch (error) {
    //		throw `error on posts: ${error}`
  }
}

const analytics = (posts, followers) => {
	let comments = 0
	let likes = 0
	try {
		for (const post of posts) {
			comments += post.comments;
			likes += post.likes;
		}
		const [firstPost, lastPost] = [posts[0], posts.slice(-1)[0]]
		const engagement = +(((comments + likes) / posts.length) / followers).toFixed(2)
		let frequency = msTo(Math.floor((firstPost.timestamp * 1000) - (lastPost.timestamp * 1000)) / posts.length)
    frequency = frequency.days > 2 ? `${frequency.days} dia(s)` : `${frequency.hours} hora(s)` 	
    return {comments, likes, engagement, frequency}
			
	} catch (error) {
        // TODO 
        // throw `error on analytics: ${error}`
	}

} 
