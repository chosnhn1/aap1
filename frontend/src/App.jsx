import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Box, Button } from '@chakra-ui/react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Box minH={"100vh"}>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
      </Routes>
      <Button>Count!</Button>
    </Box>
  )
}

export default App
