import React from "react";
import type { Book } from "../types/book";
import { Download, ExternalLink, BookOpen } from "lucide-react";

interface BookCardProps {
  book: Book;
}

function BookCard({ book }: BookCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border-2 border-black bg-white transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      {/* بخش بالای کارت: کاور و بج */}
      <div className="relative h-48 w-full bg-gray-100 p-4 flex items-center justify-center border-b-2 border-black">
        {/* بج دسته‌بندی */}
        <span className="absolute top-3 right-3 rounded-full border border-black bg-yellow-300 px-3 py-1 text-xs font-bold text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
          {book.category}
        </span>
        
        {/* جایگاه عکس */}
        {book.coverUrl ? (
             <div className="relative h-32 w-24 shadow-md rotate-3 transition-transform group-hover:rotate-0">
               {/* اینجا فعلا دیو خالی میزاریم، بعدا Image نکست جی‌اس */}
               <div className="w-full h-full bg-blue-500 border border-black" />
             </div>
        ) : (
          <BookOpen className="h-16 w-16 text-gray-400" />
        )}
      </div>

      {/* بخش پایین: اطلاعات */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="mb-1 text-lg font-black uppercase leading-tight text-black line-clamp-2">
          {book.title}
        </h3>
        <p className="mb-4 text-sm font-medium text-gray-500">{book.author}</p>
        
        <p className="mb-4 text-sm text-gray-700 line-clamp-3 flex-1">
          {book.description}
        </p>

        {/* دکمه‌ها */}
        <div className="mt-auto flex gap-2">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-black bg-blue-600 py-2 text-sm font-bold text-white transition-transform active:translate-y-0.5 hover:bg-blue-700">
            <Download size={16} />
            Download
          </button>
          <button className="flex items-center justify-center rounded-lg border-2 border-black bg-white px-3 py-2 text-black transition-colors hover:bg-gray-100">
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
    </article>
  );
}

export { BookCard };
export type { Book };
export default BookCard;