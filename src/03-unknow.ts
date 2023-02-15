let anyVar : any;
anyVar = true;
anyVar = undefined;
anyVar = false;
anyVar = 1;
anyVar = [];
anyVar = {};

anyVar.toUpperCase(); //! Not warnings ❌


let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = false;
unknowVar = 1;
unknowVar = [];
unknowVar = {};

if(typeof unknowVar === 'string'){
  unknowVar.toUpperCase(); //* Has warnings ✅
}

if(typeof unknowVar === 'boolean'){
  let isNewV2: boolean = unknowVar; //* Has warnings ✅
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
