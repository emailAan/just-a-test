import React from 'react'
import { connect } from 'react-redux'
import { Button, Icon } from 'react-onsenui'
import styled from 'styled-components'

import { selectMedewerker, getMedewerkersFromApi } from './actions'
import { getFilteredMedewerkers, getMedewerkersQuickList } from './selectors'
import { RoundedImage, ListItem, List } from '../../components'

const CenterParagraph = styled.div`margin: '0px'`
const ParagraphItem = styled.p`
  margin: 0px;
  margin-bottom: 5px;
`
const PhoneButton = styled(Button).attrs({ modifier: 'quiet' })`
  color: cornflowerblue!important;
`
const EmailButton = styled(Button).attrs({ modifier: 'quiet' })`
  color: #ffb836!important;
`
const PhoneActionButton = ({ tel }) => {
  const callNumber = (e) => {
    e.stopPropagation()
    e.preventDefault()
    window.open('tel: ' + tel, '_system')
  }
  return <PhoneButton onClick={callNumber}><Icon modifier='green' icon='md-phone' /></PhoneButton>
}
const EmailActionButton = ({ email }) => {
  const emailTo = (e) => {
    e.stopPropagation()
    e.preventDefault()
    window.open('mailto: ' + email, '_system')
  }
  return <EmailButton onClick={emailTo}><Icon modifier='blue' icon='md-email' /></EmailButton>
}

class Medewerkerlist extends React.Component {
  renderRow = (row, index) => {
    const x = 40 + Math.round(5 * (Math.random() - 0.5))
    const y = 40 + Math.round(5 * (Math.random() - 0.5))

    return <ListItem key={index} index={index}
      id={row.naam.charAt(0).toUpperCase()}
      leftChildren={() => <RoundedImage src={`http://placekitten.com/g/${x}/${y}`} />}
      rightChildren={() => (<div>
        {row.tel ? <PhoneActionButton tel={row.tel} /> : null}
        {row.email ? <EmailActionButton email={row.email} /> : null}
      </div>
          )}
      centerChildren={() => (
        <CenterParagraph>
          <ParagraphItem>{row.naam}</ParagraphItem>
          <ParagraphItem>{row.tel}</ParagraphItem>
          <ParagraphItem>{row.email}</ParagraphItem>
        </CenterParagraph>)}
      onClick={(e) => this.props.selectMedewerker(row)} />
  }

  render () {
    return <List
      quicklist={this.props.quicklist}
      list={this.props.medewerkers}
      renderRow={this.renderRow} />
  }

  componentWillMount () {
    if (this.props.medewerkers.length === 0) {
      this.props.dataFetch()
    }
  }
}

const mapStateToProps = (state, ownProps) => ({
  medewerkers: getFilteredMedewerkers(state),
  quicklist: getMedewerkersQuickList(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  dataFetch () { dispatch(getMedewerkersFromApi()) },
  selectMedewerker (medewerker) { dispatch(selectMedewerker(medewerker)) }
})

Medewerkerlist.displayName = 'Medewerkerlist'

export default connect(mapStateToProps, mapDispatchToProps)(Medewerkerlist)
