import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AllProvider } from "./contexts";
import main from "./pages/main";
import projects from "./pages/projects";
import readme from "./pages/readme";

function App() {
  return (
    <Router>
      <AllProvider>
        <Switch>
          <Route
            path="/projects/:id/:project/readme"
            exact
            component={readme}
          />
          <Route path="/projects/:id" component={projects} />
          <Route path="/" exact component={main} />
        </Switch>
      </AllProvider>
    </Router>
  );
}

export default App;
