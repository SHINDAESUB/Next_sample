import Link from 'next/link'
import Layout from '../components/Layout'
import {CountButon} from "../components/CountButton";

const label: string = '컨테이너 컴포넌트를 호출한다';
const maximum : number = 10;
const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
    <CountButon label={label} maximum={maximum}/>
  </Layout>
)

export default IndexPage
