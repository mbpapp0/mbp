import {
  Routes,
  Route,
  Navigate,

} from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login'
import ClientScreen from './pages/ClientScreen'
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
          
          <Route path='/' element={user.role == "Branch User" ? <BranchUser /> : user.role == "Data Admin" ? <DataAdminMainScreen/> : user.role === "System Admin" ? <SysAdmin /> : ''}/>
          <Route path='/client/:id' element={<ClientScreen />} />
          <Route path='/login' element={<Login />} />
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
          {/* <Route path='/report' element={<Report  />} /> */}
        </Routes>
    </>
  )
}