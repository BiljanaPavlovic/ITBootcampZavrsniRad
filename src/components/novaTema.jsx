import React from 'react';
import { addTopic, addMessage } from '../util/service';
import { useState } from 'react';

const NovaTema = ({user: { user_id, username}}) => {
const [title, setTitle] = useState('')
const [message, setMessage] = useState('')


    function handleSubmit(){
            
       addTopic(user_id,title)
        .then(data =>  {
            if(data.success) {
                addMessage({username,topic_id: data.topic.topic_id,message})
                    .then(data => console.log(data))
             
             console.log(data)
              
           }
          else{ console.log(data, 'Tema nije dodata')}
          
          })
    }

    

    return(
        <div className = "nova-tema">
            <h3>Započni novu temu:</h3>
            <input className="input-nova-tema" type = "text" placeholder="Naslov" required onInput={e => {
                setTitle(e.target.value); console.log(title);
            }} /> <br/>
            <input className="input-nova-tema" type = "text" placeholder="prva poruka" required onInput={e => {
                setMessage(e.target.value)
            }} /> <br/>
            <input className="dugme" type = "submit" value="Pošalji" onClick={e => {e.preventDefault();handleSubmit()}} /> 
        </div>
    )
};

export default NovaTema