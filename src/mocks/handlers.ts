import { rest } from 'msw'

import { getEndpointUri } from '../utils/utils'

export const handlers = [
    rest.get(getEndpointUri('objects'), (req, res, ctx) => {
        return res(ctx.json({ total: 5, objectIDs: [1, 2, 3, 4, 5] }))
    }),
]
