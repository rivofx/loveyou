/**
 * CONFIGURAȚIE PERSONALIZARE
 * Editează valorile de mai jos pentru a personaliza experiența.
 */

export interface StoryItem {
  type: 'text' | 'video';
  content?: string;
  url?: string;
  caption?: string;
}

export const CONFIG = {
  // Numele persoanei iubite
  herName: "Iubirea Mea",
  
  // Numele tău
  myName: "Iubitelul Tău",

  // POVESTEA NOASTRĂ
  // Poți adăuga oricâte elemente vrei (text sau video)
  // Tipuri: 'text' sau 'video'
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
      // Poți folosi un fișier local din 'public/' (ex: "/video.mp4") sau un URL extern direct către fișierul video
      url: "https://cdn.stoatusercontent.com/attachments/Wn4p5TWfCRI8QIRhv5Sui0qV9EV8aKknlRLouBC40P/IMG_1340.MP4",
      caption: "Prima dată când ne-am întâlnit..."
    },
    {
      type: "foto",
      // Pune aici link-ul către videoclipul cu prima voastră întâlnire
      // Poți folosi un fișier local din 'public/' (ex: "/video.mp4") sau un URL extern direct către fișierul video
      url: "https://cdn.stoatusercontent.com/attachments/Wn4p5TWfCRI8QIRhv5Sui0qV9EV8aKknlRLouBC40P/IMG_1340.MP4",
      caption: "Prima cina impreuna..."
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
