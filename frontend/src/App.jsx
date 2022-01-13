import React, {useEffect, useState} from 'react';

import 'bootstrap/dist/js/bootstrap.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {isAuth} from "./utils/apiCalls";
import IsAuthenticatedContext from './contexts/isAuthenticatedContext';
import UserContext from "./contexts/userContext";
import Profile from "./components/Profile";

const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        isAuth().then((data) => {
            if (data) {
                setIsAuthenticated(true);
                setUser(data);
            } else {
                setIsAuthenticated(false);
            }

        });
    }, []);

        return (
            <>
                <IsAuthenticatedContext.Provider value={[isAuthenticated, setIsAuthenticated]}>
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
                </IsAuthenticatedContext.Provider>

            </>
        )
    }
;

export default App;
