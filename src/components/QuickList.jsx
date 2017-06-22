import React from 'react'
import styled from 'styled-components'

const scrollToSelectedIndex = (i) => document.getElementById(i).scrollIntoView()

const QuickListWrapper = styled.div`
    position: fixed;
    display: block;
    top: 90px;
    right:0px;
    bottom: 50px;
    width: 25px;
    overflow: scroll;
    overflow-y:auto;
    overflow-x:hidden;
`
const QuickListItem = styled.div`
  padding-top: 1px;
  color: cornflowerblue;
  font-size: medium;
`
const QuickList = ({quicklist}) => (
  <QuickListWrapper>
    {quicklist.map((m, i) => (
      <div key={i} onClick={scrollToSelectedIndex.bind(this, m)}>
        <QuickListItem key={i}>{m}</QuickListItem>
      </div>))}
  </QuickListWrapper>
  )

export default QuickList
