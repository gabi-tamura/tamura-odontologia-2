import type { Metadata } from "next";
import { business } from "@/data/business";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_SITE_URL;
export const metadata: Metadata = {
  title: `${business.name} | Odontologia em ${business.city}`,
  description: `Conheça a ${business.name}, localizada no Centro de ${business.city}. Confira informações de atendimento, localização e entre em contato.`,
  metadataBase: base ? new URL(base) : undefined,
  openGraph: { title: `${business.name} | ${business.city}`, description: `Conheça a clínica e veja como entrar em contato.`, type: "website", locale: "pt_BR" },
  robots: { index: false, follow: false }, // DEMO: habilitar somente após aprovação do proprietário.
};
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
