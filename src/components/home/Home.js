import React from 'react'
import '../home/home.scss'

export default function Home() {
	return (
		<div className = 'home-container'>
			<div className = 'image-logo'>
				<img  src="/images/img2.jpeg" alt="logo"/>
				<h1>RentAll</h1>
				<div className='search-bar-container'>
					<input 
						className = "search-bar"
						type="text" 
						placeholder = "Search for an item to rent..." 
						required 

					/>
				</div>
				<div className = 'search-button-container'>
					<button className = 'search-button' type = 'submit'>RentAll Search</button>
				</div>
			</div>	
		</div>
	)
}