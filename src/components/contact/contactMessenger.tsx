import { Check, MoveRight } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

export const Contact1 = () => {
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(e.target.value);
  };

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <h4 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
                  Ihr Shop für alles, was Sie brauchen!
                </h4>
                <p className="text-muted-foreground max-w-sm text-left text-lg leading-relaxed tracking-tight">
                  Entdecken Sie unser breites Sortiment und kontaktieren Sie uns
                  direkt für Ihre Anliegen.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6 text-left">
              <Check className="text-primary mt-2 h-4 w-4" />
              <div className="flex flex-col gap-1">
                <p>Einfach und schnell</p>
                <p className="text-muted-foreground text-sm">
                  Bei uns finden Sie alles, was Sie brauchen – und das ganz
                  unkompliziert.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6 text-left">
              <Check className="text-primary mt-2 h-4 w-4" />
              <div className="flex flex-col gap-1">
                <p>Zuverlässiger Service</p>
                <p className="text-muted-foreground text-sm">
                  Unser Team sorgt dafür, dass Ihre Bestellungen schnell und
                  sicher ankommen.
                </p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6 text-left">
              <Check className="text-primary mt-2 h-4 w-4" />
              <div className="flex flex-col gap-1">
                <p>Modernes Einkaufserlebnis</p>
                <p className="text-muted-foreground text-sm">
                  Stöbern Sie durch unser Shop-Design – einfach und
                  benutzerfreundlich.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center lg:w-4/5">
            <div className="flex max-w-2xl flex-col gap-4 rounded-md border p-8">
              <p>Kontaktieren Sie uns</p>
              <div className="grid w-full max-w-lg items-center gap-1">
                <Label htmlFor="topic">Anliegen</Label>
                <select
                  id="topic"
                  className="w-full rounded-md border p-2"
                  value={selectedTopic}
                  onChange={handleTopicChange}
                >
                  <option value="">Wählen Sie ein Thema</option>
                  <option value="product_inquiry">Produktanfrage</option>
                  <option value="order_status">Bestellstatus</option>
                  <option value="support">Kundensupport</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div className="grid w-full max-w-lg items-center gap-1">
                <Label htmlFor="firstname">Vorname</Label>
                <Input id="firstname" type="text" />
              </div>
              <div className="grid w-full max-w-lg items-center gap-1">
                <Label htmlFor="lastname">Nachname</Label>
                <Input id="lastname" type="text" />
              </div>
              <div className="grid w-full max-w-lg items-center gap-1">
                <Label htmlFor="message">Nachricht</Label>
                <textarea
                  id="message"
                  className="w-full rounded-md border p-2"
                  placeholder="Schreiben Sie uns Ihre Nachricht..."
                  rows={4}
                />
              </div>
              <Button className="w-full gap-4">
                Anfrage absenden <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
