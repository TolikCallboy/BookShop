import React, { Component } from "react";
import Error from "../ErrorEndicator/Error";

export default class ErrorBoudry extends Component {

    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error: true })
    }

    render() {
        if ( this.state.error) {
            return <Error/>
        }
        return this.props.children
    }
}