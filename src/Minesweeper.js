import React, {Component} from 'react';
import './Minesweeper.css';
import Box from './Box.js'

class Minesweeper extends Component {
	constructor(props) {
		super(props);
		this.state = { listBox: [{mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false},
														 {mine: 1, open: false}
								 ], result: 0};
		this.handleClick = this.handleClick.bind(this);
		this.restart = this.restart.bind(this);
		this.delete = this.delete.bind(this);
	}

	componentDidMount() {
			this.restart();
	} //end of didmount

	handleClick(id) {
			//console.log("Box is clicked: " + id);
			var list = this.state.listBox;
			list[id].open = true;
			if(list[id].mine === 2){
					this.setState({result: 1});
			}
			this.setState({listBox: list});
	}
	restart(event) {
			var list = this.state.listBox;
			for (var i = 0; i < list.length; i++) {
				var randomNr = Math.floor((Math.random() * 2) + 1);
				if(randomNr === 2)
				list[i].mine = 2;
			}
			this.setState({listBox: list});
	}
	delete(i) {

	}


	render() {
		//creating list of div from list setState
		/*
		if(this.state.listEd !== []){
				var listItems = this.state.listEd.map((item, index) =>
						<div className="item" key={index}>
								<p>{item}</p>
								<button className="delete" onClick={event => this.delete(index)}>X</button>
						</div>
				);
		}//end of if
*/
		return (
			<div className="mineWrap">
					<h2>Minröjning</h2>
					<div className="minesweeper">
							<Box listBox={this.state.listBox} clickHandler={this.handleClick}/>
					</div>
					<p className={(this.state.result===1) ? 'visible' : 'invincible'}>You have lost! Better luck next time!</p>
			</div>
		);//end of return
	} //end of render

}//end of class

export default Minesweeper;
