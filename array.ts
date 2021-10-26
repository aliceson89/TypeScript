//type : const carMakers1: string[]
const carMakers1 = ['ford', 'toyota', 'chevy'];
//carMakers2 type will be 'any'
const carMakers2 = [];

const dates = [new Date(), new Date()];

//type : const carsByMake: string[][]
const carsByMake1 = [['f150'], ['corolla'], ['camero']];

//type : const carByMake2: string[][]
const carByMake2: string[][] = [];

//why do we care 1) Help with inference when extracting values
const car = carMakers1[0];
//might be ford

//type : const myCar: string
const myCar = carMakers1.pop();

//why do we care 2) Prevent incompatible values
carMakers1.push(100);

////why do we care 3) Help with 'map'
carMakers1.map((car: string): string => {
  //type : (parameter) car: string
  return car.toUpperCase();
});

//Flexible types
const importantDate: (Date | string)[]=[new Date()];
importantDate.push('2021-10-31');
importantDate.push(new Date());
//error : importantDate.push(111);
