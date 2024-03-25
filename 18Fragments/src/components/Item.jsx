// passing obj/parameter like fooditem as an argumrnt then Item comp catch it 
// combine it and make props

const Item = (props) =>{
    return (
        <li className="list-group-item kg-item">
              {props.foodItem}
            </li>
    );
};

export default Item;