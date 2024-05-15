import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../services/firebase';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Register = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, repeatPassword } = e.target.elements;
        
        // Limpiar mensajes anteriores
        setError(null);
        setSuccess(false);

        // Verificar que todos los campos estén llenos
        if (!email.value || !password.value || !repeatPassword.value) {
            setError("Por favor, complete todos los campos.");
            return;
        }

        // Verificar que las contraseñas sean iguales
        if (password.value !== repeatPassword.value) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then(() => {
                setSuccess(true);
            })
            .catch((err) => {
                const errorMessage = err.message;
                setError(errorMessage);
            });
    };

    return (
        <>
            <Header />
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type="email" placeholder="Email" name='email' />
                    <input type="password" placeholder="Password" name='password' />
                    <input type="password" placeholder="Repeat Password" name='repeatPassword' />
                    <button className="login-button" type='submit'>Sign up</button>
                    {error && <p style={{ color: 'red', fontSize: '1.2em' }}>{error}</p>}
                    {success && <p style={{ color: 'green', fontSize: '1.2em' }}>Usuario registrado exitosamente.</p>}
                </form>
                <p>O</p>

                <Link to="/login" className="login-link">
                    <button type='submit' className="register-button">Log in</button>
                </Link>
            </div>
            <Footer />
        </>
    );
};

export default Register;