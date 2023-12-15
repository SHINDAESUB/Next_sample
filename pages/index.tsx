import type { NextPage } from 'next'
import styled from "styled-components";

const H1 = styled.h1`
  color:red;
`

const Home: NextPage = () => {
    return (
        <div>
            <main>
                <H1>
                    Welcome to <a href="www.naver.com"></a>
                </H1>
            </main>
        </div>
    )
}

export default Home