import type { LinkItem } from "@/lib/data";

export default function LinkCard({
  link,
  count,
}: {
  link: LinkItem;
  count: number;
}) {
  return (
    <a
      href={`/api/click/${link.id}`}
      className="relative flex w-full items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#7a828f_0%,#4c525e_28%,#282c34_62%,#131519_100%)] px-8 py-5 text-center text-base font-bold tracking-wide text-slate-100 shadow-[inset_-6px_-10px_16px_rgba(0,0,0,0.55),inset_6px_6px_10px_rgba(255,255,255,0.14),0_10px_22px_rgba(0,0,0,0.55)] transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0"
    >
      <span className="pointer-events-none absolute left-7 top-2 h-2 w-8 -rotate-12 rounded-full bg-white/15 blur-[2px]" />
      <span className="pointer-events-none absolute bottom-3 right-10 h-3 w-3 rounded-full bg-black/25 blur-[1px]" />
      <span className="pointer-events-none absolute right-16 top-3 h-1.5 w-1.5 rounded-full bg-black/20" />
      <span className="relative">{link.label}</span>
      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-xs font-normal text-slate-300/70">
        {count}회
      </span>
    </a>
  );
}
