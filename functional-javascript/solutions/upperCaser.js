function  upperCaser(input){
        if(typeof(input)  == "string")
                return input.toUpperCase();
        else
        console.log('*** Error : input not of string type ***');
}

module.exports = upperCaser;
