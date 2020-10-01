export const SAVE_POST = "SAVE_POST";
export const TRASH_POST = "TRASH_POST";
export const RESTORE_POST = "RESTORE_POST";
export const DELETE_POST = "DELETE_POST";

export const act_SavePost = (post) => ({
  type: SAVE_POST,
  payload: post,
});

export const act_TrashPost = (post) => ({
  type: TRASH_POST,
  payload: post,
});

export const act_RestorePost = (post) => ({
  type: RESTORE_POST,
  payload: post,
});

export const act_DeletePermenantlyPost = (post) => ({
  type: DELETE_POST,
  payload: post,
});
