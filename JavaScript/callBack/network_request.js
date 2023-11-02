function fetchData(callback){
    fetch('https://www.nowcoder.com/')
    .then(response => response.json())
    .then(data =>{
        callback(data)
    });
}

function updateUI(data){
    document.getElementById('result').innerText =data;
}

//

fetchData(updateUI);