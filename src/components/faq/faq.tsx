import { PhoneCall } from "lucide-react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Link } from "react-router-dom";

export const FAQ1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
                Alles, was Sie über unseren Shop wissen müssen
              </h4>
              <p className="text-muted-foreground max-w-xl text-left text-lg leading-relaxed tracking-tight lg:max-w-lg">
                Hier finden Sie Antworten auf die häufigsten Fragen zu
                Bestellung, Lieferung, Rückgabe und mehr. Falls Sie weitere
                Fragen haben, zögern Sie nicht, uns zu kontaktieren.
              </p>
            </div>
            <div>
              <Link to="/contact">
                <Button className="gap-4" variant="outline">
                  Fragen? Kontaktieren Sie uns <PhoneCall className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "Wie lange dauert der Versand?",
              answer:
                "Die Lieferzeit beträgt in der Regel 2-5 Werktage. Expressversand ist ebenfalls verfügbar.",
            },
            {
              question: "Wie kann ich meine Bestellung verfolgen?",
              answer:
                "Nach dem Versand erhalten Sie eine Tracking-Nummer per E-Mail, mit der Sie Ihre Bestellung verfolgen können.",
            },
            {
              question: "Welche Zahlungsmethoden akzeptieren Sie?",
              answer:
                "Wir akzeptieren Kreditkarte, PayPal, Klarna und Banküberweisung.",
            },
            {
              question: "Kann ich meine Bestellung stornieren?",
              answer:
                "Ja, eine Stornierung ist möglich, solange die Bestellung noch nicht versandt wurde.",
            },
            {
              question: "Wie funktioniert die Rückgabe?",
              answer:
                "Sie können unbenutzte Produkte innerhalb von 14 Tagen nach Erhalt zurücksenden.",
            },
            {
              question: "Gibt es eine Garantie auf die Produkte?",
              answer:
                "Ja, wir bieten eine Garantie von 24 Monaten auf alle unsere Produkte.",
            },
            {
              question: "Kann ich ein Produkt umtauschen?",
              answer:
                "Ja, falls Sie ein anderes Modell wünschen, können Sie es innerhalb von 14 Tagen umtauschen.",
            },
            {
              question: "Wie kann ich den Kundenservice kontaktieren?",
              answer:
                "Sie erreichen uns per E-Mail unter support@meinshop.de oder telefonisch unter +49 123 456 7890.",
            },
          ].map((item, index) => (
            <AccordionItem key={index} value={"index-" + index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);
