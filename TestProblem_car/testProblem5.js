import {findOlderCars} from '../Problem_Car/problem5.js';
import {inventory} from '../Cars_Inventory/inventory.js';

const olderCars = findOlderCars(inventory);
console.log(olderCars.length);