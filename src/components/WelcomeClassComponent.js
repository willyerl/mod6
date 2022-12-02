import React from 'react';
class WelcomweClassComponent extends React.Component {
    render() {
        const stringProps = JSON.stringify(this.props.name);

        return (

            <h2>{stringProps}</h2>
            
        )
    }
}
export default WelcomweClassComponent