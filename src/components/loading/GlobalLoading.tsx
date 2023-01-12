import commonStore from '@store/commonStore';
import React from 'react';
import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import loading from './Rolling-1s-200px.svg';


const GlobalLoading = () => {
    // const isFetching = useIsFetching({
    //     predicate: (query:Query) => { 
    //         return query.queryKey.includes('list') && query.queryKey.length > 3;
    //     }
    // });
    const isFetching = useIsFetching();
    // const isFetching = 0
    const isMutating = useIsMutating();
    const { isLoading } = commonStore();

    console.log('isFetching',isFetching)

    return (
        ( isLoading || isFetching > 0 || isMutating > 0 ) ? (
            <div className="loading_wrap" style={{ zIndex : '999' }}>
                <div className="dim"></div>
                <div className="loading">
                    <img src={loading} alt={'로딩중'} />
                </div>
            </div>
        )
        :
        <div></div>
    );
};

export default GlobalLoading;
