import { useState } from 'react'

const App = () => {
  
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [ramdomNum, setRandomNum] = useState(0)
  const [voteAnecdote, setVoteAnecdote] = useState(new Array(8).fill(0))
  const [maxAnecdoteVote, setMaxAnecdoteVote] = useState (0)

  
  const selectAnecdote = () => {
    const randomNumUpdate = Math.floor(Math.random() * (8)  )
    setRandomNum(randomNumUpdate)
    console.log(`anecdote ${randomNumUpdate}`)
   
  }
  const vote = () => {
    const points = [...voteAnecdote]   
    points[ramdomNum] = points[ramdomNum] + 1
    setVoteAnecdote(points)
    const indiceMaxVotes = points.indexOf(Math.max(...points))
    setMaxAnecdoteVote(indiceMaxVotes) 
  }
  const modify = (modifyState) => {
    if (modifyState == 'Good') {
      let updateGood = good + 1
      setTotal(updateGood + bad + neutral)
      setGood(good + 1)
    } if (modifyState == 'Neutral') {
      let updateNeutral = neutral + 1
      setTotal(good + updateNeutral + bad)
      setNeutral(neutral + 1)
    } if (modifyState == 'Bad') {
      let updateBad = bad + 1
      setTotal(good + neutral + updateBad)
      setBad(bad + 1)     
    }
    
  }


  return (
    <div>
      <Button onClick = {() => modify('Good')} text = {'Good'}/>
      <Button onClick = {() => modify('Neutral')} text = {'Neutral'}/>
      <Button onClick = {() => modify('Bad')} text = {'Bad'}/>
      <Statistics good = {good} bad = {bad} neutral={neutral} total = {total}  />
      <Button onClick={selectAnecdote} text={'anecdote'}/>
      <Anecdote num = {ramdomNum} text={'Anecdote of the day'}/>
      <Button onClick={vote} text={'Vote'}/>
      <Anecdote num = {maxAnecdoteVote} text={'Most voted anecdoted'}/>
    </div>  
  )
}

const Statistics = ({good, neutral, bad, total}) => {
  if (total == 0 ) {
    return  (
    <div>  
      <h1>Statistics</h1>
      <p>No Feedback given</p>
    </div>
  )
  }

  else {return (
    <div>
      <table>
      <StatisticsLine text = 'Good' value = {good}/>
      <StatisticsLine text = 'Neutral' value = {neutral}/>
      <StatisticsLine text = 'Bad' value = {bad}/>
      <StatisticsLine text = 'Average' value = {(good - bad)/total}/>
      <StatisticsLine text = 'Positive' value = {`${(good/total)*100} %`} />
    </table> 
    </div> 
  )}
  
}

const StatisticsLine = (props) => {
  return (
    <tbody>
      <tr>
        <th>{props.text}</th> 
        <th>{props.value}</th>
      </tr>
    </tbody>
)
}

const Anecdote = ({num, text}) => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  return <div><h1>{text}</h1>{anecdotes[num]}</div>
}
const Button = ({onClick, text}) => {
  return <button onClick={onClick}> {text} </button>
}

export default App