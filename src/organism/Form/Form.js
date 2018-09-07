import React from 'react'
import './form.css'

class Form extends React.Component{
  render(){
    return(
      <form action="">
        <div className='form__login'>
          <label htmlFor="login">Login</label>
          <input type="text" id='login'/>
        </div>
        <div className='form__password'>
          <label htmlFor="password" id='password'>Password</label>
          <input type="password"/>
        </div>
        <div className='form__buttons'>
          <button>Вхід</button>
          <button>Реєстрація</button>
        </div>

      </form>
    )
  }
}



export default Form;