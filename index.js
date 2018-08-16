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

function nowServing(katzDeli){
  if(katzDeli.length === 0) return "There is nobody waiting to be served!"

  const message = `Currently serving ${katzDeli[0]}.`
  katzDeli.shift() //console.log(katzDeli)
  return message
}


// function nowServing(katzDeli){
//   if(katzDeli.length === 0) return "There is nobody waiting to be served!"
//   let message = 'The line is currently: '
//   for(let i=0; i< katzDeli.length ; ++i){
//     message += `${i+1}. ${katzDeli[i]}, `
//   }
//   return message
// }
