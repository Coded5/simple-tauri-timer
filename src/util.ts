export const pad = (n: number, digit: number): String => {
  let numString = n.toString();
  
  for(let i = 0; i < digit - numString.length; i++) {
    numString = "0" + numString;
  }

  return numString;
}
