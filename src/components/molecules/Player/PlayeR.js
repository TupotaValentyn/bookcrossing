import React from 'react'
//video
import Videvo from '../../../assets/video/Videvo.mov'
import { Player, ControlBar} from 'video-react';


const sources = {
  bunnyMovie: Videvo
}

export default class PlayeR extends React.Component{

  state = {
    source: sources['bunnyMovie'],
  };

  render(){
    return(
      <div className='header__player'>
        <Player ref="player" autoPlay muted loop>
          <source src={this.state.source}  />
          <ControlBar autoHide={true} disableCompletely = {false}/>
        </Player>
      </div>
    )
  }
}