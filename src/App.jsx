import { useState } from 'react'
import '@/App.css'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const menuItems = [
  {
    name: "SERVICES",
  },
  {
    name: "PORTFOLIO",
  },
  {
    name: "ABOUT US",
  },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleSidebar () {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} menuItems={menuItems} />

      <Sidebar isOpen={isSidebarOpen} menuItems={menuItems} />

      <p>
        Hello world
      </p>
    </div>
  )
}

export default App
