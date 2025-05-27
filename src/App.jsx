import {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import {login,logout} from "./store/authFile"
import {Header, Footer} from './components'
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch()
  
  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if(userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet/>
      </main>
      <Footer />
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-primary-200 h-12 w-12"></div>
        <div className="flex-1 space-y-2 py-1">
          <div className="h-4 bg-primary-200 rounded w-3/4"></div>
          <div className="h-4 bg-primary-200 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}

export default App;