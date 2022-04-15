import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import SecureRoute from "./SecurityUtils/SecureRoute";
import Landing from './Component/Layout/Landing';
import Register from './Component/UserManagement/Register';
import Login from './Component/UserManagement/Login';
import reportWebVitals from "./reportWebVitals";
import NavButtons from './Component/Layout/NavButtons';
import SelectVariants from './Component/QuoteManagement/CategorySelect';
import RandomQuote from './Component/QuoteManagement/RandomQuote';
import AuthorSelect from './Component/QuoteManagement/AuthorSelect';

const rootElement = document.getElementById("root");

render(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App />}>
                <Route path='landing' element={<Landing />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                {/* 
                Something is messed up with the security part of the routes
                 */}
                <Route exact path='loginsuccess' element={<NavButtons />} />
                <Route exact path='random' element={<RandomQuote />} />
                <Route exact path='category' element={<SelectVariants />} />
                <Route exact path='author' element={<AuthorSelect />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    rootElement
);
reportWebVitals(console.log);
