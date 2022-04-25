// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";
import Rent from "./components/rent/Rent";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Nav />}>
					<Route index element={<Home />} />
					<Route path="rent" element={<Rent />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
// ReactDOM.render(<App />, document.getElementById("root"));