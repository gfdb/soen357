// import ReactDOM from "react-dom";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Results from "./components/results/Results";
import Explore from "./components/explore/Explore";



export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Nav />}>
					<Route index element={<Home />} />
					<Route path="explore" element={<Explore />} />
					<Route path="about" element={<About />} />
					<Route path="results" element={<Results />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
// ReactDOM.render(<App />, document.getElementById("root"));