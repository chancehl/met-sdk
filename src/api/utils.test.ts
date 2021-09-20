import { BASE } from '../constants/endpoints'
import STRINGS from '../constants/strings'
import { getEndpointUri } from './utils'

describe('getEndpointUri', () => {
    test('appends the version and endpoint', () => {
        const ENDPOINT = 'objects'
        const VERSION = 3
        const URI = `${BASE}/${VERSION}/${ENDPOINT}`

        expect(getEndpointUri(ENDPOINT, VERSION)).toEqual(URI)
    })

    test('throws error when user does not provide an ID for the required endpoint', () => {
        expect(() => getEndpointUri('object')).toThrowError(STRINGS.MISSING_ID)
        expect(() => getEndpointUri('departments')).toThrowError(STRINGS.MISSING_ID)

        expect(() => getEndpointUri('objects')).not.toThrowError(STRINGS.MISSING_ID)
        expect(() => getEndpointUri('search')).not.toThrowError(STRINGS.MISSING_ID)
    })
})
