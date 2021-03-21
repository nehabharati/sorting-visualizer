export function heapSort(stateArray) {
    let animations = [];
    let array = stateArray.slice(0);
    buildMaxHeap(array, animations);
    let end = array.length - 1;
    while (end > 0) {
        swapElements(0, end, array, animations);
        siftDown(array, 0, end, animations);
        end--;
    }
    return animations;
}

function buildMaxHeap(array, animations) {
    let currentIndex = Math.floor(array.length / 2);
    while (currentIndex >= 0) {
        siftDown(array, currentIndex, array.length, animations);
        currentIndex--;
    }
}

function siftDown(array, start, end, animations) {
    if (start >= Math.floor(end / 2)) {
        return;
    }
    let left = start * 2 + 1,
        right = start * 2 + 2 < end ? start * 2 + 2 : null,
        swap;
    if (right) {
        swap = array[left] > array[right] ? left : right;
    } else {
        swap = left;
    }
    if (array[start] < array[swap]) {
        swapElements(start, swap, array, animations);
        siftDown(array, swap, end, animations);
    }
}


function swapElements(i, j, array, animations) {
    let temp = 0;
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    animations.push([i, j]);
    animations.push([[i, array[j]], [j, array[i]]]);
}
