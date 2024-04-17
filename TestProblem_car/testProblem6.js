import {getBMWAndAudiCars} from '../Problem_Car/problem.6';
import {inventory} from '../Cars_Inventory/inventory.js';

let BMWAudi = getBMWAndAudiCars(inventory);

console.log(JSON.stringify(BMWAudi));