import React from "react"
import Button from "./Button"

const Intro = ({ top_title, title, copy, button_text }) => {
	return (
		<div className="intro inline-flex flex-col items-start justify-start">
			{top_title && <p className="top-title gradient-text">{top_title}</p>}
			<div className="inner-content ps-9">
				<h1 className="mb-12">{title}</h1>
				<p class="copy">{copy}</p>
			</div>
			<div className="button-container ps-9">
				<Button text={button_text} link="#" />
			</div>
		</div>
	)
}

export default Intro
