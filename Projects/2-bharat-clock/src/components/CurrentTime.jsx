let CurrentTime = () => {
    let time = new Date();
    return(
     <p>
     This is current Time:{time.toLocalDateString()} -{""}
     {time.toLocaleTimeString()}
     </p>
    );
};
export default CurrentTime;