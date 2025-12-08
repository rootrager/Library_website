import { Book } from "@/types/book";
import { Download, ExternalLink, BookOpen } from "lucide-react";
import Image from "next/image";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border-2 border-black bg-white transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,225,162,1)]">
      
      {/* --- بخش ۱: عکس جلد --- */}
      <div className="relative h-64 w-full bg-slate-100 p-4 flex items-center justify-center border-b-2 border-black overflow-hidden">
        
        {/* پترن پس‌زمینه */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>

        {/* بج دسته‌بندی */}
        <span className="absolute top-3 right-3 rounded-full border border-black bg-mint px-3 py-1 text-xs font-bold text-amethyst shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10 uppercase tracking-wider">
          {book.category}
        </span>
        
        {/* عکس */}
        {book.coverUrl ? (
             <div className="relative h-48 w-32 shadow-2xl rotate-3 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-105">
               <Image 
                 src={book.coverUrl} 
                 alt={book.title}
                 fill
                 className="object-cover border border-black rounded-r-sm"
               />
             </div>
        ) : (
          <BookOpen className="h-16 w-16 text-gray-400" />
        )}
      </div>

      {/* --- بخش ۲: اطلاعات و دکمه‌ها (این بخش توی عکست نبود) --- */}
      <div className="flex flex-1 flex-col p-5 bg-white">
        <h3 className="mb-1 text-xl font-black uppercase leading-tight text-amethyst line-clamp-2">
          {book.title}
        </h3>
        <p className="mb-4 text-sm font-bold text-ocean">{book.author}</p>
        
        <p className="mb-6 text-sm text-gray-600 line-clamp-3 flex-1 leading-relaxed">
          {book.description}
        </p>

        {/* دکمه دانلود */}
        <div className="mt-auto flex gap-3">
          <a 
            href={book.downloadUrl}
            download
            className="flex flex-1 items-center justify-center gap-2 rounded-lg border-2 border-black bg-amethyst py-2.5 text-sm font-bold text-white transition-all active:translate-y-0.5 hover:bg-ocean hover:shadow-lg cursor-pointer"
          >
            <Download size={16} />
            Download
          </a>
        </div>
      </div>
    </article>
  );
}