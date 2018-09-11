const set = (key, value) => {
  if (window.localStorage) {
    window.localStorage.setItem(key, value);
    return true;
  }
  return false;
};

const get = key => {
  if (window.localStorage) {
    return window.localStorage.getItem(key);
  }
  return null;
};

const remove = key => {
  if (window.localStorage) {
    window.localStorage.removeItem(key);
    return true;
  }
  return false;
};

export default { set, get, remove }