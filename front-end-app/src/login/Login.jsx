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
        monEmail:document.getElementById("email").value,
        monMotdepasse:document.getElementById("password").value
    }
    fetch("API/logged",{
        headers:{
            "content-type":"application/json"
    },
    method:"post",
    body:JSON.stringify(loginCredentials)
    }).then((response)=>response.json())
    .then((data)=>{
        localStorage.setItem("id",data);
        console.log(localStorage.getItem("id"));
        console.log(data);
       document.location.href="/Home1";
    })
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