# CleanWorks — starter strony usługowej

Responsywny szablon landing page'a w Next.js i TypeScript, przygotowany jako punkt wyjścia dla lokalnej firmy usługowej. Układ czerpie z typowych stron firm wykonujących czyszczenie i renowację: oferta, proces, realizacje, FAQ, obszar działania i kontakt. To autorski przykład — nie kopiuje tekstów, zdjęć ani identyfikacji Artpel.

## Uruchamianie projektu

### Wymagania

- Node.js w wersji 20.9 lub nowszej
- npm (instaluje się razem z Node.js)
- Terminal, np. PowerShell w Windows lub terminal w VS Code

Sprawdź, czy Node.js i npm są dostępne:

```powershell
node --version
npm --version
```

### Pierwsze uruchomienie

1. Otwórz folder projektu w VS Code.
2. Wybierz **Terminal → New Terminal**.
3. Zainstaluj zależności (wykonaj przy pierwszym uruchomieniu lub po zmianie zależności):

```powershell
npm install
```

4. Uruchom stronę w trybie developerskim:

```powershell
npm run dev
```

5. Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce. Po zapisaniu zmian strona odświeży się automatycznie.
6. Aby zatrzymać serwer, wróć do terminala i naciśnij **Ctrl+C**.

Zostaw terminal z uruchomionym serwerem otwarty podczas pracy nad stroną.

### Dostępne komendy

| Komenda | Do czego służy |
| --- | --- |
| `npm run dev` | Uruchamia lokalny serwer developerski z automatycznym odświeżaniem. |
| `npm run typecheck` | Sprawdza typy TypeScript bez budowania strony. |
| `npm run build` | Tworzy zoptymalizowaną wersję produkcyjną. |
| `npm run start` | Uruchamia lokalny podgląd wersji produkcyjnej; najpierw wykonaj `npm run build`. |

Przed publikacją uruchom sprawdzenie typów i zbuduj stronę:

```powershell
npm run typecheck
npm run build
```

Aby sprawdzić wersję produkcyjną lokalnie, po udanym buildzie uruchom:

```powershell
npm run start
```

