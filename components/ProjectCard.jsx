export default function ProjectCard({
  title,
  description,
  image,
  url,
}) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.045] hover:shadow-[0_20px_50px_rgba(124,58,237,0.12)]">

      {/* Violet Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Project Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />

        {/* View Project Overlay */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title}`}
          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 backdrop-blur-[2px] transition-all duration-300 group-hover:opacity-100"
        >
          <span className="rounded-full border border-white/20 bg-black/50 px-5 py-2 text-sm font-medium text-white backdrop-blur-md transition-transform duration-300 group-hover:scale-100">
            View Project ↗
          </span>
        </a>
      </div>

      {/* Project Content */}
      <div className="relative p-5">
        <h2 className="text-xl font-semibold leading-snug text-white transition-colors duration-300 group-hover:text-violet-300">
          {title}
        </h2>

        <p className="mt-3 line-clamp-4 text-sm leading-6 text-zinc-400">
          {description}
        </p>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-zinc-600">
            Web Development
          </span>

          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-400 transition-all duration-300 hover:gap-2.5 hover:text-violet-300"
          >
            Visit Website
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}