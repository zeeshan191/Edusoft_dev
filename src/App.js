import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TadmissionForm from './pages/Teachers/TadmissionForm';
import TadmissionReport from './pages/Teachers/TadmissionReport';
import ResponsiblityForm from './pages/Teachers/ResponsiblityForm';
import ResponsiblityReport from './pages/Teachers/ResponsiblityReport';
import Notice from './pages/Notice/Notice';
import Message from './pages/Notice/Message';
import ResultForm from './pages/Result/ResultForm';
import ResultReport from './pages/Result/ResultReport';
import AdmissionForm from './pages/Student/AdmissionForm';
import AdmissionReport from './pages/Student/AdmissionReport';
import Teacher from './pages/Exit/Teacher';
import PromotionReport from './pages/Student/PromotionReport';
import Student from './pages/Exit/Student';
import StudentExitReport from './pages/Exit/StudentExitReport';
import TeachersExitReport from './pages/Exit/TeachersExitReport';

function App() {
  return (
    <Router>
      <Sidebar />
     
      <Switch>
      <Route path='/Exit/Student' exact component={Student} /> 
        <Route path='/Student/AdmissionForm' exact component={AdmissionForm} /> 
        <Route path='/Student/AdmissionReport' exact component={AdmissionReport} /> 
        <Route path='/Exit/Teacher' exact component={Teacher} /> 
        <Route path='/Exit/StdERep' exact component={StudentExitReport} /> 
        <Route path='/Exit/TeachERep' exact component={TeachersExitReport} /> 
        <Route path='/Student/PromotionReport' exact component={PromotionReport} />
        <Route path='/Teachers/TAdmissionForm' exact component={TadmissionForm} /> 
        <Route path='/Teachers/TadmissionReport' exact component={TadmissionReport} /> 
        <Route path='/Teachers/ResponsiblityReport' exact component={ResponsiblityReport} />
        <Route path='/Teachers/ResponsiblityForm' exact component={ResponsiblityForm} />
        <Route path='/Notice/Notice' exact component={Notice} />
        <Route path='/Notice/Message' exact component={Message} />
        <Route path='/Result/ResultForm' exact component={ResultForm} />
        <Route path='/Result/ResultReport' exact component={ResultReport} />
      </Switch>
    </Router>
  );
}

export default App;
