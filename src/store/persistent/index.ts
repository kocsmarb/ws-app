const localStorage = window.localStorage;

type Key = string;
type Value = object | string | number;

class LocalStorage{
  static set(key: Key, value:Value){
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key: Key){
    const maybe = localStorage.getItem(key);
    return maybe ? JSON.parse(maybe) : maybe;
  }

  static remove(key: Key){  
    localStorage.removeItem(key);
  }

  static clear(){
    localStorage.clear();
  }
}

export default LocalStorage;