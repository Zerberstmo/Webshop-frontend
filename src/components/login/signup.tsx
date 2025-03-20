import { FcGoogle } from "react-icons/fc";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface SignupProps {
  heading?: string;
  subheading?: string;
  logo?: {
    url?: string;
    src: string;
    alt: string;
  };
  signupText?: string;
  googleText?: string;
  loginText?: string;
  loginUrl?: string;
}

const Signup = ({
  heading = "Epic Bau-Shop",
  subheading = "Erstelle dein Konto und starte dein nächstes Projekt!",
  logo = {
    url: "/",
    src: "/images/epic-logo.svg",
    alt: "Epic Bau-Shop Logo",
  },
  googleText = "Mit Google anmelden",
  signupText = "Konto erstellen",
  loginText = "Bereits ein Konto?",
  loginUrl = "/login",
}: SignupProps) => {
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
            <Input type="password" placeholder="Passwort wählen" required />
            <Button
              type="submit"
              className="mt-2 w-full bg-blue-600 text-white hover:bg-blue-700"
            >
              {signupText}
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
            <p>{loginText}</p>
            <a
              href={loginUrl}
              className="font-medium text-blue-600 hover:underline"
            >
              Anmelden
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup };
