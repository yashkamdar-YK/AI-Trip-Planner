import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from "./pages/Home";
import CreatTrip from "./pages/CreatTrip";
import PlannedTrip from "./pages/PlannedTrip";
import ViewTrip from "./view-trip/[tripId]";
import Navbar from "./components/shared/Navbar"; // Assuming Navbar is in this location
import MyTrips from "./pages/MyTrips";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="app-container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-trip" element={<CreatTrip />} />
            <Route path="/your-trip" element={<PlannedTrip />} />
            <Route path="/view-trip/:tripId" element={<ViewTrip />} />
            <Route path="/my-trips" element={<MyTrips/>} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;