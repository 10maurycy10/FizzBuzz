function fizz(n) { //enumerate all outputs
    if (n % 3 == 0)
        if (n % 5 == 0)
            return "FizzBuzz"
        else
            return "Fizz"
    else
        if (n % 5 == 0)
            return "Buzz"
        else
            return n.toString
}

//output = fizz(number)