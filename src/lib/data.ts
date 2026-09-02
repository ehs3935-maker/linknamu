export interface Profile {
  name: string;
  bio: string;
  avatarUrl?: string;
}

export interface LinkItem {
  id: string;
  label: string;
  url: string;
}

export const profile: Profile = {
  name: "홍원택",
  bio: "세계 최강 바이브코더",
};

export const links: LinkItem[] = [
  { id: "github", label: "GitHub", url: "https://github.com" },
  { id: "linkedin", label: "LinkedIn", url: "https://linkedin.com" },
  { id: "blog", label: "Blog", url: "https://example.com" },
];
