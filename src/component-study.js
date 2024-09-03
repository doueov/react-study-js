import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

// 컴포넌트, props, useState
function MyComponent() {
    return <div>Hello</div>
}

function MyPropsComponent(props) {
    return <div>{JSON.stringify(props)}</div>
}

root.render(<div>
    {MyPropsComponent({ a: "abc", b: 1234, c: { a: 100 } })}
    <MyPropsComponent a='abc' b={1234} c={{ a: 100 }} />
</div>)