import MainRoutes from "./routers/mainRoutes";
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <div className="bg-black ">
      <div className="max-w-7xl mx-auto min-h-screen ">
        <MainRoutes />
        <Toaster />
      </div>
    </div>
  )
}

export default App
