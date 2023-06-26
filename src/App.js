import About from "./pages/about";
import Blogs from "./pages/blogs";
import Contact from "./pages/contact";
import Initiatives from "./pages/initiatives";
import Projects from "./pages/projects";
import Home from "./pages/home";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About}/>
        <Route path="/blogs" component={Blogs}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/initiatives" component={Initiatives}/>
        <Route path="/projects" component={Projects}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
