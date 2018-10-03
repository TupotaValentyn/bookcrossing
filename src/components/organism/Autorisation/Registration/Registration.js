import React from 'react'

export default class Registration extends React.Component{

  state = {
    username: '',
    password: ''
  }

  handleChange = (e) => {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
    console.log(this.state.username)
    console.log(this.state.password)
  }

  submited = () => {
    console.log(this.state)  // send data to server
  }

  render(){
    return(
      <section>
        <form>
          <label htmlFor="">enter your login</label>
          <input
            type="text"
            id='username-registration'
            name='username'
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password-registration">enter your password</label>
          <input
            type="password"
            id='password-registration'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button onClick={this.submited}>Registration</button>
        </form>
      </section>
    )
  }
}