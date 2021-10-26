const add1 = (a: number, b: number): number => {
  return a + b;
};

const add2 = (a: number, b: number) => {
  return a + b;
};

const subtract1 = (a: number, b: number) => {
  a - b;
};

const subtract2 = (a: number, b: number): number => {
  return a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};


const logger = (message : string) : void => {
  console.log(message);
}

const throwError1 = (message : string) : never => {
  throw new Error(message);
}

//more common way
const throwError2 = (message : string) : string => {
  if (!message){
    throw new Error(message);
  }
  return message;
}

const todaysWeather = {
  date : new Date(),
  weather : 'sunny'
};


const logWeather1 = (forecast : {date: Date, weather : string}): void =>{
  console.log(forecast.date);
  console.log(forecast.weather);

};

logWeather1(todaysWeather);

//EC2015 : destructoring
const logWeather2 = ({date,weather} : {date: Date, weather : string}): void =>{
  console.log(date);
  console.log(weather);
};
