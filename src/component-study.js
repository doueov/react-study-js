import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

// 컴포넌트, props, useState
function MyComponent() {
    return <div>Hello</div>
}

root.render(<div>
    <MyComponent />
</div>)