import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function HeaderPage({toggleSidebar}){

    const navigate = useNavigate();

    return (
    <>
        <header className='header'>
            <button className="menu-btn" onClick={toggleSidebar}>
                ☰
            </button>
            top
        </header>
    </>
  )

};

export default HeaderPage;