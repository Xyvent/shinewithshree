import { Helmet } from "react-helmet-async";
import { absoluteUrl, siteConfig } from "../config/site";

type PageMetaProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

export default function PageMeta({
  title,
  description,
  path = "/",
  image,
  type = "website",
}: PageMetaProps) {
  const pageTitle = title ?? siteConfig.seo.defaultTitle;
  const pageDescription = description ?? siteConfig.seo.defaultDescription;
  const url = absoluteUrl(path);
  const imageUrl = image ? absoluteUrl(image) : absoluteUrl(siteConfig.logoPath);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.brandFull} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content={siteConfig.seo.twitterCard} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
