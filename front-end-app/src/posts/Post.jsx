import "./post.css";
import {useState, useEffect} from 'react';
 import axios from 'axios';
import {MoreVert} from "@material-ui/icons"
function Post(props) {
    
    const [post,setPost]=useState([]);
    useEffect(() => {    
        axios.get("Network/getPosts/"+1)
        .then((response)=>{
            ///console.log(response.data);
            setPost((response.data));} )})     

    const [username,setData]=useState([]);
    useEffect(() => {    
        axios.get("Network/sendUsername/"+1)
        .then((response)=>{setData(response.data.username)})})

    const [photo,setPhoto]=useState([]);

    useEffect(() => {    
         axios.get("Network/sendUserProfilePhoto/"+1)
         .then((response)=>{setPhoto(response.data.userPhoto)})})    
       

    return (
        
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src={"../images/"+photo} alt="" />
                        <span className="postUserName">{username}</span>
                        <span className="postDate">{~~((new Date().getTime()-(new Date(props.date)).getTime())/(1000 * 60))+" min"}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">{props.content}</span>    
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="postLike" src="../images/like.png" alt="" title="Like the post" />
                        <span className="postLikeCounter">{props.like}</span>
                    </div>
                    <div className="postBottomRight">
                        <img className="postShare" src="../images/share.png" alt="" title="Share the post"  />
                        <span className="postShareCounter">{props.share}</span>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Post;