const profile = {
  name: 'alex',
  age: 20,
  //person physical location
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

//expected data structure from obj
const { age }: { age: number } = profile;
const {
  coords: { lat, lng }
}: { coords: { lat: number; lng: number } } = profile;
