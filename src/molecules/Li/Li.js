import React from 'react'
import { NavLink } from 'react-router-dom'

class  Li extends React.Component {
  render(){
    return(
      <li><NavLink to={this.props.way}>{this.props.text}</NavLink></li>
    )
  }
}

export default Li;