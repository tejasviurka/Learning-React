// fooditems comp create list and list items
import Item from "./Item";

const FoodItems = ({items}) =>{
    let fooItems = ["Dal", "Milk", "Salad", "fruits", "vegies", "ghee"];
    return(
        <ul class="list-group">
          {items.map((item) => (
            <Item key = {item}  foodItem={item}></Item>
          ))}
          </ul>
    );

};
export default FoodItems;