module.exports = {
    testEnvironment: 'node',
    reporters: [
        'default'
    ],
    projects: [
        '<rootDir>/packages/*[!ui]*/jest.config.js',
    ]
};
