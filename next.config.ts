import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/blog/new-website-course-and-product-updates-april-2024",
        destination: "/blog/online-pashto-classes-for-kids-adults-and-ladies",
        permanent: true, // 301 Redirect
      },
      {
        source: "/ar/blog/new-website-course-and-product-updates-april-2024",
        destination: "/ar/blog/online-pashto-classes-for-kids-adults-and-ladies",
        permanent: true, // 301 Redirect
      },
       {
        source: "/learn-tafseer-ul-quran/",
        destination: "/courses/quran-reading-and-tajweed",
        permanent: true, // 301 Redirect
      },
      {
        source: "/pashto-language",
        destination: "/courses",
        permanent: true, // 301 Redirect
      },
      {
        source: "/online-pashto-courses",
        destination: "/courses",
        permanent: true, // 301 Redirect
      },
      {
        source: "/days-of-the-week-in-urdu/",
        destination: "/blog",
        permanent: true, // 301 Redirect
      },
      {
        source: "/numbers-in-urdu-from-1-to-10",
        destination: "/blog/numbers-in-urdu-from-1-to-10",
        permanent: true, // 301 Redirect
      },
       {
        source: "/months-of-the-year-in-urdu",
        destination: "/blog",
        permanent: true, // 301 Redirect
      },
      {
        source: "/home",
        destination: "/en",
        permanent: true, // 301 Redirect
      },
      {
        source: "/arabic-language",
        destination: "/courses/arabic-beginner-course",
        permanent: true, // 301 Redirect
      },
      {
        source: "/online-pashto-classes-for-kids-adults-and-ladies",
        destination: "/blog/online-pashto-classes-for-kids-adults-and-ladies",
        permanent: true, // 301 Redirect
      },
      {
        source: "/online-arabic-classes",
        destination: "/courses/arabic-beginner-course",
        permanent: true, // 301 Redirect
      },
      {
        source: "/category/learn-languages",
        destination: "/courses",
        permanent: true, // 301 Redirect
      },
      {
        source: "/urdu-language",
        destination: "/courses/urdu-language-course",
        permanent: true,
      },
      {
        source: "/english-language",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);