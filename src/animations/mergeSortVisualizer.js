export function mergeSortVisualizer(bars, visualizer, compare, swap, speed) {
    console.log(visualizer)
    for (let i = 0; i < visualizer.length; i++) {
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
            const [barOneIdx, barTwoIdx] = visualizer[i];
            console.log(i, visualizer.length - 1)
            if (i === visualizer.length - 2) {
                console.log("hih")
                bars[barOneIdx].style.backgroundColor = "green";
                bars[barTwoIdx].style.backgroundColor = "green";
            }
            setTimeout(() => {
                if (i % 3 === 0) {
                    bars[barOneIdx].style.backgroundColor = compare;
                    bars[barTwoIdx].style.backgroundColor = compare;
                }
                else {
                    bars[barOneIdx].style.backgroundColor = swap;
                    bars[barTwoIdx].style.backgroundColor = swap;
                }
            }, i * speed);
        } else {
            setTimeout(() => {
                let [barOneIdx, newHeight] = visualizer[i];
                if (newHeight < 0) {
                    newHeight *= -1;
                    bars[barOneIdx].style.backgroundColor = swap;
                    bars[barOneIdx].style.height = `${newHeight}px`;
                    bars[barOneIdx].style.top = "50%";
                }
                else {
                    bars[barOneIdx].style.backgroundColor = swap;
                    bars[barOneIdx].style.height = `${newHeight}px`;
                    bars[barOneIdx].style.top = (0 + (200 - bars[barOneIdx].clientHeight)) + "px";
                }
                const barOneStyle = bars[barOneIdx].style;
                barOneStyle.height = `${newHeight}px`;
            }, i * speed);
        }
    }
}