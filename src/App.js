import logo from "./logo.svg"
import "./App.css"

function App() {
  const name = "eli"
  const age = 13
  const canDrink = age >= 18
  return (
    <div className='App'>
      <header className='App-header'>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <h1>gg.com Hello {name} </h1>
        <h2>Drinking eligibility: {canDrink ? "True" : "False"}</h2>
      </header>
    </div>
  )
}

export default App
