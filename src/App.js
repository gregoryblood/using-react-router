import React from 'react';
import {
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
  useParams,
  useRouteMatch
} from 'react-router-dom';

import './App.css';

const menu = {
  tacos: "https://media.giphy.com/media/KfxPgR9Xb6lRvlFa8x/giphy.gif",
  pizza: "https://media.giphy.com/media/VCDSo9xqCJOjC/giphy.gif",
  sushi: "https://media1.tenor.com/images/a7087e13ce68524779c9b6946818986b/tenor.gif"
};

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function People() {
  return <h1>People</h1>;
}

function Menu() {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li>
          <Link to={`${url}/pizza`}>Pizza</Link>
        </li>
        <li>
          <Link to={`${url}/tacos`}>Tacos</Link>
        </li>
        <li>
          <Link to={`${url}/sushi`}>Sushi</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={`${path}`}>
          <h2>Select a menu item above</h2>
        </Route>
        <Route path={`${path}/:menuItem`}>
          <MenuItem />
        </Route>
      </Switch>
    </div>
  );
}

function MenuItem() {
  const { menuItem } = useParams();
  const { url, path } = useRouteMatch();
  return (
    <div>
      <h2>A menu item was selected: {menuItem}</h2>
      <img src={menu[menuItem]} alt={menuItem} />
      <p>url: {url}</p>
      <p>path: {path}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Site title</h1>
      <ul>
        <li>
          <NavLink exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/people">People</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/index">Index</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/index">
          <Redirect to="/" />
        </Route>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <div>404</div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
