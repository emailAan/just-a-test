
import React from 'react'
import { Input } from 'react-onsenui'
import styled from 'styled-components'

const InputWrapper = styled.div``
const StretchableInputWrapper = InputWrapper.extend`
${props => props.stretchWidth ? `
  width:100%;
  input {
    width:100%;
  }
` : null}
${props => props.large ? `
  input {
    font-size: 28px;
  }
  .text-input__container {
    line-height: 40px;
  }
` : null}
`
const StretchableInput = styled(Input)`
  ${props => props.stretchWidth ? `width:99%;` : null}
  margin-left: 5px;
`

const CustomInput = (props) =>
    (<StretchableInputWrapper {...props} >
      <StretchableInput value={props.value}
        modifier='underbar'
        placeholder={props.placeholder}
        {...props}
        float={false}
        onChange={props.onChange} />
    </StretchableInputWrapper>)

export default CustomInput
