/**
 * Bubble sort Algorithm
 */

let array = [2, 1, 4, 5, 3, 8, 2, 3, 1, 2, 2, 3, 2, 3, 3, 1];

const bubbleSort = (array) => {
    const len = array.length;
    for (let i = len - 1; i >= 0; i--) {
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}


/**
 * Quick sort  Divide-and-conquerMethod （分制法)  
 */

const quickSort = (array) => {
    
}


// console.log('hello');
console.log(bubbleSort(array));