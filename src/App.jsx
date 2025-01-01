import BodyTsena from "./components/body/BodyTsena"
import Header from "./components/header/Header"

function App() {
 

  return (
    <div className="bg-blue-100 absolute w-full h-full">
      <div className="min-h-[100vh] w-full max-w-[800px] mx-auto py-4 px-4 md:px-6">
        <h1 className="text-2xl font-extrabold bg-blue-800 text-white text-center py-2 w-11/12 md:w-4/5 mx-auto mb-4 md:mb-8 rounded">TSENA</h1>
        <Header/>
        <BodyTsena/>
      </div>
    </div>
  )
}

export default App
