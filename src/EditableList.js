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
					tempList.push(this.state.value);
					this.setState({listEd: tempList});
					this.setState({value: ''});
			}
	}
	delete(index) {
			console.log("delete button clicked: " + index);
	}


	render() {
		//creating list of div from list setState
		if(this.state.listEd !== []){
				var listItems = this.state.listEd.map((item, index) =>
						<div className="item" key={index}>
								<p>{item}</p>
								<button className="delete" onClick={(index) => this.delete()}>X</button>
						</div>
				);
		}

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
