import React, { useState } from "react";
import "./styles.css";

//create your first component
export function Home() {
	const [colorRed, setColorRed] = useState("");
	const [colorGreen, setColorGreen] = useState("");
	const [colorYellow, setColorYellow] = useState("");

	const redLight = () => {
		setColorRed("light");
		setColorGreen("");
		setColorYellow("");
	};

	const greenLight = () => {
		setColorRed("");
		setColorGreen("light");
		setColorYellow("");
	};
	const yellowLight = () => {
		setColorRed("");
		setColorGreen("");
		setColorYellow("light");
	};

	return (
		<div className="text-center mt-5">
			<div className="container">
				<div
					className={`lightRed  ${colorRed}`}
					onClick={redLight}></div>
				<div
					className={`lightGreen  ${colorGreen}`}
					onClick={greenLight}></div>
				<div
					className={`lightYellow  ${colorYellow}`}
					onClick={yellowLight}></div>
			</div>
		</div>
	);
}
