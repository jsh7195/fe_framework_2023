import React, { useTransition } from 'react'
import dayjs from 'dayjs';
import _ from 'lodash';
import commonStore from '@store/commonStore';
import { useQuery } from '@tanstack/react-query';
import _axios from '@lib/network';
interface Itest {
    data: any
}

interface Ilegal {
    CHK_YN: string
    CONTENT: string
    REQ_YN: string
    SEQ: string
    TITLE: string
    TYPE: string
}

const Test = (props: any) => {

    // const [isPending, startTransition] = useTransition();
    const fetch = async () => {
        const rst: Itest = await _axios.post('/legal/list')
        console.log('rst', rst);
        if (rst.data.message !== 'success') {
            throw new Error(rst.data.reason);
        }
        return rst.data;
    }

    const {
        status,
        data,
        isLoading,
        isFetching,
        refetch,
    } = useQuery(['test'], fetch, {
        enabled: true,
        select(data) {
            return data.legal;
        },

    })

    return (
        <div>
            {
                data?.map((item: Ilegal) => {
                    return item.TITLE
                })
            }


        </div>
    )
}

export default Test;
