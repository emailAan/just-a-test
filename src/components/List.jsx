import React from 'react'
import { connect } from 'react-redux'
import { List, Button, Icon } from 'react-onsenui'
import styled from 'styled-components'
import QuickList from './QuickList.jsx'

const ListWrapper = styled.div`
    position: fixed;
    display: block;
    top: 90px;
    bottom: 50px;
    width: calc(100% - 27px);
    overflow: scroll;
    overflow-y:auto;
    overflow-x:hidden;
`

const CustomList = ({list, quicklist, renderRow}) => {
  console.log(list)
  console.log(quicklist)
  return (<div>
   <ListWrapper>
      <List dataSource={list} renderRow={renderRow} />
    </ListWrapper>
   <QuickList quicklist={quicklist} />
 </div>
 )
 }

export default CustomList
