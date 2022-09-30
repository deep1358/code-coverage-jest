const config = {
	testMatch: ["<rootDir>/test/*.[je]s"],
	coverageDirectory: "coverage",
	collectCoverage: true,
	collectCoverageFrom: ["<rootDir>/src/*.[je]s", "*.es"],
	coverageReporters: ["json-summary", "html", "text", "cobertura"],
	errorOnDeprecated: true,
	coveragePathIgnorePatterns: ["/node_modules/"],
	moduleFileExtensions: ["js", "es", "jsx"],
	reporters: ["default", "jest-junit"],
	transform: {
		"^.+\\.(jsx|js|es)$": "babel-jest",
	},
	transformIgnorePatterns: ["/node_modules/"],
	verbose: false,
};

module.exports = config;
