import STRINGS from '../constants/strings'
import { getObject, getObjectIDs } from './object'

describe('object', () => {
    describe('get object by id', () => {
        test('returns an object', () => {
            expect(getObject).toThrowError(STRINGS.NOT_YET_IMPLEMENTED)
        })
    })

    describe('get object ids', () => {
        test('returns a list of object ids', () => {
            expect(getObjectIDs).toThrowError(STRINGS.NOT_YET_IMPLEMENTED)
        })
    })
})
