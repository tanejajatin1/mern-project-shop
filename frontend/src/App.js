import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import ProductScreen from "./screens/ProductScreen";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-2">
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart' element={<ProductScreen />} />
            <Route path='/login' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />

    </BrowserRouter>
  );
}

export default App;
