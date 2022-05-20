const {shuffleArray, testArrB} = require('./utils')

describe('shuffleArray should', () => {
    test('shuffleArray should return a scrambled string', () => {
        expect(shuffleArray(testArrB)).not.toEqual(testArrB)
    })

    test('Shuffled array length should be the same length as original array', () => {
        expect(shuffleArray(testArrB).length).toEqual(testArrB.length)
    })
})