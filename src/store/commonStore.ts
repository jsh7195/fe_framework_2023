import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware';

export interface ICommon {
    test: string;
    setTest: () => void;
    [prop: string]: any;
}

const commonStore = create<ICommon>()(
    devtools(
        persist(
            (set) => ({
                test: 'test',
                setTest: () => set((state) => ({ state: 'test2' }))
            }),
            {
                name: 'common',
                getStorage: () => localStorage,
            }
        )
    )
)

export default commonStore;