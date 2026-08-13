interface Props {
  title: string;
  bg: string;
}

export default function ServiceHero({ title, bg }: Props) {
  return (
    <div
      className="relative w-full h-52 md:h-60 bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Dark overlay for better text contrast/readability */}
      <div className="absolute inset-0 bg-black/40" />

      <h1
        className="relative z-10 text-4xl md:text-5xl font-medium drop-shadow-lg text-center px-4"
        style={{
          WebkitTextStroke: "2px black",
          WebkitTextFillColor: "#ffffffff",
        }}
      >
        {title}
      </h1>
    </div>
  );
}