import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const EmailVerificationEmpty = React.lazy(() =>
  import("pages/EmailVerificationEmpty"),
);
const SignUpFilled = React.lazy(() => import("pages/SignUpFilled"));
const LoginActive = React.lazy(() => import("pages/LoginActive"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginactive" element={<LoginActive />} />
          <Route path="/signupfilled" element={<SignUpFilled />} />
          <Route
            path="/emailverificationempty"
            element={<EmailVerificationEmpty />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
