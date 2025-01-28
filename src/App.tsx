
import './App.css'
import { Button } from "@/components/ui/button"

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
        <Button variant="outline">Button</Button>
        <Button variant="destructive">Destructive</Button>
    </>
  )
}

export default App
