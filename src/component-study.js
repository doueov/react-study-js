import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

// 컴포넌트
function MyComponent() {
    return <div>Hello</div>
}

// props
function MyPropsComponent(props) {
    return <div>{JSON.stringify(props)}</div>
}

// props로 name 값을 전달받아서 출력하는 NamePrint 컴포넌트 정의
function NamePrint(props) {
    return <div>{props.name} {props.age}</div>
}

root.render(<div>
    {MyPropsComponent({ a: "abc", b: 1234, c: { a: 100 } })}
    <MyPropsComponent a='abc' b={1234} c={{ a: 100 }} />
    <NamePrint name="doyeon" age={19} obj={{a : 100}} fn={() => {}}/>
</div>)