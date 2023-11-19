const imgs = new Set(document.querySelectorAll('img[data-src]')); // 获取图片

const buffer = +120;

function handleScrool(){
    imgs.forEach(img=>{
        if(img.getBoundingClientRect().top < window.innerHeight + buffer){
            img.src = img.dataset.src;
            imgs.delete(img);
            console.log("text");
            if(imgs.size === 0){
                console.log('remove event');
                window.removeEventListener('scroll', handleScrool);
            }
        }
    })
}

window.addEventListener('scroll', handleScrool);

