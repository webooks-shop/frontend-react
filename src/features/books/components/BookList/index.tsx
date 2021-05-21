import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@app/store";
import BookCard from "@features/books/components/BookCard";
import { asyncGetBooks } from "@features/books/bookSlice";
import { BookListContainer } from "./styles";

const BookList = () => {
  const dispatch = useAppDispatch();
  const { books } = useAppSelector((state) => state.books);

  useEffect(() => {
    dispatch(asyncGetBooks(`filter`));
  }, [dispatch]);

  return (
    <BookListContainer>
      {books.map((book) => (
        <BookCard key={book.book_id} book={book} />
      ))}
    </BookListContainer>
  );
};

export default BookList;
