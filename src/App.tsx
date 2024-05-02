import React from "react"
import { Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import CountryPage from "./pages/CountryPage"

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/:name" element={<CountryPage />} />
			</Routes>
		</div>
	)
}

export default App
