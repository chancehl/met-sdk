import { getObjectIDs } from './objects'

describe('objects', () => {
    describe('get object ids', () => {
        test('returns a list of object ids', async () => {
            const result = await getObjectIDs()

            expect(result.objectIDs.length).toBeGreaterThan(0)
        })
    })
})
