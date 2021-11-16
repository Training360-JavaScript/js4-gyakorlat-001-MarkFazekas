

const converterPromise = (array) => new Promise((resolved, rejected) => {
    let error = false;
    array.forEach((element, index) => {
        if (typeof element === "string") {
            array[index] = element.toUpperCase();
        } else {
            error = true;
        }
    });
    if (error) {
        rejected("Error: Not all elements are string type!");
    }
    resolved(array);

});



export default converterPromise;
