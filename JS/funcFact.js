function fbf(data) {
    data = data || [[5, "Buzz"],[3, "Fizz"]];

    return function fizz(n){
        var test = (testD, s, x) =>
            n % testD == 0 ? _ => s + x('') : x;
        var testD = (testD,t,p) =>
            t(testD[0], testD[1], p)
        var doAll = (testD, t, t2, i, n, f) =>
            i < 0? x => x : t(testD[i],t2,f(testD, t, t2, i - 1, n, f))
        return doAll(data, testD, test, data.length - 1, n, doAll)() || n.toString()
    }
}
f = fbf()

//output = f(number)