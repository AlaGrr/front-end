import React, { Component } from 'react';
import './Profile.css';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state={
            photoName:"",
            usernameBox:false,
            username:"Username",
            content:"",
            id:null,
            writePost:false,
            displayPost:false,
            posts:['A','B']
        }
        this.handleChangeProfilePhoto = this.handleChangeProfilePhoto.bind(this);
        this.changeUsername = this.changeUsername.bind(this);
        this.typeUsername = this.typeUsername.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
        this.handleIsPost = this.handleIsPost.bind(this);
        this.sendUsername = this.sendUsername.bind(this);
        this.getUsername = this.getUsername.bind(this);
        this.getProfilePhoto = this.getProfilePhoto.bind(this);
        this.handlePostContent = this.handlePostContent.bind(this);
        this.sendPosts=this.sendPosts.bind(this);
        this.getPosts=this.getPosts.bind(this);
        
    }
    handleChangeProfilePhoto(e) {
        const {value}=e.target;
        const sentUserPhoto={
            id:localStorage.getItem("id"),  
            userPhoto:value.split("\\")[2]
          }
          this.setState({photoName:value.split("\\")[2]}); 
          fetch("Network/ModifyUserProfilePhoto",{
              headers:{
                  "content-type":"application/json"
          },
          method:"post",
          body:JSON.stringify(sentUserPhoto)
          }).then((response)=>response.json())
          .then((data)=>{
              console.log(data);
          });
           
      }
    changeUsername(){
          this.setState({
            usernameBox:!this.state.usernameBox
          })
      }
    typeUsername(e){
        const { value } = e.target;
        this.setState({ username:value});
        console.log(this.state.username);
    }
    usernameChanged(){
        this.setState({
            usernameBox:!this.state.usernameBox
        })
    }
    sendUsername() {
        const sentUsername={
          id:localStorage.getItem("id"),  
          username:this.state.username
        }
        console.log(sentUsername);
        fetch("Network/ModifyUsername",{
            headers:{
                "content-type":"application/json"
        },
        method:"post",
        body:JSON.stringify(sentUsername)
        }).then((response)=>response.json())
        .then((data)=>{
            console.log(data);
        })
        this.setState({
            usernameBox:!this.state.usernameBox
        })
    }
   
   getUsername(idd){
    fetch("Network/sendUsername",{
        headers:{
            "content-type":"application/json"
    },
    method:"post",
    body:JSON.stringify(idd)
    }).then((response)=>response.json())
    .then((data)=>{
        console.log(data.username);
        this.setState({username:data.username})
    });
   }
  
   getProfilePhoto(idd){
    fetch("Network/sendUserProfilePhoto",{
        headers:{
            "content-type":"application/json"
    },
    method:"post",
    body:JSON.stringify(idd)
    }).then((response)=>response.json())
    .then((data)=>{
        console.log(data.userPhoto);
       this.setState({
        photoName:data.userPhoto
    });
    });
    
  }
  handleIsPost(){
    this.setState({
        writePost:true
    });
    document.getElementById("ispost").style.display='none';
}
  handlePostContent(e){
    const {value}=e.target;
    this.setState({
        content:value,
        displayPost:false});
  }
  sendPosts(){
    const sentUsername={
        content:this.state.content
      }
      fetch("Network/sendPosts",{
          headers:{
              "content-type":"application/json"
      },
      method:"post",
      body:JSON.stringify(sentUsername)
      }).then((response)=>response.json())
      .then((data)=>{
          console.log(data);  
      });
  }

  getPosts(id){
    fetch("Network/getPosts",{
        headers:{
            "content-type":"application/json"
    },
    method:"post",
    body:JSON.stringify(localStorage.getItem("id"))
    }).then((response)=>response.json())
    .then((data)=>{
        console.log(data); 
        this.setState({posts:data,
            displayPost:true}) 
    });

  }

    render() {
        
       /* this.getUsername(1);
        {<PermMedia/>}*/
      
        return (
            <div>

                <div>
                <input  id="picture" type="file" name="file" onChange={this.handleChangeProfilePhoto} />
                <img src={"./images/"+ this.state.photoName}></img>
            
                </div>

                <div>
                    <input onClick={()=>this.changeUsername()} id='usernameBox' className='usernameBox' type='button' value={this.state.username}/>
                    {this.state.usernameBox &&(
                            <>
                            <input id='username' className='username' type='text' onChange={this.typeUsername}/>
                            <button onClick={()=>this.sendUsername()}>Ok</button>
                            </>
                        )
                        }
                </div>
          
                <div>
                    <button onClick={()=>this.handleIsPost()} id='ispost' className='ispost' name='ispost' >{" What's up, "+this.state.username +" ?"}</button>
                    {this.state.writePost &&(
                            <>
                            <div>
                            <input id='postContent' className='postContent' onChange={this.handlePostContent} placeholder={" What's up, "+this.state.username +" ?"}/>
                            {<button id='publish' className='publish' onClick={()=>this.sendPosts()}>Post</button>}
                            </div> 
                            </>
                    )
                    }
                    <br></br>
                   <button onClick={()=>this.getPosts()}>Posts</button> 
                   {this.state.displayPost&&(
                       <div>
                            { this.state.posts.map((post) =>
                            <li>{post.content}</li>
                            )}
                       </div>
                       
                   )}
                </div>

            </div>
        );
    }
}

export default Profile;