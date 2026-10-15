/** Fonte de dados centralizada. Revise com o proprietário antes de publicar. */
export const business = {
  name: "Tamura Odontologia",
  shortName: "TAMURA",
  descriptor: "ODONTOLOGIA",
  city: "Bragança Paulista",
  state: "SP",
  address: "Rua Dr. Cândido Rodrigues, 62",
  neighborhood: "Centro",
  zip: "12900-360",
  fullAddress: "Rua Dr. Cândido Rodrigues, 62 — Centro, Bragança Paulista — SP, 12900-360",
  phoneDisplay: "(11) 4033-2004",
  phoneHref: "+551140332004",
  whatsapp: "+5511995149888",
  //process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "",
  mapsUrl: "https://maps.app.goo.gl/H5xaEYUPTqKPoevP8",
  mapsEmbedUrl: "https://www.google.com/maps?q=Rua%20Dr.%20C%C3%A2ndido%20Rodrigues%2062%2C%20Bragan%C3%A7a%20Paulista&output=embed",
  hours: [
    { days: "Segunda a sexta", time: "08h às 18h" },
    { days: "Sábado", time: "09h às 12h" },
    { days: "Domingo", time: "Fechado" },
  ],
  /** Serviço confirmado como especialidade de profissional vinculado à clínica. Demais tratamentos precisam de confirmação. */
  services: [
    { title: "Avaliação odontológica", description: "Entre em contato para conhecer as possibilidades de consulta e avaliação.", icon: "smile" },
    { title: "Cirurgia bucomaxilofacial", description: "Consulte a disponibilidade de avaliação e procedimentos com profissional da área.", icon: "activity" },
    { title: "Orientações de atendimento", description: "Tire dúvidas sobre agendamento, horários e tipos de tratamento disponíveis.", icon: "calendar" },
  ],
  social: { instagram: "" },
} as const;

export function whatsappLink(message: string): string | null {
  const number = business.whatsapp.replace(/\D/g, "");
  if (!/^\d{12,15}$/.test(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
