import React from 'react'

export default class Login extends React.Component{

  state = {
    username: '',
    password: ''
  }

  submited = () => {

  }

  handleChange = (e) => {
    let name = e.target.name
    this.setState({
      [name]: e.target.value
    })
    console.log(`my username - ${this.state.username}, my pass ${this.state.password}`)
  }


  render(){
    return(
      <section>
        <form>
          <label htmlFor="login">login</label>
          <input
            name = 'username'
            id='login'
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label htmlFor="password">password</label>
          <input
            name = 'password'
            id='password'
            type='password'
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>
        <button onClick={this.submited}>Login</button>
      </section>
    )
  }
}