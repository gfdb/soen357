// import ReactDOM from "react-dom";
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Rent from "./components/rent/Rent";
import About from "./components/about/About";
import Search from "./components/search/Search";


export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Nav />}>
					<Route index element={<Home />} />
					<Route path="rent" element={<Rent/>} />
					<Route path="about" element={<About />} />
					<Route path="search" element={<Search />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
// ReactDOM.render(<App />, document.getElementById("root"));