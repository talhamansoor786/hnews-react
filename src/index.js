import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GoogleFontLoader from "react-google-font-loader";
import Nav from "./components/Nav/Nav";
import Posts from "./components/Posts/Posts";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import './App.css';

function App() {
  return (
    <Router>
      <GoogleFontLoader
        fonts={[
          {
            font: "Roboto",
            weights: [400, 600, 800, "400i"],
          },
          {
            font: "Roboto Mono",
            weights: [400, 700],
          },
          {
            font: "Manrope",
            weights: [400, 700],
          },
        ]}
        subsets={["cyrillic-ext", "greek"]}
      />
      <div className="p-lr-md-0 p-30 ant-page-header site-page-header-responsive has-footer ant-page-header-ghost ant-page-header-compact">
        <Nav />
      </div>
      <div className="p-lr-54 p-lr-md-24">
        <div className="ant-list ant-list-lg ant-list-split ant-list-bordered ant-list-something-after-last-item">
          <Switch>
            <Route exact path="/" render={() => <Posts type="top" />} />
            <Route path="/welcome" render={() => <WelcomePage />} />
            <Route path="/best" render={() => <Posts type="best" />} />
            <Route path="/jobs" render={() => <Posts type="job" />} />
            <Route path="/new" render={() => <Posts type="new" />} />
            <Route render={() => <h1 style={{"text-align": "center"}}>404</h1>} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));