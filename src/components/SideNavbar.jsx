import React, { useState, useEffect } from "react";
import '../index.css'

export default function SideNavbar(props) {
    const HandleClick = () => {
        props.flex === 5 ? props.setFlex(12) : props.setFlex(5)
    }
    const [playerCount, setPlayerCount] = useState(0);
    const fetchPlayerCount = async (appid) => {
        const response = await fetch(`http://localhost:8000/player_counts/${appid}`).then(async (e) => await e.json()).then(async (e) => setPlayerCount(e.current_player_count)).then((e) => console.log(playerCount))

    };



    let url = 'https://cdn-icons-png.flaticon.com/512/5087/5087379.png'
    return (
        <div className="nav-body" onClick={() => HandleClick()}>
            <div className="nav-profile" >
                <div className="profile-image" style={{ backgroundImage: `url('${url}')` }} onClick={() => fetchPlayerCount(440)}></div>
                <div className={props.flex === 5 ? 'profile-name transition-in ml10 wrap' : 'profile-name dispHidden transition-out'}>
                    <span className="heading" onClick={() => fetchPlayerCount(570)}>Thunder376</span>
                    <span className="sub-heading" onClick={() => fetchPlayerCount(730)}>Anmol</span>
                </div>
            </div>
        </div>
    )
}