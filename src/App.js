import React, { useState, useEffect } from 'react';
import './App.css';
import {
  implementBubbleSort,
  implementInsertionSort,
  implementMergeSort,
  implementHeapSort,
  implementQuickSort,
} from './algorithms';

function App() {
  const [barsArray, setBarsArray] = useState([]);
  const [sortArray, setSortArray] = useState([]);
  const [algorithm, setAlgorithm] = useState('Choose an algorithm');
  const [compareColor] = useState('red');
  const [swapColor] = useState('pink');
  const [barNumber, setBarNumber] = useState(10);
  const [barWidth, setBarWidth] = useState('2px');
  const [disable, setDisable] = useState(false);
  const bars = document.getElementsByClassName('bar');

  useEffect(() => {
    randomizeArray(-100, 200);
  }, []);

  useEffect(() => {
    if (barNumber < 20) {
      setBarWidth('20px');
    } else if (barNumber < 50) {
      setBarWidth('10px');
    } else {
      setBarWidth('5px');
    }
    randomizeArray(-100, 200);
  }, [barNumber]);

  const randomizeArray = (min, max) => {
    setAlgorithm('Choose an algorithm');
    setBarsArray((barsArray.length = 0));
    setSortArray((sortArray.length = 0));
    let Array = [];
    for (var i = 0; i < barNumber; i++) {
      let value = Math.floor(Math.random() * (max - min + 1) + min);
      if (value !== 0) Array.push(value);
    }
    for (var j = 0; j < bars.length; j++) {
      bars[j].style.backgroundColor = 'pink';
      if (Array[j] < 0) bars[j].style.top = '50%';
      else bars[j].style.top = 0 + (200 - bars[j].clientHeight) + 'px';
    }
    setBarsArray(barsArray.concat(Array));
    setSortArray(sortArray.concat(Array));
  };

  const selectBarNumber = (e) => {
    setBarNumber(e.target.value);
  };

  return (
    <div className="visualizer">
      <h1>Visualizer</h1>
      <h2 style={{ visibility: algorithm !== '' ? 'visible' : 'hidden' }}>
        {algorithm}
      </h2>
      <div className="bar-container">
        {barsArray.map((bar, i) => (
          <div
            key={i}
            className="bar"
            style={{
              height: `${bar < 0 ? bar * -1 : bar}px`,
              backgroundColor: 'pink',
              width: barWidth,
              fontSize: '10px',
              top: `${bar < 0 ? '50%' : 0 + (200 - bar) + 'px'}`,
            }}
          >
            {}
          </div>
        ))}
      </div>
      <div className="button-container">
        <div className="range-container">
          <label>Select input length</label>
          <input
            type="range"
            min="10"
            max="100"
            onChange={selectBarNumber}
            value="10"
          />
        </div>
        <button
          // disabled={disable}
          // style={{ backgroundColor: disable ? 'gray' : 'rgba(20,20,91,0.5)' }}
          onClick={() => randomizeArray(-100, 200)}
        >
          Generate array
        </button>
        <button
          // disabled={disable && algorithm.includes('Bubble')}
          // style={{
          //   backgroundColor:
          //     disable && algorithm.includes('Bubble')
          //       ? 'gray'
          //       : 'rgba(20,20,91,0.5)',
          // }}
          onClick={() => {
            setDisable(true);
            setAlgorithm('Bubble Sort  - O(N^2)');
            implementBubbleSort(bars, sortArray, compareColor, swapColor);
          }}
        >
          Bubble Sort
        </button>
        <button
          // disabled={disable && algorithm.includes('Insertion')}
          // style={{
          //   backgroundColor:
          //     disable && algorithm.includes('Insertion')
          //       ? 'gray'
          //       : 'rgba(20,20,91,0.5)',
          // }}
          onClick={() => {
            setDisable(true);
            setAlgorithm('Insertion Sort - O(N^2)');
            implementInsertionSort(bars, sortArray, compareColor, swapColor);
          }}
        >
          Insertion Sort
        </button>
        {/* <button
          // disabled={disable && algorithm.includes('Bubble')}
          style={{ backgroundColor: disable && algorithm.includes('Bubble') ? 'gray' : 'rgba(20,20,91,0.5)' }}
          onClick={()=>implementHeapSort}
        >
          Heap Sort
        </button> */}
        <button
          // disabled={disable && algorithm.includes('Quick')}
          // style={{
          //   backgroundColor:
          //     disable && algorithm.includes('Quick')
          //       ? 'gray'
          //       : 'rgba(20,20,91,0.5)',
          // }}
          onClick={() => {
            setDisable(true);
            setAlgorithm('Quick Sort - O(log(N))');
            implementQuickSort(bars, sortArray, compareColor, swapColor);
          }}
        >
          Quick Sort
        </button>
        <button
          // disabled={disable && algorithm.includes('Merge')}
          // style={{
          //   backgroundColor:
          //     disable && algorithm.includes('Merge')
          //       ? 'gray'
          //       : 'rgba(20,20,91,0.5)',
          // }}
          onClick={() => {
            setDisable(true);
            setAlgorithm('Merge Sort - O(log(N))');
            implementMergeSort(bars, sortArray, compareColor, swapColor);
          }}
        >
          Merge Sort
        </button>
      </div>
    </div>
  );
}

export default App;
