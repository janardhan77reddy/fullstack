import React, { useState } from "react";
import { Link } from 'react-router-dom';







function Login() {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const handleNameChange = (event) => {
        const value = event.target.value;
        setName(value);

        if (!/^[a-zA-Z]+$/.test(value)) {
            setNameError('name must only letters');

        }
        else {
            setNameError('');
        }

    }
    const handlesubmit = (event) => {
        event.preventDefault('');
    }


    return (
        <div style={{ justifyContent: "center", textAlign: "center" }}>
            <form onSubmit={handlesubmit}>
                <div>
                    <h1>
                        Member Login
                    </h1>
                </div>
                <div>
                    <input type="text" placeholder="username" value={name} onChange={handleNameChange} />
                    {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                </div>
                <div>
                    <input type="password"  placeholder="password"/>

                </div>
                <div>
                    <Link to="/book">
                        <button>
                            Login
                        </button>
                    </Link>
                </div>
                <div>
                    <Link to="/register">
                        <button>
                            Register
                        </button>
                    </Link>
                </div>
                <div>
                    <a href="//"><p style={{ color: 'red' }}>Forget Password ?</p></a>
                </div>
            </form>

        </div>
    );
};




export default Login;