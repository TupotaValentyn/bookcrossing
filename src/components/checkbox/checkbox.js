import React from 'react'
import './style.css'

class Checkbox extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            edit:false,
        };
    };

    edit =()=>{
        this.setState({edit: true});
    };

    remove =()=>{
        alert("click remove button");
    };

    save =()=>{
        this.setState({edit: false});
    };

    rendNorm = ()=>{
        return(
            <div className='container1'>
                <div className="text">{this.props.children}</div>
                <button onClick={this.edit} className="btn edit">edit</button>
                <button onClick={this.remove} className="btn remove">remove</button>
            </div>
        );
    };

    rendEdit =()=>{
        return(
            <div className='container1'>
                <textarea defaultValue={this.props.children}></textarea>
                <button onClick={this.save} className="btn success">Save</button>
            </div>
        );
    };

    render() {
      if(this.state.edit){
          return this.rendEdit();
      }else{
          return this.rendNorm();
      }
    }
}


export default Checkbox;