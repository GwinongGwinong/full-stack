import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter, BrowserRouter as Router} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import HolidayPackage from "./pages/HolidayPackage";
import Layout from "./components/Layout";
import DetailPackage from "./pages/DetailPackage";
import DetailBuilding from "./pages/DetailBuilding";
import DetailMoment from "./pages/DetailMoment";
import DetailHost from "./pages/DetailHost";
import SignUp from "./pages/SignUp";
import SignIn from "./components/SignIn";
import axios from 'axios';

import { RecoilRoot } from "recoil";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/holidaypackage",
    element: <HolidayPackage />,
  },
  {
    path: "/detailpackage",
    element: <DetailPackage />,
  },
  {
    path: "/detailbuilding",
    element: <DetailBuilding />,
  },
  {
    path: "/detailmoment",
    element: <DetailMoment />,
  },
  {
    path: "/detailhost",
    element: <DetailHost />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  { 
    path: "/signin",
    element: <SignIn />,
  },
  {  path: "/signin",
    element: <SignIn/>,
  }
]);


function App() {
  const [testData, setTestData] = useState('')

  useEffect(() => {
    axios.get('/api/test')
        .then(response => setTestData(response.data))
        .catch(error => console.log(error))
  }, []);

  // TODO: 어떻게 백엔드 데이터를 프론트로 전달하는지 모르겠음 - 프론트 지식 부족
  // return (
  //       <RecoilRoot>
  //           <RouterProvider router={router}>
  //             {testData}
  //           </RouterProvider>
  //       </RecoilRoot>
  // );

  // 백엔드에서 보낸 데이터 출력
  return (
      <div>
        백엔드에서 가져온 데이터입니다 : {testData}
      </div>
  );
}

export default App;
