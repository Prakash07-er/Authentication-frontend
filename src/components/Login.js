import {React, useState} from 'react'
import { Link,useHistory } from 'react-router-dom'
import '../styles/login.css'
import M from "materialize-css"
import axios from 'axios'

export default function Login() {
    const history  = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginSubmit =async e => {
        e.preventDefault()
        try {
          await axios.post('https://authentication-mern-stack.herokuapp.com/signin', {
                email,
                password
            })
            M.toast({html: "SignedIn successfully" , classes : "#66bb6a green lighten-1 "})
            localStorage.setItem("firstLogin" , true)
            history.push('/')
           
        } catch (err) {
            console.log(err.response.data.msg)
        }
    }

    return (
        <div className= "row input-field" id="login_card">
        <div className="card col-md-4 blue-grey darken-1 ">
           <h2>Sign In</h2>
           <input id="icon_prefix" type="text" placeholder="enter email"
            value={email} onChange= { (e) => setEmail(e.target.value)} />
            <input type="password" placeholder="enter password" 
            value={password} onChange= { (e) => setPassword(e.target.value)} />
            <button className="btn waves-effect waves-light"   onClick={loginSubmit} >Login
                <i className="material-icons right">send</i>
            </button>
            <h5>
                <Link to="/signup" className="No_account my-3"> Don't have an account ?</Link>
                <Link to="/resetpassword" className="No_account my-3"> reset password ?</Link>
            </h5>
        </div>
    </div>
    )
}
