import React from "react";
import { Link } from 'react-router-dom';






function Register() {
    return (
        <div style={{ justifyContent: "center", textAlign: "center" }}>
            <div>
                <h1>
                    Register
                </h1>
            </div>
            <div>
                <input type="text" placeholder="username" />
            </div>
            <div>
                <input type="password" placeholder="password"/>
            </div>
            <div>
            <input type="password" placeholder="conform password" />
            </div>
            <div>
                <Link to="/">
                    <button>
                        Register
                    </button>
                </Link>
            </div>
            <div>

            </div>
        </div>
    );
};




export default Register;