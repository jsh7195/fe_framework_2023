import create from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
// import persist from '@store/persist';
import produce from 'immer';

export interface ICommon {
    sample: number;
    setSample: () => void;
    [prop: string]: any;
}

export const commonStore = create<ICommon>()(
    devtools(
        persist(
            // {
            //     key: 'common', // required, child key of storage
            //     allowlist: ['sample'], // optional, will save everything if allowlist is undefined
            //     denylist: [], // optional, if allowlist set, denylist will be ignored
            // },
            (set) => ({
                sample: 0,
                setSample: (): void => set((state) => ({ sample: state.sample + 1 })),
            }),
            {
                name: 'test-storage',
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    )
);


export default commonStore;