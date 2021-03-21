export function insertionSort(array) {
    let animations = [];
    for (var i = 0; i < array.length; i++) {
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            animations.push([j, j - 1]);
            swap(j, j - 1, array, animations);
            j--;
        }
    }
    return animations;
}

function swap(i, j, array, animations) {
    let temp = 0;
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    animations.push([i, j]);
    animations.push([[i, array[j]], [j, array[i]]]);
}