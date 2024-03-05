import Competitions from "./Components/Competitions"
import NotFound from "./Components/NotFound";
function App() {

  return (
    <>
    <Route
          path='/competition'
          element={<Competitions />}
        />
   <Route
          path='/*'
          element={<NotFound />}
        />
     </>
  )
}

export default App
