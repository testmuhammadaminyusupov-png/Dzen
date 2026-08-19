import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchCaseStudies,
  setCategory,
  setSearchQuery,
} from './caseStudiesSlice';
import {
  selectFilteredCaseStudies,
  selectCaseStudiesStatus,
  selectCaseStudiesError,
  selectSelectedCategory,
  selectSearchQuery,
  selectCategories,
  selectVisibleCount,
} from './caseStudiesSelectors';

export const CaseStudiesBoard = () => {
  const dispatch = useDispatch();

  const caseStudies = useSelector(selectFilteredCaseStudies);
  const status = useSelector(selectCaseStudiesStatus);
  const error = useSelector(selectCaseStudiesError);
  const selectedCategory = useSelector(selectSelectedCategory);
  const searchQuery = useSelector(selectSearchQuery);
  const categories = useSelector(selectCategories);
  const visibleCount = useSelector(selectVisibleCount);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCaseStudies());
    }
  }, [status, dispatch]);

  const handleRetry = () => {
    dispatch(fetchCaseStudies());
  };

  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Case Studies</h2>
        <p className="text-gray-600">Explore our latest engineering and design achievements.</p>
      </div>

      {/* Controls: Filter Chips & Search Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => dispatch(setCategory(cat))}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => dispatch(setSearchQuery(e.target.value))}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Counter */}
      {status === 'succeeded' && (
        <p className="text-sm text-gray-500 mb-4">
          Showing <span className="font-semibold text-gray-800">{visibleCount}</span> projects
        </p>
      )}

      {/* Loading Skeleton */}
      {status === 'loading' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="p-6 border border-gray-200 rounded-xl animate-pulse bg-gray-50">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      )}

      {/* Error State with Retry Button */}
      {status === 'failed' && (
        <div className="text-center py-12 bg-red-50 rounded-xl border border-red-200">
          <p className="text-red-600 font-medium mb-4">Error: {error}</p>
          <button
            onClick={handleRetry}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow"
          >
            Retry Connection
          </button>
        </div>
      )}

      {/* Empty State */}
      {status === 'succeeded' && caseStudies.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl">
          <p className="text-gray-500">No case studies found matching your criteria.</p>
        </div>
      )}

      {/* Grid of Cards */}
      {status === 'succeeded' && caseStudies.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((item) => (
            <div
              key={item.id}
              className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400">{item.year}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.summary}</p>
              </div>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-800 text-left">
                View Project &rarr;
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};