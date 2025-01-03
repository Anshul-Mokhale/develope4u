import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from './common/Loader';
import DefaultLayout from './layout/DefaultLayout';  // Existing dashboard layout
import LandingLayout from './layout/LandingLayout';  // New layout for landing pages

// Landing page components


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
      <Route
        path="/sign-up"
        element={
          <>
            <PageTitle title="Signup | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignUp />
          </>
        }
      />
      <Route
        path="/sign-in"
        element={
          <>
            <PageTitle title="Signin | TailAdmin - Tailwind CSS Admin Dashboard Template" />
            <SignIn />
          </>
        }
      />
      {/* Dashboard Routes */}
      <Route path="/*" element={<DefaultLayout />}>
        <Route
          path='dashboard'
          element={
            <>
              <PageTitle title="eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <ECommerce />
            </>
          }
        />
        <Route
          path="calendar"
          element={
            <>
              <PageTitle title="Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Calendar />
            </>
          }
        />
        <Route
          path="profile"
          element={
            <>
              <PageTitle title="Profile | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Profile />
            </>
          }
        />
        <Route
          path="forms/form-elements"
          element={
            <>
              <PageTitle title="Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormElements />
            </>
          }
        />
        <Route
          path="forms/form-layout"
          element={
            <>
              <PageTitle title="Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <FormLayout />
            </>
          }
        />
        <Route
          path="tables"
          element={
            <>
              <PageTitle title="Tables | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Tables />
            </>
          }
        />
        <Route
          path="settings"
          element={
            <>
              <PageTitle title="Settings | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Settings />
            </>
          }
        />
        <Route
          path="chart"
          element={
            <>
              <PageTitle title="Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Chart />
            </>
          }
        />
        <Route
          path="ui/alerts"
          element={
            <>
              <PageTitle title="Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Alerts />
            </>
          }
        />
        <Route
          path="ui/buttons"
          element={
            <>
              <PageTitle title="Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template" />
              <Buttons />
            </>
          }
        />


      </Route>
    </Routes>
  );
}

export default App;
