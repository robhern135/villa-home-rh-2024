import "./App.scss"
import Grid from "./components/Grid"
import Intro from "./components/Intro"
import Stamp from "./components/Stamp"
import Waves from "./components/Waves"

import CTA1 from "./img/CTA1.png"
import CTA2 from "./img/CTA2.png"
import CTA3 from "./img/CTA3.png"
import CTA4 from "./img/CTA4.png"

function App() {
	const data = {
		top_title: "Our Extraordinary",
		title: "Villa Holidays",
		copy: "	Private villa holidays with Villa Travels are all about the extraordinary, especially when it comes to our collection of villas and chateaux. Quirky, stylish and full of character, our villas for rent have been handpicked by our knowledgeable destination experts who are the best in the business. So one year you could be in a medieval castle, and the next you could be soaking up the sun on your very own private island.",
		button_text: "Book Now",
		grid_items: [
			{ title: "Villas with Pools", image: CTA1, link: "#link1" },
			{ title: "Romantic Villas", image: CTA2, link: "#link2" },
			{ title: "Beach Villas", image: CTA3, link: "#link3" },
			{ title: "Sustainable", image: CTA4, link: "#link4" },
		],
	}

	const { top_title, title, copy, button_text, grid_items } = data
	return (
		<div className="App">
			<div className="site-bounds main-content flex flex-col md:flex-row gap-38">
				<div className="left relative flex-col flex items-start justify-center w-full">
					<Stamp />
					<Intro top_title={top_title} title={title} copy={copy} button_text={button_text} />
				</div>
				<div className="right relative flex-col flex items-center justify-center w-full">
					<Grid items={grid_items} />
					<Waves />
				</div>
			</div>
		</div>
	)
}

export default App
