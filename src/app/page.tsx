import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";
import { profile, links } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 py-12 dark:bg-black">
      <main className="flex w-full max-w-sm flex-col items-center gap-8 rounded-[2rem] border border-zinc-200 bg-white px-6 py-10 dark:border-zinc-800 dark:bg-zinc-950">
        <ProfileHeader profile={profile} />
        <div className="flex w-full flex-col gap-3">
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>
        <span className="text-lg tracking-widest text-zinc-400 dark:text-zinc-600">
          ···
        </span>
      </main>
    </div>
  );
}
