function* generatePassword(start, end) {
    for(let i = start; i <= end; i++) yield i;
}

function* generatePass() {
    yield* generatePassword(65, 90); //A..Z
    yield* generatePassword(97, 122); //a..z
    yield* generatePassword(48, 57); //0..9
}

let str = '';

for(let pass of generatePass()) {
    str += String.fromCharCode(pass);
}

function password(n) {
    let code = "";
    for (let i = 0; i < n; i++) {
        code += str.charAt(Math.floor(Math.random() * str.length));     
    }
    return code;   
}

alert(password(8));
