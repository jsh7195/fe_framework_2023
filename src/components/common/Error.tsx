import { Props } from '@lib/ErrorBoundary';
import React from 'react'


const Error = (props: Props) => {

    return (
        <div>
            fail, error
            {
                props.isRefresh && <button onClick={props.onReset}>ėŽėë</button>
            }
        </div>
    )
}


export default Error;