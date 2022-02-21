import React from "react";
import "./index.css";
import App from "./App";
import Login from "./login/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import SignUp from "./login/signUp";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      sdf, {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

class AppRouter extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Routes> 
              <Route path="/login" element={<Login />}>
              </Route>
              <Route path="/" element={<App />}>
              </Route>
              <Route path="/signup" element={<SignUp />}>
              </Route>
            </Routes>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Router>
      </div>
    );
  }
}

export default AppRouter;