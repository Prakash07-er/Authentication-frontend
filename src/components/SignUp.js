import {React, useState} from 'react'
import { Link , useHistory} from 'react-router-dom'
import axios from 'axios'
import M from "materialize-css"



export default function SignUp() {
    const history  = useHistory()
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const registerSubmit =async e => {
        e.preventDefault()
        //   if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
        //     M.toast({html: "Invalid Email Address" , classes : "#d32f2f red darken-2"})
        //     return
        // }
        try {
          await axios.post('https://authentication-mern-stack.herokuapp.com/signup', {
                username,
                email,
                password
            })
            M.toast({html: "Registered User successfully" , classes : "#66bb6a green lighten-1 "})
            history.push('/login')
           
        } catch (err) {
            M.toast({html: err.response.data.msg , classes : "#d32f2f red darken-2"})

        }
    }


    return (
        <div className= "row input-field" id="login_card">
        <div className="card col--md-4 blue-grey darken-1">
        <h2>Sign Up</h2>
            <input id="icon_prefix" type="text" placeholder="enter name" 
          value={username} onChange= { (e) => setUserName(e.target.value)} / >
            <input id="icon_prefix" type="email" placeholder="enter email"
           value={email} onChange= { (e) => setEmail(e.target.value)}  />
            <input type="password" placeholder="enter password" 
          value={password} onChange= { (e) => setPassword(e.target.value)} />
            <button className="btn waves-effect waves-light"  onClick={registerSubmit} >Sign Up
                <i className="material-icons right">send</i>
            </button>
            <h5>
                <Link to="/login" className="No_account"> Already have an account ?</Link>
            </h5>
    
        </div>
    </div>
    )
}
