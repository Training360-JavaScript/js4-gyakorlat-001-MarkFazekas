


const sorterPromise = (array) => new Promise((resolved, rejected) => {
    let error = false;
    array.forEach((element, index) => {
        if (typeof element !== "string") {
            error = true;
        }
    });
    if (error) {
        rejected("Error: Not all elements are string type!");
    }
    resolved(array.sort());

});

export default sorterPromise;
