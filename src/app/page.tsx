import ProfileHeader from "@/components/ProfileHeader";
import LinksList from "@/components/LinksList";
import { profile, links } from "@/lib/data";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center px-5 py-14 sm:px-10">
      <main className="flex w-full max-w-sm flex-col items-center gap-10 rounded-[2.5rem] border border-white/10 bg-white/[0.04] px-6 py-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-10">
        <ProfileHeader profile={profile} />
        <LinksList links={links} />
        <span className="text-lg tracking-widest text-slate-400/60">···</span>
      </main>
    </div>
  );
}
