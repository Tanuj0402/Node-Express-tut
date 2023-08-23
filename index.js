// MAP method
const people = [
    {
        name:'bob',
        age:20,
        position:'developer'
    },
    {
        name:'anna',
        age:20,
        position:'designer'
    },
    {
        name:'susy',
        age:30,
        position:'boss'
    },
]

// returns an array
// does not change the size of older array
// uses values from original array when making a new one

const ages = people.map((person)=>{
    return person.age;
});
console.log(ages);

const newPeople = people.map((item)=>{
    return {
        firstName:item.name.toUpperCase(),
        oldAge:item.age+20


    }
})
console.log(newPeople);