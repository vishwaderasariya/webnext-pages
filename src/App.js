import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import EditorPage from "./pages/EditorPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Projects} exact />
          <Route path="/projectpage" component={ProjectPage} exact />
          <Route path="/editorpage" component={EditorPage} exact />
        </Switch>
      </BrowserRouter>
      {/* <div>
        <ProjectPage />
      </div>

      <div>
        <EditorPage />
      </div> */}
    </div>
  );
}

export default App;
