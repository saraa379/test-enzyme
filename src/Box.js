import React, {Component} from 'react'
import './Minesweeper.css';

class Box extends Component {


	render() {
		let boxes = this.props.listBox.map((item, index) => {
			if(item.open === true && item.mine === 2){
				 return (
					 	<div className="box open mine" key={index} onClick={event => this.props.clickHandler(index)}></div>
				 )
			} else if (item.open === true && item.mine === 1){
					return (
						<div className="box open" key={index} onClick={event => this.props.clickHandler(index)}></div>
				 )
			} else {
				return (
						<div className="box" key={index} onClick={event => this.props.clickHandler(index)}></div>
				)
			}

	  })

	  return (
	    <div>
	      	{boxes}
	    </div>
	  )//end of return
	}//end of render
} //end of component

export default Box;
