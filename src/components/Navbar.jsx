import { NavLink } from "react-router-dom";
import { useContext } from "react";
import React, { useState } from 'react'
import CartSumarry from "./CartSummary"
import { productsContext } from "../context/ProductsContext";
import "../styles/Navbar.css"
import Search from "./Search";

export default function Navbar() {
    const { user } = useContext(productsContext);


    return (

        <nav className="navbar">
            <ul className="nav-links">
                <li><NavLink to="/" style={({ isActive }) => (isActive ? { textDecoration: "underline" } : null)}>Home</NavLink></li>
                <li><NavLink to="/products" style={({ isActive }) => (isActive ? { textDecoration: "underline" } : null)}>Products</NavLink></li>
                <li><NavLink to="/login" style={({ isActive }) => (isActive ? { textDecoration: "underline" } : null)}>Login</NavLink></li>
            </ul>

            <Search />

            <div>
                {/* <CartSumarry style={{padding: "10px"}} /> */}
                {user ? (<>
                    <p style={{ fontSize: "24px" }}>{user}</p>
                    <CartSumarry style={{ padding: "10px" }} />
                </>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    )
}

