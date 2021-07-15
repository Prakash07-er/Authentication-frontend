import {React , useState} from 'react'
import { Link ,useHistory, useParams} from 'react-router-dom'
import axios from 'axios'
import M from "materialize-css"

export default function NewPassword() {
    const history  = useHistory()
    const [password, setPassword] = useState("")
    const {token} = useParams()
    const PasswordSubmit = async(e) => {
        e.preventDefault()
        try {
            await axios.post('https://authentication-mern-stack.herokuapp.com/newpassword', {
                password,
                token
            })

              M.toast({html: "Password updated successfully..please try to login now..." , classes : "#66bb6a green lighten-1 "})
              history.push('/login')
             
          } catch (err) {
              console.log(err.response.data.msg)
              M.toast({html:"Something went wrong" , classes : "#d32f2f red darken-2"})
          }
    }

    return (
        <div className= "row input-field" id="login_card">
        <div className="card col-md-4 blue-grey darken-1 ">
           <h2>Create New Password</h2>
           <input id="icon_prefix" type="password" placeholder="enter new password"
            value={password} onChange= { (e) => setPassword(e.target.value)} />
            <button className="btn waves-effect waves-light"  onClick={PasswordSubmit} > Save new Password
                <i className="material-icons right">send</i>
            </button>
            <h5>
                <Link to="/signup" className="No_account my-3"> Don't have an account ?</Link>
                <Link to="/resetpassword" className="No_account my-3">  Login </Link>
            </h5>
        </div>
    </div>
    )
}
