import './App.css';
import Mypages from "./pages/mypages"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>  
        <Route path="/">
          <Mypages />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
