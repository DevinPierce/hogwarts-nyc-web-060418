import piggy from '../porco.png'
import React from 'react'

//
// export default class Nav extends Component {
//
// const hanndleChange = (event) = > {
// 	if (event.target.value) === "name" {
// 		return this.sortName()
// 	} elseif (event.target.value) === 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water' {
// 		return this.sortWeight()
// 	} else {
// 		return this.sortGrease()
// 	}
// }
const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
				<h3>
					Sort By: <select onChange={(event)=>{props.changeSelect(event.target.value)}} >
						<option value='name' >Name</option>
						<option value='weight' >Weight</option>
						<option value='greased' >Greased Only</option>
					</select>
				</h3>
			</div>
		</div>
	)
}

export default Nav
