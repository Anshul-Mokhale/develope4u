import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Loader from './common/Loader';
import DefaultLayout from './layout/DefaultLayout'; // Existing dashboard layout
import LandingLayout from './layout/LandingLayout'; // New layout for landing pages
// Dashboard page components
import PageTitle from './components/PageTitle';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import Calendar from './pages/Calendar';
import Chart from './pages/Chart';
import ECommerce from './pages/Dashboard/ECommerce';
import FormElements from './pages/Form/FormElements';
import FormLayout from './pages/Form/FormLayout';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Tables from './pages/Tables';
import Alerts from './pages/UiElements/Alerts';
import Buttons from './pages/UiElements/Buttons';
import Home from './Landing/Home';
import About from './Landing/About';
import Contact from './Landing/Contact';
import Privacy from './Landing/Privacy';
import Terms from './Landing/Terms';
import Refund from './Landing/Refund';
import { RootState } from './redux/store'; // Assuming you have a redux store set up
import Admin from './pages/Dashboard/Admin';
import AdminSignin from './pages/Authentication/AdminSignin';

// Protected route component using Redux state for authentication
const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {/* Landing Page Routes */}
      <Route path="/" element={<LandingLayout />}>
        <Route index element={
          <>
            <PageTitle title="Develope4u - Developing Dreams Into Digital Reality" />
            <Home />
          </>
        } />
        <Route path='/about' element={
          <>
            <PageTitle title="About | Develope4u - Developing Dreams Into Digital Reality" />
            <About />
          </>
        } />
        <Route path='/contact' element={
          <>
            <PageTitle title="Contact | Develope4u - Developing Dreams Into Digital Reality" />
            <Contact />
          </>
        } />
        <Route path='/privacy-policy' element={
          <>
            <PageTitle title="Privacy Policy | Develope4u - Developing Dreams Into Digital Reality" />
            <Privacy />
          </>
        } />
        <Route path='/terms-and-conditions' element={
          <>
            <PageTitle title="Terms and Conditions | Develope4u - Developing Dreams Into Digital Reality" />
            <Terms />
          </>
        } />
        <Route path='/refund-policy' element={
          <>
            <PageTitle title="Refund Policy | Develope4u - Developing Dreams Into Digital Reality" />
            <Refund />
          </>
        } />
      </Route>

      <Route path="/sign-up" element={
        <>
          <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
          <SignUp />
        </>
      } />
      <Route path="/admin/sign-in" element={
        <>
          <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
          <AdminSignin />
        </>
      } />
      <Route path="/sign-in" element={
        <>
          <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
          <SignIn />
        </>
      } />

      {/* Dashboard Routes */}
      <Route path="/*" element={<DefaultLayout />}>
        <Route
          path='dashboard'
          element={
            <ProtectedRoute>
              <>
                <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <ECommerce />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path='admin/dashboard'
          element={
            <ProtectedRoute>
              <>
                <PageTitle title="Admin Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Admin />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="calendar"
          element={
            <ProtectedRoute>
              <>
                <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Calendar />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="profile"
          element={
            <ProtectedRoute>
              <>
                <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Profile />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="forms/form-elements"
          element={
            <ProtectedRoute>
              <>
                <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormElements />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="forms/form-layout"
          element={
            <ProtectedRoute>
              <>
                <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <FormLayout />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="tables"
          element={
            <ProtectedRoute>
              <>
                <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Tables />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="settings"
          element={
            <ProtectedRoute>
              <>
                <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Settings />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="chart"
          element={
            <ProtectedRoute>
              <>
                <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Chart />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="ui/alerts"
          element={
            <ProtectedRoute>
              <>
                <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Alerts />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="ui/buttons"
          element={
            <ProtectedRoute>
              <>
                <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
                <Buttons />
              </>
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
