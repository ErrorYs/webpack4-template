module.exports = {
    "root": true,
    "extends": "standard",
    "env": {
        "browser": true,
        "node": true
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "no-mixed-spaces-and-tabs": [0],
        "spaced-comment": 0,
        "linebreak-style": "off",
        "no-undef": 0,
    },
    "parser": "babel-eslint"
};