/**********************************************
 *  I KNOW JS HAS CLASSES                     *
 *  but functions are shorter and cleaner     *
 **********************************************/

function FizzBuzz(data) { //FizzBuzz factory [OOP]
    function FizzBuzzDataWrapper(data) { //warper for '.' because '.' is to simple
        data = data || [{d: 3, s : "Fizz"},{d: 5, s : "Buzz"}]
        return {
            Len : data.length,
            getD : function (n) {return data[n].d;},
            getS : function (n) {return data[n].s;},
        }
    }
    var d = FizzBuzzDataWrapper(data);
    function FizzBuzzChecker(data) { //do n % m
        return {
            check : function (n,i) {return (n % data.getD(i)) == 0;}
        }
    }
    var c = FizzBuzzChecker(d)
    function FizzBuzzReplacer(data,a) { //do string concat
        return {
            replace : function (n,i,s) {return data.check(n,i)?s + a.getS(i):s;}
        }
    }
    var r = FizzBuzzReplacer(c,d)
    function FizzBuzzIterator(data,len) { //loop over an array
        return {
            iterate : function (n) {
                s = '';
                for (i = 0; i < len; i++) {
                    s = data.replace(n,i,s)
                }
                return s;
            }
        }
    }
    var i = FizzBuzzIterator(r,d.Len);
    function FizzBuzzInterface(data) { //defaulting returner
        return {
            fizzBuzz : function (n) {return data.iterate(n) || n.toString()}
        }
    }
    return FizzBuzzInterface(i);
}
myFizz = FizzBuzz()

