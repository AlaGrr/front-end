import React from 'react';
import "./topbar.css";
import {useState, useEffect} from 'react';
 import axios from 'axios';
import {Search,Person,Chat,Notifications} from "@material-ui/icons"
import Profile from '../profile/Profile';
import { Home } from '@mui/icons-material';   
function Topbar(props) {
    const [userName,setUserName]=useState([]);
    function handleUserName(e){
        const {value}=e.target;
        setUserName(value);
        console.log(value);
            document.getElementById("FriendsList").style.display='block';
            
      }

    const [users,setUsers]=useState([]);
    useEffect(() => {    
        axios.get("Network/getAllUsers").then((response)=>{
            setUsers((response.data));
            console.log("Liste des amis");
            console.log(response.data)} )})  

    const usersList = users.filter(
        (item) => item.username.toLowerCase().indexOf(userName) !== -1
      );
      const [photo,setPhoto]=useState([]);

      useEffect(() => {    
        axios.get("Network/sendUserProfilePhoto/"+1)
        .then((response)=>{setPhoto(response.data.userPhoto)}
            )})
    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">World-Of-Likes</span>
            </div>

            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon'/>
                    <input
                     placeholder='Search for friends' 
                     className="searchInput" 
                     onChange={handleUserName}/>
                <div className="FriendsList" id='FriendsList'>
                    {usersList.map((p) => (<p className='item'>{p.username}</p> ))} 
                </div>  
                </div> 
     
            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <a className='HomeIcon' href="/Home1"><Home/></a>
                    <span className="topbarLink"></span>
                    <span className="topbarLink"></span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div  className="topbarImg" ><a href="/Profile"><img className="topbarProfileImg" src={"../images/"+photo} alt="" /></a></div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;