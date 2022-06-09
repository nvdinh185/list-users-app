import { greeting, PI, multiplyNumbers } from './modules/main.js';

const token = localStorage.getItem('token') || 'NoToken';

const res = `${greeting} 
        ${PI} 
        ${multiplyNumbers(2, 3)}
        ${token}`

alert(res);