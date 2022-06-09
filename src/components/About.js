import React, { useState, useEffect } from "react";

export default function About() {
  const numbers = [1, 2, 3, 4, 5];

  //***map***
  const newNumbers = numbers.map((number) => number + 3);
  // newNumbers will be equal to ['4', '5', '6', '7', '8']

  const numberItems = numbers.map((number, index) => (
    // Only do this if items have no stable IDs
    <li key={index}>{number}</li>
  ));
  //console.log(numberItems);

  // {someData.map(item => <div key={item.id}>Hello!</div>)}

  function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number, index) => (
      <li key={index}>{number}</li>
    ));
    return <ul>{listItems}</ul>;
  }
  /*
  ReactDOM.render(
    <NumberList numbers={numbers} />,
    document.getElementById('root')
  );
  */

  //***add to array***
  const initNumbers = [1, 2, 3, 4, 5];
  const addedToNumbers = [...initNumbers, 6];
  console.log(addedToNumbers);

  //***remove from array***
  const [list, setList] = React.useState([
    { id: 1, type: "car" },
    { id: 2, type: "tree" },
  ]);

  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  //handleRemove(1);//DONT do this in the component, else will loop infinite
  //console.log(list);

  /***.reduce()***
This is a great array method that uses an accumulator to reduce all elements in an 
array to a single value. It basically takes in two augments, a callback function and 
an initial value, performs an action, and returns a single value, the value being 
any type i.e. object, array, string, integer. The call back function takes in two 
parameters namely: accumulator and current value.

The reduce() method reduces the array to a single value. The reduce() method executes
 a provided function for each value of the array (from left-to-right). The return 
 value of the function is stored in an accumulator (result/total).*/

  //get total of all values in array
  const newValue = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  console.log(newValue);
  // newValue will return 15

  /***.filter()***
Just as it sounds, it works similar to the way the .map() method works. It filters an 
array based on if an element in the array, meets the condition passed in the function 
and then, it returns an array.*/
  //if value is >= 3 will be true and left in the array
  const filteredNumbers = numbers.filter((number) => number >= 3);
  console.log(filteredNumbers);
  // newValue will return [3, 4, 5]

  /***.includes()***
This method simply checks if an element exists in a given array and returns a 
boolean(true or false). Do note that there are some constraints with regards to the data 
types that the include method can check for. This is because of the way Javascript treats 
objects and primitive types.*/
  //return true if array has a value == 3
  const numbersIncludes = numbers.includes(3);
  console.log(numbersIncludes);
  // newValue will return true

  /***.find()***
This method takes in a function that checks for a specific element in an array and returns 
the very first occurrence of the condition.*/
  //find first instance 0f value > 3 in array
  const findNumber = numbers.find((value) => value > 3);
  console.log(findNumber);
  // newValue will return 4

  /***ARROW FUNCTION***/
  const hello = () => {
    return "Hello World!";
  };

  const shortHello = (param1, param2) => "Hello World!";

  const shortHelloDecon = ({ param2 }) => "Hello World!" + param2;

  /***CLASS FUNCTION***/

  class Car {
    constructor(props) {
      this.name = props;
      this.brand = this.brand.bind(this);
    }

    brand = () => {
      return "I have a " + this.name;
    };
  }

  class Model extends Car {
    constructor(name, mod) {
      super(name);
      this.model = mod;
    }
    show() {
      return this.brand() + ", it is a " + this.model;
    }
  }
  const mycar = new Model("Ford", "Mustang");
  console.log(mycar.show());

  /***LIFECYCLE (works will class defined compnents only, useEffect for functions)
  componentDidMount
  componentDidUpdate
  componentWillUnmount
  */

  //Mounting
  //componentDidMount
  class Component extends React.Component {
    componentDidMount() {
      let component = this;
    }
  }

  //Updating
  //componentDidUpdate
  //componentDidUpdate(prevProps, prevState, snapshot);

  //Unmounting
  //componentWillUnmount

  //***useEffect***
  const count = 1;
  useEffect(() => {
    console.log(`You clicked ${count} times`);
  }, [count]); // Only re-run the effect if count changes

  //***useState***
  function Example() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    );
  }

  //***try catch***
  //localStorage
  window.localStorage.setItem("id", 34);
  function getFromLocalStorage(key) {
    try {
      const data = window.localStorage.getItem(key);
      return JSON.parse(data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log("getFromLocalStorage", getFromLocalStorage("id"));

  //
  //

  return (
    <main className="bg-gray-200 min-h-screen p-12">
      <article className="container shadow-lg mx-auto bg-green-100 rounded-lg">
        {newNumbers.map((number, index) => (
          <p key={index}>{number + " / " + index}</p>
        ))}
      </article>
    </main>
  );
}
