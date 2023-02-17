import React from "react";
import { ReactComponent as IlustraUm } from "../assets/ilustra-01.svg";
import { ReactComponent as IlustraDois } from "../assets/ilustra-02.svg";
import Search from "./Search";

function Hero() {
	return (
		<div className="grid mx-auto bg-[#F8F8FF] w-[1440px] h-[540px]">
			<div className=" col-start-1 row-start-1 row-span-4">
				<IlustraUm />
			</div>
			<div className="col-start-1 col-span-4 row-start-2 row-span-3 flex flex-col items-center self-center gap-14 conte">
				<div className="gap-10 flex flex-col">
					<h1 className="font-medium font-sans text-base flex-wrap text-center text-[#E45858]">
						FIND YOUR BLOCK
					</h1>
					<h1 className="font-sans text-[#121214] font-bold text-5xl text-center max-w-[647px]">
						Encontre os <span className="text-[#6246EA]">melhores blocos</span>
						{""}
						de carnaval de 2023
					</h1>
				</div>
				<Search />
			</div>
			<div className="col-start-4  row-start-2 row-span-4 flex justify-end items-end">
				<div className="h-[318px]">
					<IlustraDois />
				</div>
			</div>
		</div>
	);
}

export default Hero;
