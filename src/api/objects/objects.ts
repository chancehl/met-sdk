import axios from 'axios'

import { getEndpointUri } from '../../utils/utils'

import { GetObjectIDsOptions, GetObjectIDsReturnType } from './objects.types'

export const getObjectIDs = async (options?: GetObjectIDsOptions): Promise<GetObjectIDsReturnType> => {
    try {
        const response = await axios.get<GetObjectIDsReturnType>(getEndpointUri('objects'))

        return response.data
    } catch (error) {
        return { total: -1, objectIDs: [] }
    }
}
