const body = document.getElementById('root');
const input = document.getElementById('input');

const droplist = document.createElement('select');
const button = document.createElement('button');
button.innerText = 'Save';

body.append(droplist);
body.append(button);

const droplistContent = [
    { value: 'Home 1' },
    { value: 'Home 2' },
    { value: 'Home 3' },
    { value: 'Home 4' }
];


droplistContent.map(item => {
    const option = document.createElement('option');
    option.innerText = item.value;
    droplist.append(option);

    droplist.addEventListener('click', () => {
        input.value = droplist.value
    })
})
input.value = droplist.value

//заменяет текущее значение option в droplist на input.value
button.addEventListener('click', () => {
    for (let i = 0; i < droplist.length; i++) {
        if (droplist[i].value == droplist.value) {
            droplist[i].innerText = input.value
        }
    }
})




