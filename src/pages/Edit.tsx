import { Col, Row } from "react-bootstrap"
import { ImageContext } from '../context/ImageContext';
import { useContext } from "react";

const Edit = () => {

  const { uploadedImage, setUploadedImage } = useContext(ImageContext) || { uploadedImage: null, setUploadedImage: () => {} }; // 기본값 추가
  console.log("uploadedImage uploadedImage", uploadedImage)
  return (
<Row id="section2" className='full-page-section-prompt'>
<Col xs={10} md={10} lg={5} className='fw-bold text-white mt-5 prompt-text'>
<div className="" style={{height:"7vh", borderBottom:"2px solid rgba(51, 51, 51, 1)"}}>
  <Col lg={12}>프롬프트로 이미지 편집하기</Col>
  <p className='edit-text'>이미지를 클릭하여 영역을 만들고 프롬프트로 편집해보세요!</p>

    </div>
    {uploadedImage && <img 
    src={uploadedImage || ''} 
    alt="Uploaded" 
    className="uploaded-image mt-3" 
    style={{ width: '100%', height: '60vh' }} // 이미지 스타일 조정
                        />}
<Col lg={12} className='mt-4 prompt-input' style={{ position: 'relative' }}>
        <input type='text' placeholder="선택한 영역을 프롬프트로 편집하기"  />
        
    </Col>
    <Col lg={12} className="w-100">
    <button className='generate-button-temp mt-2'>편집하기</button>
    </Col>
</Col>
      </Row>
  )
}

export default Edit
