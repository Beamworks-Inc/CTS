import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      {/* <Box sx={{ display: 'flex' }}> */}
      {/* <CssBaseline />
        <AppBar />
        <Drawer /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        {/* 상단에 위치하는 라우트들의 규칙을 모두 확인, 일치하는 라우트가 없는 경우 처리 */}
      </Routes>
      {/* </Box> */}
    </BrowserRouter>
  );
}

export default App;
