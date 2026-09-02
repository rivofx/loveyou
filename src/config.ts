/**
 * CONFIGURAȚIE PERSONALIZARE
 * Editează valorile de mai jos pentru a personaliza experiența.
 */

export interface StoryItem {
  type: 'text' | 'video' | 'photo';
  content?: string;
  url?: string;
  caption?: string;
}

export const CONFIG = {
  // Numele persoanei iubite
  herName: "Iubirea Mea",
  
  // Numele tău
  myName: "Partenerul Tău",

  // POVESTEA NOASTRĂ
  // Poți adăuga oricâte elemente vrei (text, video sau photo)
  // Tipuri: 'text', 'video' sau 'photo'
  story: [
    {
      type: "text",
      content: "Astăzi am vrut să fac ceva special..."
    },
    {
      type: "text",
      content: "Să-ți amintesc cât de mult însemni pentru mine."
    },
    {
      type: "video",
      // Pune aici link-ul către videoclipul cu prima voastră întâlnire
      url: "https://assets.mixkit.co/videos/preview/mixkit-romantic-couple-walking-on-the-beach-at-sunset-4028-large.mp4",
      caption: "Prima dată când ne-am întâlnit..."
    },
    {
      type: "photo",
      url: "https://storage.googleapis.com/multimodal-ac-production/attachments/f4935ecf-c6ca-4c55-b461-89745b736735/image.png", // Prima noastra cina
      caption: "Prima noastră cină împreună"
    },
    {
      type: "photo",
      url: "https://storage.googleapis.com/multimodal-ac-production/attachments/05d54ed2-c0e8-460d-8625-2e1189c42c27/image.png", // Primul nostru pahar
      caption: "Primul nostru pahar împreună"
    },
    {
      type: "photo",
      url: "https://storage.googleapis.com/multimodal-ac-production/attachments/40a455a7-951c-4b53-9114-1149e6d4218f/image.png", // Primul nostru pensat
      caption: "Primul nostru pensat împreună"
    },
    {
      type: "text",
      content: "Fiecare moment petrecut cu tine este o binecuvântare."
    },
    {
      type: "text",
      content: "Ești lumina care îmi ghidează pașii în fiecare zi."
    },
    {
      type: "text",
      content: "Zâmbetul tău este lucrul meu preferat pe lume."
    }
  ],

  // Scrisoarea de dragoste (apare înaintea finalului)
  loveLetter: `
    Draga mea,
    
    Nu există destule cuvinte în dicționar pentru a exprima tot ce simt pentru tine. 
    De când ai apărut în viața mea, totul a căpătat o altă culoare. 
    Ești nu doar partenera mea, ci și cea mai bună prietenă și sufletul meu pereche.
    
    Îți mulțumesc pentru răbdarea ta, pentru bunătatea ta și pentru felul în care mă iubești.
    Promit să fiu lângă tine în fiecare zi, să te susțin și să construim împreună
    viitorul la care visăm.
  `,

  // Mesajul final de pe ecranul cu inima
  finalMessage: "Te iubesc.",

  // Culori temă (folosește clase Tailwind)
  colors: {
    background: "bg-rose-50",
    text: "text-rose-900",
    accent: "bg-rose-500",
    heart: "text-rose-500"
  }
};
