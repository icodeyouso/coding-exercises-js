import { expect } from 'chai'
import stringIndices from '../src/stringIndices'


console.log("hello", typeof(stringIndices))

describe('stringIndices()', () => {
    it('should exsist', () => {
        expect(stringIndices).to.be.a('function')
    })

    it('return word at given index number', () => {
        expect(stringIndices)(2, 'cash me outside').to.equal('me')
    })

    it('your program should return an empty string if index is smaller or larger than stringArrays', () => {
        expect(stringIndices)()

    })

})