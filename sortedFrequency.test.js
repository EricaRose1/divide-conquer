const sortedFrequency = require("./sortedFrequency")

describe("#sortedFrequency", function() {
    it("returns the frequecy", function() {
        expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3])).toBe(4)
        expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1)
        expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2)
        expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1)
    })
})