import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header'; // Header 컴포넌트를 임포트합니다.
import Footer from './components/Footer'; // Footer 컴포넌트를 임포트합니다.
import Home from './pages/Home';
import Temp from './components/Temp';

const App = () => {
  return (
    <>
      {/* Header 컴포넌트*/}
      <Header /> 

      {/* 섹션 영역 */}
      <Container className='main' fluid>
        <Routes>
        {/* URL 파라미터 형식으로 Route 구성하기 */}
        <Route path='/' element={<Home />} />
        <Route path='/edit' element={<Temp />} />
        <Route path='/prompt' element={<Home />} />
      </Routes> 
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
