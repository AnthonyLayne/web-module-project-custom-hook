import { useState } from "react";

//Build a hook called that takes in a key value and an initialValue.
//JSON data is required to be a string
//JSON.parse() will take the JSON data that is in the form of a string
//convert to a value/object.
//JSON.stringify() will do the opposite of JSON.parse(), it will take the
//JS value/object and convert to a JSON string.
//setItem is passed a key name and value, it will add that key to the given
//storage object OR update the key's value if it already exists.

const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    //getting the key from localStorage
    if (localStorage.getItem(key)) {
      //returning the key from local storage as a JS value/obj
      return JSON.parse(localStorage.getItem(key));
    }
    //setting the key value in localStorage as a JSON string.
    localStorage.setItem(key, JSON.stringify(initialValue));
    return initialValue;
  });
  const setStoredState = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };
  return [state, setStoredState];
};

export default useLocalStorage;
