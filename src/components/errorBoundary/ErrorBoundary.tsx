import { Component, ErrorInfo } from "react"

import { IProps, IState } from "../../interfaces/errorBoundary/errorBoundary";


class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps | Readonly<IProps>) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    //console.log({ error, errorInfo })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div onClick={() => this.setState({ hasError: false })}>Повторить</div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary