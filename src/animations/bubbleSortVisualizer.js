export function bubbleSortVisualizer(bars, visualizer, compare, swap, speed) {
  for (let i = 0; i < visualizer.length; i++) {
    // If we're at an odd index, these are the compare values, so they should be red 
    if (i % 3 !== 2) {
      const [barOne, barTwo] = visualizer[i];
      let color = i % 3 === 0 ? compare : swap;
      setTimeout(() => {
        bars[barOne].style.background = color;
        bars[barTwo].style.background = color;
      }, i * speed);
    }
    else {
      setTimeout(() => {
        let [[barOne, barOneHeight], [barTwo, barTwoHeight]] = visualizer[i];
        if (barTwoHeight < 0) {
          barTwoHeight *= -1;
          bars[barOne].style.height = `${barTwoHeight}px`;
          bars[barTwo].style.height = `${barOneHeight}px`;
          bars[barOne].style.top = "50%";
        }
        else {
          bars[barOne].style.height = `${barTwoHeight}px`;
          bars[barOne].style.top = (0 + (200 - bars[barOne].clientHeight)) + "px";
        }
        if (barOneHeight < 0) {
          barOneHeight *= -1;
          bars[barOne].style.height = `${barTwoHeight}px`;
          bars[barTwo].style.height = `${barOneHeight}px`;
          bars[barTwo].style.top = "50%";
        }
        else {
          bars[barTwo].style.height = `${barOneHeight}px`;
          bars[barTwo].style.top = (0 + (200 - bars[barTwo].clientHeight)) + "px";
        }
      }, i * speed);
    }
  }
}