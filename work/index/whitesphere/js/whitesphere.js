const contents = document.querySelectorAll('.contents');
const spancolor = document.querySelectorAll('span');
const supcolor = document.querySelectorAll('sup');


const show = () => {

    let triggerposition = window.innerHeight / 5 * 4;

    contents.forEach( x => {
        const contentsposition = x.getBoundingClientRect().top;
        if (contentsposition < triggerposition) { x.classList.add('show'); }
        else { x.classList.remove('show'); }})

    // spancolor.forEach(xx());
    // supcolor.forEach(xx());
}

const fadeaway = () => {
    let triggerposition = window.innerHeight / 7 * 1;
    contents.forEach( x => {
        const contentsposition = x.getBoundingClientRect().top;
        if (contentsposition < triggerposition) { x.classList.remove('show'); }
        else {  }})
}
window.addEventListener('scroll', show);
window.addEventListener('scroll', fadeaway);

// show();