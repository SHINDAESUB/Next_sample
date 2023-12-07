import { NextPage } from 'next'
import Image from "next/image";
//이미지 파일을 임포트 한다
import ESLintImage from '../public/image/ESLint.jpg'

const ImageSample: NextPage<void> = (props) => {
    return (
        <div>
            <h1>이미지 표시 비교</h1>
            <p>img 태그로 표시한 경우</p>
            <img src="/image/ESLint.jpg"/>
            <p>Image 컴포넌트로 표시한 경우</p>
            <Image src={ESLintImage} alt="ESLint 이미지 입니다"/>
            <p>Image로 표시한 경우 사전에 그리기 영역이 확보 됩니다.</p>
        </div>
    )
}

export default ImageSample
