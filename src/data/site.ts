export type Service = {
  slug: string;
  title: string;
  description: string;
  contentHeading: string;
  longDescription: string[];
  faqs: { question: string; answer: string }[];
  icon: ServiceIconName;
  details: string[];
};

export type ServiceIconName =
  | "paint-roof"
  | "wash-roof"
  | "wash-facade"
  | "paint-facade";

export const businessPhone = {
  display: "884 045 079",
  href: "tel:+48884045079",
};

export const serviceAreaLocations = [
  { name: "Łódź", slug: "lodz", locative: "Łodzi" },
  { name: "Tuszyn", slug: "tuszyn", locative: "Tuszynie" },
  { name: "Piotrków Trybunalski", slug: "piotrkow-trybunalski", locative: "Piotrkowie Trybunalskim" },
  { name: "Pabianice", slug: "pabianice", locative: "Pabianicach" },
  { name: "Tomaszów Mazowiecki", slug: "tomaszow-mazowiecki", locative: "Tomaszowie Mazowieckim" },
  { name: "Bełchatów", slug: "belchatow", locative: "Bełchatowie" },
  { name: "Zgierz", slug: "zgierz", locative: "Zgierzu" },
  { name: "Skierniewice", slug: "skierniewice", locative: "Skierniewicach" },
  { name: "Częstochowa", slug: "czestochowa", locative: "Częstochowie" },
  { name: "Warszawa", slug: "warszawa", locative: "Warszawie" },
  { name: "Sieradz", slug: "sieradz", locative: "Sieradzu" },
  { name: "Radom", slug: "radom", locative: "Radomiu" },
  { name: "Kielce", slug: "kielce", locative: "Kielcach" },
  { name: "Płock", slug: "plock", locative: "Płocku" },
  { name: "Kalisz", slug: "kalisz", locative: "Kaliszu" },
  { name: "Opole", slug: "opole", locative: "Opolu" },
  { name: "Katowice", slug: "katowice", locative: "Katowicach" },
  { name: "Kraków", slug: "krakow", locative: "Krakowie" },
  { name: "Wrocław", slug: "wroclaw", locative: "Wrocławiu" },
  { name: "Poznań", slug: "poznan", locative: "Poznaniu" },
  { name: "Toruń", slug: "torun", locative: "Toruniu" },
];

export const serviceAreaCities = serviceAreaLocations.map(({ name }) => name);

