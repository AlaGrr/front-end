import "./sidebar.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SportsEsports, WorkOutline, Restaurant, HelpOutline, School, Event, Bookmark, PlayCircleFilledOutlined, Group } from "@material-ui/icons"
function Sidebar(props) {
    const [userName, setUserName] = useState([]);
    function handleUserName(e) {
        const { value } = e.target;
        setUserName(value);
    }

    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get("Network/getAllUsers").then((response) => {
            setUsers((response.data));
        })
    })
    
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <a href=""><SportsEsports className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Game</span>
                    </li>
                    <li className="sidebarListItem">
                        <a href="/RestoPlat"><Restaurant className="sidebarIcon" /></a>
                        <span className="sidebarListItemText"><a className="restoPlatLink" href="/RestoPlat">Restaurants</a></span>
                    </li>
                    <li className="sidebarListItem">
                        <a href=""><PlayCircleFilledOutlined className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Vides</span>
                    </li>
                    <li className="sidebarListItem">
                        <a href=""><Group className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <a href=""><Bookmark className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <a href=""><HelpOutline className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <a href=""><WorkOutline className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <a href=""><Event className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <a href=""><School className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                    <button className="sidebarButton">Show more</button>
                    <hr className="sidebarHr" />
                    <li className="sidebarListItem">
                        <a href=""><WorkOutline className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <a href=""><Event className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <a href=""><School className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                    <li className="sidebarListItem">
                        <a href=""><WorkOutline className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <a href=""><Event className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <a href=""><School className="sidebarIcon" /></a>
                        <span className="sidebarListItemText">Courses</span>
                    </li>

                </ul>
            </div>
        </div>
    );
}

export default Sidebar;