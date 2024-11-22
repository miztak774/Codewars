export function solve(s: string) {
  const alpha = "abcdefghijklmnopqrstuvwxyz"
  const sum_c = (s:string) => s.split("").map(v => alpha.indexOf(v)+1).reduce((a,b) => a+b,0)
  return Math.max.apply(null,s.split(/[aiueo]/).map(v => v.length>0 ? sum_c(v) : 0));
}

