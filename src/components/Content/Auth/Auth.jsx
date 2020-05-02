import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setLogin, setLogout, setRegistration} from "../../../redux/auth-reducer";
import cls from "./Auth.module.scss";

const Auth = () => {

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [register, setRegister] = useState(true);
    const dispatch = useDispatch();

    let handleSubmit = (e) => {
        if (!register) {
            dispatch(setLogin(email, password));
        } else {
            dispatch(setRegistration(email, password));
        }
        e.preventDefault();
    }

    return (
        <div className={cls["wrapper"]}>
        <div className={cls["auth"]}>
            {register ? <h1>Auth</h1> : <h1>Register</h1>}
            <form onSubmit={handleSubmit} className={cls["auth__form"]}>
                <div>
                    <label><div>E-mail</div>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter E-mail"/>
                    </label>
                </div>
                <div>
                    <label><div>Password</div>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                           placeholder="Enter Password"/>
                    </label>
                </div>
                <div className={cls["auth__button"]}>
                <div>
                    <button>Submit</button>
                </div>
                <div>
                    {register
                        ? <button onClick={() => setRegister(false)}>Register</button>
                        : <button onClick={() => setRegister(true)}>Login</button>}
                </div>
{/*                <div>
                    <button onClick={() => dispatch(setLogout())}>Logout</button>
                </div>*/}
                </div>
            </form>
        </div>
        </div>
    );
}

export default Auth;