import React from "react"
import Arrow from "./Arrow"

const Button = ({ text, link }) => {
	return (
		<a href={link} className="button flex items-center justify-between flex-row">
			<span className="text-white leading-none">{text}</span>
			<Arrow />
		</a>
	)
}

export default Button
