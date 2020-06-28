const fruits = [
    'りんご',
    'バナナ',
    'ぶどう',
    'みかん'
];

// fruits.forEach(function(input){
//     console.log(input);
// });

const getItem = () => {console.log('アロー')};
getItem();

fruits.forEach(input => console.log(input));

const scores = [10, 20, 30, 40];
const newScores = scores.filter((value) => value >= 20);
console.log(newScores);

const members = ['本田', '香川', '長友'];
const member = members.find(value => value === '長友');
console.log(member);

const userList = [10, 20, 30, 40];
const userIdList = userList.map(value => `user_${value}`);
console.table(userIdList);

// const test = new Object();
const test = {
    test1: 10,
    test2: 20,
    test3: 30,
};

console.log(Object.values(test));

for(value of Object.values(test)){
    console.log(value);
}

const postalCode = '123-45678';

const postal = {

    postalCode:'123-45678',

    checkPostalCode(){
        const replaced = this.postalCode.replace('-', '').length;
        // const length = replaced.length;

        if(replaced === 7){
            return true;
        }
        return false;
    }
};

console.log(postal.postalCode);
console.log(postal.checkPostalCode());

const person = {
    name: '本田',
    age: 30,

    getName(){
        console.log(this.name);
        return this;
    },

    getAge(){
        console.log(this.age);
        return this;
    }
};

person.getName().getAge();