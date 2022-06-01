import React from 'react';
import "./topbar.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Search, Person, Chat, Notifications } from "@material-ui/icons"
import { Home } from '@mui/icons-material';
function Topbar(props) {
   
    const [userName, setUserName] = useState([]);
    function handleUserName(e) {
        const { value } = e.target;
        setUserName(value);
        document.getElementById("FriendsList").style.display = 'block';

    }

    const [users, setUsers] = useState([]);
    const getUsers = () => {
        axios.get("Network/getAllUsers").then((response) => {
            setUsers(response.data);
        }
        )
    };
    useEffect(() => getUsers(), []);

    const usersList = users.filter(
        (item) => item.username.toLowerCase().indexOf(userName) !== -1
    );


    const [photo, setPhoto] = useState([]);
    const getUserPhoto= () => {
        axios.get("Network/sendUserProfilePhoto/" + localStorage.getItem("id"))
            .then((response) => {
              setPhoto(response.data.userPhoto);
            }
            )
    };
    useEffect(() => getUserPhoto(), []);


    function sendRequest(p) {
        axios.post("Network/sendRequest", {
            id: localStorage.getItem("id"),
            idFollower: p.id,
            username: p.username,
            userPhoto: p.userPhoto
        })
    }
 
    const [follows, setFollows] = useState([]);
    const getFollows = () => {
        axios.get("Network/getFollows/" + localStorage.getItem("id"))
            .then((response) => {
                console.log("resp");
                console.log(response.data.length);
                setFollows(response.data.length);
            }
            )
    };
    useEffect(() => getFollows(), []);


    return (
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className="logo">World-Of-Likes</span>
            </div>

            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon' />
                    <input
                        placeholder='Search for friends'
                        className="searchInput"
                        onChange={handleUserName} />
                    <div className="FriendsList" id='FriendsList'>
                        {usersList.map((p) => (<p className='item'>{p.username}
                            <button className='follow' onClick={() => sendRequest(p)}>Follow</button></p>))}
                    </div>
                </div>

            </div>

            <div className="topbarRight">
                <div className="topbarLinks">
                    <a className='HomeIcon' href="/Home1"><Home /></a>
                    <span className="topbarLink"></span>
                    <span className="topbarLink"></span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className="topbarIconBadge">{follows}</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className="topbarIconBadge">0</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className="topbarIconBadge">0</span>
                    </div>
                    <div className="topbarImg" ><a href="/Profile"><img className="topbarProfileImg" src={"../images/" + photo} alt="" /></a></div>
                </div>
            </div>
        </div>
    );
}

export default Topbar;