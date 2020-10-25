const resolvers = {
    Query: {
      me: (query, _, { dataSources: { users } }) => users.getUser(query.user.user_id),
    },
    User: {
      user_id: (user, _, { dataSources: { users } }) => users.getUser(user.user_id),
      email: (user, _, { dataSources: { users } }) => users.getUser(user.email),
      given_name: (user, _, { dataSources: { users } }) => users.getUser(user.given_name),
      family_name: (user, _, { dataSources: { users } }) => users.getUser(user.family_name)
    },

    Post: {
      uri: (post, _, { dataSources: { posts } }) => posts.getPost(post.uri),
      title: (post, _, { dataSources: { posts } }) => posts.getPost(post.title),
      description: (post, _, { dataSources: { posts } }) => posts.getPost(post.description),
      user_id: (post, _, { dataSources: { posts } }) => posts.getPost(post.user_id),
    }
  }

  module.exports = resolvers;