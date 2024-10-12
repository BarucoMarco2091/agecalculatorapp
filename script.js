const button = document.querySelector('.card-button');
button.addEventListener('click', function calculate() {
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
    const warning = document.querySelector('.res');
    const newDay = document.querySelector('.newDay');
    const newMonth = document.querySelector('.newMonth');
    const newYear = document.querySelector('.newYear');
    const now = moment();
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        warning.innerHTML = 'These fields are required';
        warning.style.color = 'red';
    } else {
        const updatedDay = now.subtract(day, 'days');
        const updatedMonth = now.subtract(month, 'month');
        const updatedYear = now.subtract(year, 'year');
        newDay.innerHTML = `${updatedDay.format('DD')}`;
        newDay.style.color = 'hsl(259, 100%, 65%)';
        newMonth.innerHTML = `${updatedMonth.format('MM')}`;
        newMonth.style.color = 'hsl(259, 100%, 65%)';
        newYear.innerHTML = `${updatedYear.format('YYYY')}`;
        newYear.style.color = 'hsl(259, 100%, 65%)';
    };
});
