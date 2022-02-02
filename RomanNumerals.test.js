const {
    intToRoman,
} = require("../RomanNumeralsKata/RomanNumerals");

describe("intToRoman", () => {
    test("test for undefined value", () => {
        expect(intToRoman(undefined)).toBe("Number is required");
    });
    test("returns string i", () => {
        expect(intToRoman(1)).toBe("i");
    });
    test("returns string ii", () => {
        expect(intToRoman(2)).toBe("ii");
    });
    test("returns string iii", () => {
        expect(intToRoman(3)).toBe("iii");
    });
});