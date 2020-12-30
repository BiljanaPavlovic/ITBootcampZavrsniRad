import React, { useState, useEffect } from 'react';
import { register } from '../util/service';
import { withRouter } from 'react-router-dom';

const Register = ({setUser,history}) => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [pwConfirm,setPwConfirm] = useState('')
    const [validPw, setValidPw] = useState(false)
    const [isSame, setIsSame] = useState(false)


    useEffect(() => {
        function isValidPw(){
            if((/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/g).test(password)){
                setValidPw(true)
            }
            else{
                setValidPw(false)
            }
        }
        console.log(password)
        isValidPw()
    },[password])

    useEffect(() => {
        setIsSame(pwConfirm === password)
        console.log(pwConfirm === password)
    },[pwConfirm,password])

    function handleSubmit(){
        if(!validPw || !isSame)
            return
        register({name,surname,username,email,password})
        .then(data =>  {
            if(data.success) {
               setUser(data.user)
             console.log('Uspesna registracija')
            //   history.push('/profile')
           }
          else console.log(data, 'Neuspesna registracija')
       })


    }

    return (
        <div className = "register">
            <form>
            <h3>Registruj se!</h3>
            <input className="input-lr" type="text" placeholder="Ime" required onInput={e => {
                setName(e.target.value)
            }} /><br />
            <input className="input-lr" type="text" placeholder="Prezime" required onInput={e => {
                setSurname(e.target.value)
            }} /><br />
            <input className="input-lr" type="text" placeholder="Username" required onInput={e => {
                setUsername(e.target.value)
            }} /><br />
            <input className="input-lr" type="text" placeholder="E-mail" required onInput={e => {
                setEmail(e.target.value)
            }} /><br />
            <input className="input-lr" type="password" placeholder="Password" required 
           onInput={e => {
             setPassword(e.target.value)
          } }
             /><br />
            <input className="input-lr" type="password" placeholder="Confirm Password" required onInput={e => {
                setPwConfirm(e.target.value)
            }} /><br />
            <input className="dugme" type="submit" value="Registruj se" onClick={e => {e.preventDefault();handleSubmit()}} />
            </form>
            <p> *Šifra mora da sadrži broj i da ima najmanje osam karaktera.</p>
        </div>
    )
}
export default Register