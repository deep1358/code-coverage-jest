const sum = require("../src/sum.es");

test("adds 1 + 2 to equal 3", () => {
	expect(sum(1, 2)).toBe(3);
	console.log("Hello");
});
