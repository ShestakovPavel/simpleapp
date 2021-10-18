const body = document.getElementById('root');

const droplist = document.createElement('select');
const button = document.createElement('button');
const input = document.createElement('input');
const paragraph1 = document.createElement('h3');
const paragraph2 = document.createElement('h3');

button.innerText = 'Save';

paragraph1.innerText = 'Home';
body.append(paragraph1);
body.append(droplist);

paragraph2.innerText = 'Edit Home';
body.append(paragraph2);
body.append(input)
body.append(button);


const droplistContent = [
    { value: 'Home 1' },
    { value: 'Home 2' },
    { value: 'Home 3' },
    { value: 'Home 4' },
];


droplistContent.forEach(item => {
    const option = document.createElement('option');
    option.innerText = item.value;
    droplist.append(option);
})

droplist.addEventListener('change', () => {
    input.value = droplist.value;
})

input.value = droplist.value;

//заменяет текущее значение option в droplist на input.value
button.addEventListener('click', () => {
    document.querySelector(`option[value="${document.querySelector('select').value}"]`)
        let str = input.value;
        if (!str.trim()){
            input.classList.add('error');
            droplist[i].innerText = droplist.value;
        }
        else {
            droplist[i].innerText = input.value;
            input.style.border = null;
            }
    }
)
