import React, { useState, useEffect } from "react";
import { getTopic } from "../util/service";
import {withRouter} from 'react-router-dom'


const ListaTema = ({history}) => {
  console.log(history)
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopic().then(data => {
        console.log(data)
        setTopics(data.topics)});
  }, [])

  return (
    <div className="lista-tema">
      <h3>Pogledajte postojeće teme:</h3>
      <ul>
        {topics.map(topic => (
          <li onClick = {()=> history.push(`/topic/${topic.topic_id}`)}>{topic.title.toString()}</li>
        ))}
      </ul>
    </div>
  )
};
export default withRouter  (ListaTema);
