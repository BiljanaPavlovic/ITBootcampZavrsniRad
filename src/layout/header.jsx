import React from "react";
import { Link, withRouter, Switch, Route, Router } from "react-router-dom";
import Login from "../components/login";
import Register from "../components/register";
import ListaTema from "../components/listatema";

const Header = ({ user, setUser }) => {
  return (
    <div>
      <h1>
        <Link to="">
          <img
            className="koloseum"
            src="/ITBootcamp-zavrsni-rad/logoForum.png"
          />
        </Link>
        ITBootcamp Forum
      </h1>

      <Link to="/login">
        <input className="dugme" type="submit" value="Uloguj se" />
      </Link>
      <Link to="/register">
        <input className="dugme" type="submit" value="Registruj se" />
      </Link>
      <Switch>
        <Route path="/login">
          {" "}
          <Login setUser={setUser} />{" "}
        </Route>
        <Route path="/register">
          {" "}
          <Register setUser={setUser} />{" "}
        </Route>
        <Route path=" ">
          <Header />
        </Route>
      </Switch>

      <ListaTema user={user} />
    </div>
  );
};

export default withRouter(Header);
