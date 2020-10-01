import {
  ADD_COMMENT,
  APPROVE_COMMENT,
  DELETE_COMMENT,
  RESTORE_COMMENT,
  TRASH_COMMENT,
  UNAPPROVE_COMMENT,
} from "./comment.action";
import { setCommentStatus, deleteComment, addComment } from "./comment.util";

const INITIAL_STATE = {
  comments: [
    {
      id: 1,
      status: "Approved",
      author: {
        name: "Taste So Good",
        email: "tastsogood@gmail.com",
      },
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      postId: 1,
      date: "2020/03/17 at 9:10 am",
    },
    {
      id: 2,
      status: "Approved",
      author: {
        name: "Phuong",
        email: "phuongle0205@gmail.com",
      },
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      postId: 1,
      date: "2020/03/17 at 9:10 am",
    },
    {
      id: 3,
      status: "Pending",
      author: {
        name: "My mine",
        email: "mymine@gmail.com",
      },
      content:
        "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
      postId: 2,
      date: "2020/03/17 at 9:10 am",
    },
    {
      id: 4,
      status: "Trash",
      author: {
        name: "Somebody Else",
        email: "sombodyelse@gmail.com",
      },
      content: "Or randomised words which don't look even slightly believable",
      postId: 2,
      date: "2020/03/17 at 9:10 am",
    },
  ],
};

const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: addComment(state.comments, action.payload),
      };
    case APPROVE_COMMENT:
      return {
        ...state,
        comments: setCommentStatus(state.comments, action.payload, "Approved"),
      };
    case UNAPPROVE_COMMENT:
    case RESTORE_COMMENT:
      return {
        ...state,
        comments: setCommentStatus(state.comments, action.payload, "Pending"),
      };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: deleteComment(state.comments, action.payload),
      };
    case TRASH_COMMENT:
      return {
        ...state,
        comments: setCommentStatus(state.comments, action.payload, "Trash"),
      };
    default:
      return state;
  }
};

export default commentReducer;
