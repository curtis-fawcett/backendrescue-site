export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://backendrescue.dev/sitemap.xml",
  };
}