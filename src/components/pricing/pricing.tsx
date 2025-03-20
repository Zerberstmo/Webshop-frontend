import { Check, Minus, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

export const Pricing2 = () => (
  <div className="w-full py-20 lg:py-20">
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex flex-col gap-2">
          <h2 className="font-regular max-w-xl text-center text-3xl tracking-tighter md:text-5xl">
            Flexible Leasing für Ihre Maschinen – mit umfassendem Service!
          </h2>
          <p className="text-muted-foreground max-w-xl text-center text-lg leading-relaxed tracking-tight">
            Wählen Sie das passende Leasing-Paket für Ihre Maschinen und
            profitieren Sie von umfassendem Service und Wartung.
          </p>
        </div>

        <div className="grid w-full grid-cols-3 divide-x pt-20 text-left lg:grid-cols-4">
          <div className="col-span-3 lg:col-span-1"></div>

          <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
            <p className="text-2xl">Basic Leasing</p>
            <p className="text-muted-foreground text-sm">
              Ideal für kleine Unternehmen, die ein zuverlässiges Leasing-Modell
              suchen.
            </p>
            <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
              <span className="text-4xl">$299</span>
              <span className="text-muted-foreground text-sm"> / Monat</span>
            </p>
            <Button variant="outline" className="mt-8 gap-4">
              Jetzt anfragen <MoveRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
            <p className="text-2xl">Professional Leasing</p>
            <p className="text-muted-foreground text-sm">
              Für Unternehmen, die zusätzliche Features und erweiterten Support
              benötigen.
            </p>
            <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
              <span className="text-4xl">$499</span>
              <span className="text-muted-foreground text-sm"> / Monat</span>
            </p>
            <Link to="/contactMessenger">
              <Button className="mt-8 gap-4">
                Jetzt anfragen <MoveRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="flex flex-col gap-2 px-3 py-1 md:px-6 md:py-4">
            <p className="text-2xl">Enterprise Leasing</p>
            <p className="text-muted-foreground text-sm">
              Für große Unternehmen mit höchsten Anforderungen an Maschinen und
              Service.
            </p>
            <p className="mt-8 flex flex-col gap-2 text-xl lg:flex-row lg:items-center">
              <span className="text-4xl">$999</span>
              <span className="text-muted-foreground text-sm"> / Monat</span>
            </p>
            <Button variant="outline" className="mt-8 gap-4">
              Kontakt aufnehmen <PhoneCall className="h-4 w-4" />
            </Button>
          </div>

          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            <b>Inklusive Service & Features</b>
          </div>
          <div></div>
          <div></div>
          <div></div>

          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Wartung
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="text-primary h-4 w-4" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="text-primary h-4 w-4" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="text-primary h-4 w-4" />
          </div>

          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            24/7 Support
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Minus className="text-muted-foreground h-4 w-4" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="text-primary h-4 w-4" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="text-primary h-4 w-4" />
          </div>

          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Regelmäßige Updates
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Minus className="text-muted-foreground h-4 w-4" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="text-primary h-4 w-4" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="text-primary h-4 w-4" />
          </div>

          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Individueller Support
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Minus className="text-muted-foreground h-4 w-4" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Minus className="text-muted-foreground h-4 w-4" />
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <Check className="text-primary h-4 w-4" />
          </div>

          <div className="col-span-3 px-3 py-4 lg:col-span-1 lg:px-6">
            Mehr Maschinen
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <p className="text-muted-foreground text-sm">10 Maschinen</p>
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <p className="text-muted-foreground text-sm">25 Maschinen</p>
          </div>
          <div className="flex justify-center px-3 py-1 md:px-6 md:py-4">
            <p className="text-muted-foreground text-sm">100+ Maschinen</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
