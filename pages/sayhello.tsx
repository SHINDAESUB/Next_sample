import { useState, useEffect } from "react";

function Sayhello(){
    // 내부에서 상태를 가지므로 useState
    const [data, setData] = useState({name:''});
    // 외부 API에 요청하는 것은 부가 작용이므로 useEffect에서 처리
    useEffect(() => {
      fetch('api/hello')
          .then((res) => res.json())
          .then((profile) => setData(profile))
    },[])

    return <div>hello {data.name}</div>
}

export default Sayhello;