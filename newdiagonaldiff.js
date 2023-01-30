function diagonalDifference(arr) {
    // Write your code here
     let left=0;
   let  right=0;
    for(let n=0; n<arr.length; n++){
        for(let m=0; m<arr[n].length; m++){
            arr[n][m];
            left=(arr[0][0] + arr[1][1] + arr[2][2]);
            right=(arr[0][2] + arr[1][1] + arr[2][0]);
        }
    }
     return Math.abs(left-right);
}