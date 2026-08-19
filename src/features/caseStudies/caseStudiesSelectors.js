import { createSelector } from '@reduxjs/toolkit';

export const selectCaseStudiesState = (state) => state.caseStudies;

export const selectAllCaseStudies = (state) => state.caseStudies.items;
export const selectCaseStudiesStatus = (state) => state.caseStudies.status;
export const selectCaseStudiesError = (state) => state.caseStudies.error;
export const selectSelectedCategory = (state) => state.caseStudies.selectedCategory;
export const selectSearchQuery = (state) => state.caseStudies.searchQuery;

// Dynamic categories list based on fetched items
export const selectCategories = createSelector(
  [selectAllCaseStudies],
  (items) => {
    const categories = Array.from(new Set(items.map((item) => item.category)));
    return ['All', ...categories];
  }
);

// Advanced Memoized Selector for filtering by Category & Search Query
export const selectFilteredCaseStudies = createSelector(
  [selectAllCaseStudies, selectSelectedCategory, selectSearchQuery],
  (items, selectedCategory, searchQuery) => {
    return items.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }
);

export const selectVisibleCount = createSelector(
  [selectFilteredCaseStudies],
  (filteredItems) => filteredItems.length
);