// Alex => [A,l,e,x] => string => string[]
// [A,l,e,x] => Alex => string[] => string

function parseStr(input: string | string[]): string | string[] {
  return Array.isArray(input) ? input.join('') : input.split('');
}

const resultArray = parseStr('alex');

resultArray.reverse(); //! Property 'reverse' does not exist on type 'string | string[]'. Property 'reverse' does not exist on type 'string'.

if(Array.isArray(resultArray)){
  resultArray.reverse(); //* Correct
}

console.log(resultArray);

const resultStr = parseStr(['A','l','e','x']);

resultStr.toLowerCase(); //!Property 'toLowerCase' does not exist on type 'string | string[]'. Property 'toLowerCase' does not exist on type 'string[]'.

if(typeof resultStr === 'string'){
  resultStr.toLowerCase(); //* Correct
}

console.log(resultStr);
