// ==== Problem #6 ====

/* A buyer is interested in seeing only BMW and Audi cars within the inventory.  
Execute a function and return an array that only contains BMW and Audi cars.  
Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.

*/

const getBMWAndAudiCars = () => {
    const BMWAndAudi = inventory.filter(car => car_make === 'BMW' || car_make === 'Audi');
    return BMWAndAudi;
}

export default getBMWAndAudiCars;