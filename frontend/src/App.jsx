import React, {useEffect, useState} from 'react';

import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home";
import SignUp from "./Pages/Signup";
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";
import {isAuth} from "./utils/apiCalls";
import UserContext from "./contexts/userContext";

const App = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        isAuth().then((user) => {
            if (user && user["id"]) {
                setUser(user);
            } else {
                setUser(null);
                localStorage.removeItem("token")
            }
        });
    }, []);

        return (
            <>
                <UserContext.Provider value={[user, setUser]}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/signup" element={<SignUp/>}/>
                        <Route path="/login" element={<Login />}/>
                        <Route path="/profile/:id" element={<Profile />}/>
                    </Routes>
                </Router>
                </UserContext.Provider>

            </>
        )
    }
;

export default App;
