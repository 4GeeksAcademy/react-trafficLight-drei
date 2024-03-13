import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [selectedColor, setSelectedColor] = useState ("");

	return (
		<div className="semaforo" id="semaforo">
			<div 
				onClick={() => setSelectedColor("red")}
				className={
					"light red" +((selectedColor === "red") ? " rGlow" : "" )}>
			</div>
			<div 
				onClick={() => setSelectedColor("yellow")}
				className={
					"light yellow" +((selectedColor === "yellow") ? " yGlow" : "" )}>
			</div>
			<div 
				onClick={() => setSelectedColor("green")}
				className={
					"light green" +((selectedColor === "green") ? " gGlow" : "" )}>	
			</div>
		</div>
	);
};

export default Home;
