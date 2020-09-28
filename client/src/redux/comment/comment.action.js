export const APPROVE_COMMENT = "APPROVE_COMMENT";
export const UNAPPROVE_COMMENT = "UNAPPROVE_COMMENT";
export const TRASH_COMMENT = "TRASH_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";
export const RESTORE_COMMENT = "RESTORE_COMMENT";

export const act_ApproveComment = (selComment) => ({
  type: APPROVE_COMMENT,
  payload: selComment,
});

export const act_UnapproveComment = (selComment) => ({
  type: UNAPPROVE_COMMENT,
  payload: selComment,
});

export const act_TrashComment = (selComment) => ({
  type: TRASH_COMMENT,
  payload: selComment,
});

export const act_DeleteComment = (selComment) => ({
  type: DELETE_COMMENT,
  payload: selComment,
});

export const act_RestoreComment = (selComment) => ({
  type: RESTORE_COMMENT,
  payload: selComment,
});
