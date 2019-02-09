import React from 'react';
import './Header.css'

const Header = () => {
	return (
			<header className='header bg-light-blue pa2'>
				<h2>#100daysofcode</h2>
				<ul className='navbar'>
					<li>Who's This?</li>
					<li>What's This?</li>
				</ul>
			</header>
		)
}

export default Header;