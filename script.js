
document.getElementById('load-user').addEventListener('click', function(){
    const countText =  document.getElementById('user-count').value;
    const count = parseInt(countText);
    console.log(count);

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data =>{
        
        data = data.slice(0, count);
        const userContainer = document.getElementById('user')
        userContainer.innerHTML = '';
        for (let i = 0; i < data.length; i++) {
            const user = data[i];
            const p = document.createElement('p');
            p.innerHTML = `<b>${user.name}</b> <button onclick="getUserDetail(${user.id})">Details </button>`;
            userContainer.appendChild(p);
        }

})
})



function getUserDetail(userId){
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(res => res.json())
    .then(data => {
        const detail = document.getElementById('user-detail');
        detail.innerHTML = `
            <h1>${data.name}</h1>
            <h4>Email : ${data.email}</h4>
            
        `
    })
}


