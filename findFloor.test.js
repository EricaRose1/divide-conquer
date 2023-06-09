const countZeros = require("./findFloor")

describe("#countZeros", function() {
    it("counts the number of zeros", function() {
        expect(countZeros([0,1,1,0,0,0,1])).toBe(4)
        expect(countZeros([0,1,0,1,1,0])).toBe(3)
        expect(countZeros([1,1,1,0,1])).toBe(1)
        expect(countZeros([1,0,1,0,0,0,1,0,1,0,0])).toBe(7)
    })
})