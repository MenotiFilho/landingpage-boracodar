import React from "react";

function Search() {
	return (
		<div>
			<div className="">
				<div className="gap-5 py-10 flex justify-center text-2xl  px-30 bg-white rounded-lg">
					<input
						className="bg-[#F8F8FF] p-2 border-gray-100 border-2"
						type="search"
					/>
					<input
						className="bg-[#F8F8FF] p-2 border-gray-100 border-2"
						type="date"
					/>
					<button className=" text-white font-bold text-sm flex items-center justify-center px-8 py-4 bg-[#6246EA] border-gray-200 border-2 rounded-lg cursor-auto">
						<p>BUSCAR AGORA</p>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Search;
