const App =() => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      { 
        name: 'Fundamentals of React', 
        exercises: 10
      },
      { 
        name: 'Using props to pass data', 
        exercises: 7 
      },
      { 
        name: 'State of a component', 
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return (

      <h1>{course}</h1>
    
  )
}

const Part = ({ part, exercises }) => {
  return (
   
    <p>
      {part} {exercises}
    </p>
  
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) =>
      <Part key={index} part={part.name} exercises={part.exercises} />
      )}
    </div>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
      <p>Number of exercises {total} </p>
  )
}

 export default App