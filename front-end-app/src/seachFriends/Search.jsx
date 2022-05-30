import React from 'react';
import "./search.css"
import {useState, useEffect} from 'react';
 import axios from 'axios';
function Search(props) {
    
    const [userName,setUserName]=useState([]);
    function handleUserName(e){
        const {value}=e.target;
        setUserName(value);
        console.log(value);
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
    function handleSearchFriend(){
        console.log("Hello !");
    }
    return (
        <div>
            
            <input placeholder='Search for friends' className="searchInput" onChange={handleUserName} />
                <div className="">
                    <ul className="sidebarListFriends">
                    {usersList.map((p) => (
                    <li onClick={()=>handleSearchFriend()} className="sidebarListFriends">{p.username}</li>
                    ))}
                    
                    </ul>
               </div>
        </div>
    );
}

export default Search;