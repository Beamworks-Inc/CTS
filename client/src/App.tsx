import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import MainLayout from 'layout';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ProjectListPage from 'pages/ProjectListPage';

const EZRouting = () => {
  const paths = ['/', '/login', '/register', '/project-list', 'error'];
  return (
    <>
      <h1>Easy Routing!</h1>
      {paths.map(path => (
        <h1>
          <Link to={path}>{path}</Link>
        </h1>
      ))}
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<EZRouting />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/project-list" element={<ProjectListPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
