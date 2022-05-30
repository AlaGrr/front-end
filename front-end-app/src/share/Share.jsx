import {useState, useEffect} from 'react';
 import axios from 'axios';
import "./share.css";
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"

export default function Share() {
  
 

    const [username,setData]=useState([]);

    useEffect(() => {    
      axios.get("Network/sendUsername/"+1)
      .then((response)=>{setData(response.data.username);console.log("username: "+response.data.username);}
          )})

    const [post,setPost]=useState([]);

    function handlePostContent(e){
            const {value}=e.target;
            setPost(value);
            console.log("value"+value);
            console.log("Post: "+post)
          }
          
    function sendPosts(){               
          axios.post("Network/sendPosts", {
            date:new Date(),
            content:post,
            likeCount:0,
            shareCount:0
          })
          .then((response)=>{console.log(response)})
          document.getElementById("post").value="";
          }

    const [photo,setPhoto]=useState([]);

    useEffect(() => {    
            axios.get("Network/sendUserProfilePhoto/"+1)
            .then((response)=>{setPhoto(response.data.userPhoto)}
                )})

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={"../images/"+photo} alt="" />
          <input
            id='post'
            placeholder={"What's up "+username}
            onChange={handlePostContent}
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button onClick={()=>sendPosts()} className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}