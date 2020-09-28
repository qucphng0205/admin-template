import React from "react";
import PhComments from "./pages/admin_page/components/ph-comments/PhComments";
import PhDashboard from "./pages/admin_page/components/ph-dashboard/PhDashboard";
import PhPostEditor from "./pages/admin_page/components/ph-post-editor/PhPostEditor";
import PhPosts from "./pages/admin_page/components/ph-posts/PhPosts";

const routes = [
  {
    path: "/ph-admin",
    exact: true,
    name: "Ph Dashboard",
    component: PhDashboard,
  },
  {
    path: "/ph-admin/posts",
    exact: true,
    name: "Ph Posts",
    component: PhPosts,
  },
  {
    path: "/ph-admin/posts/add-new",
    exact: true,
    name: "Ph Post Editor",
    component: PhPostEditor,
  },
  {
    path: "/ph-admin/posts/:id",
    exact: true,
    name: "Ph Post Editor",
    component: PhPostEditor,
  },
  {
    path: "/ph-admin/comments",
    exact: true,
    name: "Ph Comments",
    component: PhComments,
  },
  // { path: "/ph-admin/posts/add-new", exact: true, name: "Ph Create Post" },
  // { path: "/ph-admin/media", exact: true, name: "Ph Media" },
  // { path: "/ph-admin/comments", exact: true, name: "Ph Comments" },
  // { path: "/ph-admin/feedback", exact: true, name: "Ph Feedback" },
];

export default routes;
