import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { useInRouterContext, Link } from 'react-router-dom';

function Href() {
  const link = useInRouterContext() ? <Link to={"/console/users"}>列表2</Link> : <a href={"/console/users"}>列表2</a>;
  return <div>
    <a href="/console/users">列表</a>
    {link}
  </div>
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Href></Href>
  </React.StrictMode>,
)
