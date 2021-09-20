import { Endpoint } from '../types'

import { BASE } from '../constants/endpoints'
import STRINGS from '../constants/strings'

export const getEndpointUri = (endpoint: Endpoint, version: number = 1, id?: number): string => {
    if (endpoint === 'object' || endpoint === 'departments') {
        if (id == null) {
            throw new Error(STRINGS.MISSING_ID)
        }
    }

    return [BASE, version, endpoint].join('/')
}
