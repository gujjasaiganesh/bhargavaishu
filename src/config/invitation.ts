export type InvitationLang = "en" | "te";

export const invitation = {
  couple: {
    monogram: "B&V",
    hashtag: "#BhargaVaishU",
    groom: {
      en: "Bhargav Raj",
      te: "భార్గవ్ రాజ్",
      formalEn: "Chi. Bhargav Raj",
    },
    bride: {
      en: "Sri Vaishnavi",
      te: "శ్రీ వైష్ణవి",
      formalEn: "Chi.La.Sow. Sri Vaishnavi",
    },
  },
  families: {
    groomParentsEn: "S/O Sri M. Ravi - SMT. M. Anuradha",
    brideParentsEn: "D/o Sri M.V.Ramana Rao - Late SMT. M.Radhika",
  },
  event: {
    blessing: {
      en: "Srirasthu ✦ Shubhamasthu ✦ Avighnamasthu",
      te: "శ్రీరస్తు ✦ శుభమస్తు ✦ అవిఘ్నమస్తు",
    },
    message: {
      en: "We solicit your gracious presence with family and friends on the auspicious occasion of the wedding ceremony of",
      te: "మా పిల్లల వివాహ మహోత్సవ శుభ సందర్భంలో మీరు మీ కుటుంబ సభ్యులు మరియు స్నేహితులతో కలిసి విచ్చేసి మమ్మల్ని ఆశీర్వదించవలసిందిగా కోరుచున్నాము",
    },
    subtitle: {
      en: "Wedding Invitation",
      te: "వివాహ ఆహ్వానం",
    },
    sumuhurthamLabel: {
      en: "Sumuhurtham",
      te: "సుముహూర్తం",
    },
    sumuhurthamEn: "On Wednesday, 29th April 2026 at 10:32 AM",
    sumuhurthamNoteEn: "Mithuna Lagnam",
    events: [
      {
        id: "haldi",
        title: { en: "Sunkissed Haldi", te: "హల్దీ" },
        date: "April 19, 2026",
        time: "09:00 AM onwards",
        location: "The Lush Retreat",
        color: "gold",
        illustration: "/Haldi.png",
        mapsLink: "https://maps.app.goo.gl/3PrZ9JFr9zoR1Aj18?g_st=ic",
        attire: {
          label: { en: "Attire Guide", te: "దుస్తుల మార్గదర్శి" },
          description: { en: "Pastel Pink", te: "పాస్టెల్ గులాబీ" },
          colors: ["#F8C8DC", "#FADADD", "#F49AC2"]
        }
      },
      {
        id: "sangeet",
        title: { en: "Sangeet Night", te: "సంగీత్" },
        date: "April 19, 2026",
        time: "07:00 PM onwards",
        location: "The Lush Retreat",
        color: "royal",
        illustration: "/Sangeeth.png",
        mapsLink: "https://maps.app.goo.gl/3PrZ9JFr9zoR1Aj18?g_st=ic",
        attire: {
          label: { en: "Attire Guide", te: "దుస్తుల మార్గదర్శి" },
          description: { en: "Dark & Blingy", te: "చీకటి మరియు మెరుపులు" },
          colors: ["#1A1A1A", "#C0C0C0", "#FFD700"]
        }
      },
      {
        id: "pellikuturu",
        title: { en: "Pellikuturu", te: "పెళ్లికూతురు" },
        date: "April 26, 2026",
        time: "10:00 AM",
        location: "Bride's Residence",
        color: "rose",
        illustration: "/pellikuthuru.png",
      },
      {
        id: "pellikoduku",
        title: { en: "Pellikoduku", te: "పెళ్లికొడుకు" },
        date: "April 26, 2026",
        time: "06:30 PM",
        location: "Groom's Residence",
        color: "gold",
        illustration: "/pellikoduku.png",
      },
      {
        id: "mehendi",
        title: { en: "Mehendi", te: "మెహందీ" },
        date: "April 28, 2026",
        time: "03:00 PM onwards",
        location: "Bride's Residence",
        color: "sage",
        illustration: "/Mehendi.png",
      },
    ],
  },
  links: {
    liveStreamUrl: "#",
  },
  seo: {
    titleEn: "Bhargav Raj & Sri Vaishnavi — Wedding Invitation",
    descriptionEn: "Wedding invitation for Bhargav Raj and Sri Vaishnavi.",
    author: "Family",
  },
} as const;

export function t<T extends { en: string; te: string }>(
  value: T,
  lang: InvitationLang,
) {
  return value[lang];
}
