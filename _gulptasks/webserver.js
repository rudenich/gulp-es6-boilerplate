import browserSync from "browser-sync";

const config = {
    server: {
        baseDir: "./build"
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "UltraWEB"
};

export default ()=> {
    browserSync(config);
}