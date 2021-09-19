import { hello } from './index'

describe('hello', () => {
    test('greets you', () => {
        const name = 'Chance'

        const result = hello(name)

        expect(result).toEqual(`Hello, ${name}!`)
    })
})
