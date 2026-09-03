"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/lib/data";

export default function LinksList({ links }: { links: LinkItem[] }) {
  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(links.map((link) => [link.id, 0]))
  );

  useEffect(() => {
    let cancelled = false;

    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data: Record<string, number>) => {
        if (!cancelled) setCounts(data);
      })
      .catch((error) => {
        console.error("Failed to load link click counts:", error);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="flex w-full flex-col gap-5 [&>a:nth-child(1)]:rotate-[-0.6deg] [&>a:nth-child(2)]:rotate-[0.5deg] [&>a:nth-child(3)]:rotate-[-0.4deg]">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} count={counts[link.id] ?? 0} />
      ))}
    </div>
  );
}
