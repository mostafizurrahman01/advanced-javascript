let bonus = 20;

function sum (first,second){
    let result = first + second + bonus;

    //block scope
    if(result > 9){
        const mood = "happy";
        console.log(mood);
    }

    //
    if(result > 9){
        var mood = "happy";
        console.log(mood);
    }
    console.log(mood);
    return result;
}
const output = sum(7,3);
console.log(output);

//hoisting hocche ekta scope theke uporer level er scope e niye jaoya. ar ekhane just declaration part ta ke
// upore uthabe ar value jeikhane ase oita oikhane thakbe.