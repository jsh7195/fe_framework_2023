import commonStore from '@store/commonStore';
import { QueryClient, useQuery, QueryErrorResetBoundary } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import dayjs from 'dayjs';

import Test from './test';
import Error from '@cmp/common/Error';
import ErrorBoundary from '@lib/ErrorBoundary';
import BoundaryWrap from '@lib/BoundaryWrap';
import GlobalLoading from '@cmp/loading/GlobalLoading';
// import { ErrorBoundary } from 'react-error-boundary'


function App() {

  const { sample } = commonStore();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit test <code>src/App.tsx</code> and save to reload.

          {!!sample}
        </p>
        <BoundaryWrap
          isRetry={false}
          errorFallback={Error}
          loadingFallback={"로딩중.."}
          message={'error가 발생했습니다'}
          children={<Test />}
        />
      </header>
      <GlobalLoading />
    </div >
  );
}

export default App;
