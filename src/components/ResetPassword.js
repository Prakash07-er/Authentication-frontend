import {React , useState} from 'react'
import { Link ,useHistory} from 'react-router-dom'
import axios from 'axios'
import M from "materialize-css"

export default function ResetPassword() {
    const history  = useHistory()
    const [email, setEmail] = useState("")

    const ResetSubmit = async(e) => {
        e.preventDefault()
        
        try {
            await axios.post('https://authentication-mern-stack.herokuapp.com/resetpassword', {email})

              M.toast({html: "Reset link sent successfully!! Please check your email!!" , classes : "#66bb6a green lighten-1 "})
              history.push('/login')
             
          } catch (err) {
              console.log(err.response.data.msg)
              M.toast({html:"Please enter valid email" , classes : "#d32f2f red darken-2"})
  
          }
    }

    return (
        <div className= "row input-field" id="login_card">
        <div className="card col-md-4 blue-grey darken-1 ">
           <h2>Reset Password</h2>
           <input id="icon_prefix" type="email" placeholder="enter email"
           value={email} onChange= { (e) => setEmail(e.target.value)}  />
            <button className="btn waves-effect waves-light"  onClick={ResetSubmit} > Send Email
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
