import React, { Component, ErrorInfo, ReactNode } from "react";
import styled from "styled-components";
import Error from "./Error";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error;
    errorInfo: ErrorInfo;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: { name: 'Error', message: 'Error' },
        errorInfo: { componentStack: '' },
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return {
            hasError: true,
            error: { name: 'Error', message: 'Error' },
            errorInfo: { componentStack: '' },
        };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
        console.error("Uncaught error:", error, errorInfo);
    }

    public resetError = () => { this.setState({ hasError: false }) };


    public render() {
        if (this.state.hasError) {
            return (
                <Wrapper>
                    <Error error={this.state.error.name} message={this.state.error.message} resetError={this.resetError} />
                </Wrapper>);
        }

        return this.props.children;

    }

}

const Wrapper = styled.div`
    top: 0px;
    left: 0px;
    position: absolute;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    background-color: rgba(0,0,0,0.8);
`

export default ErrorBoundary;
