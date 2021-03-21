export function quickSort(array) {
    let animations = [];
    quickSortHelper(array, 0, array.length - 1, animations);
    console.log("isRunning")
    console.log(animations)
    return animations;
}

function quickSortHelper(array, startIndex, endIndex, animations) {
    if (startIndex >= endIndex) return
    console.log("isRunning")
    let pivotIndex = startIndex;
    let leftIndex = startIndex + 1;
    let rightIndex = endIndex;
    while (rightIndex >= leftIndex) {
        if (array[leftIndex] > array[pivotIndex] && array[rightIndex] < array[pivotIndex]) {
            swap(leftIndex, rightIndex, array, animations);
            animations.push([pivotIndex, leftIndex, rightIndex]);
        }
        if (array[leftIndex] <= array[pivotIndex]) {
            leftIndex++;
        }
        if (array[rightIndex] >= array[pivotIndex]) {
            rightIndex--;
        }
    }
    swap(pivotIndex, rightIndex, array, animations);
    let leftIndexSubArrayIsSmaller = rightIndex - 1 - startIndex < endIndex - (rightIndex + 1);
    if (leftIndexSubArrayIsSmaller) {
        console.log("isRunning")
        quickSortHelper(array, startIndex, rightIndex - 1, animations);
        quickSortHelper(array, rightIndex + 1, endIndex, animations);
    }
    else {
        console.log("isRunning")
        quickSortHelper(array, rightIndex + 1, endIndex, animations);
        quickSortHelper(array, startIndex, rightIndex - 1, animations)
    }
}

function swap(i, j, array, animations) {
    console.log("isRunning")
    let temp = 0;
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    animations.push([i, j]);
    animations.push([[i, array[j]], [j, array[i]]]);
}
