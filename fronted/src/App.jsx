import EmployeeGrid from './employee/EmployeeGrid';  // 새로 import

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <BrowserRouter>
        <div className='layout'>
          <HeaderPage toggleSidebar={toggleSidebar} />
          <div className='body-content'>
            <SideMenu isOpen={isSidebarOpen} />
            <div className='main'>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/board" element={<Board />} />
                <Route path="/employees" element={<EmployeeGrid />} /> {/* 직원관리 */}
              </Routes>
            </div>
          </div>
          <FooterPage />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
