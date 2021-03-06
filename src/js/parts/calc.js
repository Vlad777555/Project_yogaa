function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('input', function () {

        if (restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
            personsSum = +this.value;
            total = (daysSum + personsSum) * 4000;
        }

    });

    restDays.addEventListener('input', function () {

        if (persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            daysSum = +this.value;
            total = (daysSum + personsSum) * 4000;
            totalValue.innerHTML = total;
        }

    });

    place.addEventListener('input', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;