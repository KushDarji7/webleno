var randomnumber = 0;
var health = 10;
var current = 10;

function init() {
    randomnumber = Math.floor(Math.random() * 101);
    document.getElementById('health').innerHTML = current + " HP";
}

function check_num() {
    var enterednumber = new Number(document.getElementById('number').value);

    if (enterednumber == randomnumber) {
        alert('You entered the correct number ' + randomnumber + '.\n Restarting game.');
        current = health;
        init();
    } else {
        if (enterednumber > randomnumber && current > 1) {
            alert('Guess is higher than secret number');
            current = current - 1;
            document.getElementById('health').innerHTML = current + " HP";
        }

        if (enterednumber < randomnumber && current > 1) {
            alert('Guess is lower than secret number');
            current = current - 1;
            document.getElementById('health').innerHTML = current + " HP";
        }

        if (current == 1) {
            alert('You ran out of guesses.Correct number was ' + randomnumber + '.\n Restarting game.');
            current = health;
            init();
        }
    }
}