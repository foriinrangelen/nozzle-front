import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header'; // Header 컴포넌트를 임포트합니다.
import Footer from './components/Footer'; // Footer 컴포넌트를 임포트합니다.
import Home from './components/Home';

const App = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* 섹션 영역 */}
      <Container className='main-content' fluid>
        <Routes>
        {/* URL 파라미터 형식으로 Route 구성하기 */}
        <Route path='/' element={<Home />} />
        <Route path='/edit' element={<Home />} />
        <Route path='/prompt' element={<Home />} />
      </Routes> 
      </Container>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
