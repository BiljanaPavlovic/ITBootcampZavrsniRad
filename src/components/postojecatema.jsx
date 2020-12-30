import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getMsnOnTpc, addMessage } from "../util/service";

const Tema = ({ match, user: { username } }) => {
  const [topicID] = useState(match.params.topic_id);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  function handleSubmit() {
    addMessage({username,topic_id: topicID, message} )
      .then(data => {
        console.log(data);
        alert('Morate biti ulogovani!')
        getMsnOnTpc(topicID)
          .then(data => setMessages(data.messages));
      });
      setMessage('')
  }
  console.log(topicID)
  useEffect(() => {
    getMsnOnTpc(topicID)
      .then(data => {
        if (data.success) {
          setMessages(data.messages);
        } else {
          console.log(data);
          
        }
      });
  }, [topicID]);


  return (
    <div className="postojecaTema">
      <h3>Dodaj odgovor na temu.</h3>
      <div className="poruke">
        <h3>Pogledajte postojeće poruke:</h3>
        <ul>
        
          {messages.map(message => (
<li key={message.message_id}> Vreme:<b>{new Date(message.timestamp).toLocaleTimeString("en-US")}</b>; Korisnik:<b> {message.username}</b>;<br/> Poruka:<b> {message.message.toString()} </b></li>
          ))}
        </ul>
      </div>
      <form>
      <input
        className="input-nova-poruka"
        type="text"
        placeholder="nova poruka"
        required
        value={message}
        onInput={e => {
          setMessage(e.target.value);
        }}
      />{" "}
      <br />
      <input
        className="dugme"
        type="submit"
        value="Pošalji"
        onClick={e => {
          e.preventDefault();
          handleSubmit();
        }}
      />
      </form>
    </div>
  );
};
export default Tema
