import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { login } from '../util/service';

const Login = ({history,setUser}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(){
        login({username,password})
        .then(data =>  {
            if(data.success) {
                setUser(data.user)
              history.push(`/profile/${data.user.user_id}`)
                console.log('ulogovan')
                alert("Ulogovani ste!")
            }
            else{alert("Neispravan unos")} 
            console.log(data,'Није улогован')
            
        })


    }


    return (
        <form>
        <div className = "Login">
            <h3>Ako već imaš nalog uloguj se!</h3>
            <input className="input-lr" type= 'text' placeholder="username" required onInput={e => {
                setUsername(e.target.value)
            }}  /><br/>
            <input className="input-lr" type="password" placeholder="password" required onInput={e => {
                setPassword(e.target.value)
            } } /><br/>
            <input className="dugme" type="submit" value="Uloguj se" onClick={(e) => {
                e.preventDefault()
                handleSubmit()
            }} />
        </div>
        </form>
)
}

export default withRouter(Login)