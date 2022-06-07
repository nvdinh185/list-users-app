import { greeting, PI, multiplyNumbers } from './modules/main.js';

const res = `${greeting} 
        ${PI} 
        ${multiplyNumbers(2, 3)}`

alert(res);