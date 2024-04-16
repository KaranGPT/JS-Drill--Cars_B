// ==== Problem #3 ====

/* The marketing team wants the car models listed alphabetically on the website. 
Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.
*/

import {inventory} from '../Cars_Inventory/inventory.js';

const sortCarModelsAlphabetically = () => {
    
    const modelNames = inventory.map(car => car.model);
  
    const sortedModelNames = modelNames.sort();
  
    return sortedModelNames;
  };

export default sortCarModelsAlphabetically;