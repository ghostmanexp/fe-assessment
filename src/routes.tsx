import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListingsPage from "./pages/Listings";
import ListingDetailsPage from "./pages/ListingDetails";

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingsPage />} />
        <Route path="/listing/:id" element={<ListingDetailsPage />} />
      </Routes>
    </Router>
  );
}