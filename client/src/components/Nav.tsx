import React from "react";
import axios, { useEffect, useState } from "axios";



const Nav = () => {
    const [user, setUser] = useState({

    })

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get('user', { withCredentials: true })

                setUser(data)
            }
        )
    }, [])

    return (
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">Company name</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-nav">
                <div className="nav-item text-nowrap">
                    <a className="nav-link px-3" href="#">Sign out</a>
                </div>
            </div>
        </header>
    )
}

export default Nav