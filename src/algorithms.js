import { bubbleSort } from './sortingAlgorithms/bubbleSort';
import { quickSort } from './sortingAlgorithms/quickSort';
import { insertionSort } from './sortingAlgorithms/insertionSort';
import { heapSort } from './sortingAlgorithms/heapSort';
import { mergeSort } from './sortingAlgorithms/mergeSort';
import { bubbleSortVisualizer } from './animations/bubbleSortVisualizer';
import { insertionSortVisualizer } from './animations/insertionSortVisualizer';
import { heapSortVisualizer } from './animations/heapSortVisualizer';
import { quickSortVisualizer } from './animations/quickSortVisualizer';
import { mergeSortVisualizer } from './animations/mergeSortVisualizer';

export const implementBubbleSort = (
  bars,
  sortArray,
  compareColor,
  swapColor
) => {
  const visualizer = bubbleSort(sortArray);
  bubbleSortVisualizer(bars, visualizer, compareColor, swapColor);
};

export const implementInsertionSort = (
  bars,
  sortArray,
  compareColor,
  swapColor
) => {
  const visualizer = insertionSort(sortArray);
  insertionSortVisualizer(bars, visualizer, compareColor, swapColor);
};

export const implementHeapSort = (bars, sortArray, compareColor, swapColor) => {
  const visualizer = heapSort(sortArray);
  heapSortVisualizer(bars, visualizer, compareColor, swapColor);
};

export const implementQuickSort = (
  bars,
  sortArray,
  compareColor,
  swapColor
) => {
  const visualizer = quickSort(sortArray);
  quickSortVisualizer(bars, visualizer, compareColor, swapColor);
};

export const implementMergeSort = (
  bars,
  sortArray,
  compareColor,
  swapColor
) => {
  const visualizer = mergeSort(sortArray);
  let a = mergeSortVisualizer(bars, visualizer, compareColor, swapColor).then(
    (a) => console.log(a)
  );
  console.log(a);
};
