const ErrorMsg = ({ items }) => {
    return <>{items.length === 0 && <h3>I am still hungry.</h3>}</>;
  };
  
  export default ErrorMsg;
// parent data nikal lega , comp ka kam hai bss show krna


// ui made no functioing in version 1 of calci
// now for functioning, when we click on button it will display on screen
// for this we have to do this, jisko bhi click ho usko bubble up krke jo bhi event ko click kiya hai usko parent ke pass bhjnna hoga
// jab wo parent ke pass jayega toh wo parent usse state mai set karega or wo state screen pr ayege, when equal to clicked give overall result
// so we need state and event handler 