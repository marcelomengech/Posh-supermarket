const array = ["Ray", "Miriam", "Simon", "Peter","Marcelo"];
function sortLength(array){
    //return array.sort((a, b) => a.length - b.length); //.sort() method
    //.length compares stings length
    return array.sort((a, b) => ((a.length > b.length) -(a.length < b.length)));
}
console.log(sortLength(array));
/*
function sortLength(array) {
    return array.sort((a, b) => {
        if (a.length < b.length) {
            return -1; // a comes before b
        } else if (a.length > b.length) {
            return 1; // a comes after b
        } else {
            return 0; // a and b are equal in length
        }
    });
}*/