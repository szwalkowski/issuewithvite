module.exports = {
    testEnvironment: 'node',
    testRunner: 'jest-circus/runner',
    reporters: [
        'default',
        ['jest-junit', {
            'outputDirectory': 'test-reports'
        }]
    ]
};
