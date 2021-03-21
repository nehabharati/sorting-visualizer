export function bubbleSort(array) {
    let animations = [];
    if (array.length <= 1) return array;
    let isSorted = false;
    let counter = 0;
    while (!isSorted) {
        isSorted = true;
        for (let i = 0; i < array.length - 1 - counter; i++) {
            if (array[i] > array[i + 1]) {
                animations.push([i, i + 1])
                swap(i, i + 1, array, animations)
                isSorted = false
            }
        }
        counter++
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