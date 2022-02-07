// Дээрх list of objects-г хүйсээр нь filter хийгээрээ Example output:
const characters = [ 
    { 
    name: 'Luke Skywalker', height: 172, 
    mass: 77, 
    eye_color: 'blue', 
    gender: 'male', 
    }, 
    { 
    name: 'Darth Vader', 
    height: 202, 
    mass: 136, 
    eye_color: 'yellow', 
    gender: 'male', 
    }, 
    { 
    name: 'Leia Organa', 
    height: 150, 
    mass: 49, 
    eye_color: 'brown', 
    gender: 'female', 
    }, 
    { 
    name: 'Anakin Skywalker', height: 188, 
    mass: 84, 
    eye_color: 'blue', 
    gender: 'male', 
    }, 
    ];
// let a =0;
// for(let i=0; i<characters.length; i++){

// }
    function genderMale(value){
        return value.gender == "male"
    }
    let maleGender = characters.filter(genderMale);
    console.log(maleGender);
    // document.getElementById("answer").innerHTML = maleGender;
    