import { Feed } from "@mui/icons-material";
import Rightbar from "../rightbar/Rightbar";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import "./profile.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {

  const [userPhoto, setUserProfilePhoto] = useState([]);

  const getProfilePhoto = () => {
    axios.get("Network/sendUserProfilePhoto/" + localStorage.getItem("id"))
      .then((response) => {
        setUserProfilePhoto(response.data.userPhoto);
        console.log(response.data.userPhoto);
      }
      )
  };

  useEffect(() => getProfilePhoto(), []);





  function handleChangeProfilePhoto(e) {
    const { value } = e.target;
    setUserProfilePhoto(value.split("\\")[2]);
    axios.post("Network/ModifyUserProfilePhoto", {
      id: localStorage.getItem("id"),
      userPhoto: value.split("\\")[2]
    })
      .then((response) => {
        setUserProfilePhoto(response.data.userPhoto);
      });
  }


  const [username, setUser] = useState([]);
  const getUsername = () => {
    axios.get("Network/sendUsername/" + localStorage.getItem("id"))
      .then((response) => {
        setUser(response.data.username);
        console.log(response.data.username);
      }
      )
  };
  useEffect(() => getUsername(), []);






  const [typedUser, setTypedUser] = useState([]);
  function typeUsername(e) {
    const { value } = e.target;
    setTypedUser(value);
  }

  const [usernameBox, setBox] = useState(false);
  function changeUsername() { setBox(!usernameBox); }


  function sendUserName() {
    axios.post("Network/ModifyUsername", {
      id: localStorage.getItem("id"),
      username: typedUser
    })
  }

  function logout() {
    localStorage.clear("id");
    document.location.href = "/Login";
  }

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">

              <input
                className='chooseImg'
                type="file"
                id='input'
                onChange={handleChangeProfilePhoto} />
              <img
                className="profileUserImg"
                src={"../images/" + userPhoto}
                alt="" />

            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{username}</h4>
            </div>
            <div >
              <input onClick={() => changeUsername()}
                id='usernameBox' className="Update"
                type='button' value="Update your username" /><br /><br />
              {usernameBox && (
                <>
                  <input id='username' className="UpdateUser" type='text'
                    onChange={typeUsername} /><br />
                  <button onClick={() => sendUserName()} className="UpdateButton" >Ok</button><br /><br /><br /><br />
                </>
              )
              }
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <button className="logoutButton" onClick={() => logout()}>Logout</button>
          </div>
          <div className="profileRightBottom">
          </div>
        </div>
      </div><br /><br /><br />
    </>
  );
}