// @ts-nocheck
window.addEventListener('scroll', e => {
    console.log(e);
});

const image = document.querySelector('img#wave');
const bannerImage = () => {
    const height = image.getBoundingClientRect().height - 800;
    image.style.top = `${height > 0 ? -height : 0}px`;
};

window.addEventListener('load', bannerImage);
window.addEventListener('resize', bannerImage);