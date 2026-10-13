const ui = {
  en: {
    sample: "SAMPLE TENANT · REPLACE THESE DETAILS BEFORE SHARING",
  },
  hi: { sample: "नमूना अतिथि-पत्रिका · साझा करने से पहले विवरण बदलें" },
};

const weddingData = {
  id: "sample-sharma-verma",
  meta: { title: "Sample Sharma–Verma Wedding", ogImage: "assets/images/og-preview.svg" },
  theme: { preset: "emerald-temple", customOverrides: {} },
  supportedLanguages: ["en", "hi"],
  defaultLanguage: "hi",
  // Inherits shared translated interface copy, with tenant-specific text overrides.
  ui,
  blessings: {
    invokingDeity: { icon: "om", en: "|| Om Shree Ganeshaya Namah ||", hi: "॥ ॐ श्री गणेशाय नमः ॥" },
    shloka: { sanskrit: "सर्वे भवन्तु सुखिनः।\nसर्वे सन्तु निरामयाः॥", meaning_en: "May everyone be happy and free from illness.", meaning_hi: "सभी सुखी हों और सभी निरोग रहें।" },
  },
  couple: {
    bride: { name: { en: "Sample Bride", hi: "नमूना वधू" }, parents: { en: "Daughter of the Sharma family", hi: "शर्मा परिवार की सुपुत्री" }, grandParents: { en: "With blessings of her grandparents", hi: "अपने दादा-दादी के आशीर्वाद सहित" } },
    groom: { name: { en: "Sample Groom", hi: "नमूना वर" }, parents: { en: "Son of the Verma family", hi: "वर्मा परिवार के सुपुत्र" }, grandParents: { en: "With blessings of his grandparents", hi: "अपने दादा-दादी के आशीर्वाद सहित" } },
  },
  muhurat: { dateTime: "2027-03-20T18:00:00+05:30", auspiciousTithi: { en: "Sample auspicious tithi", hi: "नमूना शुभ तिथि" } },
  events: [
    { id: "haldi", title: { en: "Haldi", hi: "हल्दी" }, tagline: { en: "A sample family celebration", hi: "परिवार का नमूना उत्सव" }, dateTime: "2027-03-19T10:00:00+05:30", venueName: { en: "Sample Courtyard", hi: "नमूना आंगन" }, dressCode: { en: "Wear yellow", hi: "पीले परिधान पहनें" }, mapUrl: "https://maps.google.com/?q=Sample+Wedding+Venue" },
    { id: "mehendi", title: { en: "Mehendi", hi: "मेहंदी" }, tagline: { en: "A sample henna gathering", hi: "मेहंदी का नमूना आयोजन" }, dateTime: "2027-03-19T15:00:00+05:30", venueName: { en: "Sample Courtyard", hi: "नमूना आंगन" }, dressCode: { en: "Floral festive wear", hi: "फूलों वाले उत्सवी परिधान" }, mapUrl: "https://maps.google.com/?q=Sample+Wedding+Venue" },
    { id: "sangeet", title: { en: "Sangeet", hi: "संगीत" }, tagline: { en: "An evening of music", hi: "संगीतमय संध्या" }, dateTime: "2027-03-19T19:00:00+05:30", venueName: { en: "Sample Hall", hi: "नमूना सभागार" }, dressCode: { en: "Festive attire", hi: "उत्सवी परिधान" }, mapUrl: "https://maps.google.com/?q=Sample+Wedding+Venue" },
    { id: "baraat", title: { en: "Baraat", hi: "बारात" }, tagline: { en: "A joyful wedding procession", hi: "मंगलमय बारात" }, dateTime: "2027-03-20T16:30:00+05:30", venueName: { en: "Sample Main Gate", hi: "नमूना मुख्य द्वार" }, dressCode: { en: "Traditional attire", hi: "पारंपरिक परिधान" }, mapUrl: "https://maps.google.com/?q=Sample+Wedding+Venue" },
    { id: "phere", title: { en: "Phere", hi: "सप्तपदी" }, tagline: { en: "Seven sacred vows", hi: "सात पवित्र वचन" }, dateTime: "2027-03-20T18:00:00+05:30", venueName: { en: "Sample Mandap", hi: "नमूना मंडप" }, dressCode: { en: "Traditional regalia", hi: "पारंपरिक उत्सवी परिधान" }, mapUrl: "https://maps.google.com/?q=Sample+Wedding+Venue" },
  ],
  gallery: [
    { url: "assets/images/gallery-haldi.svg", caption: { en: "Sample Haldi", hi: "नमूना हल्दी" } },
    { url: "assets/images/gallery-mehendi.svg", caption: { en: "Sample Mehendi", hi: "नमूना मेहंदी" } },
    { url: "assets/images/gallery-phere.svg", caption: { en: "Sample Phere", hi: "नमूना फेरे" } },
  ],
  rsvp: { googleSheetEndpoint: "", deadline: "10 March 2027", contacts: [] },
};

export { weddingData };
