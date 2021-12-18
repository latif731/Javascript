// - create a function that accept single parameter. the parameter will be an array of integer
// - your function should be able to count the unique value inside the array
// - Cannot Use Build in Function (Find, Sort, Search, Etc)
// - examples:
//   - `countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))` => 7
//   - `countUniqueValues([1, 2, 2, 2, 2, 2, 2, 2, 4, 6]))` => 4
//   - `countUniqueValues([]))` => 0

function countUniqueValues(array){
    // var sum = 0
    // for( let i=0; i < array.length; i++){
    //     if(array[i] !== array[i - 1]){
    //         sum++
    //     }
    // }

    return [...new Set(array)].length
}
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
