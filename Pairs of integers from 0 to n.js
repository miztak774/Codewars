function generatePairs(n) {
  let result = []
    for(let i=0;i<=n;i++){
        for(let j=i;j<=n;j++){
            result.push([i,j])
        }
    }
    return result
}
