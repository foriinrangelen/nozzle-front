import { Col, Row, Spinner } from "react-bootstrap";
import { ImageContext } from '../context/ImageContext';
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Stage, Layer, Image as KonvaImage, Line, Group, Circle } from 'react-konva';

const Edit = () => {
  const { uploadedImage, setUploadedImage } = useContext(ImageContext) || { uploadedImage: null, setUploadedImage: () => {} };
  const [points, setPoints] = useState<number[]>([]);
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const stageRef = useRef(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState<{ width: number, height: number }>({ width: 0, height: 0 });
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [tempDelay, setTempDelay] = useState<boolean>(false);
  const [tempPrompt, setTempPrompt] = useState<string>("");
  const [imgDataUrl, setImgDataUrl]= useState<string>("")

  // Edit Image Function
  const editPromptImage = async () => {
    setTempDelay(true);
    
    try {
    if (imgDataUrl) {
    // 1. Base64 문자열에서 MIME 타입과 데이터 분리
    const [header, base64Data] = imgDataUrl.split(',');
    const mimeType = header.match(/:(.*?);/)[1]; // MIME 타입 추출

    // 2. Base64 문자열을 Uint8Array로 변환
    const byteCharacters = atob(base64Data);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // 3. Blob으로 변환
    const blob = new Blob([byteArray], { type: mimeType });

    // 4. Blob을 File로 변환 (파일 이름은 원하는 대로 설정)
    const file = new File([blob], 'uploaded_image.png', { type: mimeType });
      console.log("file file file",file)
      const params= {
        key: localStorage.getItem("fileName")
      }

      // 1. presignedUrl 을 받아오기
      const { data } = await axios.get('/dev/edit', { params });
      console.log("presignedURL",data)

      // 2. 다시 마킹이미지만 업로드
      const response = await axios.put(data.url, file);
      console.log(response.data);
      // localStorage.removeItem("fileName");
      
    }
    
    // 3. 이미지 이름을 람다로 전달
    console.log("tempPrompt", tempPrompt)
    console.log("localStorage.getItem('originalFileName')", localStorage.getItem('originalFileName'))
      const { data } = await axios.post('/dev/edit', { 
        prompt: tempPrompt,
        file_name: localStorage.getItem('originalFileName'),
        // masked_image_base64: localStorage.getItem('fileName')
       });
      console.log(data)
      // const base64Image = data.generated_image_base64;
      // setUploadedImage(`data:image/png;base64,${base64Image}`);
      // console.log('요청 보냄:', data);
      setUploadedImage(data)
    } 
    
    catch (error) {
      console.error('Error generating image:', error);
    } finally {
      setTempDelay(false);
    }
  };
  
  // Update Dimensions on Resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Load Image
  useEffect(() => {
    if (uploadedImage) {
      const img = new window.Image();
      img.src = uploadedImage;
      img.onload = () => setImage(img);
    }
  }, [uploadedImage]);

  // Handle Click for Polygon Points
  const handleClick = (e: any) => {
    if (isComplete) return;

    const { x, y } = e.target.getStage().getPointerPosition();

    // Check if the click is near the first point to close the polygon
    if (points.length >= 4 && distance(x, y, points[0], points[1]) < 10) {
      setPoints((prev) => [...prev, points[0], points[1]]);
      setIsComplete(true);
    } else {
      setPoints((prev) => [...prev, x, y]);
    }
  };

  // Calculate Distance
  const distance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
  };

  // Handle Point Dragging
  const handleDragMove = (index: number, newPos: any) => {
    const updatedPoints = points.slice();
    updatedPoints[index] = newPos.x;
    updatedPoints[index + 1] = newPos.y;
    setPoints(updatedPoints);
    handleMaskAndSend()
  };
  const handleMaskAndSend = async () => {
    // const stage = stageRef.current;
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
  
    // Canvas 크기 설정
    canvas.width = dimensions.width
    canvas.height = dimensions.height
  
    // 흰 배경 채우기cc
    if(context){
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
  
    // 폴리곤 마스킹 처리
    context.beginPath();
    context.moveTo(points[0], points[1]);
    for (let i = 2; i < points.length; i += 2) {
      context.lineTo(points[i], points[i + 1]);
    }
    context.closePath();
    context.fillStyle = 'black'; // 마스크 색상
    context.fill();
  }
    // 생성된 이미지를 확인하기
    const markingImg = canvas.toDataURL('image/png');
    setImgDataUrl(markingImg)

  };
  return (
    <Row id="section2" className='full-page-section-prompt'>
      <Col xs={10} md={10} lg={5} className='fw-bold text-white mt-5 prompt-text'>
        <div style={{ height: "7vh", borderBottom: "2px solid rgba(51, 51, 51, 1)" }}>
          <Col lg={12}>프롬프트로 이미지 편집하기</Col>
          <p className='edit-text'>이미지를 클릭하여 영역을 만들고 프롬프트로 편집해보세요!</p>
        </div>
        {tempDelay && <div className="loading">Loading&#8230;</div>}
        {uploadedImage &&
          <div ref={containerRef} style={{ position: 'relative', width: '100%', height: '60vh' }}>
            <Stage
              width={dimensions.width}
              height={dimensions.height}

              ref={stageRef}
              onClick={handleClick}
            >              
              <Layer>
                {image && <KonvaImage x={0} y={0} width={~~localStorage.getItem('width')!} height={~~localStorage.getItem('width')!} image={image} />}
                <Group>
                  <Line points={points} stroke="red" strokeWidth={2} closed={isComplete} fill="rgba(255, 0, 0, 0.5)" />
                  {points.map((_, index) =>
                    index % 2 === 0 ? (
                      <Circle
                        key={index}
                        x={points[index]}
                        y={points[index + 1]}
                        radius={5}
                        fill="blue"
                        draggable
                        onDragMove={(e) => handleDragMove(index, e.target.position())}
                      />
                    ) : null
                  )}
                </Group>
              </Layer>
            </Stage>
          </div>
        }
        <Col lg={12} className='mt-4 prompt-input' style={{ position: 'relative' }}>
          <input type='text' onChange={(e) => setTempPrompt(e.target.value)} placeholder="선택한 영역을 프롬프트로 편집하기 ex ) '배경 제거' 또는 '인페인팅'" />
        </Col>
        <Col lg={12} className="w-100">
          <button onClick={editPromptImage} className='generate-button-temp mt-2'>편집하기</button>
        </Col>
      </Col>
    </Row>
  );
}

export default Edit;
