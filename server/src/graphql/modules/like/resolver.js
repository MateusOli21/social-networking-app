const { UserInputError } = require('apollo-server');

const checkAuth = require('../../../util/checkAuth');
const Post = require('../../../models/Post');

module.exports = {
  Mutation: {
    likePost: async (_, { postId }, context) => {
      const { username } = checkAuth(context);

      const post = await Post.findById(postId);

      if (!post) throw new UserInputError('Post not found.');

      let response = '';

      if (post.likes.find((like) => like.username === username)) {
        post.likes = post.likes.filter((like) => like.username !== username);
        response = 'UnLiked post.';
      } else {
        post.likes.push({ username, createdAt: new Date().toISOString() });
        response = 'Liked post.';
      }

      await post.save();

      return post;
    },
  },
};
