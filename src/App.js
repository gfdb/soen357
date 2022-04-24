// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./components/home/Home";


export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Nav />}>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
// ReactDOM.render(<App />, document.getElementById("root"));