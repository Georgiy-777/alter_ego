import React, { createContext } from 'react';

import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import User from "./data/User";
import './18n'
export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.Suspense fallback={<div>Loading...</div>}>
        <Context.Provider value={{
            user: new User()
        }}>
            <App/>
        </Context.Provider>
    </React.Suspense>,
);



