import React from 'react'
import styled from 'styled-components'

const TileWrapper = styled.div`
  margin: 5px !important;
  padding: 2px !important;
  background-color: #e57100;
  display: inline-block;
  transition-duration: 0.3s;
  transition-property: transform;
  transform: translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  max-width: 160px;
  width:160px;
  height: 160px;
  background-color:${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  :hover {
    transform: translateY(-3px); 
    opacity: 0.9; 
  }
`
const CounterText = styled.span`
  display: block;
  float: right;
  font-size: 55px;
  padding: 0 10px 0 0;
  position: relative;
`
const TileText = styled.div`
  position: absolute;
  font-size: 14px;
  bottom: 0px;
  padding: 10px;
`
const TileContent = styled.div`
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
`
const onClickHandler = (onClick, tile, e) => {
  e.preventDefault()
  onClick(tile)
  return false
}

const Tile = ({ tile, onClick }) => (
  <TileWrapper
    backgroundColor={tile.backgroundColor}
    color={tile.color}
    onClick={onClickHandler.bind(onClick, tile)}>
    <TileContent>
      <CounterText>{tile.count}</CounterText>
      <TileText>{tile.title}</TileText>
    </TileContent>
  </TileWrapper>
)

export default Tile
