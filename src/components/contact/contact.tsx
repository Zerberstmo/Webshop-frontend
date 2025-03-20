import { Mail, MapPin, Phone } from "lucide-react";

const Contact7 = () => {
  return (
    <section className="bg-foreground text-background py-32">
      <div className="container mx-auto">
        <div className="mb-14 text-center">
          <span className="text-sm font-semibold tracking-wide uppercase">
            Kontakt
          </span>
          <h1 className="mt-1 mb-3 text-3xl font-semibold md:text-5xl">
            Wir sind für Sie da
          </h1>
          <p className="text-background/75 text-lg">
            Kontaktieren Sie uns für Fragen zu unseren Produkten oder Services.
          </p>
        </div>
        <div className="grid gap-10 text-center md:grid-cols-3">
          <div>
            <span className="bg-background/10 mb-3 flex size-16 flex-col items-center justify-center rounded-full">
              <Mail className="text-background h-8 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">E-Mail</p>
            <p className="text-background/75 mb-3">
              Schreiben Sie uns eine Nachricht
            </p>
            <a
              href="mailto:info@epicbau.de"
              className="font-semibold hover:underline"
            >
              info@epicbau.de
            </a>
          </div>
          <div>
            <span className="bg-background/10 mb-3 flex size-16 flex-col items-center justify-center rounded-full">
              <MapPin className="text-background h-8 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Adresse</p>
            <p className="text-background/75 mb-3">Besuchen Sie unser Büro</p>
            <p className="font-semibold">Bauweg 10, 12345 Berlin</p>
          </div>
          <div>
            <span className="bg-background/10 mb-3 flex size-16 flex-col items-center justify-center rounded-full">
              <Phone className="text-background h-8 w-auto" />
            </span>
            <p className="mb-2 text-lg font-semibold">Telefon</p>
            <p className="text-background/75 mb-3">
              Montag - Freitag, 9-17 Uhr
            </p>
            <a
              href="tel:+491234567890"
              className="font-semibold hover:underline"
            >
              +49 123 456 7890
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact7 };
