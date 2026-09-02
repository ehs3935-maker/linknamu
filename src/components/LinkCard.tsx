import type { LinkItem } from "@/lib/data";

export default function LinkCard({ link }: { link: LinkItem }) {
  return (
    <a
      href={`/api/click/${link.id}`}
      className="flex w-full items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-4 text-center font-medium text-zinc-900 shadow-sm transition-colors hover:border-zinc-300 hover:bg-zinc-50 active:scale-[0.99] dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {link.label}
    </a>
  );
}