export const services: Service[] = [
  {
    slug: "malowanie-dachow",
    title: "Malowanie dachów",
    description: "Nadaj dachowi świeży, zadbany wygląd. Dobieramy zakres malowania do rodzaju i stanu pokrycia, aby odświeżyć jego kolor i estetykę.",
    contentHeading: "Nowy wygląd dachu dopasowany do pokrycia",
    longDescription: [
      "Z czasem dach może tracić pierwotny kolor pod wpływem słońca, deszczu i codziennego oddziaływania warunków atmosferycznych. Malowanie pozwala odświeżyć jego wygląd i nadać całemu budynkowi bardziej zadbany charakter.",
      "Każdą realizację poprzedzamy rozmową o rodzaju pokrycia, jego aktualnym stanie i oczekiwanym efekcie. Na tej podstawie ustalamy zakres prac oraz sposób przygotowania powierzchni. To ważny etap, ponieważ rozwiązanie powinno odpowiadać konkretnemu materiałowi, a nie być dobierane w ciemno.",
      "Po omówieniu potrzeb przedstawiamy możliwy plan działania i wycenę. Dzięki temu wiesz, czego dotyczy usługa, jakie kroki będą potrzebne i jakiego efektu wizualnego można oczekiwać w przypadku Twojego dachu.",
    ],
    faqs: [
      {
        question: "Czy każdy dach można pomalować?",
        answer: "Możliwość i zakres malowania zależą od rodzaju pokrycia oraz jego stanu. Przed wyceną warto przesłać zdjęcia dachu lub umówić oględziny, aby ocenić, jakie rozwiązanie będzie odpowiednie.",
      },
      {
        question: "Od czego zależy koszt malowania dachu?",
        answer: "Wycena uwzględnia między innymi wielkość i kształt dachu, rodzaj pokrycia, jego kondycję oraz zakres potrzebnych prac. Po zebraniu tych informacji przedstawimy indywidualną wycenę.",
      },
      {
        question: "Jak przygotować się do wyceny?",
        answer: "Przydatne będą zdjęcia dachu, przybliżona powierzchnia oraz informacja o rodzaju pokrycia i miejscowości. Jeśli nie znasz wszystkich szczegółów, pomożemy ustalić je podczas rozmowy.",
      },
    ],
    icon: "paint-roof",
    details: [
      "Ocena stanu i rodzaju pokrycia przed rozpoczęciem prac.",
      "Dokładne oczyszczenie dachu oraz przygotowanie podłoża.",
      "Dobór zakresu prac i sposobu odświeżenia do konkretnego dachu.",
    ],
  },
  {
    slug: "mycie-dachow",
    title: "Mycie dachów",
    description: "Przywróć dachowi schludny wygląd dzięki dokładnemu myciu. Metodę pracy dopasowujemy do rodzaju pokrycia i charakteru zabrudzeń.",
    contentHeading: "Dokładne czyszczenie dachu z troską o powierzchnię",
    longDescription: [
      "Dach przez cały rok jest narażony na kurz, osady i zabrudzenia, które z czasem zmieniają jego wygląd. Profesjonalne mycie pomaga odświeżyć pokrycie i uporządkować wizualnie całą bryłę budynku.",
      "Nie stosujemy jednego schematu do każdego zlecenia. Przed rozpoczęciem prac bierzemy pod uwagę rodzaj pokrycia, jego stan oraz widoczny charakter zabrudzeń. Pozwala to dobrać sposób czyszczenia do powierzchni i zaplanować pracę z uwzględnieniem jej specyfiki.",
      "Zakres usługi omawiamy przed realizacją. Po zapoznaniu się z dachem ustalamy, czego można się spodziewać po czyszczeniu, jakie działania będą odpowiednie oraz jak wygląda wycena. Jeśli rozważasz późniejsze malowanie, możesz omówić z nami również taką możliwość.",
    ],
    faqs: [
      {
        question: "Czy sposób mycia dobierany jest do rodzaju dachu?",
        answer: "Tak. Bierzemy pod uwagę rodzaj pokrycia, jego stan i charakter zabrudzeń. Dzięki temu możemy zaplanować odpowiedni sposób pracy dla konkretnej powierzchni.",
      },
      {
        question: "Czy mycie dachu usuwa wszystkie zabrudzenia?",
        answer: "Efekt zależy od rodzaju i trwałości zabrudzeń oraz stanu pokrycia. Przed rozpoczęciem prac omawiamy możliwy rezultat na podstawie oględzin lub przekazanych zdjęć.",
      },
      {
        question: "Czy dach można pomalować po umyciu?",
        answer: "W wielu przypadkach mycie może być jednym z etapów poprzedzających malowanie, ale dalszy zakres zależy od stanu i rodzaju pokrycia. Możemy omówić obie usługi podczas wyceny.",
      },
    ],
    icon: "wash-roof",
    details: [
      "Oględziny pokrycia i dopasowanie metody czyszczenia.",
      "Usuwanie typowych zabrudzeń, osadów i nalotów.",
      "Omówienie dalszej pielęgnacji dachu po wykonanej usłudze.",
    ],
  },
  {
    slug: "czyszczenie-elewacji",
    title: "Czyszczenie elewacji",
    description: "Odśwież wygląd ścian zewnętrznych i usuń widoczne zabrudzenia. Dobieramy sposób czyszczenia do materiału oraz stanu elewacji.",
    contentHeading: "Czysta elewacja, lepszy wygląd całego budynku",
    longDescription: [
      "Elewacja jest wizytówką domu, ale jej powierzchnia z biegiem czasu gromadzi kurz i osady. Czyszczenie może przywrócić ścianom świeższy wygląd i sprawić, że otoczenie budynku będzie prezentować się schludniej.",
      "Przed wyborem sposobu pracy ustalamy, z jakim rodzajem elewacji mamy do czynienia i w jakim jest stanie. Różne materiały mogą wymagać innego podejścia, dlatego plan czyszczenia dopasowujemy do konkretnej powierzchni oraz widocznych zabrudzeń.",
      "Podczas wstępnej rozmowy określamy oczekiwany efekt i możliwy zakres usługi. Następnie przedstawiamy kolejne kroki oraz wycenę, aby przed rozpoczęciem prac było jasne, co obejmuje realizacja.",
    ],
    faqs: [
      {
        question: "Czy można czyścić każdą elewację w ten sam sposób?",
        answer: "Nie. Metodę pracy dobiera się do materiału, stanu ściany i rodzaju zabrudzeń. Dlatego przed wyceną prosimy o zdjęcia lub ustalamy możliwość obejrzenia elewacji.",
      },
      {
        question: "Czy czyszczenie usunie przebarwienia i naloty?",
        answer: "Możliwy efekt zależy od przyczyny i stopnia zabrudzenia oraz kondycji elewacji. Po zapoznaniu się z powierzchnią możemy określić przewidywany zakres i rezultat prac.",
      },
      {
        question: "Jak uzyskać wycenę czyszczenia elewacji?",
        answer: "Prześlij zdjęcia budynku, podaj miejscowość i opisz, które ściany mają zostać wyczyszczone. Na tej podstawie ustalimy kolejne kroki i przygotujemy wycenę.",
      },
    ],
    icon: "wash-facade",
    details: [
      "Rozpoznanie rodzaju elewacji i jej stanu.",
      "Dobór odpowiedniej metody czyszczenia do powierzchni.",
      "Ustalenie zakresu prac i wyceny przed realizacją.",
    ],
  },
  {
    slug: "malowanie-elewacji",
    title: "Malowanie elewacji",
    description: "Zmień wygląd budynku dzięki świeżemu kolorowi elewacji. Planujemy zakres prac z uwzględnieniem rodzaju podłoża i oczekiwanego efektu.",
    contentHeading: "Odświeżenie elewacji w kolorze, który pasuje do domu",
    longDescription: [
      "Zmiana koloru elewacji potrafi wyraźnie odmienić wygląd budynku i nadać mu spójny, zadbany charakter. Malowanie planujemy z myślą o oczekiwanym efekcie oraz rodzaju powierzchni, na której będą prowadzone prace.",
      "Każdy budynek wymaga indywidualnego omówienia. Bierzemy pod uwagę stan i typ podłoża, zakres malowania oraz preferencje dotyczące wyglądu. Na tej podstawie ustalamy, jakie działania wstępne będą potrzebne i jak zaplanować kolejne etapy.",
      "Przed realizacją uzgadniamy zakres, sposób działania i wycenę. Dzięki temu możesz podjąć decyzję w oparciu o konkretny plan, a efekt jest dopasowany do charakteru budynku i Twoich oczekiwań.",
    ],
    faqs: [
      {
        question: "Jak dobrać kolor do malowania elewacji?",
        answer: "Kolor warto dopasować do charakteru budynku, dachu i otoczenia. Podczas rozmowy możemy ustalić oczekiwany efekt i zakres, a ostateczny wybór należy do Ciebie.",
      },
      {
        question: "Czy przed malowaniem trzeba ocenić stan ścian?",
        answer: "Tak, rodzaj i kondycja podłoża mają znaczenie przy planowaniu prac. Ocena pozwala ustalić zakres działań wstępnych oraz przygotować rzetelną wycenę.",
      },
      {
        question: "Co wpływa na cenę malowania elewacji?",
        answer: "Znaczenie ma między innymi powierzchnia ścian, ich stan, dostępność oraz zakres prac. Po zapoznaniu się z budynkiem ustalimy szczegóły i przedstawimy indywidualną wycenę.",
      },
    ],
    icon: "paint-facade",
    details: [
      "Ocena rodzaju i stanu powierzchni przed rozpoczęciem prac.",
      "Ustalenie przygotowania podłoża i zakresu malowania.",
      "Dobór rozwiązania oraz wycena dopasowana do budynku.",
    ],
  },
];

