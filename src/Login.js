import React from 'react';
import "./Login.css";
import App from './App';
import { loginUrl} from "./spotify";

function Login(){
    return(
    <div className="login">
        <h6>My Music Store</h6>
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
    )
}

export default Login;