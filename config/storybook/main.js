module.exports = {
    "stories": [
        "../../src/**/*.stories.mdx", 
        "../../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    "staticDirs": ["../../public"],
    "addons": [
        "@storybook/addon-links", 
        "@storybook/addon-essentials", 
        "@storybook/addon-interactions", 
        "storybook-addon-mock"
    ],
    "framework": {
        name: "@storybook/react-webpack5",
        options: {}
    },
    core: {
        builder: "webpack5",
    },
    docs: {
        autodocs: false
    },
    features: {
        storyStoreV7: true,
    }
};
