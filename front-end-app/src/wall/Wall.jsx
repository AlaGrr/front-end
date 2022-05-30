import Share from "../share/Share"
import Post from "../posts/Post"
import "./wall.css";
import {useState, useEffect} from 'react';
 import axios from 'axios';
import Search from "../seachFriends/Search";

function Wall(props) {
    
    const [post,setPost]=useState([]);
    useEffect(() => {    
        axios.get("Network/getPosts/"+1)
        .then((response)=>{setPost((response.data));} )})      

    return (
        <div className="wall">
           <div className="wallWrapper">
               <Share/>                      
               {post.reverse().map((p) => (
                <Post date={p.date} content={p.content} like={p.likeCount} share={p.shareCount} />))}

           </div>
        </div>
    );
}

export default Wall;

