"use client";

interface SideBySideCardProps {
  title: string;
  text: string;
  image: string;
  color: string;
  href?: string;
}

export default function SideBySideCard({
  title,
  text,
  image,
  color,
  href,
}: SideBySideCardProps) {
  return (
    <div className="group flex h-full flex-col rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
      {/* IMAGE - Reduced height to h-48 */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* CONTENT - Reduced padding to p-5 lg:p-6 */}
      <div
        className="flex flex-1 flex-col p-5 lg:p-6"
        style={{ backgroundColor: color }}
      >
        <h3
          className="
            text-2xl
            font-light
            text-[#e5170f]
            leading-tight
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-2
            flex-1
            text-base
            leading-relaxed
            text-left
            whitespace-normal
          "
        >
          {text}
        </p>

        {href && (
          <a
            href={href}
            className="
              mt-4
              pt-2
              inline-flex
              items-center
              font-medium
              text-[#3478e6]
              hover:underline
            "
          >
            Read more →
          </a>
        )}
      </div>
    </div>
  );
}