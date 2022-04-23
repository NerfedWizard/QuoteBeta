// import React from 'react';
// import { Navigate, Outlet, useNavigate, NavLink } from 'react-router-dom';
// import { useAuth } from './../Context/auth';
// // import { useNavigate } from 'react-router-dom';


// export default function Navigation() {
//     const navPaths = [
//         <NavLink to='/' />,
//         <NavLink to='/login' />,
//         <NavLink to='/register' />,
//         <NavLink to="/loginsuccess" />,
//         <NavLink to="/random" />,
//         <NavLink to="/category" />,
//         <NavLink to="/author" />
//     ];


//     return (
//         <>
//             <nav>
//                 {/* Public Paths */}
//                 <NavLink to="/">
//                     <NavLink to="/login" />
//                     <NavLink to="/register" />
//                 </NavLink>
//             </nav>
//             <nav>
//                 <NavLink to="/loginsuccess">
//                     <NavLink to="/random" />
//                     <NavLink to="/category" />
//                     <NavLink to="/author" />
//                 </NavLink>
//             </nav>
//             <Outlet />
//         </>
//     );
// }