import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default function App() {
  const [progress, setProgress] = useState(0);
  const settotalProgress = (progress) => {
    setProgress(progress);
  };
  return (
    <Router>
      <div className="App" style={{ backgroundColor: "black" }}>
        <LoadingBar color="#f11946" progress={progress} />
        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={settotalProgress}
                key="general"
                pagesize={10}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={settotalProgress}
                key="sports"
                pagesize={10}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={settotalProgress}
                key="entertainment"
                pagesize={10}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={settotalProgress}
                key="health"
                pagesize={10}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={settotalProgress}
                key="business"
                pagesize={10}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={settotalProgress}
                key="science"
                pagesize={10}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={settotalProgress}
                key="technology"
                pagesize={10}
                category="technology"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
