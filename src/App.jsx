import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, memo } from "react";

// Lazy-loaded pages (unchanged)
const Welcome = lazy(() => import("./pages/Welcome"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Profile = lazy(() => import("./pages/Profile"));

// Optimized Loader (memoized + no CLS)
const Loader = memo(() => (
  <div className="app-loader">
    Loading…
  </div>
));

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Welcome />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Loader />}>
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loader />}>
              <Profile />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}
