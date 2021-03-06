import React, {Component} from 'react';
import './EditableList.css';

class EditableList extends Component {
	constructor(props) {
		super(props);
		this.state = { value: '', listEd: []};
		this.handleChange = this.handleChange.bind(this);
		this.add = this.add.bind(this);
		this.delete = this.delete.bind(this);
	}

	handleChange(event) {
			this.setState({value: event.target.value});
	}
	add(event) {
			if(this.state.value !== ''){
					var tempList = this.state.listEd;
					// [...this.state.listEd, this.state.value]
					tempList.push(this.state.value);
					this.setState({listEd: tempList});
					this.setState({value: ''});
			}
	}
	delete(i) {
			//console.log("delete button clicked: " + i);
			var tempList = this.state.listEd;
			tempList.splice(i, 1); //removes array item by given index, 1 means 1 item will be removed
			this.setState({listEd: tempList});
	}


	render() {
		//creating list of div from list setState
		let listItems = null;
		if(this.state.listEd !== []){
				listItems = this.state.listEd.map((item, index) =>
						<div className="item" key={index}>
								<p>{item}</p>
								<button className="delete" onClick={event => this.delete(index)}>X</button>
						</div>
				);
		}//end of if

		return (
			<div className="editWrap">
					<h2>Redigerbar Lista</h2>
					<div className="formEdit">
								<input id="inputList" type="text" value={this.state.value} onChange={this.handleChange}/>
								<button id="btnAdd" onClick={() => this.add()}>Lägg till</button>
					</div>
					<div className="listDiv">
							{listItems}
					</div>
			</div>
		);//end of return
	} //end of render

}//end of class

export default EditableList;
