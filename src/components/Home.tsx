import { Col, Row } from 'react-bootstrap';
const Home = () => {



  return (
    <>
<Row className='full-page-section-1'>
  <Col xs={7} md={7}>
    <img 
  className="temp-img"
  src="image1.png" 
  alt="123" 
/>
  </Col>
  
  <Col xs={7} md={7} className='fw-bold text-white'>
    <div className='text-center img-text mb-3'>원하는 이미지를 넣어보세요</div>
    <div className='img-drag-upload'></div>
    <Row className='d-flex align-items-center justify-content-center mt-1 g-2'>
  <Col xs={6} md={6} className="text-center">
    <div></div>
    <div className="img-btn d-flex align-items-center justify-content-center ">이미지 업로드</div>
  </Col>
  <Col xs={6} md={6} className="text-center">
  
    <div className="img-create-btn d-flex align-items-center justify-content-center ">AI 이미지 생성하기</div>
  </Col>
</Row>
  </Col>
</Row>









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
 