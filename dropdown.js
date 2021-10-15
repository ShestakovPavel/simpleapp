const body = document.getElementById('root');
const input = document.getElementById('input');

const droplist = document.createElement('select');
const button = document.createElement('button');
button.innerText = 'Save';

body.append(droplist);
body.append(button);

const droplist_content = [
    {value: 'Home 1', selected:true},
    {value: 'Home 2', selected:true},
    {value: 'Home 3', selected:true},
    {value: 'Home 4', selected:true},
];


droplist_content.map(item => {
    const option = document.createElement('option');
    option.innerText = item.value;
    droplist.append(option);
    
    droplist.addEventListener('click', ()=> {
    input.value = droplist.value})
    console.log()
})
input.value = droplist.value

    //заменяет текущее значение option в droplist на input.value
    button.addEventListener('click', ()=> {
        for (let i=0; i< droplist.length; i++){
            if (droplist[i].value == droplist.value){
                droplist[i].innerText = input.value}
        }
    })
    



