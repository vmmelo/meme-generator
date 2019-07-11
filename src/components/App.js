import React, {Component} from 'react';

//arrow function
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Victor Miranda',
            age: 24
        }
    }

    render() {
        return <div>
            <h1>{this.state.name}</h1>
            <h3>{this.state.age} years old</h3>
        </div>;
    }
}

export default App;
