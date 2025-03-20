import { FcGoogle } from "react-icons/fc";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";

interface Login3Props {
  heading?: string;
  subheading?: string;
  logo?: {
    url?: string;
    src: string;
    alt: string;
  };
  loginText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Login3 = ({
  heading = "Willkommen zurück bei Epic Bau-Shop",
  subheading = "Melden Sie sich an, um Ihre Bestellungen zu verfolgen und schneller einzukaufen.",
  logo = {
    src: "../../pictures/logo.jpeg",
    url: "/",
    alt: "Epic Bau-Shop Logo",
  },
  loginText = "Anmelden",
  googleText = "Mit Google anmelden",
  signupText = "Noch kein Konto?",
  signupUrl = "/signup",
}: Login3Props) => {
  return (
    <section className="bg-gray-100 py-32">
      <div className="container mx-auto flex justify-center">
        <div className="w-full max-w-md rounded-md bg-white p-6 shadow-lg">
          <div className="mb-6 flex flex-col items-center">
            <a href={logo.url}>
              <img src={logo.src} alt={logo.alt} className="mb-5 h-12 w-auto" />
            </a>
            <h2 className="mb-2 text-2xl font-bold text-gray-800">{heading}</h2>
            <p className="text-gray-600">{subheading}</p>
          </div>
          <div className="grid gap-4">
            <Input type="email" placeholder="Deine E-Mail-Adresse" required />
            <Input type="password" placeholder="Passwort eingeben" required />
            <div className="flex justify-between text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" className="border-gray-300" />
                <label htmlFor="remember" className="font-medium">
                  Angemeldet bleiben
                </label>
              </div>
              <a
                href="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Passwort vergessen?
              </a>
            </div>
            <Button
              type="submit"
              className="mt-2 w-full bg-blue-600 text-white hover:bg-blue-700"
            >
              {loginText}
            </Button>
            <Button
              variant="outline"
              className="flex w-full items-center justify-center border-gray-300 hover:bg-gray-100"
            >
              <FcGoogle className="mr-2 size-5" />
              {googleText}
            </Button>
          </div>
          <div className="mx-auto mt-6 flex justify-center gap-1 text-sm text-gray-600">
            <p>{signupText}</p>
            <a
              href={signupUrl}
              className="font-medium text-blue-600 hover:underline"
            >
              Registrieren
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login3 };
