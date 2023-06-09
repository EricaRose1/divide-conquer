const findRotatedIndex = require("./findRotatedIndex")

describe("#findRotatedIndex", function() {
    it ('returns the correct index', function() {
        expect(findRotatedIndex([3,4,1,2],4)).toBe(1)
        expect(findRotatedIndex([6,7,8,9,1,2,3,4],8)).toBe(2)
    })
})