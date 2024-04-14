import React, { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";
function Multirange() {
const [minValue, set_minValue] = useState(25);
const [maxValue, set_maxValue] = useState(75);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};

return (
	<div className="App">
		<MultiRangeSlider
        style={{border:"none",boxShadow:"none"}}
            barLeftColor={"#EB3E32"}
            barRightColor={"#EB3E32"}
            barInnerColor="#EB3E32"
            thumbLeftColor="#EB3E32"
            thumbRightColor="#EB3E32"
			min={0}
			max={3500}
			step={5}
            ruler={false}
			label={false}
		preventWheel={false}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}

        />
	</div>
	);
}

export default Multirange;