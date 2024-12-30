import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the structure of the state
interface BookingState {
  seatIds: number[];  // Store the selected seat IDs
  amount: number;     // Store the total price
}

const initialState: BookingState = {
  seatIds: [],
  amount: 0,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    // Action to add seats (1 or 2 at a time)
    addSeat: (state, action: PayloadAction<number[]>) => {
      // Append the new seats to the existing ones
      state.seatIds=action.payload;
    },
    // Action to remove all selected seats and add new ones
    removeSeat: (state) => {
      // Replace the seatIds with the new ones provided
      state.seatIds = [];
    },
    // Action to update the total amount (based on the number of seats selected)
    updateAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});

export const { addSeat, removeSeat, updateAmount } = bookingSlice.actions;

export default bookingSlice.reducer;
