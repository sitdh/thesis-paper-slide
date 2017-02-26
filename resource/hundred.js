(() => {
 
    // fizzBuzz :: Int -> String
    const fizzBuzz = n =>
        caseOf(n, [
            [x => x % 15 === 0, "FizzBuzz"],
            [x => x % 3 === 0, "Fizz"],
            [x => x % 5 === 0, "Buzz"]
        ], n.toString());
 
 
 
    // GENERIC -------------------------------------------------
 
    // caseOf :: a -> [(a -> Bool, b)] -> b -> b
    const caseOf = (e, pvs, otherwise) =>
        pvs.reduce((a, [p, v]) =>
            a !== otherwise ? a : (p(e) ? v : a), otherwise);
 
    // range :: Int -> Int -> [Int]
    const range = (m, n) =>
        Array.from({
            length: Math.floor(n - m) + 1
        }, (_, i) => m + i);
 
 
    // TEST ----------------------------------------------------
    return range(1, 100)
        .map(fizzBuzz)
        .join('\n');
})();
