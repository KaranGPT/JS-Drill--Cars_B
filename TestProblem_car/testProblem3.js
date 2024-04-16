// ==== Problem #3 ====

/* The marketing team wants the car models listed alphabetically on the website. 
Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
*/

import {sortCarModelsAlphabetically} from '../Problem_Car/problem3.js';
import {inventory} from '../Cars_Inventory/inventory.js';

const sortedModels = sortCarModelsAlphabetically(inventory);
console.log(sortedModels);