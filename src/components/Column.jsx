import React from "react";
import CandidateCard from "./CandidateCard";

function Column({ data, title }) {
	
	return (
		<div className=" flex flex-col items-start">
			<div className="mb-8">
				<p className=" text-3xl font-semibold">{title}</p>
			</div>
			{data.map((item) => (
				<CandidateCard item={item} key={item.id} />
			))}
		</div>
	);
}

export default Column;
