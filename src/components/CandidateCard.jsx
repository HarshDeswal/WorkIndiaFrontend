import React from "react";

function CandidateCard({ item }) {
	console.log(item);
	return (
		<div
			style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
			className="rounded-md w-80 mb-4 px-4 py-6"
		>
			<div>
				<p className="mb-2 text-md font-bold">{item.name}</p>
			</div>
			<div className="flex items-center gap-2">
				<img src="https://via.placeholder.com/18x18" alt="icon" />
				<p className=" text-sm font-light">{item.last_updated_at}</p>
			</div>
			<div className="flex items-center gap-2">
				<img src="https://via.placeholder.com/18x18" alt="icon" />
				<p className=" text-sm font-light">{item.location}</p>
			</div>
			<div className="flex items-center gap-2">
				<img src="https://via.placeholder.com/18x18" alt="icon" />
				<p className=" text-sm font-light">{item.gender}</p>
			</div>
		</div>
	);
}

export default CandidateCard;
