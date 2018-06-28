import React from 'react'

class Test extends React.Component {
    render() {
        return (
            <div>
                <h1>Game - {this.props.name}</h1>
                <h2>Age - {this.props.age}</h2>
            </div>
        );
    }
}


export default Test;