import MarketingPage from "./pages/MarketingPage";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./routes/ProtectedRoutes";

export default function App() {

  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/marketing"
        element={
          <ProtectedRoute>
            <MarketingPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
