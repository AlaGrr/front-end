import React from "react";
import './login.css';
class Login extends React.Component{
constructor(props) {
    super(props);
    this.state={
        password:"",
        email:""
    }
}

sendCredentials() {
    const loginCredentials={
        email:document.getElementById("email").value,
        motdepasse:document.getElementById("password").value
    }
    fetch("API/login",{
        headers:{
            "content-type":"application/json"
    },
    method:"post",
    body:JSON.stringify(loginCredentials)
    }).then((response)=>response.json())
    .then((data)=>{
        localStorage.setItem("id",data);
        console.log(data);})
}
render(){
    return(
        <div>

            <section  className="login">
                <div className="form">
                    <input id="email" placeholder="Login"/><br></br>
                    <input id="password" placeholder="Password" /><br></br>
                    <button className="submit" onClick={()=>this.sendCredentials()}>Login</button>
                </div>
            </section>
               
        </div>
    )
}

}
export default Login;