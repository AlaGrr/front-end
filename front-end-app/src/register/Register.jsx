import "./register.css";

export default function Register() {

    function sendInfos() {
        const loginCredentials = {
            myEmail: document.getElementById("email").value,
            myPassword: document.getElementById("password").value,
            myAddress: document.getElementById("address").value
        }
        fetch("API/register", {
            headers: {
                "content-type": "application/json"
            },
            method: "post",
            body: JSON.stringify(loginCredentials)
        }).then((response) => response.json())
            .then((data) => {
                //localStorage.setItem("id",data);
                console.log(data);
                //document.location.href="/Profile";
            })
    }
    function LogIntoAccount(){
        document.location.href="/Login";
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">World Of Likes</h3>
                    <span className="loginDesc">
                        Welcome among us in World Of Likes ! <br/>
                        Rule 1: Have fun <br/>
                        Rule 2: Listen to Rule 1
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" id="email" className="loginInput" /><br/>
                        <input placeholder="Address" id="address" className="loginInput" /><br/>
                        <input placeholder="Password" id="password" className="loginInput" /><br/>
                        <button onClick={()=>sendInfos()} className="loginButton">Sign Up</button><br/>
                        <button onClick={()=>LogIntoAccount()} className="loginRegisterButton">
                            Log into Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}