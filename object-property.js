const student =[
    {id: 21, name: 'Omar'},
    {id: 31, name: 'Sojib'},
    {id: 41, name: 'Akash'},
    {id: 51, name: 'Asif'}
];

const name = student.map(s => s.name);
const ids = student.map(s => s.id);
const biggerId = student.filter(s => s.id>40);
console.log(name);
console.log(ids);
console.log(biggerId);