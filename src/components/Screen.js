import React, { useEffect } from 'react'
import Container from './styles/Container'
import GameStyles from './styles/GameStyles'
import ButtonsStyles from './styles/ButtonsStyles'
import IconsStyles from './styles/IconsStyles'
import init from '../logic/main'

const Screen = () => {
  useEffect(() => {
    init()
  })
  return (
    <Container>
      <GameStyles>
        <div className="game day"></div>
        <div className="fox hidden"></div>
        <div className="poop-bag hidden"></div>
        <div className="foreground-rain"></div>
        <div className="frame"></div>
        <div className="modal">
          <div className="modal-inner">Press the middle butten to start</div>
        </div>
        <ButtonsStyles className="buttons">
          <div className="btn left-btn"></div>
          <div className="btn middle-btn"></div>
          <div className="btn right-btn"></div>
        </ButtonsStyles>
        <IconsStyles>
          <div className="icon highlighted fish-icon"></div>
          <div className="icon poop-icon"></div>
          <div className="icon weather-icon"></div>
        </IconsStyles>
      </GameStyles>
    </Container>
  )
}
export default Screen
