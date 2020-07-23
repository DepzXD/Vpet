import styled from 'styled-components'
const GameStyles = styled.div`
  position: relative;
  .frame {
    height: 762px;
    width: 762px;
    position: relative;
  }

  .inner {
    position: relative;
  }

  .game {
    width: 628px;
    height: 577px;
    position: absolute;
    top: 62px;
    left: 67px;
  }

  .game.night {
    width: 716px;
    top: 62px;
    left: -19px;
  }

  .hidden {
    display: none;
  }

  /* lol poop */

  .poop-bag {
    position: absolute;
    top: 300px;
    left: 160px;
  }

  /* modal */

  .modal-inner {
    background-color: blueviolet;
    color: white;
    padding: 20px;
    font-size: 20px;
    border-radius: 5px;
  }

  .modal {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .modal:empty {
    display: none;
  }

  .modal-inner:empty {
    display: none;
  }

  /* the fox */

  .fox {
    position: absolute;
    top: 336px;
    left: 285px;
    overflow: hidden;
  }

  .fox-pooping {
    top: 319px;
    left: 159px;
  }

  .fox-celebrate {
    top: 290px;
    left: 290px;
  }

  .fox-rain {
    top: 362px;
  }

  .fox-hungry {
    top: 362px;
  }

  .fox-eating {
    top: 362px;
  }

  .fox-egg {
    top: 289px;
    left: 248px;
  }

  .fox-sleep {
    top: 351px;
    left: 445px;
  }

  .fox-dead {
    top: 380px;
    left: 243px;
  }
`

export default GameStyles
