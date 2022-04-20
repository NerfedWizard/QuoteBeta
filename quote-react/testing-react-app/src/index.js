import * as React from "react";
import { render } from "react-dom";
import App from "./App";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";
import Landing from './Component/Layout/Landing';
import Register from './Component/UserManagement/Register';
import Login from './Component/UserManagement/Login';
import reportWebVitals from "./reportWebVitals";
import NavButtons from './Component/Layout/NavButtons';
import SelectVariants from './Component/QuoteManagement/CategorySelect';
import RandomQuote from './Component/QuoteManagement/RandomQuote';
import AuthorSelect from './Component/QuoteManagement/AuthorSelect';
import NoMatch from './Component/Layout/NoMatch';
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./Context/auth";

const rootElement = document.getElementById("root");
// function requireAuth(nextState, replace, next) {
//     if (authenticated) {
//         replace({
//             pathname: "/login",
//             state: { nextPathname: nextState.location.pathname }
//         });
//     }
//     next();
// }


render(
    // <AuthContext.Provider value={false}>
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<App />}>
                <Route path='landing' element={<Landing />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                {/* 
                Something is messed up with the security part of the routes
                 */}
                {/**Now this is working but not allowing the authorization to work*/}
                <Route exact path='loginsuccess' element={<PrivateRoute />}>
                    <Route exact path='loginsuccess' element={<NavButtons />} />
                </Route>
                <Route path='random' element={<RandomQuote />} />
                <Route path='category' element={<SelectVariants />} />
                <Route path='author' element={<AuthorSelect />} />
                <Route path='*' element={<Navigate to="/landing" replace />} />
            </Route>
        </Routes>
    </BrowserRouter>,
    // </AuthContext.Provider>,
    rootElement
);
reportWebVitals(console.log);
