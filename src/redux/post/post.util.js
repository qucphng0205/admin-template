export const savePost = (posts, savedPost) => {
  const existingPost = posts.find((post) => post.id === savedPost.id);
  if (existingPost) {
    return posts.map((post) => (post.id === savedPost.id ? savedPost : post));
  } else if (savedPost.id == null) {
    savedPost.id = posts.length + 1;
    return [...posts, savedPost];
  }

  return posts;
};

export const trashPost = (posts, editPost) => {
  const existingPost = posts.find((p) => p.id === editPost.id);
  if (existingPost) {
    return posts.map((post) =>
      post.id === editPost.id ? { ...editPost, status: "Trash" } : post
    );
  }

  return posts;
};

export const restorePost = (posts, editPost) => {
  const existingPost = posts.find((p) => p.id === editPost.id);
  if (existingPost) {
    return posts.map((post) =>
      post.id === editPost.id ? { ...post, status: "Draft" } : post
    );
  }

  return posts;
};

export const deletePermanently = (posts, selectedPost) => {
  return posts.filter((post) => post.id !== selectedPost.id);
};
