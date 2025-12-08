export function DecorativeElements() {
  return (
    <>
      {/* Star */}
      <div className="absolute top-20 left-1/4 animate-pulse">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 0L22.5 17.5L40 20L22.5 22.5L20 40L17.5 22.5L0 20L17.5 17.5L20 0Z"
            fill="#A8D5BA"
          />
        </svg>
      </div>

      {/* Abstract shape 1 */}
      <div className="absolute top-32 right-1/4 opacity-60">
        <svg
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30 5C40 5 45 15 45 25C45 35 40 45 30 45C20 45 15 35 15 25C15 15 20 5 30 5Z"
            fill="#A8D5BA"
            opacity="0.5"
          />
          <circle cx="30" cy="25" r="8" fill="#EBE8E1" />
        </svg>
      </div>

      {/* Curved line */}
      <div className="absolute bottom-10 right-1/3 opacity-40">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 40C20 10 40 10 50 40C60 70 40 70 30 40"
            stroke="#A8D5BA"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      {/* Small decorative dots */}
      <div className="absolute top-1/2 left-1/3 opacity-30">
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-[#A8D5BA]"></div>
          <div className="w-2 h-2 rounded-full bg-[#A8D5BA]"></div>
          <div className="w-2 h-2 rounded-full bg-[#A8D5BA]"></div>
        </div>
      </div>
    </>
  );
}
