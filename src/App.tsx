import Sidebar from "./components/Sidebar"

function App() {
  const nahuel = {
    id: 1,
    image: "a",
    name: "Nahuel Montero"
  }

  const polola = {
    id: 2,
    image: "a",
    name: "Polola Pololil"
  }

  const listaPlaceholder = [nahuel, polola]

  return (
    <div className = "app">
      <Sidebar listaPrueba={listaPlaceholder}/>
    </div>
  )
}

export default App
