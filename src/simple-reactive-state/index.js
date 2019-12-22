import deepFreeze from "./deep-freeze";
const state = { variables: {}, sideeffects: {} };
const _constants = {};
//#region constants
const setConst = (name, val) => {
  Object.defineProperty(_constants, name, {
    value: deepFreeze(val, name),
    enumerable: false,
    configurable: false,
    writable: false
  });
};
const getConst = name => _constants[name];
state.setConst = setConst;
state.getConst = getConst;
//#endregion
//#region variables
const setVar = (name, val) => {
  state.variables[name] = val;
};
const getVar = name => state.variables[name];
//#endregion
//#region sideeffects
//#endregion
export { state as default, setConst, getConst, setVar, getVar };
