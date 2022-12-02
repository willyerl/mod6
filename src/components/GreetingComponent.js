import React from 'react'
class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { greetingP: 'Hello Word' };
        this.personal = this.personal.bind(this);
        console.log("Inside Constroctor")
    }

    personal() {
        this.setState({ greetingP: 'Hello Willy' });
    }

    render() {
        console.log("Inside Render")
        return (
            <div>
                <h1>{this.state.greetingP}</h1>
                <button onClick={() => this.personal()}>More personal</button>
            </div>
        )
    }


}


export default Greeting;
