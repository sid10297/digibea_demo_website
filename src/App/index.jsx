import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./index.css";
import DBNavbar from "../components/DBNavbar";
import DBFooter from "../components/DBFooter";
import ServiceDetail from "../screens/ServiceDetail";
import Blogs from "../screens/Blogs";
import About from "../screens/About";
import Home from "../screens/Home";
import GetQuote from "../components/Contact/GetQuote";
import ScrollToTop from "../components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <DBNavbar />
        <Switch>
          <div className="app">
            <Route exact path="/" component={Home} />
            <Route exact path="/services/:id" component={ServiceDetail} />
            <Route exact path="/getQuote" component={GetQuote} />
            <Route exact path="/blogs" component={Blogs} />
            <Route exact path="/about" component={About} />
          </div>
        </Switch>
        <DBFooter />
      </div>
    </Router>
  );
};

export default App;
