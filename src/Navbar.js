import React, { useEffect, useState } from 'react';
import './Style/Navbar.css'
export default function Navbar(){
    const [show, handleShow] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else
            {
                handleShow(false);
            }
        });
        return()=>{
            window.removeEventListener("scroll", ()=>{});
        }
    }, [])
    return(
        <>
        <div className={`nav ${show && "nav_black"}`}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                className='navbar_logo'
                alt="netflix"
            />
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                className='navbar_avatar'
                alt="netflix"
            />
        </div>
        </>
    )
}