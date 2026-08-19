// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { fetchCaseStudies } from './caseStudiesApi';

// export const fetchCaseStudies = createAsyncThunk(
//   'caseStudies/fetchCaseStudies',
//   async (_, { rejectWithValue }) => {
//     try {
//       const data = await fetchCaseStudiesApi();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message || 'Network failed');
//     }
//   }
// );

// const initialState = {
//   items: [],
//   status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
//   error: null,
//   selectedCategory: 'All',
//   searchQuery: '',
// };

// const caseStudiesSlice = createSlice({
//   name: 'caseStudies',
//   initialState,
//   reducers: {
//     setCategory(state, action) {
//       state.selectedCategory = action.payload;
//     },
//     setSearchQuery(state, action) {
//       state.searchQuery = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchCaseStudies.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(fetchCaseStudies.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.items = action.payload;
//       })
//       .addCase(fetchCaseStudies.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload || 'Something went wrong';
//       });
//   },
// });

// export const { setCategory, setSearchQuery } = caseStudiesSlice.actions;
// export default caseStudiesSlice.reducer;

// the commented code notworking



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCaseStudies as fetchCaseStudiesApi } from './caseStudiesApi';

export const fetchCaseStudies = createAsyncThunk(
  'caseStudies/fetchCaseStudies',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchCaseStudiesApi();
      return data;
    } catch (error) {
      return rejectWithValue(error.message || 'Network failed');
    }
  }
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
  selectedCategory: 'All',
  searchQuery: '',
};

const caseStudiesSlice = createSlice({
  name: 'caseStudies',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setSearchQuery(state, action) {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCaseStudies.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchCaseStudies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCaseStudies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Something went wrong';
      });
  },
});

export const { setCategory, setSearchQuery } = caseStudiesSlice.actions;
export default caseStudiesSlice.reducer;