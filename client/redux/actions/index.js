import $ from 'jquery'
export const handleLogin = (loginID, password) =>({ type: 'LOGIN', loginID, password });
