import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AppTemplate from "@/components/templates/app-template";
import GameTemplate from "@/components/templates/game-template";
import WebTemplate from "@/components/templates/web-template";
import { getProduct, pageProducts } from "@/content/products";

export function generateStaticParams() {
  return pageProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product || !product.hasPage) return {};

  const title = product.seoTitle ?? product.name;
  const description = product.seoDescription;

  return {
    title,
    description,
    alternates: { canonical: `/${product.slug}` },
    openGraph: {
      title: `${title} — MadStoneDev`,
      description,
      url: `/${product.slug}`,
    },
    twitter: {
      title: `${title} — MadStoneDev`,
      description,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product || !product.hasPage) {
    notFound();
  }

  switch (product.type) {
    case "mobile":
      return <AppTemplate product={product} />;
    case "game":
      return <GameTemplate product={product} />;
    case "web":
      return <WebTemplate product={product} />;
    default:
      notFound();
  }
}
