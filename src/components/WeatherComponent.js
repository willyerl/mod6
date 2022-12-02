import React from 'react'
class WeatherComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { weather: 'sunny' };
        this.windBlows = this.windBlows.bind(this);
        console.log("Inside Constroctor")
    }
    componentDidMount(){
        console.log("inside componentDidMount")
    }
    shouldComponentUpdate(){
        console.log("Inside shouldComponentUpdate")
        return true
    }
    componentDidUpdate(prevProps, prevState, sanapshot){
        console.log("Inside componentDidUpdate")
    }

    windBlows() {
        this.setState({ weather: 'windy' });
    }

    render() {
        console.log("Inside Render")
        return (
            <div>
                <h1>{this.state.weather}</h1>
                <button onClick={()=> this.windBlows()}>blow wind</button>
            </div>
        )
    }


}


export default WeatherComponent;