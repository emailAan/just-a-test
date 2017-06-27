import React from 'react'
import { List } from 'react-onsenui'
import styled from 'styled-components'
import QuickList from './QuickList'

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

const CustomList = ({list, quicklist, renderRow}) => (
  <div>
    <ListWrapper>
      <List dataSource={list} renderRow={renderRow} />
    </ListWrapper>
    <QuickList quicklist={quicklist} />
  </div>)

export default CustomList
