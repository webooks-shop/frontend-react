import { FC } from "react";
import { Book } from "@features/books/bookSlice";
import {
  BookCardContainer,
  BookSection,
  CoverImage,
  BookInfo,
  BookTitle,
  BookDescription,
} from "./styles";

interface Props {
  book: Book;
}

const BookCard: FC<Props> = ({ book }) => {
  const { cover_image, title, total, front, back, rating } = book;
  return (
    <BookCardContainer>
      <BookSection>
        <CoverImage src={cover_image} alt="book_cover_img" />
        <BookInfo>
          <BookTitle>{title}</BookTitle>
          <BookDescription>
            추천 {total}명 (프론트 {front} / 백엔드 {back})
          </BookDescription>
          <BookDescription>평점 {rating}</BookDescription>
        </BookInfo>
      </BookSection>
      <section>
        <h2>추천시기</h2>
        <div></div>
      </section>
    </BookCardContainer>
  );
};

export default BookCard;
