import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from 'react-router-dom'; // Import NavLink
import OffcanvasFilters from './OffCanvas';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onApplyFilters: (filters: Filters) => void;
}

interface Filters {
  rating: number; // Rating is a single number (1-5)
  genre: string[];
  language: string[];
}

const Header: React.FC<HeaderProps> = ({ searchQuery, onSearchChange, onApplyFilters }) => {
  const [filters, setFilters] = useState<Filters>({
    rating: 1, // Default to null (no rating selected)
    genre: [],
    language: [],
  });

  // Handle the changes for rating, genre, and language
  const handleFilterChange = (type: keyof Filters, value: string | number) => {
    setFilters((prevFilters) => {
      const newFilters = { ...prevFilters };

      if (type === 'rating') {
        newFilters.rating = value as number;
      } else if (type === 'genre') {
        const filterArray = newFilters.genre;
        if (filterArray.includes(value as string)) {
          newFilters.genre = filterArray.filter((item) => item !== value);
        } else {
          newFilters.genre = [...filterArray, value as string];
        }
      } else if (type === 'language') {
        const filterArray = newFilters.language;
        if (filterArray.includes(value as string)) {
          newFilters.language = filterArray.filter((item) => item !== value);
        } else {
          newFilters.language = [...filterArray, value as string];
        }
      }

      return newFilters;
    });
  };

  // Clear all filters
  const handleClearFilters = () => {
    setFilters({ rating: 1, genre: [], language: [] });
    onApplyFilters({ rating: 1, genre: [], language: [] });
  };

  // Apply the filters
  const handleApplyFilters = () => {
    onApplyFilters(filters);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark py-3" data-bs-theme="dark">
        <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <h2 className="navbar-brand text-light me-3">I Cinema</h2>
            <ul className="navbar-nav mb-1 mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) => `nav-link text-light ${isActive ? 'active' : ''}`}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ms-2">
                {/* <NavLink
                  to="/link"
                  className={({ isActive }) => `nav-link text-light ${isActive ? 'active' : ''}`}
                >
                  Link
                </NavLink> */}
              </li>
            </ul>
          </div>

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
            <input
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-secondary ms-2"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBothOptions"
              aria-controls="offcanvasWithBothOptions"
            >
              Filter
            </button>
          </ul>
        </div>
      </nav>

      {/* Offcanvas with Backdrop and Scrolling */}
      {/* Offcanvas component for filters */}
      <OffcanvasFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
        onApplyFilters={handleApplyFilters}
      />
    </>
  );
};

export default Header;
