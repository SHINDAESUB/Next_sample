import { useState } from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import { StyledButton } from '../components/StyledButton'
import { action } from '@storybook/addon-actions';

// 파일 안의 스토리 설정(메타데이터 객체)
export default {
    // 그룹명
    title: 'StyledButton',
    // 사용하는 컴포넌트
    components: StyledButton,
    argTypes:{
      // prop에 전달하는 variant를 스토리북으로부터 변경할 수 있도록 추가
      variant:{
        control: { type: 'radio'},
        options: ['primary', 'success', 'transparent'],
      },
      // props에 전달하는 children을 스토리북으로부터 변경할 수 있도록 추가
      children: {
          //텍스트 박스에 입력할 수 있도록 지정
          control: { type: 'text' }
      },
    },
} as ComponentMeta<typeof StyledButton>

const Template: ComponentStory<typeof StyledButton> = (args) =>
    <StyledButton {...args} />

export const TemplateTest = Template.bind({});

// 기본 props를 설정한다
TemplateTest.args = {
    variant: 'primary',
    children: 'primary'
}

// increment라는 이름으로 action을 출력하기 위한 함수를 만든다
const incrementAction = action('increment');

export const Primary = (props) => {
    const [count, setCount] = useState(0);
    const onClick = (e: React.MouseEvent) => {
        // 현재 카운트를 전달하고 Action을 호출한다
        incrementAction(e, count);
        setCount((c) => c + 1);
    }

    return (
        <StyledButton {...props} variant="primary" onClick={onClick}>
            Count: {count}
        </StyledButton>
    )
}

export const Success = (props) => {
    return (
        <StyledButton {...props} variant="success">
            Success
        </StyledButton>
    )
}

export const Transparent = (props) => {
    return (
        <StyledButton {...props} variant="transparent">
            Transparent
        </StyledButton>
    )
}