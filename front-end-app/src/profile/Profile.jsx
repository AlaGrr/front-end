import { Feed } from "@mui/icons-material";
import Rightbar from "../rightbar/Rightbar";
import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import "./profile.css";
import {useState, useEffect} from 'react';
 import axios from 'axios';

export default function Profile() {
    const [data,setData]=useState([]);

    useEffect(() => {    
      axios.get("Network/sendUserProfilePhoto/"+1)
      .then((response)=>{setData(response.data.userPhoto)}
          )})

    function handleChangeProfilePhoto(e){
        const {value}=e.target;
        setData(value.split("\\")[2]);
        axios.post("Network/ModifyUserProfilePhoto",{
        id:1,  
        userPhoto:value.split("\\")[2]})
        .then((response)=>{
        setData(response.data.userPhoto);});       
        }
        
    const [username,setUser]=useState([]);

    useEffect(() => {    
      axios.get("Network/sendUsername/"+1)
      .then((response)=>{setUser(response.data.username);
        console.log("username: "+response.data.username);}
          )})
    
    const [typedUser,setTypedUser]=useState([]);      
    function typeUsername(e){
          const { value } = e.target;
          setTypedUser(value);
      }

    const [usernameBox,setBox]=useState(false); 
    function changeUsername(){setBox(!usernameBox);} 

    function sendUserName() {
      const sentUsername={
        id:1,  
        username:typedUser
      }
      fetch("Network/ModifyUsername",{
      headers:{"content-type":"application/json"},
      method:"post",
      body:JSON.stringify(sentUsername)
      }).then((response)=>response.json())
      .then((data)=>{
          console.log(data.username);
          setUser(data.username);
      })
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
                onChange={handleChangeProfilePhoto}/>
                <img
                className="profileUserImg"
                src={"../images/"+ data}
                alt=""/>

            </div>
            <div className="profileInfo">
                      <h4 className="profileInfoName">{username}</h4>
            </div>
            <button className="friendsListButton">Add to friends list</button><br /><br />
            <div >
                          <input onClick={()=>changeUsername()} 
                          id='usernameBox' className="Update"
                          type='button' value="Update your username"/><br /><br />
                          {usernameBox &&(
                                  <>
                                  <input id='username' className="UpdateUser" type='text' 
                                   onChange={typeUsername}/><br />
                                  <button onClick={()=>sendUserName()} className="UpdateButton" >Ok</button><br /><br /><br /><br />
                                  </>
                              )
                              }
            </div>
          </div>
          <div className="profileRightBottom">
          </div>
        </div>
      </div><br /><br /><br />
    </>
  );
}