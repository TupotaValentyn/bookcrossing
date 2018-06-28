import React from 'react'

class Container extends React.Component {
    edit = ()=>{
      alert('click in edit button');
    };

    remove = ()=>{
        alert('click in remove button');
    };


    render() {
        return (
            <div>
                <div className="text"> some text</div>
                <button onClick={this.edit} className="btn light">Edit</button>
                <button onClick={this.remove} className="btn red">Remove</button>
            </div>
        );
    }
}


export default Container;