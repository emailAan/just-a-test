import React from 'react'
import { ListItem } from 'react-onsenui'

import { Left, Center, Right } from './Alignment'

const CustomListItem = ({leftChildren, rightChildren, centerChildren, index, id, onClick}) => (
  <div>
    <a id={id} />
    <ListItem modifier='chevron' tappable onClick={onClick}>
      <Left>{leftChildren ? leftChildren() : null}</Left>
      <Center>{centerChildren ? centerChildren() : null}</Center>
      <Right>{rightChildren ? rightChildren() : null}</Right>
    </ListItem>
  </div>
  )

export default CustomListItem
