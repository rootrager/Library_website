"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import BookCard from "@/components/BookCard";
import { BOOKS } from "@/lib/data";

const CATEGORIES = [
  "All", 
  "Hard Sci-Fi", 
  "Space Opera", 
  "Dystopian AI", 
  "Philosophical", 
  "Fantasy Sci-Fi", 
  "Space Adventure", 
  "Afro-Futurism", 
  "Bio Sci-Fi", 
  "Modern Sci-Fi"
];

// 👇 این خط خیلی مهم است، احتمالا این پاک شده بود
export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBooks = BOOKS.filter((book) => {
    const matchesSearch = 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === "All" || book.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // 👇 دستور return باید داخل تابع Home باشد
  return (
    <main 
      className="min-h-screen pb-20 bg-fixed bg-cover bg-center"
      style={{ 
        backgroundImage: `linear-gradient(to bottom, rgba(13, 4, 45, 0.92), rgba(13, 4, 45, 0.85)), url('/header-bg7.jpeg')`
      }}
    >
      <Hero 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={CATEGORIES}
      />

      <section className="mx-auto mt-16 max-w-7xl px-4 relative z-10">
        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
            <h2 className="text-2xl font-bold text-gray-300 font-orbitron">No Signal Detected...</h2>
            <p className="text-gray-400 mt-2">Try adjusting your search filters.</p>
          </div>
        )}
      </section>
    </main>
  );
}