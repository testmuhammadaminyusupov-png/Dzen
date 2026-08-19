import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  features: [
    {
      id: "senior-engineers",
      title: "Senior Engineers",
      desc: "Top 5% vetted developers with real production experience",
    },
    {
      id: "fast-delivery",
      title: "Fast Delivery",
      desc: "Rapid execution with optimized workflows",
    },
    {
      id: "scalable-teams",
      title: "Scalable Teams",
      desc: "Easily scale teams based on project needs",
    },
    {
      id: "secure-by-design",
      title: "Secure by Design",
      desc: "Security-first architecture and implementation",
    },
  ],
  activeFeatureId: "senior-engineers",
};

const whyChooseUsSlice = createSlice({
  name: "whyChooseUs",
  initialState,
  reducers: {
    setActiveFeatureId(state, action) {
      state.activeFeatureId = action.payload;
    },
  },
});

export const { setActiveFeatureId } = whyChooseUsSlice.actions;

export const selectWhyChooseUsFeatures = (state) => state.whyChooseUs.features;
export const selectWhyChooseUsActiveId = (state) =>
  state.whyChooseUs.activeFeatureId;

export default whyChooseUsSlice.reducer;

