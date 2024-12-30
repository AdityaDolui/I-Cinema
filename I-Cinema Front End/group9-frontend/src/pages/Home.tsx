import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";          
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Bohurupi from '../assets/Bohurupi.avif';
import image2 from '../assets/image2.jpg';
import Moana2 from '../assets/Moana2.avif'
import image1 from '../assets/image1.png';
import batman from '../assets/Batman.webp'
import Carousel from '../Component/Carousel';
import Card from '../Component/Card/Card'
import RenderCard from '../Component/Card/RenderCard';
import { useOutletContext } from 'react-router-dom';
interface OutletContext {
  search: string;
   filters: {
    rating: number;
    genre: string[];
    language: string[];
  }
}

const Home: React.FC = () => {
  const { search,filters } = useOutletContext<OutletContext>()
  return (
    <div>
   <Carousel/>
   <RenderCard search={search} filters={filters}/>
  </div>
  );
};

export default Home;
