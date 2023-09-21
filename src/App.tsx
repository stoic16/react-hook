import { useState } from 'react'
import { HashRouter, Route, Routes, Link, Navigate } from 'react-router-dom'
import GetRoutes from './routes/index.tsx'

function App() {
  return (
    <HashRouter>
      <GetRoutes />
    </HashRouter>
  )
}

export default App
