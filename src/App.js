import React, { useState, useEffect } from "react";
import './App.css';
import { bubbleSort } from "./sortingAlgorithms/bubbleSort";
import { quickSort } from "./sortingAlgorithms/quickSort";
import { insertionSort } from "./sortingAlgorithms/insertionSort";
import { heapSort } from "./sortingAlgorithms/heapSort";
import { mergeSort } from "./sortingAlgorithms/mergeSort";
import { bubbleSortVisualizer } from "./animations/bubbleSortVisualizer";
import { insertionSortVisualizer } from "./animations/insertionSortVisualizer";
import { heapSortVisualizer } from "./animations/heapSortVisualizer";
import { quickSortVisualizer } from "./animations/quickSortVisualizer";
import { mergeSortVisualizer } from "./animations/mergeSortVisualizer";

function App() {
  const [barsArray, setBarsArray] = useState([]);
  const [sortArray, setSortArray] = useState([]);
  const [algorithm, setAlgorithm] = useState("Choose an algorithm");
  const [compareColor] = useState("red");
  const [swapColor] = useState("pink");
  const [barNumber, setBarNumber] = useState(10);
  const [barWidth, setBarWidth] = useState("2px");
  const [speed, setSpeed] = useState("20");
  const bars = document.getElementsByClassName("bar");

  useEffect(() => {
    randomizeArray(-100, 200);
  }, [])

  useEffect(() => {
    if (barNumber < 20) { setBarWidth("20px"); }
    else if (barNumber < 50) { setBarWidth("10px"); }
    else { setBarWidth("5px"); };
    randomizeArray(-100, 200);
  }, [barNumber])

  const randomizeArray = (min, max) => {
    setAlgorithm("Choose an algorithm");
    setBarsArray(barsArray.length = 0);
    setSortArray(sortArray.length = 0);
    let Array = [];
    for (var i = 0; i < barNumber; i++) {
      let value = Math.floor(Math.random() * (max - min + 1) + min);
      if (value !== 0) Array.push(value);
    }
    for (var j = 0; j < bars.length; j++) {
      bars[j].style.backgroundColor = "pink";
      if (Array[j] < 0) bars[j].style.top = "50%";
      else bars[j].style.top = (0 + (200 - bars[j].clientHeight)) + "px";
    }
    setBarsArray(barsArray.concat(Array))
    setSortArray(sortArray.concat(Array));
  }


  const implementBubbleSort = () => {
    setAlgorithm("Bubble Sort  - O(N^2)");
    const visualizer = bubbleSort(sortArray);
    bubbleSortVisualizer(bars, visualizer, compareColor, swapColor, speed);
  }

  const implementInsertionSort = () => {
    setAlgorithm("Insertion Sort - O(N^2)");
    const visualizer = insertionSort(sortArray);
    insertionSortVisualizer(bars, visualizer, compareColor, swapColor, speed);
  }

  const implementHeapSort = () => {
    setAlgorithm("Heap Sort - O(log(N))");
    const visualizer = heapSort(sortArray);
    console.log(visualizer)
    heapSortVisualizer(bars, visualizer, compareColor, swapColor, speed);
  }

  const implementQuickSort = () => {
    setAlgorithm("Quick Sort - O(log(N))");
    const visualizer = quickSort(sortArray);
    quickSortVisualizer(bars, visualizer, compareColor, swapColor, speed)
  }

  const implementMergeSort = () => {
    setAlgorithm("Merge Sort - O(log(N))");
    const visualizer = mergeSort(sortArray);
    mergeSortVisualizer(bars, visualizer, compareColor, swapColor, speed);
  }

  const selectBarNumber = (e) => setBarNumber(e.target.value);

  return (
    <div className="visualizer">
      <h1>Visualizer</h1>
      <h2 style={{ visibility: algorithm !== "" ? "visible" : "hidden" }}>{algorithm}</h2>
      <div className="bar-container">
        {barsArray.map((bar, i) =>
          <div
            key={i}
            className="bar"
            style={{
              height: `${bar < 0 ? bar * -1 : bar}px`,
              backgroundColor: "pink",
              width: barWidth,
              fontSize: "10px",
              top: `${bar < 0 ? "50%" : (0 + (200 - bar) + "px")}`
            }}>{ }</div>

        )}
      </div>
      <div className="button-container">
        <div className="range-container">
          <label>Select input length</label>
          <input type="range" min="10" max="100" onChange={selectBarNumber} value="10" />
        </div>
        <button onClick={() => randomizeArray(-100, 200)}>Generate array</button>
        <button onClick={implementBubbleSort}>Bubble Sort</button>
        <button onClick={implementInsertionSort}>Insertion Sort</button>
        <button onClick={implementHeapSort}>Heap Sort</button>
        <button onClick={implementQuickSort}>Quick Sort</button>
        <button onClick={implementMergeSort}>Merge Sort</button>
      </div>
    </div>
  );
}

export default App;
