import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

const Home = () => {
    return (
        <div className="Home">
            <div className="Home_Header">
            <div className="Home_Headerleft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
            </div>
            <div className="Home_Headerright">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/store">Images</Link>
                    <AppsIcon />
                    <Avatar/>
             </div>
            </div>
            <div className="Home_body">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="googleimg" />
                <div className="search_Input">
                    <Search/>
                </div>
            </div>
        </div>
    )
}

export default Home;
