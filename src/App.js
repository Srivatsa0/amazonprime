import Navbar from "./componant/Navbar";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import Home from "./componant/Home";
import Addmovie from "./componant/Addmovie";
import Moviedetails from "./componant/Moviedetails";
import Notfoundpage from "./componant/Notfoundpage";

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>

      <Route exact path="/addmovies">
        <Addmovie/>
      </Route>

      <Route path="/Moviedetails:id">
        <Moviedetails/>
      </Route>

      <Route path="*">
        <Notfoundpage/>
      </Route>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
