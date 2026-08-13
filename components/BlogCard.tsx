import Link from "next/link";

interface BlogCardProps {
  image: string;
  title: string;
  href: string;
}

export default function BlogCard({ image, title, href }: BlogCardProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 hover:shadow-xl transition duration-300 flex flex-col h-full">
      
      {/* Image */}
      <img 
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-lg"
      />

      {/* Content wrapper to push the link down uniformly */}
      <div className="flex flex-col flex-grow justify-between mt-4">
        {/* Title */}
        <h3 className="text-lg font-semibold text-[#0e355d] leading-relaxed">
          {title}
        </h3>

        {/* Read more link */}
        <Link href={href} className="mt-4 inline-block">
          <div className="text-sm font-light text-[#3173ea] underline flex items-center gap-1 hover:opacity-80 transition-opacity">
            Read more →
          </div>
        </Link>
      </div>

    </div>
  );
}