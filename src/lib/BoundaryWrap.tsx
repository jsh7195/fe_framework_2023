import React from 'react'
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import ErrorBoundary from './ErrorBoundary';

export interface IBoundary {
  message?: string;
  children: React.ReactNode;
  errorFallback: React.ElementType<any>;
  loadingFallback: React.ReactNode;
  isRetry?: boolean;
}

const BoundaryWrap = (props: IBoundary) => {

  const { message, children, isRetry, loadingFallback, errorFallback } = props;

  return <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        isRefresh={isRetry}
        errorFallback={errorFallback}
        loadingFallback={loadingFallback}
        message={message || 'error가 발생했습니다'}
        onReset={reset}
        children={children}
      />
    )}
  </QueryErrorResetBoundary>
}

export default BoundaryWrap;