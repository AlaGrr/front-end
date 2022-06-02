import Share from "../share/Share"
import Post from "../posts/Post"
import "./wall.css";
import { useState, useEffect } from 'react';
import axios from 'axios';

function Wall(props) {

  const [data, setData] = useState([]);
    const [posts, setPosts] = useState([]);
    const getUserPosts = () => {
        axios.get("Network/getPosts/" + localStorage.getItem("id"))
            .then((response) => {
                setData(response.data);
                setPosts(response.data.post);
                console.log(response.data);
            }
            )
    };
    useEffect(() => getUserPosts(), []);







    const [dataSub, setDataSub] = useState([]);
    const [postsSub, setPostsSub] = useState([]);
    const getUserSubPosts = () => {
        axios.get("Network/getSubscriptionsPost/" + localStorage.getItem("id"))
            .then((response) => {
                setDataSub(response.data);
                setPostsSub(response.data);
                console.log(response);
            }
            )
    };
    useEffect(() => getUserSubPosts(), []);






    return (
        <div className="wall">
            <div className="wallWrapper">
                <Share />
                {postsSub.map((p) => (
                    p.post.reverse().map((s)=>(
                    <Post id={s.id} username={p.username} photo={p.userPhoto} date={s.date} content={s.content} like={s.likeCount} share={s.shareCount} />))))}

                {posts.reverse().map((p) => (
                    <Post id={p.id} username={data.username} photo={data.userPhoto} date={p.date} content={p.content} like={p.likeCount} share={p.shareCount} />))}


            </div>
        </div>
    );
}

export default Wall;

