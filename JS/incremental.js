function fizz(n){ //build string incrementally (the good one)
    var f,b;
    (n%3)?f="":f="Fizz";
    (n%5)?b="":b="Buzz";
    return(f||b?f+b:n.toString());
}

//output = fizz(number)
