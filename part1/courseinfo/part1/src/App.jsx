/*const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

return (
  <div>
    <h1>{course}</h1>
    <p>
      {part1} {exercises1}
    </p>
    <p>
      {part2} {exercises2}
    </p>
    <p>
      {part3} {exercises3}
    </p>
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  </div>
)
}
export default App*/

const Header = ({ course }) => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}

const Part = ({ part, exercises }) => {
  return (
    <div>
    <p>
      {part} {exercises}
    </p>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part,index) =>
      <Part key={index} part={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Total = ({ exercises }) => {
  return (
    <div>
      <p>Number of exercises {exercises}</p>
    </div>
  )
}
const App =() => {

  const course = 'Half Stack application development'
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14}
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total exercises={parts.reduce((sum, part) => sum + part.exercises, 0 )} />
    </div>
  )
}

 export default App