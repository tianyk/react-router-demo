import { BrowserRouter, Link, Navigate, Route, useParams, Routes, Outlet, Location } from 'react-router-dom';

function UserList() {
  return <ul>
    <li><Link to="100">{'u100'}</Link></li>
    <li><Link to="101">{'u101'}</Link></li>
    <li><Link to="102">{'u102'}</Link></li>
    <li><Link to="103">{'u103'}</Link></li>
    <li><Link to="104">{'u104'}</Link></li>
    <li><Link to="105">{'u105'}</Link></li>
    <li><Link to="106">{'u106'}</Link></li>
    <li><Link to="107">{'u107'}</Link></li>
  </ul>
}


function UserProfile() {
  const params = useParams();

  return <div>
    <h1>用户详情</h1>
    <p>用户ID: {params.id}</p>
  </div>
}

function Home() {
  return <div>
    <h1>Home</h1>
    <Link to={"users"}>用户列表</Link>
    <Outlet></Outlet>
  </div>
}


function About() {
  return <div>
    <h1>About</h1>
  </div>
}


function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to={"/console"} replace></Navigate>} />

      <Route path="/console" element={<Home />}>
        <Route path="users" element={<UserList />} />
        <Route path="users/:id" element={<UserProfile />} />
      </Route>

      <Route path='/about' element={<About></About>}></Route>
    </Routes>
  </BrowserRouter>
}

export default App
