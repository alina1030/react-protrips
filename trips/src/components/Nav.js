import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome} from 'react-icons/fa';
import {FaCalendarDay} from 'react-icons/fa';
import {FaList} from 'react-icons/fa';

export const Nav = () => (
    <nav className="nav">
        <Link to="/">
            <FaHome />
        </Link>
        <Link to="/add">
            <FaCalendarDay />
        </Link>
        <Link to="/list">
            <FaList />
        </Link>
    </nav>
)