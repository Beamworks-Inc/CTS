import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from 'pages/LoginPage';
import MainLayout from 'layout';

function App() {
  return (
    <BrowserRouter>
      {/* <Box sx={{ display: 'flex' }}> */}
      {/* <CssBaseline />
        <AppBar />
        <Drawer /> */}
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
      {/* </Box> */}
    </BrowserRouter>
  );
}

export default App;