export const articles = [
  {
    slug: "kiedy-warto-odswiezyc-dach",
    title: "Kiedy warto odświeżyć dach?",
    excerpt: "Oznaki zużycia, przebarwienia i inne sygnały, które warto sprawdzić przed planowaniem prac.",
    date: "Poradnik",
    paragraphs: [
      "Dach jest stale narażony na działanie pogody, dlatego z czasem może zmienić kolor i pokryć się zabrudzeniami. Regularne oględziny pomagają zauważyć zmiany, zanim zaplanujesz kolejne prace.",
      "Zwróć uwagę na przebarwienia, naloty i stan samej powierzchni. Przed wyborem usługi warto ocenić rodzaj pokrycia oraz jego kondycję, aby dobrać odpowiedni zakres działań.",
      "Jeśli nie masz pewności, od czego zacząć, prześlij opis i zdjęcia dachu. Na tej podstawie ustalimy, jakie informacje będą potrzebne do przygotowania wyceny.",
    ],
  },
  {
    slug: "jak-przygotowac-dach-do-malowania",
    title: "Jak przygotowuje się dach do malowania?",
    excerpt: "Dlaczego ocena i oczyszczenie powierzchni są ważne przed renowacją pokrycia.",
    date: "Poradnik",
    paragraphs: [
      "Przed malowaniem należy ocenić rodzaj pokrycia i jego stan. Dokładne oczyszczenie dachu jest ważnym etapem planowania, a sposób pracy powinien uwzględniać konkretne podłoże.",
      "Zakres przygotowania może obejmować czyszczenie oraz sprawdzenie powierzchni. Szczegóły ustala się po zapoznaniu z dachem, jego dostępnością i oczekiwanym efektem.",
      "Każdy dach jest inny. Przed rozpoczęciem prac warto uzgodnić z wykonawcą zakres usługi, wycenę i możliwy termin.",
    ],
  },
  {
    slug: "o-co-zapytac-przed-wycena",
    title: "O co zapytać przed wyceną usługi?",
    excerpt: "Krótka lista informacji, które ułatwią rozmowę o dachu i planowanych pracach.",
    date: "Wskazówki",
    paragraphs: [
      "Przygotuj przybliżony rozmiar dachu, informację o rodzaju pokrycia oraz miejscowość, w której znajduje się budynek. Zdjęcia mogą pomóc w pierwszej rozmowie.",
      "Opowiedz, jaki efekt chcesz uzyskać i czy planujesz samo czyszczenie, czy również malowanie. Warto też wspomnieć o widocznych uszkodzeniach lub utrudnionym dostępie.",
      "Na podstawie tych informacji wykonawca może określić kolejne kroki i ustalić, czy potrzebne będą oględziny na miejscu.",
    ],
  },
];

