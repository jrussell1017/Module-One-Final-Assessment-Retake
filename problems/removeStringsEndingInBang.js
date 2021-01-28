/**
* Removes all strings ending in "!" from an array of strings.
* 
* @param {string[]} arr - The input array of strings
* @returns {string[]} - Returns the strings in arr that don't end with "!"
*
* ex: removeStringsEndingInBang(["Hello", "Hi!", "Greetings"])
* returns: ["Hello", "Greetings"]
*
* ex: removeStringsEndingInBang(["!", "", "a"])
* returns: ["", "a"]
*/

function removeStringsEndingInBang(arr) {
//    let filtered = arr.filter((str) => {
//         if(str.includes("!") !== 0) {
//             ???
//         }
//      })
//     return filtered

}



console.log(removeStringsEndingInBang(["Hello", "Hi!", "Greetings"]))
console.log(removeStringsEndingInBang(["!", "", "a"]))

module.exports = removeStringsEndingInBang
