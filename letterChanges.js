//Question
//Challenge
// Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 
    
//Input:"hello*3"
//Output:"Ifmmp*3"

//Input:"fun times!"
//Output:"gvO Ujnft!"
//Solution =>


function LetterChanges(str) { 


    /*str = str.toLowerCase();
    var finalStr = "";
    
    for ( var i=0; i<str.length; i++){
        //if alphabet is a characte from a-z then get ascii char value and increase by 1
        if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <=97+24 ){ // going upt y becasue z is special case and goes to a.
            var asciiCode = str.charCodeAt(i)+1;
            var mystr = String.fromCharCode(asciiCode);
            finalStr += mystr;
        }
        else{
            if(str.charCodeAt(i) === 122){
                finalStr += 'a';
            }
        }
    }*/
    let finalStr = str.split("").map(x => {
        let chCode = x.charCodeAt(0)
        if (chCode === 97 + 25) {
            return 97;
        }else if(chCode >= 97 && chCode < 97+25) {
            return chCode+1;
        }else{
            return chCode;
        }
    }).map(x => String.fromCharCode(x)).join("");

  return CapitalizeVowels(finalStr); 
         
}

function CapitalizeVowels(str){
    
    str = str.toLowerCase();
    /*finalStr = "";
    
    for (var i =0; i<str.length; i++){
         if(str.charAt(i) === 'a' && str.charAt(i) === 'e' && str.charAt(i) === 'i' && str.charAt(i) === 'o' && str.charAt(i) === 'u'){
            str = str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i+1);
         }
    }
    return str;*/
    
    return str.split("").map(x => {
        if(['a','e','i','o','u'].indexOf(x) >= 0){
            return x.toUpperCase();
        }else {
            return x;
        }
    }).join("");
}
   
// keep this function call here 
LetterChanges(readline());
