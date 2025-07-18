import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Quiz from './pages/Quiz';
import Dashboard from './pages/Dashboard';
import Roadmap from './pages/Roadmap';
import { useAuth } from './context/AuthContext';
import Home from './pages/Home';
import AboutUs from './pages/Aboutus';

function App() {

  const { authState } = useAuth();

  return (
    <div className="min-h-screen font-sans text-gray-800">

      <Navbar />
      
      <main className="container min-h-screen w-screen mx-auto px-4 pt-8">
        <Routes>
          
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={!authState.isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path="/signup" element={!authState.isAuthenticated ? <Signup /> : <Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={authState.isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/quiz" element={authState.isAuthenticated ? <Quiz /> : <Navigate to="/login" />} />
          <Route path="/roadmap/:career" element={authState.isAuthenticated ? <Roadmap /> : <Navigate to="/login" />} />
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
