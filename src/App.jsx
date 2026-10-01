import { BrowserRouter, Routes, Router } from "react-router-dom"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="/wow/woo/hi" element={<Hi />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
