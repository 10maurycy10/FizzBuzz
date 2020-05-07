function fizz(n){
    var test = (d, s, x) =>
        n % d == 0 ? _ => s + x('') : x;
    var fizz = x => test(3, "Fizz", x);
    var buzz = x => test(5, "Buzz", x);
    return fizz(buzz(x => x))(n.toString());
}

//output = fizz(number)