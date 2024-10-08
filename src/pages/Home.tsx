import { Col, Row } from 'react-bootstrap';
import '../App.css';
import Content from '../components/Content';
const Home = () => {

  return (
    <>
<Content/>

    <Row className='full-page-section'>


<div>
      당신이 머릿속으로 <br/>
      꿈꾸던이미지를 <br/>
      <span style={{color: '#9cd5e8', lineHeight: 1.5}}>현실로 만나</span>보세요
    </div>
    <div>
      원하는 이미지를 넣어보세요
    </div>
    
    <Col>
    이미지
    </Col>
    </Row>
    <Row className='full-page-section' xs={6} md={6}>
  <Col>
<div>
      당신이 머릿속으로 <br/>
      꿈꾸던이미지를 <br/>
      <span style={{color: '#9cd5e8', lineHeight: 1.5}}>현실로 만나</span>보세요
    </div>
    <div>
      원하는 이미지를 넣어보세요
    </div>
    </Col>
    <Col>
    이미지
    </Col>
    </Row>
    <Row className='full-page-section' xs={6} md={6}>
  <Col>
<div>
      당신이 머릿속으로 <br/>
      꿈꾸던이미지를 <br/>
      <span style={{color: '#9cd5e8', lineHeight: 1.5}}>현실로 만나</span>보세요
    </div>
    <div>
      원하는 이미지를 넣어보세요
    </div>
    </Col>
    <Col>
    이미지
    </Col>
    </Row>
    
    </>
  )
}

export default Home
 