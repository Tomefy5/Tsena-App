import BodyTsena from "./components/body/BodyTsena"
import Header from "./components/header/Header"
import { ShoppingCart } from 'lucide-react';


function App() {
 

  return (
    <div className="bg-blue-100 absolute w-full h-auto">
      <div className="min-h-[100vh] w-full lg:w-4/5 mx-auto py-4 px-4">
        <h1 className="flex justify-center items-center gap-2 text-2xl font-bold bg-blue-800 text-white text-center py-2 w-11/12 md:w-4/5 mx-auto mb-4 md:mb-8 rounded">
          <span>TSENA</span>
          <ShoppingCart/>
        </h1>
        <Header/>
        <BodyTsena/>
      </div>
    </div>
  )
}

export default App
