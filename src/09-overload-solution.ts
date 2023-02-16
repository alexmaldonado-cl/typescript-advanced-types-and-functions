// Alex => [A,l,e,x] => string => string[]
// [A,l,e,x] => Alex => string[] => string

type customType = string | string[];

export function parseStr(input: string) : string[];
export function parseStr(input: string[]) : string;

export function parseStr(input: customType): customType {
  return Array.isArray(input) ? input.join('') : input.split('');
}

const resultArray = parseStr('alex');
resultArray.reverse(); //* No errors
console.log(resultArray);

const resultStr = parseStr(['A','l','e','x']);
console.log(resultStr.toLowerCase());//* No errors
