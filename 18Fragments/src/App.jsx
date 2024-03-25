// fragments means part mai todna , whenever we wrap part/something in div it return completely
// allow grping of multiple ele without extra DOM nodes so cleaner DOM

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Errormsg from "./components/Errormsg";
import FoodItems from "./components/FoodItems";


  // show items by loop coz we dont know how many ele is there
  // footitems pr he map method laga kr puraa generate kr skte hai
  function App() {
    // let fooItems = ["Dal", "Milk", "Salad", "fruits", "vegies", "ghee"];
 
    // if there is nothing in fooditems then return i am hungry
    // using if else
    // if (foodItems.length === 0) {
    //   return <h3>I am still hungry</h3>;
    // }
    return (
      <>
        {/* if there is no items in string still we have to return heading h1 for that use ternary operators */}
        <h1>Healthy Foods</h1>
        {/* using ternary op */}
        {/* {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null} */}


        {/* using logical op */}
        <Errormsg items={foodItems}></Errormsg>
        {/* {foodItems.length === 0 && <h3>I am still hungry</h3>} */}
        
        
        
        <FoodItems items={foodItems}></FoodItems>
        {/* <ul class="list-group">
          {fooItems.map((item) => (
            <li key={item} className="list-group-item">
              {item}
            </li>
          ))}
          </ul> */}




          {/* <li class="list-group-item">Dal</li>
        <li class="list-group-item">Milk</li>
        <li class="list-group-item">Salad</li>
        <li class="list-group-item">fruits</li> */}
        
      </>
    );
  }
  export default App;

// map method convert data in ui elements
// conditional rendering means kabhi ho kabhi na ho, ye ho to ye ho types chije means if else ka alternate option