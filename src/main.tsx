import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Link } from 'react-router-dom';

function Href() {
  return <div>
    <a href="/console/users">列表</a>
    {/* <Link to={"/console/users"}>列表2</Link> */}
  </div>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Href></Href>
  </React.StrictMode>,
)
