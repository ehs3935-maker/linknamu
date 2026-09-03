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
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  avatarUrl: "/profile-avatar.png",
};

export const links: LinkItem[] = [
  {
    id: "github",
    label: "🗃️ 깃허브",
    url: "https://github.com/ehs3935-maker",
  },
  {
    id: "blog",
    label: "📖 블로그",
    url: "https://blog.naver.com/qaz3935",
  },
  {
    id: "email",
    label: "📬 이메일",
    url: "mailto:qaz3935@naver.com",
  },
];
