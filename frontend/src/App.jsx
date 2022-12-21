import { Routes, Route, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Category from './pages/Category';
import Search from './pages/Search';
import Listing from './pages/Listing';
import Upload from './pages/Upload';
import UserListings from './pages/UserListings';
import Error from './pages/Error';
import AboutPage from './pages/AboutPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import BillingPage from './pages/BillingPage';
import Faqs from './pages/Faqs';
import Safety from './pages/Safety';
import Contact from './pages/Contact';

export default function App() {

  const { user } = useAuthContext();


  return(
   <>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />}/>
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />}/>
        <Route path='/category/:category' element={<Category />} />
        <Route path='/search/:term' element={<Search />} />
        <Route path='/listing/:id' element={<Listing />} />
        <Route path='/account/:id' element={<UserListings />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/privacy' element={<PrivacyPage />} />
        <Route path='/terms' element={<TermsPage />} />
        <Route path='/billing' element={<TermsPage />} />
        <Route path='/faqs' element={<TermsPage />} />
        <Route path='/safety' element={<TermsPage />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/createlisting' element={user ? <Upload /> : <Navigate to='/login' />} />
        <Route path='*' element={<Error />} />
      </Routes>
    <Footer />
   </>  
  )
}