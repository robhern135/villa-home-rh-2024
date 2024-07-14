import React from "react"
import Arrow from "./Arrow"

const GridItem = ({ title, image, link }) => {
	return (
		<a href={link} className="grid-item aspect-[169/138] flex align-end justify-start relative">
			<img src={image} alt={title} className="image absolute" />
			<div className="content relative flex items-end justify-end w-full mt-auto p-8">
				<div className="content-inner relative flex items-center justify-between w-full mt-auto gap-2 ">
					<p className="title text-2xl font-bold text-white">{title}</p>
					<Arrow />
				</div>
			</div>
		</a>
	)
}

export default GridItem
