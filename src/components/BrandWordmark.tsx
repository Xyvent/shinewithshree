import { siteConfig } from "../config/site";

export function BrandWordmark({ className = "" }: { className?: string }) {
  const [first, second] = siteConfig.brandWordmark;
  return (
    <span className={className}>
      {first}
      <span className="text-brand-accent">.</span>
      {second}
    </span>
  );
}
