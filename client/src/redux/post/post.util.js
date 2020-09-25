export const addPost = (posts, newPost) => {
  return [...posts, newPost];
};

export const editPost = (posts, editPost) => {
  const existingPost = posts.find((post) => post.id === editPost.id);
  if (existingPost) {
    return posts.map((post) => (post.id === editPost.id ? editPost : post));
  } else return posts;
};
