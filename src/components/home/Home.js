import React from 'react'
import '../home/home.scss'

export default function Home() {
	return (
		<div className = 'home-container'>
			<div className = 'image-logo'>
				<img  src="/images/img2.jpeg" alt="logo"/>
				<div className='search-bar-container'>
					<input 
						className = "search-bar"
						type="text"
						placeholder = "Search for an item to rent..."
						required 

					/>
				</div>
			</div>	
		</div>
	)
}