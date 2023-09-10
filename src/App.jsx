import React from "react";
import Column from "./components/Column";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function App() {
	const [acceptedData, setAcceptedData] = useState([]);
	const [rejectedData, setRejectedData] = useState([]);
	const [appliedData, setAppliedData] = useState([]);
	useEffect(() => {
		axios
			.get("https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d")
			.then((res) => {
				const data = res.data.data;
				setAppliedData(
					data.filter((candidate) => candidate.status === "Applied")
				);
				setAcceptedData(
					data.filter((candidate) => candidate.status === "Accepted")
				);
				setRejectedData(
					data.filter((candidate) => candidate.status === "Rejected")
				);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="h-screen overflow-y-scroll overflow-x-scroll pt-12 px-28">
			<div className="flex gap-10">
				<Column title={"Applied"} data={appliedData} />
				<Column title={"Accepted"} data={acceptedData} />
				<Column title={"Rejected"} data={rejectedData} />
			</div>
		</div>
	);
}

export default App;