export const trustPoints = [
  {
    title: "Najpierw rozmowa. ",
    description: "Ustalamy potrzeby i zakres zanim zaproponujemy rozwiązanie.",
  },
  {
    title: "Metoda dopasowana do powierzchni. ",
    description: "Każdą realizację planujemy z uwzględnieniem jej specyfiki.",
  },
  {
    title: "Jasne zasady współpracy. ",
    description: "Omawiamy wycenę i kolejne kroki przed rozpoczęciem prac.",
  },
];

export const galleryItems = [
  {
    title: "Malowanie dachu",
    description: "Realizacja obejmowała odświeżenie wyglądu dachu poprzez malowanie pokrycia. Zdjęcia pokazują stan przed pracami i efekt po ich zakończeniu.",
    photos: [
      { src: "/realizacje/malowanie-dachu-przed.jpg", alt: "Dach przed malowaniem", label: "Przed" },
      { src: "/realizacje/malowanie-dachu-po.jpg", alt: "Dach po malowaniu", label: "Po" },
    ],
  },
  {
    title: "Mycie dachu",
    description: "Prace obejmowały czyszczenie dachu. Zdjęcia pokazują stan powierzchni przed myciem i efekt po jego zakończeniu.",
    photos: [
      { src: "/realizacje/mycie-dachu-przed.jpg", alt: "Dach przed myciem", label: "Przed" },
      { src: "/realizacje/mycie-dachu-po.jpg", alt: "Dach po myciu", label: "Po" },
    ],
  },
  {
    title: "Mycie elewacji",
    description: "Elewację oczyściliśmy z widocznych zabrudzeń i nalotów. Zdjęcia pokazują efekt przed rozpoczęciem prac i po ich zakończeniu.",
    photos: [
      { src: "/realizacje/mycie-elewacji-przed.jpg", alt: "Elewacja przed myciem", label: "Przed" },
      { src: "/realizacje/mycie-elewacji-po.jpg", alt: "Elewacja po myciu", label: "Po" },
    ],
  },
  {
    title: "Malowanie elewacji",
    description: "Budynek zyskał odświeżony wygląd dzięki malowaniu elewacji. Fotografie pokazują różnicę przed wykonaniem usługi i po zakończeniu prac.",
    photos: [
      { src: "/realizacje/malowanie-elewacji-przed.jpg", alt: "Elewacja przed malowaniem", label: "Przed" },
      { src: "/realizacje/malowanie-elewacji-po.jpg", alt: "Elewacja po malowaniu", label: "Po" },
    ],
  },
];

export const faqs = [
  {
    question: "Od czego zależy wycena usługi?",
    answer:
      "Koszt zależy między innymi od rodzaju i wielkości powierzchni, jej stanu oraz zakresu prac. Przekaż nam podstawowe informacje, aby ustalić dalsze kroki.",
  },
  {
    question: "Czy przed wyceną potrzebne są oględziny?",
    answer:
      "To zależy od konkretnego zlecenia. Po rozmowie ustalimy, czy wystarczą zdjęcia i opis, czy potrzebne będzie obejrzenie powierzchni na miejscu.",
  },
  {
    question: "Na jakim obszarze realizujecie usługi?",
    answer:
      "Dojedziemy do miejscowości w promieniu około 200 km od Łodzi. Możliwość i warunki dojazdu do konkretnej lokalizacji potwierdzamy indywidualnie — skontaktuj się z nami, aby zapytać o swoją okolicę.",
  },
];
