import React from 'react'

class Emoji extends React.Component {
    constructor(props) {
        super(props);
        this.state = { emoji: `😍` , number: 1};
        this.emoji = this.emoji.bind(this);
        
    }
   

    emoji() {
        if(this.state.number===1){
            this.setState({ emoji: '😝' });
            this.setState({ number : 2})
        }else if(this.state.number===2){
            this.setState({ emoji: '😜' });
            this.setState({ number : 0})
        }else{
            this.setState({ emoji: '😍' });
            this.setState({ number : 1})
        }
        
    }
  


    render() {
       
        return (
            <div>
                
                <h1> {this.state.emoji}</h1>
                <button onClick={() => this.emoji()}>change emoji</button>
            </div>
        )
    }


}
export default Emoji