import React from 'react';
import './SideBar.css';
import avatar from './avatar.jpg';
import { GoNote } from 'react-icons/go';
import { IoList } from 'react-icons/io5';
import ShowContent from '../ShowContent/ShowContent.js';
const SideBar = () => {
    return (
        <div className="main_container">
            <div className="col-1">
                <div className="sub_container">
                    <div className="wrapper">
                        <div className="first">
                            <img src={avatar} alt="ima" className="avatar" />
                            <div className="content">
                                <h4>Hi Readers,</h4>
                                <p>Here is your news !</p>
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <h3>View Toggle </h3>
                        <div className="toggle">
                            <button className="togglebtn"><GoNote /></button>
                            <button className="togglebtn" ><IoList /></button>
                        </div>
                    </div>
                    <div className="wrapper">
                        <h3>Have a feedback ?</h3>
                        <div>
                            <button className="btn">We are listening</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-2">
                <ShowContent/>
            </div>

        </div>
    )
}

export default SideBar
