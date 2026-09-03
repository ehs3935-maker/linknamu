import Image from "next/image";
import type { Profile } from "@/lib/data";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <div className="relative flex h-28 w-28 items-center justify-center">
        <div className="avatar-glow absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,214,150,0.9)_0%,rgba(255,160,70,0.55)_45%,rgba(255,140,60,0)_75%)] blur-md" />
        <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-slate-800 text-3xl font-bold text-slate-200 shadow-[0_0_18px_6px_rgba(255,190,110,0.55),0_0_42px_16px_rgba(255,150,70,0.3)] ring-2 ring-amber-100/40">
          {profile.avatarUrl ? (
            <Image
              src={profile.avatarUrl}
              alt={profile.name}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          ) : (
            <span>{profile.name.charAt(0)}</span>
          )}
        </div>
      </div>
      <h1 className="text-2xl font-bold text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.35)]">
        {profile.name}
      </h1>
      <p className="text-sm font-light text-slate-300/90">{profile.bio}</p>
    </div>
  );
}
