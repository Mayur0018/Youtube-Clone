import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Feed from "./Components/Feed";
import VideoDetail from "./Components/VideoDetail";
import ChannelDetail from "./Components/ChannelDetail";
import SearchFeed from "./Components/SearchFeed";

function App() {
  return (
    <BrowserRouter>

      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />}></Route>
          <Route path="/video/:id" element={<VideoDetail />}></Route>
          <Route path="/channel/:id" element={<ChannelDetail />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
