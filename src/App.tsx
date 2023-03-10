import React from 'react';
// import commonStore from '@store/commonStore';

import Test from './test';
import Error from '@cmp/common/Error';
import BoundaryWrap from '@lib/BoundaryWrap';
import GlobalLoading from '@cmp/loading/GlobalLoading';


function App() {

  // const { sample } = commonStore();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello, world
        </p>
        <BoundaryWrap
          isRetry={true}
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
