function takeANumber(katzDeli, name){
  katzDeli.push(name)
  let message = ''
  for(let i=0; i< katzDeli.length ; ++i){
    message = `Welcome, ${katzDeli[i]}. You are number ${i+1} in line.`
  }
  return message
}
//var katzDeli = [] en 'globale'
//takeANumber([], "Teddy") "Welcome, Teddy. You are number 1 in line."
//takeANumber(["Teddy"], "Ada") "Welcome, Ada. You are number 2 in line."


