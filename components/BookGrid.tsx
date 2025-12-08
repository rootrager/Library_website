import { BookCard, Book } from "./BookCard";

interface BookGridProps {
  books: Book[];
  emptyMessage?: string;
}

export function BookGrid({ books, emptyMessage }: BookGridProps) {
  const hasResults = books.length > 0;

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      {hasResults ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center text-sm text-gray-500">
          <p>{emptyMessage ?? "No books match your search. Try different filters."}</p>
        </div>
      )}
    </section>
  );
}


