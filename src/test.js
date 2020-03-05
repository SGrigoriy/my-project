async function test() {
    let response = await fetch('https://votesystem.mobius.team/api/tests');
        
    if (response.ok) { 
    var result = await response.json();
    } else {
    alert("Ошибка HTTP: " + response.status);
    }
    
    console.log(result);
    
    alert(result.message);
}
    
test();

async function idUser() {
    let response = await fetch('https://votesystem.mobius.team/api/result/34');
    
    let result = await response.json();
    let promise = new Promise((resolve, reject) => {
        reject('Error!!!');
    })
        try {
            let result = await promise;
            alert(promise);
        }
        catch(e) {
    }
    let user = result.user.name + ': ' + result.user.result;
    
    console.log(result);
        
    alert(result.message);
    alert(user);
}

// idUser();

async function token() {
    let response = await fetch('https://votesystem.mobius.team/api/result/34/token');
    
    let result = await response.json();
    let promise = new Promise((resolve, reject) => {
        reject('Error!!!');
    })
    try {
        let result = await promise;
        alert(promise);
    }
    catch(e) {
    }
    let token = result.token;
    console.log(result);
    
    alert(result.message);
    alert(token);
}

// token();

let input = document.querySelector(".btn");
    input.addEventListener('click', idUser);

let input1 = document.querySelector(".btn1");
    input1.addEventListener('click', token);

