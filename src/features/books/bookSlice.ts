import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AsyncStatus } from "@constants/status";

axios.defaults.baseURL = process.env.REACT_APP_DEV_URL;

export interface Response {
  books: Book[];
  groups: number[];
}

export interface Book {
  book_id: number;
  title: string;
  cover_image: string;
  total: number;
  back: number;
  front: number;
  rating: number;
  recommmend: { [key: string]: number };
}

export interface IBook {
  books: Book[];
  status: AsyncStatus;
  error: string | null | undefined;
}

export const initialState: IBook = {
  books: [],
  status: AsyncStatus.IDLE,
  error: null,
};

export const asyncGetBooks = createAsyncThunk<Response, string>(
  `book/fetchBooks`,
  async (query, thunkApi) => {
    try {
      const { data } = await axios.get<Response>(`/${query}`);
      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err);
    }
  }
);

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(asyncGetBooks.pending, (state: IBook) => {
        state.status = AsyncStatus.PENDING;
      })
      .addCase(
        asyncGetBooks.fulfilled,
        (state: IBook, action: PayloadAction<Response>) => {
          state.books = state.books.concat(action.payload.books);
          state.status = AsyncStatus.SUCCESS;
          state.error = null;
        }
      )
      .addCase(asyncGetBooks.rejected, (state: IBook, action) => {
        state.status = AsyncStatus.FAILURE;
        state.error = action.error.message;
      });
  },
});

export const {} = bookSlice.actions;

export default bookSlice.reducer;
