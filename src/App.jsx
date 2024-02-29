import { useState } from "react";
import "@/App.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

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

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  return (
    <div>
      <Navbar toggleSidebar={toggleSidebar} menuItems={menuItems} />

      <Sidebar isOpen={isSidebarOpen} menuItems={menuItems} />

      <div className="flex bg-secondary justify-center">
        <div className="container py-10 lg:py-20 px-5 lg:px-40">
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
