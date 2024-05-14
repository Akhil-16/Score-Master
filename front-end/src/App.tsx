import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { useAuth } from "./utils";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ViewAssignment from "./pages/ViewAssignment";
import SubmitAssignment from "./pages/SubmitAssignment";
import ViewSubmission from "./pages/ViewSubmission";
import CreateAssignemnt from "./pages/CreateAssignemnt";
import ShowAssignments from "./pages/ShowAssignments";

function App() {
  const auth = useAuth();

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={auth.isLoggedIn ? <Dashboard /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/view/assignment"
          element={
            auth.isLoggedIn ? <ViewAssignment /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path="/view/submission"
          element={
            auth.isLoggedIn ? <ViewSubmission /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path="/create/assignment"
          element={
            auth.isLoggedIn ? <CreateAssignemnt /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path="/view/assignments"
          element={
            auth.isLoggedIn ? <ShowAssignments /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path="/submit/assignment"
          element={
            auth.isLoggedIn ? <SubmitAssignment /> : <Navigate to={"/login"} />
          }
        />
        <Route
          path="/login"
          element={
            auth.isLoggedIn ? (
              <Navigate to={"/view/assignments"} />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route
          path="/sign-up"
          element={
            auth.isLoggedIn ? (
              <Navigate to={"/view/assignments"} />
            ) : (
              <SignUpPage />
            )
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
