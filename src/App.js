import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
export default class App extends Component {
  async componentDidMount() {
    document.body.style.backgroundColor = "black";
  }
  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({ progress: progress });
  };
  render() {
    return (
      <Router>
        <div className="App" style={{ backgroundColor: "black" }}>
          <LoadingBar color="#f11946" progress={this.state.progress} />
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
                  setProgress={this.setProgress}
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
}
