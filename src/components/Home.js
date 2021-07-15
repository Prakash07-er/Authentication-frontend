import React from 'react'
import {  useHistory} from 'react-router-dom'


export default function Home() {
    const history  = useHistory()

    const logoutUser = async () => {
        localStorage.removeItem('firstLogin')
        history.push('/login')
    }
    return (
        <div>
            Homepage
            <button className="btn waves-effect waves-light"   onClick={logoutUser} >logout
                <i className="material-icons right">send</i>
            </button>

        </div>
    )
}
