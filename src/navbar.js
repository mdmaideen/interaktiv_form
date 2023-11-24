import React from 'react';
import {Link} from 'react-router-dom';

const Navbar=()=>{
    return (    
                <div className='navBar'>
                    <div className='home'>
                        <Link to="/">Home</Link>
                    </div>
                    <div className='start'>
                        <Link to="/start">Start Helping</Link>
                </div>
                    <div className='about'>
                        <Link to="/about">About </Link>
                    </div>
                </div>
    )

}

export default Navbar;