const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const sum = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return <p><strong>Number of exercises {sum}</strong> </p>
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({parts}) => {
  return(
  <>
   {parts.map(part => <Part part={part} key={part.id} />)}   
  </>)
}



const Course = ({course}) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </>
  )
}
 export default Course 