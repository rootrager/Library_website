import React from "react";
import { Search } from "lucide-react";

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (val: string) => void;
  selectedCategory: string;
  setSelectedCategory: (val: string) => void;
  categories: string[];
}

// 👇 اینجا اصلاح شد: ورودی‌ها رو کامل نوشتیم
function Hero({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
}: HeroProps) {
  return (
    <section 
      className="relative w-full border-b-4 border-black px-4 py-24 text-center text-white bg-cover bg-center bg-no-repeat bg-amethyst"
      style={{ 
        backgroundImage: "url('/header-bg8.gif')", // مطمئن شو اسم فایل گیفت همینه
        backgroundAttachment: "fixed" 
      }}
    >
      {/* لایه تاریک */}
      <div className="absolute inset-0 bg-amethyst/70 z-0"></div>

      <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center">
        
        {/* بج بالا */}
        <div className="mb-6 inline-block rounded-full border border-mint/50 bg-black/60 backdrop-blur-md px-4 py-1.5 text-sm font-bold text-mint shadow-[0_0_15px_rgba(0,225,162,0.3)]">
          ✨ 2020-2025 Sci-Fi Collection
        </div>

        {/* تیتر اصلی */}
        <h1 className="mb-6 text-3xl md:text-6xl font-black uppercase tracking-wider drop-shadow-[0_5px_5px_rgba(0,0,0,1)] font-pixel leading-relaxed">
        Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-ocean">Future</span>
        </h1>
        
        {/* متن توضیحات */}
        <p className="mb-10 text-lg md:text-2xl font-medium text-almond drop-shadow-md max-w-3xl leading-loose mx-auto">
        A curated list of modern sci-fi masterpieces defining the new era of imagination.
        </p>

        {/* سرچ باکس (جایی که ارور داشت الان درست شد چون searchQuery رو بالا تعریف کردیم) */}
        <div className="relative w-full max-w-2xl mb-10 group">
          <input
            type="text"
            placeholder="Search books, authors, or topics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-full border-2 border-taupe bg-amethyst/80 backdrop-blur-md py-4 pl-14 pr-6 text-lg text-white placeholder-gray-400 outline-none transition-all focus:border-mint focus:shadow-[0_0_20px_rgba(0,225,162,0.4)] focus:bg-black/90"
          />
          <Search className="absolute left-5 top-1/2 h-6 w-6 -translate-y-1/2 text-gray-400 transition-colors group-focus-within:text-mint" />
        </div>

        {/* دکمه‌های فیلتر */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full border border-taupe px-6 py-2 text-sm font-bold tracking-wide transition-all hover:-translate-y-1 ${
                selectedCategory === cat
                  ? "bg-mint text-amethyst shadow-[0_0_15px_rgba(0,225,162,0.6)] border-mint"
                  : "bg-black/40 text-almond hover:bg-amethyst hover:text-white backdrop-blur-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;