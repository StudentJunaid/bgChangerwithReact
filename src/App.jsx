import { useState } from "react"


function App() {
  
  const [color,setColor] = useState("olive")

  return (
   <div className="w-full h-screen  bg-black duration-200"
       style={{backgroundColor: color}}
   >
    <div className=" flex flex-wrap justify-center">
      <div className="text-white flex flex-wrap gap-3 fixed bottom-12 bg-white py-1 px-4 rounded-xl">
        <button
        onClick={() => setColor("red")}
         style={{backgroundColor: "red"}}
        className="px-4 py-1 rounded-xl">Red
        </button>
        <button
        onClick={() => setColor("purple")}
         style={{backgroundColor: "purple"}}
        className="px-4 py-1 rounded-xl">purple
        </button>
        <button
        onClick={() => setColor("blue")}
         style={{backgroundColor: "blue"}}
        className="px-4 py-1 rounded-xl">blue
        </button>
        <button
        onClick={() => setColor("green")}
         style={{backgroundColor: "green"}}
        className="px-4 py-1 rounded-xl">green
        </button>
        <button
        onClick={() => setColor("orange")}
         style={{backgroundColor: "orange"}}
        className="px-4 py-1 rounded-xl">orange
        </button>
      </div>
    </div>
   </div>
  )
}

export default App
