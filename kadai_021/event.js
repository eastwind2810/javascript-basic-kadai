const btn = document.getElementById('btn');

btn.addEventListener('click',() =>{
    setTimeout(() => {
        const txt = document.getElementById('text');

        txt.innerHTML = "ボタンをクリックしました";
    },2000)
});