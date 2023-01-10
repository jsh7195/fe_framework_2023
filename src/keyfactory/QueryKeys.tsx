import _ from 'lodash';

/**
 * sample
 */
export const Productkeys = {
    all: ['product'] as const,
    lists: () => [...Productkeys.all, 'list'] as const,
    list: (filters: any) => {
        return [...Productkeys.lists(), { ...filters }] as const
    },
    details: () => [...Productkeys.all, 'detail'] as const,
    detail: (id: string) => [...Productkeys.details(), id] as const,
};
