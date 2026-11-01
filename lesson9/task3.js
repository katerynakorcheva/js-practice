const car1 = {
  brand: "Suzuki",
  model: "Vitara",
  year: 2023
};

const car2 = {
  brand: "Kia",
  model: "Ria",
  owner: 2025
};

const car3 = {...car1, ...car2};

console.log(car3); 
