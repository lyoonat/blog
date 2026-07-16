const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Natly",
    image: "https://i.pinimg.com/736x/0f/87/a6/0f87a61aa7efebbb648c5b7bfb4cd3f5.jpg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Backend dev-yet",
    bio: "Living Contradiction",
    email: "lyoonatelie@gmail.com",
    linkedin: "https://www.linkedin.com/in/nslyoo",
    github: "https://github.com/lyoonat",
    instagram: "",
  },
  projects: [
    {
      name: `BE - Algorithm Study`,
      href: "https://github.com/lyoonat/Algorithm_study",
    },
  ],
  // blog setting (required)
  blog: {
    title: "Hoog",
    description: "welcome to Hoog!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://hoolog.vercel.app",
  since: 2026, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NEXT_PUBLIC_NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
