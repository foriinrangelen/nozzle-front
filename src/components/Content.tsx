import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
const Content = () => {

  const [isLoading, setIsLoading] = useState<Boolean>(false); // 로딩 상태 추가

  const [isDragging, setIsDragging] = useState<Boolean>(false)
  const [droppedImage, setDroppedImage] = useState<any>(null)
  const [searchImg, setSearchImg] = useState<any>(null)
  const [searchImgData, setSearchImgData] = useState<any>(null)
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

    </>
  )
}

export default Content
 