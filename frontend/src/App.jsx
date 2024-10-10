import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { DataProvider } from "./context"
const LazyHome = React.lazy(() => import('./pages/Home'))
function App() {

  return (

    <DataProvider>
      <BrowserRouter>
       <Routes>
          <Route path="/" element={
            <React.Suspense fallback={<div className="flex justify-center items-center h-screen">
              <div className="text-center">Loading...</div>
            </div>}>
              <LazyHome />
            </React.Suspense>
          } />
       </Routes>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
