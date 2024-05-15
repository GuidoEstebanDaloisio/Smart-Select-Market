import React, { useContext, useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productsContext } from '../context/ProductsContext';

const Login = () => {
    const [error, setError] = useState(null);

    const { user, handleUser } = useContext(productsContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        signInWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const userEmail = userCredential.user.email;
                console.log(userEmail);
                handleUser(userEmail);
                setError(null);
            })
            .catch((err) => {
                const errorCode = err.code;
                console.log(errorCode);
                setError("Invalid email or password");
            });
    };

    return (
        <>
            <Header />
            {user ? (
                <p style={{ fontSize: "24px" }}>¡Bienvenido/a, {user}!</p>
            ) : (
                <p style={{ fontSize: "24px" }}>No user...</p>
            )}
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" name='email' />
                    <input type="password" placeholder="Password" name='password' />
                    <button className="login-button" type='submit'>Log in</button>
                </form>
                <p>O</p>
                <Link to="/register" className="register-link">
                    <button type='submit' className="register-button">Create account</button>
                </Link>
                {error && <p style={{ color: "tomato" }}>{error}</p>}
            </div>
            <Footer />
        </>
    );
};

export default Login;
