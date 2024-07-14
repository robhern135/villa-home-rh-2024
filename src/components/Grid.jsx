import React from "react"

import GridItem from "./GridItem"
import Button from "./Button"

const Grid = ({ items }) => {
	if (items) {
		return (
			<>
				<div className="grid grid-cols-2 gap-3">
					{items?.map((item) => {
						const { title, image, link } = item
						return <GridItem key={title} title={title} image={image} link={link} />
					})}
				</div>
				<div className="button-container">
					<Button text="Book now" link="#" />
				</div>
			</>
		)
	} else {
		return null
	}
}

export default Grid