Podgląd otwórz pod adresem [http://localhost:3000](http://localhost:3000). Zatrzymasz go skrótem **Ctrl+C** w terminalu.

Jeżeli port 3000 jest już zajęty, zatrzymaj poprzedni serwer developerski skrótem **Ctrl+C** albo użyj adresu portu, który Next.js pokaże w terminalu.

## Struktura

```text
src/
  app/
    globals.css       # style, responsywność i kolory
    layout.tsx        # wspólny nagłówek, stopka i metadane
    page.tsx          # strona główna
    uslugi/           # lista usług i podstrony poszczególnych usług
    realizacje/       # galeria prac
    blog/             # poradnik i podstrony artykułów
    o-firmie/         # informacje o firmie
    kontakt/          # dane kontaktowe i formularz
    api/contact/      # serwerowa wysyłka formularza przez Resend
  components/
    site-header.tsx   # nagłówek i nawigacja
    site-footer.tsx   # stopka
    service-card.tsx  # powtarzalna karta usługi
    page-intro.tsx    # wspólny nagłówek podstron
    contact-form.tsx  # formularz zapytań
  data/
    site.ts           # przykładowe usługi, FAQ i treści
```

## Podstrony

- `/` — strona główna z formularzem wyceny w sekcji otwierającej.
- `/uslugi` — lista dostępnych usług.
- `/uslugi/malowanie-dachow`, `/uslugi/mycie-dachow`, `/uslugi/czyszczenie-elewacji`, `/uslugi/malowanie-elewacji` — opisy usług.
- `/realizacje` — galeria przykładowych realizacji.
- `/blog` oraz `/blog/[slug]` — poradnik i artykuły.
- `/o-firmie` — informacje o firmie.
- `/kontakt` — dane kontaktowe i formularz.

## Co uzupełnić dla klienta

- Zmień nazwę CleanWorks, opisy, usługi i dane w `src/data/site.ts` oraz komponentach.
- Numer telefonu z przesłanej inspiracji jest ustawiony w `src/data/site.ts`; potwierdź go z klientem. Uzupełnij także e-mail, obszar działania, godziny i dane firmy.
- Zastąp ilustracje i pola „Dodaj zdjęcie” prawdziwymi, zaakceptowanymi zdjęciami klienta. Najlepiej przygotować własne fotografie „przed i po”.
- Zaktualizuj tytuł i opis SEO w `src/app/layout.tsx`; dodaj docelową politykę prywatności przed publikacją.
- Zweryfikuj wszystkie obietnice marketingowe, dostępność usług i opinie — szablon nie zakłada niepotwierdzonych gwarancji ani referencji.
- Formularz wysyła zgłoszenia przez Resend na `cleanworks.goraj@gmail.com`. Skonfiguruj Resend przed użyciem i publikacją, zgodnie z instrukcją poniżej.

## Przykładowe elementy strony

Hero z wezwaniem do kontaktu, kafle usług, sekcja o firmie, czteroetapowy proces, galeria realizacji, rozwijane FAQ, obszar działania, formularz kontaktowy i wyraźny kontakt telefoniczny.

## Hosting i publikacja

Dla tej aplikacji rekomendowany jest **Vercel** — platforma obsługuje Next.js i endpoint formularza bez potrzeby uruchamiania własnego serwera. Przy stronie publikowanej dla klienta zwróć uwagę na warunki planu: bezpłatny **Hobby** jest przeznaczony wyłącznie do projektów osobistych i niekomercyjnych. Dla komercyjnej strony firmy użyj planu **Pro** lub wybierz inny hosting dopuszczający taki użytek. Aktualne ceny sprawdź na stronie [Vercel Pricing](https://vercel.com/pricing).

Przed wdrożeniem kod powinien być w repozytorium GitHub, GitLab lub Bitbucket:

1. Zaloguj się do [Vercel](https://vercel.com/) i wybierz **Add New → Project**.
2. Połącz konto z dostawcą Git i zaimportuj repozytorium CleanWorks.
3. Pozostaw wykryty framework **Next.js** oraz domyślne polecenia builda.
4. W ustawieniach projektu dodaj zmienne wymagane do wysyłki formularza (opis poniżej), przynajmniej dla środowiska **Production**.
5. Wybierz **Deploy**. Vercel zbuduje aplikację i udostępni jej adres pod domeną `vercel.app`.
6. W **Project → Settings → Domains** dodaj domenę klienta. Skopiuj wskazane przez Vercel rekordy DNS do panelu rejestratora domeny; po propagacji Vercel skonfiguruje HTTPS.

Po połączeniu repozytorium kolejne zmiany wypchnięte do gałęzi produkcyjnej będą automatycznie publikowane. Wdrożenia innych gałęzi mogą służyć jako podgląd przed publikacją. Szczegóły: [dokumentacja wdrażania Next.js na Vercel](https://vercel.com/docs/frameworks/full-stack/nextjs), [wdrożenia z Git](https://vercel.com/docs/git) i [własne domeny](https://vercel.com/docs/domains/working-with-domains).

## Konfiguracja formularza kontaktowego

Wysyłka odbywa się przez API usługi [Resend](https://resend.com/), bez konfiguracji SMTP. Potrzebujesz konta Resend i klucza API. Aby wysyłać wiadomości na `cleanworks.goraj@gmail.com`, zweryfikuj własną domenę nadawcy w Resend i użyj adresu z tej domeny jako `RESEND_FROM`. Sam adres odbiorcy może pozostać adresem Gmail.

1. Skopiuj przykładowy plik ustawień:

```powershell
Copy-Item .env.example .env.local
```

2. W panelu [Resend Domains](https://resend.com/domains) dodaj domenę, do której klient ma dostęp DNS. Najlepiej użyć osobnej subdomeny do wysyłki, np. `mail.twojadomena.pl`.
3. Resend pokaże wymagane rekordy DNS (np. DKIM i SPF). Dodaj je dokładnie w panelu DNS domeny i poczekaj, aż Resend oznaczy domenę jako zweryfikowaną. Nie usuwaj ani nie zastępuj istniejących rekordów MX poczty klienta. Jeśli domena ma już rekord SPF, zaktualizuj go zgodnie z instrukcją dostawcy DNS — domena powinna mieć tylko jeden rekord SPF.
4. W Resend utwórz klucz API. Nie udostępniaj go publicznie ani nie umieszczaj w kodzie.
5. Ustaw wartości:

   | Zmienna | Wartość |
   | --- | --- |
   | `RESEND_API_KEY` | Klucz API utworzony w Resend; sekret. |
   | `RESEND_FROM` | Nadawca z domeny zweryfikowanej w Resend, np. `CleanWorks <formularz@mail.twojadomena.pl>`. |
   | `CONTACT_TO` | Adres odbiorczy; domyślnie `cleanworks.goraj@gmail.com`. |

   `.env.example` pokazuje format. Zastąp przykładowy klucz i domenę prawdziwymi danymi lokalnie w `.env.local`.

6. Na Vercel otwórz **Project → Settings → Environment Variables** i dodaj te same trzy zmienne dla **Production** (opcjonalnie także **Preview**, jeśli formularz ma działać na podglądach). Po zmianie zmiennych wykonaj nowe wdrożenie — istniejący deployment nie pobiera ich automatycznie.
7. Wyślij testowe zgłoszenie z formularza na opublikowanej stronie i sprawdź odbiór w skrzynce oraz logi funkcji w panelu Vercel.

Lokalnie uruchom ponownie serwer developerski po zmianie `.env.local`:

```powershell
npm run dev
```

`.env.local` zawiera sekret i nie wolno go dodawać do repozytorium. W hostingu produkcyjnym ustaw `RESEND_API_KEY`, `RESEND_FROM` i `CONTACT_TO` w panelu zmiennych środowiskowych hostingu, a nie w kodzie. Bez prawidłowej konfiguracji formularz nie wyśle wiadomości i pokaże informację o problemie. Wymagania Resend opisuje [dokumentacja domen i ich weryfikacji](https://resend.com/docs/dashboard/domains/introduction).
