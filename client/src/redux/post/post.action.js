export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";

export const act_AddPost = (payload) => ({
  type: ADD_POST,
  payload: payload,
});

export const act_EditPost = (post) => ({
  type: EDIT_POST,
  payload: post,
});
