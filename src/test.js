async function test() {
    let response = await fetch('https://votesystem.mobius.team/api/tests');
    
    if (response.ok) {    
        let result = await response.json();
        let arr = [];
        
        for (i = 0; i < result.tests.length; i++) {
            for (t = 0; t < result.tests[i].conditions.length; t++) {
                if (result.tests[i].conditions[t].is_correct) {
                    arr.push(result.tests[i].text + ': ' + result.tests[i].conditions[t].text + '//   ');
                }
            }
        }
        console.log(result);
        alert(result.message);
        alert(arr);
        
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

test();




async function idUser() {
    let response = await fetch('https://votesystem.mobius.team/api/result/34');
    
    if (response.ok) { 
        let result = await response.json();
        console.log(result);
        alert(result.message);

        let user = result.user.name + ': ' + result.user.result + '%';
        alert(user);
    } else {
        alert("Ошибка HTTP: " + response.status);
    }
}

// async function token() {
//     let response = await fetch('https://votesystem.mobius.team/api/result/34/token');
    
//         let result = await response.json()
        // console.log(result);
        // alert(result.message);
        // let token = result.token;
        // alert(token);

function token () {
    fetch('https://votesystem.mobius.team/api/result/34/token')
    .then((result) => {
        // console.log(result);
        return result.json();
    }).then((result) => {
        alert(result.message);
        console.log(result);
        return result.token
    }).then((result) => {
        let formData = new FormData();
        formData.append("homework_done", true);
        formData.append("token", result);
        fetch('https://votesystem.mobius.team/api/homework/update', {
            method: 'POST',
            body: formData
        }).then((result) => {
            console.log(result);
            return result.json();
        }).then((result) => {
            alert(result);
            
        })
    alert(result);
    })
}

let input = document.querySelector(".btn");
    input.addEventListener('click', idUser);

let input1 = document.querySelector(".btn1");
    input1.addEventListener('click', token);


   