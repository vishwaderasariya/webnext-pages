import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
import Sites from "./pages/Sites";
import SitePage from "./pages/SitePage";
import EditorPage from "./pages/EditorPage";
import Blog from "./Components/Blog";
import Content from "./Components/Content";
import Forms from "./Components/Forms";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Sites} exact />
        <Route path="/sitepage" component={SitePage} exact />
        <Route path="/content" component={Content}>
          <Switch>
            <Route path="/blogs" component={Blog} />
          </Switch>
        </Route>
        <Route path="/editorpage" component={EditorPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
