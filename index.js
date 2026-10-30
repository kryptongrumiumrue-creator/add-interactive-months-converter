const readline = require('readline-sync');

const months = Number(readline.question('Enter months: '));

console.log('\nChoose a conversion:');
console.log('1. Weeks');
console.log('2. Days');
console.log('3. Hours');

const choice = Number(readline.question('Enter your choice (1-3): '));

const WEEKS_PER_MONTH = 4;
const DAYS_PER_MONTH = 30;
const HOURS_PER_MONTH = 720;

let result;
let unit;

switch (choice) {
    case 1:
        result = Math.floor(months * WEEKS_PER_MONTH);
        unit = 'week';
        break;
    case 2:
        result = Math.floor(months * DAYS_PER_MONTH);
        unit = 'day';
        break;
    case 3:
        result = Math.floor(months * HOURS_PER_MONTH);
        unit = 'hour';
        break;
    default:
        console.log('Invalid conversion option.');
}

if (choice >= 1 && choice <= 3) {
    const inputUnit = months === 1 ? 'month' : 'months';
    const resultUnit = result === 1 ? unit : unit + 's'; 
    
    console.log(`\n${months} ${inputUnit} is ${result} ${resultUnit}.`);
}