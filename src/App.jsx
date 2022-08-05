import Header from "./header"
import List from "./list"
import data from "../data"
import './App.css'

function App() {
  const details = data.map(item => {
    return <List {...item} />
  })

  return (
    <div className="App">
      <Header />
      <section className="details">{details}</section>
    </div>
  )
}

export default App
