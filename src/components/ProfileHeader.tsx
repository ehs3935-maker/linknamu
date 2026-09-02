import Image from "next/image";
import type { Profile } from "@/lib/data";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-zinc-200 text-3xl font-semibold text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
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
      <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
        {profile.name}
      </h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{profile.bio}</p>
    </div>
  );
}
