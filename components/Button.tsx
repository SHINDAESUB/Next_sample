import React from "react";
// import './style.css'

// props로부터 전달된 데이터를 타입 정의
type ButtonProps = {
    label: string
    text: string
    disabled: boolean
    onClick: React.MouseEventHandler<HTMLButtonElement>
};

//라벨과 버튼을 표시하는 컴포넌트
export const Button = (props: ButtonProps) => {
    const { label,text,disabled, onClick } = props;

    // props로 전달된 데이터를 기반으로 형태를 구현한다
    return (
        <div className="button-container">
            <span>{label}</span>
            <button disabled={disabled} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

