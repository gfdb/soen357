import React from 'react'
import "./results.scss"
import {Link} from 'react-router-dom'

export default function Resulsts() {


    let items = []
    let item_rows = []
    let item_titles = ['Microwave', 'Refrigerator', 'Oven', 'Washing Machine']
    let item_images = [
        '/images/microwave.jpg',
        '/images/fridge.jpg',
        '/images/oven.jpg',
        '/images/washing_machine.jpg'
    ]

    for (let x = 0; x < 4; x++) {
        let random_num = Math.round(Math.random()*10 + 5)
        items.push(
            <div className = 'result-item-container'>
                    <img 
                        className = 'picture'
                        src = {item_images[x]}
                        alt = 'microwave'
                    />
                    <div className = 'item-info-container'>
                        <h3 className = 'item-title'>{item_titles[x]}</h3>
                        <div className = 'item-description'>
                            <p>
                                Lorem ipsum is placeholder text commonly used 
                                in the graphic.
                                <br/><br/>
                                Price per hour: ${random_num + 10}
                                <br/>
                                Price per day: ${random_num + 100}
                                <br/>
                                Price per month: ${random_num + 200}
                            </p>
                        </div>
                        <button className = 'rent-now-button'>
                            Rent this Item
                        </button>
                    </div>
                </div>
        )
    }

    for (let i = 0; i < 3; i++) {
        item_rows.push(
            <div className = 'results-pics-row'>
                {items}
            </div>
        )
    }
    
    return (
        <div className = 'results-container'>
            <div className= 'results-options'>
                <div className = 'filter-container'>
                    <p>Sort by</p>
                    <select name="Sort by" className = 'filter-select'>
                        <option value ="">Low to High</option>
                        <option value ="">High to Low</option>
                        <option value ="">Highest rated seller</option>
                        <option value ="">Popular</option>
                    </select> 
                </div>

                <input 
						className = "search-bar-results"
						type="text" 
						placeholder = "Search for an item to rent..." 
						required 

				/>
                <Link to="">
                    <button className = 'search-button-results' type = 'submit'>
                        Search
                    </button>
			    </Link>
            </div>
            {item_rows}
        </div>
    )
}