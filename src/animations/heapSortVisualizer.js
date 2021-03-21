export function heapSortVisualizer(bars, visualizer, compare, swap) {
    for (let i = 0; i < visualizer.length; i++) {
        const [value1, value2] = visualizer[i];
        if (typeof value1 !== "object") {
            setTimeout(() => {
                bars[value1].style.backgroundColor = compare;
                bars[value2].style.backgroundColor = compare;
            }, i * 20);
        }
        else {
            setTimeout(() => {
                let [[barOne, barOneHeight], [barTwo, barTwoHeight]] = [value1, value2];
                if (barTwoHeight < 0) {
                    barTwoHeight *= -1;
                    bars[barOne].style.backgroundColor = swap;
                    bars[barTwo].style.backgroundColor = swap;
                    bars[barOne].style.height = `${barTwoHeight}px`;
                    bars[barTwo].style.height = `${barOneHeight}px`;
                    bars[barOne].style.top = "50%";
                }
                else {
                    bars[barOne].style.backgroundColor = swap;
                    bars[barTwo].style.backgroundColor = swap;
                    bars[barOne].style.height = `${barTwoHeight}px`;
                    bars[barOne].style.top = (0 + (200 - bars[barOne].clientHeight)) + "px";
                }
                if (barOneHeight < 0) {
                    barOneHeight *= -1;
                    bars[barOne].style.backgroundColor = swap;
                    bars[barTwo].style.backgroundColor = swap;
                    bars[barOne].style.height = `${barTwoHeight}px`;
                    bars[barTwo].style.height = `${barOneHeight}px`;
                    bars[barTwo].style.top = "50%";
                }
                else {
                    bars[barOne].style.backgroundColor = swap;
                    bars[barTwo].style.backgroundColor = swap;
                    bars[barTwo].style.height = `${barOneHeight}px`;
                    bars[barTwo].style.top = (0 + (200 - bars[barTwo].clientHeight)) + "px";
                }
            }, i * 20);
        }
    }
}