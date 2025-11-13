import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IASLandingPage from "./Components/IASLandingPage/IASLandingPage";
import Settings from "./Components/Settings/Settings";
import Layout from "./Components/Layout/Layout";
import Quiz from "./Components/Quiz/Quiz";
import Courses from "./Components/Courses/Courses";
import PDFResources from "./Components/PDFResources/PDFResources";
import TopperSection from "./Components/TopperSection/TopperSection";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all routes */}
        <Route element={<Layout />}>
          <Route path="/" element={<IASLandingPage />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/Quiz" element={<Quiz />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/PDFResources" element={<PDFResources />} />
          <Route path="/TopperSection" element={<TopperSection />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
