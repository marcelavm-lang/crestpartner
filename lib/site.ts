export const SITE = {
  email: "contact@crestpartnerscr.com",
  /** Office address (confirmed by Marcela, Nov 2026) */
  address: { street: "Centro Corporativo Plaza Roble, Edificio Los Balcones, 4th floor", locality: "Escazú", region: "San José", country: "CR", display: "Plaza Roble, Edificio Los Balcones, 4th floor, Escazú, Costa Rica", short: "Plaza Roble, Escazú, Costa Rica" },
  whatsappDisplay: "+506 8891-3444",
  whatsappUrl: "https://wa.me/50688913444?text=" + encodeURIComponent("Hi, I'd like to learn about building a team in Costa Rica."),
  whatsappUrlEs: "https://wa.me/50688913444?text=" + encodeURIComponent("Hola, me gustaría saber más sobre cómo construir un equipo en Costa Rica."),
  calendlyUrl: "https://calendly.com/marcelavm/30min", // TODO: switch to the company Calendly account
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.crestpartnerscr.com",
};
