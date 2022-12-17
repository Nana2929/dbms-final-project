
import React from "react";
import styled from 'styled-components'
const ErrorBoundaryBox = styled.div`
  padding: 5px 5px 0px 5px;
  margin-bottom: 5px;
  border: dashed;
  border-color: coral;
  border-width: 3px;
  background:  ${props => props.bkColor};
`

export class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch (error, info) {
    // Display fallback UI
    this.setState({ hasError: true })
    console.error(error, info)
  }

  render () {
    return <ErrorBoundaryBox>
      {this.state.hasError
        ? <h4>被 ErrorBoundary 擋住錯誤啦!!</h4>
        : this.props.children}
    </ErrorBoundaryBox>
  }
}
