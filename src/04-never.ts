const withoutEnd = () => {
  while(true){
    console.log('Never stop learning');
  }
}

const fail = (message: string) => {
  throw new Error(message);
}

const example = (input: unknown) => {
  if(typeof input === 'string'){
    return 'Is a string';
  }else if(Array.isArray(input)){
    return 'Is an Array';
  }

  return fail('Not match');
}

console.log(example('Hello'));
console.log(example([1, 2, 3, 4]));
console.log(example(1234)); //! Error
console.log(example('After fails'));
