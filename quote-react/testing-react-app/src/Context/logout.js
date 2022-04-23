import React from 'react';
export const logout = async () => {
    // axios to /logout endpoint 
    setAuth({});
    navigate('/landing');
}
export default Logout;