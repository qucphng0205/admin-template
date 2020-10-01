export const addComment = (comments, newComment) => {
  newComment.id = comments.length;
  return [...comments, newComment];
};

export const deleteComment = (comments, selComment) => {
  return comments.filter((comment) => comment.id !== selComment.id);
};

export const setCommentStatus = (comments, selComment, status) => {
  const existingComment = comments.find(
    (comment) => comment.id === selComment.id
  );
  if (existingComment) {
    return comments.map((comment) =>
      comment.id === selComment.id ? { ...comment, status: status } : comment
    );
  } else return comments;
};
