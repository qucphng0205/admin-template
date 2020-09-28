import {
  DELETE_POST,
  RESTORE_POST,
  SAVE_POST,
  TRASH_POST,
} from "./post.action";
import {
  deletePermanently,
  restorePost,
  savePost,
  trashPost,
} from "./post.util";

const INITIAL_STATE = {
  posts: [
    {
      id: 1,
      title: "Shader 1 – Làm quen với Shader trong Unity",
      author: "Phuong",
      comments: 0,
      date: "2020/04/13 at 7:51 pm",
      status: "Published",
      content: "",
    },
    {
      id: 2,
      title: "Awake, Start và một số hàm cơ bản trong MonoBehaviour",
      author: "Phuong",
      comments: 1,
      date: "2020/04/04 at 5:32 pm",
      status: "Published",
      content: "",
    },
    {
      id: 3,
      title: "Closure trong c#",
      author: "Phuong",
      comments: 0,
      date: "2020/03/26 at 8:46 pm",
      status: "Draft",
      content: "",
    },
    {
      id: 4,
      title: "Khái niệm Render Pipeline trong Unity3D",
      author: "Phuong",
      comments: 0,
      date: "2020/03/17 at 9:10 am",
      status: "Published",
      content: "",
    },
    {
      id: 5,
      title: "Optimized: Giảm 75% thời gian Compile trong Unity",
      author: "Phuong",
      comments: 0,
      date: "2019/11/10 at 11:23 am	",
      status: "Trash",
      content: "",
    },
  ],
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_POST:
      return {
        ...state,
        posts: savePost(state.posts, action.payload),
      };
    case TRASH_POST:
      return {
        ...state,
        posts: trashPost(state.posts, action.payload),
      };
    case RESTORE_POST:
      return {
        ...state,
        posts: restorePost(state.posts, action.payload),
      };
    case DELETE_POST:
      return {
        ...state,
        posts: deletePermanently(state.posts, action.payload),
      };
    default:
      return state;
  }
};

export default postReducer;
