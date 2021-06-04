import React from "react";
import {IconContext} from "react-icons"
import "../css/LandingBody.css";
import {GiThink} from "react-icons/gi";

const LandingPage = () =>{

    return(
        <div className="landpage">
        <h1>Welcome to my website!</h1>
        <IconContext.Provider value={{className:"thinkicon"}}>
        <GiThink /><b>What is website about?</b><GiThink />
        </IconContext.Provider>
        <br/>
        Feelingz is a website which will help people to express their feelings anonymously.
    </div>
    )
}
export default LandingPage;