function replaceSwitch () {
//замена свича
let a = 2 + 1;
let numberObj = {
    3: "malo",
    4: "norm",
    5: "mnogo"
}
if (!numberObj[a]) {
    console.log('default');
} else {
    console.log('result1', numberObj[a]);
}
}


let userList = ['Коля', 'Оля', 'Ира'];
function transformArray (array) {
    console.log('main.js1')
    // массив в объект

    let userObj = {};
    
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        
        userObj[array[i]] = i;
    }
    console.log('result', userObj);
}

function plus (arg1, arg2) {
    console.log('result',arg1 + arg2)
}

//replaceSwitch();
transformArray(userList);
//plus(2,34);
