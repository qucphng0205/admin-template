import { ADD_POST, EDIT_POST } from "./post.action";
import { addPost, editPost } from "./post.util";

const INITIAL_STATE = {
  posts: [
    {
      id: 1,
      title: "Shader 1 – Làm quen với Shader trong Unity",
      author: "Phuong",
      categories: ["Graphic", "Theory", "Unity"],
      tags: ["Shader", "Unity"],
      comments: 0,
      date: {
        status: "Published",
        date: "2020/04/13 at 7:51 pm",
      },
      internalLinks: 0,
      status: "Published",
      content: "",
    },
    {
      id: 2,
      title: "Awake, Start và một số hàm cơ bản trong MonoBehaviour",
      author: "Phuong",
      categories: ["C#", "Theory", "Unity"],
      tags: ["Awake", "Monobehaviour", "Start"],
      comments: 1,
      date: {
        status: "Published",
        date: "2020/04/04 at 5:32 pm",
      },
      internalLinks: 2,
      status: "Published",
      content: "",
    },
    {
      id: 3,
      title: "Closure trong c#",
      author: "Phuong",
      categories: ["Unity"],
      tags: [],
      comments: 0,
      date: {
        status: "Last Modified",
        date: "2020/03/26 at 8:46 pm",
      },
      internalLinks: 0,
      status: "Draft",
      content: "",
    },
    {
      id: 4,
      title: "Khái niệm Render Pipeline trong Unity3D",
      author: "Phuong",
      categories: ["Graphic", "Theory", "Unity"],
      tags: [
        "Culling",
        "Unity",
        "Graphic",
        "Post-processing",
        "Render pipeline",
      ],
      comments: 0,
      date: {
        status: "Published",
        date: "2020/03/17 at 9:10 am",
      },
      internalLinks: 2,
      status: "Published",
      content: "",
    },
    {
      id: 5,
      title: "Optimized: Giảm 75% thời gian Compile trong Unity",
      author: "Phuong",
      categories: ["Unity"],
      tags: [],
      comments: 0,
      date: {
        status: "Last Modified",
        date: "2019/11/10 at 11:23 am	",
      },
      internalLinks: 0,
      status: "Trash",
      content: "",
    },
  ],
};

const postReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: addPost(state.posts, action.payload),
      };
    case EDIT_POST:
      return {
        ...state,
        posts: editPost(state.posts, action.payload),
      };
    default:
      return state;
  }
};

export default postReducer;
