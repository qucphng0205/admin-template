import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "./pages/login_page/LoginPage";
import AdminPage from "./pages/admin_page/AdminPage";
import HomePage from "./pages/home_page/HomePage";
import PostPage from "./pages/post_page/PostPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" name="Home Page" component={HomePage} />
          <Route
            exact
            path="/posts/:id"
            name="Post Page"
            component={PostPage}
          />
          <Route
            exact
            path="/ph-admin/login"
            name="Admin Login Page"
            component={LoginPage}
          />
          <Route path="/ph-admin" name="Admin Home" component={AdminPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
