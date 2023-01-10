import React, { ReactNode, Suspense } from 'react';

export interface Props {
  isRefresh?: boolean;
  errorFallback: React.ElementType;
  loadingFallback: React.ReactNode;
  message?: string;
  onReset?: () => void;
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  info: Error | null;
}

const initialState: State = {
  hasError: false,
  info: null,
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = initialState;
  }

  static getDerivedStateFromError(error: Error) {
    console.log('error !!', error);
    return { hasError: true, info: error };
  }

  onResetErrorBoundary = () => {
    const { onReset } = this.props;
    onReset == null ? void 0 : onReset();
    this.reset();
  };

  reset() {
    this.setState(initialState);
  }

  render() {
    const { hasError, info } = this.state;
    const { children, message, isRefresh, loadingFallback } = this.props;

    if (hasError) {
      const props = {
        error: info,
        onResetErrorBoundary: this.onResetErrorBoundary,
      };
      return (
        <this.props.errorFallback
          isRefresh={isRefresh}
          onRefresh={this.reset}
          onReset={props.onResetErrorBoundary}
          message={message}
        />
      );
    }

    return <Suspense fallback={loadingFallback}> {children}</ Suspense>;
  }
}

export default ErrorBoundary;