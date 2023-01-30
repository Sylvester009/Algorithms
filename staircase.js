function staircase(n) {
    // Write your code here
 let stairs = ""
    for (let i = 1; i <= n; i++) {
        for (let j = n - 1; j >= i; j--) {
            stairs += " "
        }
        for (let k = 1; k <= i; k++) {
            stairs += "#"
        }
        stairs += "\n"
       
    }
    console.log(stairs)
}