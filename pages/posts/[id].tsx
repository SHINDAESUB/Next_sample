//타입을 사용하기 위한 임포트
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from "next/head";
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'

type PostProps = {
    id: string
}

const Post: NextPage<PostProps> = (props) => {
    const { id } = props;
    const router = useRouter();

    if(router.isFallback) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <p>이 페이지는 정적 사이트 생성을 통해 빌드 시 실행된 페이지입니다.</p>
                <p>
                    {`/posts/${id}에 대응하는 페이지입니다.`}
                </p>
            </main>
        </div>
    )
}

//getStaticPaths는 생성한 페이지의 경로 파라미터의 조합을 반환한다.
// 이 파일은 pages/posts/[id].tsx 이므로, 경로 파라미터로서 id의 값을 변환해야 한다
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        {
            params:{
                id:'1',
            }
        },
        {
            params:{
                id:'2',
            }
        },
        {
            params:{
                id:'3',
            }
        },
    ]

    return { paths , fallback: false }
}

interface PostParams extends ParsedUrlQuery {
    id: string
}

// getStaticPaths 실행 후에 각 경로에 대해 getStaticProps 가 실행된다.
export const getStaticProps: GetStaticProps<PostProps, PostParams> = async (context) => {
    return {
        props: {
            id: context.params!['id'],
        }
    }
}

export default Post