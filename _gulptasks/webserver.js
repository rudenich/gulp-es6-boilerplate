import browserSync from "browser-sync";


let config = {
    server: {
        baseDir: "./build",
    },
    tunnel: false,
    host: 'localhost',
    port: 9000,
    logPrefix: "UltraWEB"
};

export default (settings)=> {
    if(settings.env.development()){
        config.server.middleware = settings.fs.middleware
    }
    browserSync(config);
}