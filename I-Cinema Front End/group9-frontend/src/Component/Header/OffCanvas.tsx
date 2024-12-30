import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is included.

interface OffcanvasFiltersProps {
  filters: Filters;
  onFilterChange: (type: keyof Filters, value: string | number) => void;
  onClearFilters: () => void;
  onApplyFilters: (filters: Filters) => void;
}

export interface Filters {
  rating: number; // Rating is a single number (1-5)
  genre: string[];
  language: string[];
}

const OffcanvasFilters: React.FC<OffcanvasFiltersProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
  onApplyFilters,
}) => {
  return (
    <div
      className="offcanvas offcanvas-start text-bg-dark"
      tabIndex={-1}
      id="offcanvasWithBothOptions"
      aria-labelledby="offcanvasWithBothOptionsLabel"
      data-bs-scroll="true"
      data-bs-backdrop="true"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">Filter Options</h5>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        {/* Rating Dropdown */}
        <h6 className="mt-4">Rating</h6>
        <div className="dropdown mb-3">
          <button
            className="btn btn-secondary dropdown-toggle w-100"
            type="button"
            id="ratingDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filters.rating ? filters.rating : 'Select Rating'}
          </button>
          <ul className="dropdown-menu w-100" aria-labelledby="ratingDropdown">
            {Array.from({ length: 5 }, (_, i) => i + 1).map((rating) => (
              <li key={rating}>
                <button
                  className="dropdown-item"
                  onClick={() => onFilterChange('rating', rating)}
                >
                  {rating}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Genres Dropdown */}
        <h6>Genres</h6>
        <div className="dropdown mb-3">
          <button
            className="btn btn-secondary dropdown-toggle w-100"
            type="button"
            id="genreDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filters.genre.length > 0 ? filters.genre.join(', ') : 'Select Genres'}
          </button>
          <ul className="dropdown-menu w-100" aria-labelledby="genreDropdown">
            {['Action', 'Comedy', 'Drama', 'Sci-Fi', 'Thriller'].map((genre) => (
              <li key={genre}>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`genre-${genre}`}
                    checked={filters.genre.includes(genre)}
                    onChange={() => onFilterChange('genre', genre)}
                  />
                  <label className="form-check-label ms-2" htmlFor={`genre-${genre}`}>
                    {genre}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Languages Dropdown */}
        <h6>Languages</h6>
        <div className="dropdown mb-3">
          <button
            className="btn btn-secondary dropdown-toggle w-100"
            type="button"
            id="languageDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {filters.language.length > 0 ? filters.language.join(', ') : 'Select Languages'}
          </button>
          <ul className="dropdown-menu w-100" aria-labelledby="languageDropdown">
            {['English', 'Spanish', 'French', 'German', 'Italian'].map((language) => (
              <li key={language}>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id={`language-${language}`}
                    checked={filters.language.includes(language)}
                    onChange={() => onFilterChange('language', language)}
                  />
                  <label className="form-check-label ms-2" htmlFor={`language-${language}`}>
                    {language}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Apply and Clear buttons */}
      <div className="offcanvas-footer d-flex justify-content-between mt-4">
        <button className="btn btn-danger" data-bs-dismiss="offcanvas" onClick={onClearFilters}>Clear</button>
        <button className="btn btn-primary" data-bs-dismiss="offcanvas" onClick={() => onApplyFilters(filters)}>Apply</button>
      </div>
    </div>
  );
};

export default OffcanvasFilters;
