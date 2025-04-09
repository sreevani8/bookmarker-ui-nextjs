import React from 'react';
import Link from "next/link";

const NavBar = () => (

    <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <Link href="/" className="navbar-brand">Bookmarker-ui</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link href="bookmarks/add" className="nav-link">Add Bookmark</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    
);

export default NavBar;