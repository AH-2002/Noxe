import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
            <div className="container-fluid">
                <Link className="navbar-brand" to="home">Noxe</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {props.userData ? <>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="movies">Movies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="tv">TV show</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="people">People</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="contacts">Contacts</Link>
                            </li>
                        </ul>
                    </> : ""}


                    <ul className="navbar-nav  mb-2 mb-lg-0">
                        {props.userData ? <><li className="nav-item">
                            <span onClick={props.logOut} className="nav-link" style={{ cursor: 'pointer' }} >Logout</span>
                        </li></> : <>
                            <li className="nav-item mt-1 order-lg-first order-last me-3 d-flex align-items-center">
                                <i className="fab mx-2 fa-facebook"></i>
                                <i className="fab mx-2 fa-twitter"></i>
                                <i className="fab mx-2 fa-instagram"></i>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </li>
                        </>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
