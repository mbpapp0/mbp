import {
  Routes,
  Route,
  Navigate,

} from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import AdminUsers from './pages/AdminUsers'
import ClientScreen from './pages/ClientScreen'
import ClientUser from './pages/ClientUser'
import CreateUser from './pages/CreateUser'
import BranchUser from './pages/BranchUser'
import BranchUserIEGFree from './pages/BranchUserIEGFree'
import BranchUserIEGReduced from './pages/BranchUserIEGReduced'
import DataAdminMainScreen from './pages/DataAdminMainScreen'
import DataAdminIEGFree from './pages/DataAdminIEGFree'
import DataAdminIEGFreeEdit from './pages/DataAdminIEGFreeEdit'
import DataAdminIEGFreeEditPost from './pages/DataAdminIEGFreeEditPost'
import DataAdminIEGReducedPrice from './pages/DataAdminIEGReducedPrice'
import DataAdminIEGReducedPriceEdit from './pages/DataAdminIEGReducedPriceEdit'
import DataAdminIEGReducedPriceEditPost from './pages/DataAdminIEGReducedPriceEditPost'
import SysAdmin from './pages/SysAdmin'
import SysAdminCreateBranch from './pages/SysAdminCreateBranch'
import UserList from './pages/UserList';
import UserInfo from './pages/UserInfo';
import Report from './pages/Report'
import ClientInfo from './pages/ClientInfo';
import EditUser from './pages/EditUser';
import SysInfo from './Infopages/SysInfo';
import MasterRoster from './pages/MasterRoster';
import Roster from './pages/Roster';
import RosterMonth from './pages/RosterMonth';
import Excel from './pages/Excel';
import Account from './pages/Account';
import IEGForm from './pages/IEGForm'
import PdfComponent from './pages/PdfComponent.jsx'
import CreateClient from './pages/CreateClient.jsx'

export default function App() { 
  let user = JSON.parse(localStorage.getItem('user'));

  if(!user){
    return(
      <>
      <Header />
      <Login />
      </>
    )
  }

  return(
    <>
        <Header />
        <Routes>
          
          <Route path='/' element={ user.role == "Client" ? <ClientUser /> : user.role == "Branch User" ? <BranchUser /> : user.role == "Data Admin" ? <DataAdminMainScreen/> : user.role === "System Admin" ? <SysAdmin /> : <Login />}/>
          <Route path='/client/:id' element={<ClientScreen />} />
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/admins' element={<AdminUsers />} />
          <Route path='/branch' element={<BranchUser />} />
          <Route path='/branchiegfree' element={<BranchUserIEGFree />} />
          <Route path='/branchiegred' element={<BranchUserIEGReduced />} />
          <Route path='/datamain' element={<DataAdminMainScreen />} />
          <Route path='/datafree/:id' element={<DataAdminIEGFree />} />
          <Route path='/datafreeedit/:id' element={<DataAdminIEGFreeEdit />} />
          <Route path='/datafreeeditpost/:id' element={<DataAdminIEGFreeEditPost />} />
          <Route path='/datared/:id' element={<DataAdminIEGReducedPrice />} />
          <Route path='/datarededit/:id' element={<DataAdminIEGReducedPriceEdit />} />
          <Route path='/datarededitpost/:id' element={<DataAdminIEGReducedPriceEditPost />} />
          <Route path='/sys' element={<SysAdmin />} />
          <Route path='/branch/:id' element={<UserList />} />
          <Route path='/sysbranch' element={<SysAdminCreateBranch />} />
          <Route path='/createuser/:id' element={<CreateUser />} />
          <Route path='/users/:id' element={<UserInfo />} />
          <Route path='/clients/:id' element={<ClientInfo />} />
          <Route path='/edituser/:id' element={<EditUser />} />
          <Route path='/info' element={<SysInfo />} />
          <Route path='/roster/:id' element={<Roster />} />
          <Route path='/masterroster' element={<MasterRoster />} />
          <Route path='/rosterbymonth/:str' element={<RosterMonth />} />
          <Route path='/excel' element={<Excel />} />
          <Route path='/account/:id' element={<Account />} />
          <Route path='/print/:id' element={<IEGForm />} />
          <Route path='/pdf'  eelement={<PdfComponent />} />
          <Route path='/createclient/:id' element={<CreateClient />} />
        </Routes>
    </>
  )
}
