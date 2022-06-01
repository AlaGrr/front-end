import React from 'react';
import "./search.css"
import { useState, useEffect } from 'react';
import axios from 'axios';
function Search(props) {

    const [userName, setUserName] = useState([]);
    function handleUserName(e) {
        const { value } = e.target;
        setUserName(value);
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

    return (
        <div>

            <input placeholder='Search for friends' className="searchInput" onChange={handleUserName} />
            <div className="">
                <ul className="sidebarListFriends">
                    {usersList.map((p) => (
                        <li className="sidebarListFriends">{p.username}</li>
                    ))}

                </ul>
            </div>
        </div>
    );
}

export default Search;