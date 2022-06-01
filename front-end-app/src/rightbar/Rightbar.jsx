import "./rightbar.css";
import { useState, useEffect } from 'react';
import axios from 'axios';
function Rightbar(props) {


    const [subscriptions, setSubscriptions] = useState([]);
    const getSubcriptions = () => {
        axios.get("Network/getSubcriptions/" + localStorage.getItem("id"))
            .then((response) => {
                setSubscriptions(response.data);
            }
            )
    };
    useEffect(() => getSubcriptions(), []);

    const [follows, setFollows] = useState([]);
    const getFollows = () => {
        axios.get("Network/getFollows/" + localStorage.getItem("id"))
            .then((response) => {
                setFollows(response.data);
            }
            )
    };
    useEffect(() => getFollows(), []);


    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <ul className="rightbarList">

                    <h4>Subscriptions</h4>
                    {subscriptions.map((p) => (
                        <li className="rightbarListItem">
                            <img src={"../images/" + p.userPhoto} alt="" className="rightbarProfilePhoto" />
                            <span className="rightbarListItemText">{p.username}</span>
                        </li>
                    ))}
                    <button className="rightbarButton">Show more</button>
                    <hr className="rightbarHr" />
                    <h4>Followers</h4>
                    {follows.map((p) => (
                        <li className="rightbarListItem">
                            <img src={"../images/" + p.userPhoto} alt="" className="rightbarProfilePhoto" />
                            <span className="rightbarListItemText">{p.username}</span>
                        </li>
                    ))}
                    <button className="rightbarButton">Show more</button>
                </ul>
            </div>
        </div>
    );
}

export default Rightbar;