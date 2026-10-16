import { business } from "./business";

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
function publicOrigin(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const url = new URL(value);
  if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) {
    throw new Error("NEXT_PUBLIC_SITE_URL deve ser a URL pública do site.");
  }
  if (["localhost", "127.0.0.1", "[::1]"].includes(url.hostname)) return undefined;
  return url.origin;
}
export const siteUrl = publicOrigin(configuredUrl);
export const indexable = Boolean(siteUrl) && process.env.NODE_ENV === "production" && process.env.VERCEL_ENV !== "preview" && process.env.SITE_NOINDEX !== "true";
export const seoTitle = `${business.name} | Dentista em ${business.city}`;
export const seoDescription = "Tamura Odontologia no Centro de Bragança Paulista, SP. Confira endereço, horários e telefone da clínica e entre em contato pelo WhatsApp para informações sobre atendimento.";
export const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  ...(siteUrl ? { "@id": `${siteUrl}/#clinica`, url: siteUrl } : {}),
  name: business.name,
  description: seoDescription,
  telephone: business.phoneHref,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address,
    addressLocality: business.city,
    addressRegion: business.state,
    postalCode: business.zip,
    addressCountry: "BR",
  },
  hasMap: business.mapsUrl,
  // Confirmar horários e especialidades antes de incluí-los no schema.
};
