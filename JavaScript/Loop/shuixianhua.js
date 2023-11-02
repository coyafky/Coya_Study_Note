for (let i=100;i<=1000;i++){
    let bai = parseInt(i/100);
    let shi =parseInt(i-bai*100/10);
    let ge = parseInt(i-bai*100-shi*10);

    if(bai**3+shi**3+ge**3===i){
        console.log(i);
    }
}