const data = [
  {id:1, firstName:"Hobert", lastName:"Rarężlak", marks: [3,3.5,3,5]},
  {id:2, firstName:"Basia", lastName:"Kasińska", marks: [5,4.5,3,5]},
  {id:3, firstName:"Haciej", lastName:"Mubert", marks: [2,2.5,5,5]},
  {id:4, firstName:"Hawid", lastName:"Dolisz", marks: [5,4.5,5,5]},
  {id:5, firstName:"Dateusz", lastName:"Mobija", marks: [2,5,2,5]},
]

const gradeAverage = () => {
  const gradeAverage = data.reduce((accumulator, currentValue) => {
    return accumulator += currentValue.marks.reduce((prev, next) => prev + next) / currentValue.marks.length;
  }, 0) / data.length;
  console.log(`Średnia wszystkich średnich z ocen to ${gradeAverage.toFixed(2)}`)
}

gradeAverage();