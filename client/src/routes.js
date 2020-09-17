import React from "react";

import PhMain from "./pages/admin_page/components/ph-main/PhMain";
import PhPosts from "./pages/admin_page/components/ph-posts/PhPosts";

const routes = [
  {
    path: "/ph-admin",
    exact: true,
    name: "Ph Dashboard",
    component: PhMain,
  },
  {
    path: "/ph-admin/posts",
    exact: true,
    name: "Ph Posts",
    component: PhPosts,
  },
  // { path: "/ph-admin/posts/add-new", exact: true, name: "Ph Create Post" },
  // { path: "/ph-admin/media", exact: true, name: "Ph Media" },
  // { path: "/ph-admin/comments", exact: true, name: "Ph Comments" },
  // { path: "/ph-admin/feedback", exact: true, name: "Ph Feedback" },
];

export default routes;
