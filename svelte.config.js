import adapter from '@sveltejs/adapter-static';

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "build",
            assets: "build"
        }),
        paths: {
            base: dev ? "" : "/shasherazi.github.io",
        },
    }
};

export default config;
