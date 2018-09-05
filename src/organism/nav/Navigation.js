import React from 'react'
import Li from '../../molecules/Li/Li'

const dataNav = [
  {
    way:'/',
    text:'Home'
  },
  {
    way:'/catalog',
    text:'Catalog'
  },
  {
    way:'/information',
    text:'Information'
  },
  {
    way:'/about',
    text:'About'
  }
]


class  Navigation extends  React.Component{
  render(){
    return(
      <nav>
        <ol className='navigation__list'>
          {
            dataNav.map((item,index) => {
              return (
                <Li way={item.way} text={item.text} key={index} />
              )
            })
          }
        </ol>
      </nav>
    )
  }
}

export default Navigation;