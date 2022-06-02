import "./login.css";

export default function Login() {

  function sendCredentials() {
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
       document.location.href="/Profile";
    })}
    
    function newAccount(){
      document.location.href="/";
    }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">World Of Likes</h3>
          <span className="loginDesc">
            Connect with your friends. It's time for fun
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" id="email" className="loginInput" />
            <input placeholder="Password" id="password" className="loginInput" />
            <button onClick={()=>sendCredentials()} className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button onClick={()=>newAccount()} className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}