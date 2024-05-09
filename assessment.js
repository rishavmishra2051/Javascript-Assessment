/*
1.A JavaScript function to create random string of 16 characters. Random string could consist of alphabets and numbers. Example - “4HC6BC568uGaV03c”
*/
function randomStringOf16digit() {
    let character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    let str=""
    for (let i = 0;i < 16; i++){
        str+=character.charAt(Math.floor(Math.random()*character.length))
    }
    return str;
    
}
console.log(randomStringOf16digit());

/*
2.Create a function that takes two arrays and insert the second array in the middle of the first array.
Example – Array 1[1, 10] ; Array 2-  [2, 3, 4, 5, 6, 7, 8, 9]) 
Output➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/
function insertArrInMid(arr1, arr2) {
    const middleIndex = Math.floor(arr1.length / 2);
    arr1.splice(middleIndex, 0, ...arr2);   
    return arr1;
}
const arr1 = [1, 10];
const arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(insertArrInMid(arr1, arr2));

//3.Share any of your previous JavaScript based solution/project. GitHub link or zip file would work.
//Project Github link: https://github.com/rishavmishra2051/Getyourthings