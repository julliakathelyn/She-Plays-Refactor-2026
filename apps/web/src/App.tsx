import { Route, Routes } from 'react-router'

function HomePage() {
  return (
    <main>
      <h1>She Plays</h1>
      <p>Frontend em construção.</p>
    </main>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App