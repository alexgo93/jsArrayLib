module.exports = {
    "env": {
        "browser": true,
    },
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        "no-var": "error",
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "max-len": ["error", { "code": 120 }]
    }
};
