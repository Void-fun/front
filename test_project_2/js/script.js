let first_num = 0, second_num = 0, operator = '';

function click_number(num){
    let val = document.querySelector('.input').value
    if (val === '0'){
        document.querySelector('.input').value = num;
        document.querySelector('#clear').innerHTML = 'C';
        //document.querySelector('#clear').onclick = clear_all();
    }
    else{
        document.querySelector('.input').value += num;
    }

}

function change_sign(){
    let num = parseFloat(document.querySelector('.input').value);
    num *= -1;
    document.querySelector('.input').value = num;
}

function in_percents(){
    let num = parseFloat(document.querySelector('.input').value);
    num /= 100;
    document.querySelector('.input').value = num;
}

function clear_all(){
    if(document.querySelector('.input').value === '0') {
        if (operator !== '') {
            first_num = 0;
            operator = '';
        }
        try {
            document.querySelector('.pushed').classList.remove('pushed')
        } catch (err) {
            console.log(err)
        }
        document.querySelector('#clear').innerHTML = 'AC';
    }
    else {

        document.querySelector('.input').value = '0';
    }
}
function operation(symbol){
    first_num = parseFloat(document.querySelector('.input').value);
    operator = symbol;
    document.querySelector('.input').value = '0';
    try {
        document.querySelector('.pushed').classList.remove('pushed')
    }
    catch (err){
        console.log(err)
    }


    switch (symbol){
        case '+':
            document.querySelector('#plus').classList.add('pushed')
            break;
        case '-':
            document.querySelector('#minus').classList.add('pushed')
            break;
        case '*':
            document.querySelector('#multiplication').classList.add('pushed')
            break;
        case '/':
            document.querySelector('#division').classList.add('pushed')
            break;
    }
}
function calculate(){
    second_num = parseFloat(document.querySelector('.input').value);
    switch (operator){
        case '+':
            document.querySelector('#plus').classList.remove('pushed')
            result = first_num + second_num;
            break;
        case '-':
            document.querySelector('#minus').classList.remove('pushed')
            result = first_num - second_num;
            break
        case '*':
            document.querySelector('#multiplication').classList.remove('pushed')
            result = first_num * second_num;
            break
        case '/':
            document.querySelector('#division').classList.remove('pushed')
            result = first_num / second_num;
            break
    }
    document.querySelector('.input').value = result
    make_log(result)
}

function make_log(result){
    let log = document.createElement('p')
    log.innerHTML = `${first_num} ${operator} ${second_num} <br> Результат:${result}`;
    document.querySelector('.logs_item').append(log);
}
