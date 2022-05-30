import Topbar from "./topbar/Topbar"
import Sidebar from "./sidebar/Sidebar"
import Rightbar from "./rightbar/Rightbar"
import Wall from "./wall/Wall"
import "./home1.css"
export default function Home1(){
    return(
       <>
        <Topbar/>
        <div className="homeContainer">
        <Sidebar/>
        <Wall/>
        <Rightbar/>
        </div>
       </>
    )
}