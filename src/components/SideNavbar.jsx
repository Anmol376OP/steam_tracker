import React, { useState, useEffect } from "react";
import '../index.css'

export default function SideNavbar(props) {
    const HandleClick = () => {
        props.flex === 5 ? props.setFlex(12) : props.setFlex(5)
    }
    const [playerCount, setPlayerCount] = useState(5);

    let url = 'https://cdn-icons-png.flaticon.com/512/5087/5087379.png'
    return (
        <div className="nav-body" onClick={() => HandleClick()}>
            <div className="nav-profile">
                <div className="profile-image" style={{ backgroundImage: `url('${url}')` }}></div>
                <div className={props.flex === 5 ? 'profile-name transition-in ml10 wrap' : 'profile-name dispHidden transition-out'}>
                    <span className="heading">Thunder376</span>
                    <span className="sub-heading">{playerCount}</span>
                </div>
            </div>
        </div>
    )
}