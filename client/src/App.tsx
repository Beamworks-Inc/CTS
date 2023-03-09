import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from 'layout';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
