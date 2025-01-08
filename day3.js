// // Global variable example
// let global1 = 0;

// // Function to add numbers with a random number
// function add(a, b) {
//     return Math.random() + a + b;
// }
// console.log( add(2, 3));
// console.log(add(2, 3));

// function closureDemo() {
//     let temp = {}; // Initialize an object to store values
//     return (val) => {
//         if (val in temp) {
//             console.log(temp); // Log cached value
//             return temp[val]; // Return cached value
//         }
//         let multiple = val * 5; // Calculate the result
//         temp[val] = multiple; // Store the result in temp
//         return multiple; // Return the calculated value
//     };
// }

// const storeClosures = closureDemo();
// console.log(storeClosures(10));
// console.log(storeClosures(10));
// console.log(storeClosures(100));
// console.log(storeClosures(10));

// localStorage.setItem("getBack",2500)
// console.log(localStorage.getItem("getBack"));

// let count = localStorage.getItem('reloadCount') || 0;
// count++;
// localStorage.setItem('reloadCount', count);
// document.getElementById('counter').innerText = "Page reload count: " + count;

let val = localStorage.getItem("getCount")?localStorage.getItem("getCount") : 0
console.log(val);
localStorage.setItem("getCount",++val)
