import React, {Component} from 'react';
import './Calc.css';

class Calc extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '', clear: false, temp: 0 };
		this.handleChange = this.handleChange.bind(this);
		this.increase = this.increase.bind(this);
		this.decrease = this.decrease.bind(this);
		this.clear = this.clear.bind(this);
	}

	handleChange(event) {
			var number = parseInt(event.target.value, 10);
			if(isNaN(number)){
					console.log("Input is not a number");
					if(this.state.temp !== 0){
							this.setState({value: this.state.temp});
					}
			} else {
					this.setState({value: number});
			}
	}
	increase(event) {
			this.setState({clear: true});
			if (this.state.value === '') {
					this.setState({value: 1});
			} else {
					this.setState(prevState => {
						 return {value: prevState.value + 1}
					})
			}
	}
	decrease(event) {
			this.setState({clear: true});
			if (this.state.value >= 1) {
				this.setState(prevState => {
					 return {value: prevState.value - 1}
				})
		  }
	}
	clear(event){
		if (this.state.clear === true) {
				this.setState({temp: this.state.value});
				this.setState({value: ''});
				this.setState({clear: false});
		}
	}

	render() {
		return (
			<div className="calcWrap">
					<h2>Räknare</h2>
					<div className="formDiv">
								<input type="text" value={this.state.value} onChange={this.handleChange} onClick={this.clear}/>
								<div className="buttons">
											<button onClick={this.increase}>+</button>
											<button onClick={this.decrease}>-</button>
								</div>
					</div>
			</div>
		);//end of return
	} //end of render

}//end of class

export default Calc;
