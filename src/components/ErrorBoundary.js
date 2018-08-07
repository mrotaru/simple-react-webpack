import React from 'react'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, info: null }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info,
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error.toString()}</pre>
          <pre>{this.state.info.componentStack.toString()}</pre>
        </div>
      )
    }
    return this.props.children
  }
}
