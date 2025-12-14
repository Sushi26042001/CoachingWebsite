import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IASLandingPage from "./Components/IASLandingPage/IASLandingPage";
import Settings from "./Components/Settings/Settings";
import Layout from "./Components/Layout/Layout";
import Quiz from "./Components/Quiz/Quiz";
import Courses from "./Components/Courses/Courses";
import PDFResources from "./Components/PDFResources/PDFResources";
import TopperSection from "./Components/TopperSection/TopperSection";
import Locations from "./Components/Locations/Locations";
import LearningFeatures from "./Components/LearningFeatures/LearningFeatures";
import Articles from "./Components/Articles/Articles";
import FAQSection from "./Components/FAQSection/FAQSection";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import Counselling from "./Components/Counselling/Counselling";

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
          <Route path="/Locations" element={<Locations />} />
          <Route path="/LearningFeatures" element={<LearningFeatures />} />
          <Route path="/Articles" element={<Articles />} />
          <Route path="/FAQSection" element={<FAQSection />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/About" element={<About />} />
          <Route path="/Counselling" element={<Counselling />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
