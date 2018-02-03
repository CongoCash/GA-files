var scores = [85, 78, 92, 90, 98];

function myForEach(arr, callback) {
    for (let i = 0; i<arr.length; i++) {
        callback(arr[i]);
    }
}

myForEach(['hello', 'world'], function(word) {
    console.log(word);
});