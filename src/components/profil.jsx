import React, { useEffect } from 'react';
import { useState } from 'react';
import { getUsername } from '../util/service';
import NovaTema from './novaTema';
import ListaTema from './listatema';
import Tema from './postojecatema';

const Profil = ({ match, usern }) => {

   const [userID] = useState(match.params.user_id);
    const [user, setUser] = useState({});

    useEffect(() =>{
        getUsername(userID)
        .then(data =>{
            if(data.success){
                setUser(data.user);
            }
            else{
                console.log(data);
        
            }
        })
    }, [])


    return(
        <div className = "profil-korisnika">
        <h3>Profil korisnika</h3>
        <br/><br/><br/>
        <ol className = 'profil'>
    <li>Ime:  {user.name}</li>
    <br/><br/>
    {console.log(user)}
    {console.log(user.name)}
    <li>Prezime: {user.surname}</li>
    <br/><br/>
    <li>Username {user.username}</li>
    <br/><br/>
    <li>E-mail: {user.email}</li>
    </ol>
    <img className='profilna' src='https://cdn0.iconfinder.com/data/icons/large-glossy-icons/512/User.png' />
   <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    <NovaTema user={usern}/>
  
        </div>
    )
}
export default Profil