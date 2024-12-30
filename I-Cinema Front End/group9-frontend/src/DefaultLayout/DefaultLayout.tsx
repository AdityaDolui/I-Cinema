import {Outlet} from 'react-router-dom'
import React from 'react';
import Footer from '../Component/Footer/Footer'
import HeaderTwo from '../Component/Header/HeaderTwo'
import { Suspense, useState } from 'react';
import LoadingSpinner from '../Component/LoadingSpinner';

interface Filters {
  rating: number;
  genre: string[];
  language: string[];
}

const DefaultLayout: React.FC = () => {

  const[search,setSearch]=useState<string>('')

  const [filters, setFilters] = useState<Filters>({
    rating: 1, // default rating
    genre: [],
    language: [],
  });

  const handleSearchChange = (query: string) => {
    setSearch(query); // Update the search query
  };

  const onApplyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
    console.log("in DefaultLayout ",filters)
  };
  
    return (
      <div className='min-h-[90vh]'>
        {/* <Header/> */}
        <HeaderTwo searchQuery={search}  onSearchChange={handleSearchChange} onApplyFilters={onApplyFilters} />
        <main className='pb-14 lg:pb-0'>
        <div className="main-content">
        <Suspense fallback={<LoadingSpinner />}>
          {/* The Outlet will render the component based on the current route */}
          <Outlet context={{ search,filters}} />
        </Suspense>
      </div>
          {/* <Outlet /> This renders the child route's component */}
        </main>
        <Footer/>

      </div>
    );
  };

   export default DefaultLayout