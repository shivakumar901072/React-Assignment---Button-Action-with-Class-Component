import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state ={ 
			isParaShown: false
		}
	};
	showPara =() => {
     this.setState({isParaShown: true});
	}

    render() {
    	return(
    		<div id="main">
				<button id="click">Show Paragraph</button>
				{this.state.isParaShown ? (
				<p id="para">
					 Hello, I've learnt to use the full-stack evaluation tool.
					  This makes me so happy
					  </p>
				) : null}
    		</div>
    	);
    }
}


export default App;

