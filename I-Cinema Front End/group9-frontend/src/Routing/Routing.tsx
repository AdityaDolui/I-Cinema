
import { createBrowserRouter,BrowserRouter, RouterProvider, Route, createRoutesFromElements, Routes } from 'react-router-dom';
import DefaultLayout from '../DefaultLayout/DefaultLayout';
import React from 'react'
import Home from '../pages/Home';
import About from '../pages/About'
import MovieDetails from '../pages/MovieDetails';
import BookSeat from '../pages/BookSeat';
import TheatreDetails from '../pages/TheatreDetails';
import Payment from '../pages/Payment';


 const Routesp : any = ()=>{

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<DefaultLayout />}> {/* Default layout for most pages */}
        {/* <Route path='' element={<Home />} /> */}
        {/* <Route path='about' element={<About />}>
          <Route path='adi' element={<Adit />} />
        </Route> */}
        {/* <Route path='userelement/:id' element={<UserElement />} /> */}
        {/* <Route path='github' loader={gitHubInfo} element={<Github />} /> */}
        {/* <Route path='contact' element={<Contact />}>
          
        </Route> */}
      </Route>
      
    //   {/* Routes that don't need the default layout */}
    //   <Route path='/login' element={<NoLayout />}>
    //     <Route path='' element={<Login />} />
    //   </Route>
  
    //   <Route path='/signup' element={<NoLayout />}>
    //     <Route path='' element={<Signup />} />
    //   </Route>
    )
  );
  return (
<BrowserRouter>
   <Routes>
      <Route path='/' element={<DefaultLayout />}> {/* Default layout for most pages */}
        <Route path='' element={<Home />} />
        <Route path="moviedetails/:id" element={<MovieDetails/>} />
        <Route path="theatre/:id" element={<TheatreDetails/>}/>
       
        <Route path='about' element={<BookSeat/>}/>        
       </Route>
       
       <Route path="show/:id" element = {<BookSeat/>} />
       <Route path="payment" element = {<Payment/>} />
    </Routes>
  </BrowserRouter>
  )
    }

export default Routesp;