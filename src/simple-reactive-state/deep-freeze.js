import config from "./config";

const deepFreeze = (object, name, count = 0) => {
  const { basicChecks, isFreezableType } = helpers(object);
  if (typeof object !== "object" && typeof object !== "function") return object;
  if (count > config.objectDepth) warning(name);
  Object.freeze(object);
  Object.getOwnPropertyNames(object).map(prop => {
    if (basicChecks(prop) && isFreezableType(prop)) {
      deepFreeze(object[prop], name, ++count);
    }
  });
  return object;
};

function warning(name) {
  console.warn(
    `You may have a cyclic reference in your object "${name}". ${config.name} v.${config.version} only allowes objects with properties up to ${config.objectDepth} levels of depth to be used as constants.`
  );
}

function helpers(object) {
  const basicChecks = prop => !!object[prop] && !Object.isFrozen(object[prop]);
  const isFreezableType = prop =>
    typeof object[prop] === "object" || typeof object[prop] === "function";
  return { basicChecks, isFreezableType };
}

export default deepFreeze;
