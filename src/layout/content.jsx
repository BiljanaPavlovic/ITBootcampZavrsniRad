import React from "react";
import Login from "../components/login";
import Register from "../components/register";
import NovaTema from "../components/novaTema";
import ListaTema from "../components/listatema";
import Profil from "../components/profil";
import Tema from "../components/postojecatema";
import { Switch, Route } from "react-router-dom";

const Content = ({ setUser, setUsername, user }) => {
  return (
    <div>

      
      
      <Route
        path="/topic/:topic_id"
        component={props => <Tema user={user} {...props} />}
      />
      
      <Route
        path="/profile/:user_id"
        component={props => <Profil usern={user} {...props} />}
      />
    </div>
  );
};
export default Content;
