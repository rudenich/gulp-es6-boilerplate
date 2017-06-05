export default ($,w)=>{
    let width = $(w).width()
    setTimeout(()=>{
        $('body').append(`<h2>Window width is ${width}</h2>`);
    },100);
}