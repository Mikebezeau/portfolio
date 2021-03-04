import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import Particles from "react-particles-js";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={About} path="/about" />
          <Route component={SinglePost} path="/post/:slug" />
          <Route component={Post} path="/post" />
          <Route component={Project} path="/project" />
        </Switch>
      </BrowserRouter>
      <Particles
        params={{
          particles: {
            number: {
              value: 70,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
          },
        }}
      />
    </>
  );
}

export default App;
