import {
  Link as LinkIcon,
  HelpCircle,
  Package,
  Settings,
  Hammer,
} from "lucide-react";
import { Link } from "react-router-dom";

export const Footer1 = () => {
  const navigationItems = [
    {
      title: "Support",
      description: "Wir sind für Sie da.",
      items: [
        {
          title: "FAQ",
          href: "/faq",
          icon: <HelpCircle size={16} />,
        },
        {
          title: "Lieferung & Versand",
          href: "/shipping",
          icon: <Package size={16} />,
        },
        {
          title: "Rückgabe & Umtausch",
          href: "/returns",
          icon: <Settings size={16} />,
        },
        {
          title: "Kundenservice",
          href: "/customer-service",
          icon: <Hammer size={16} />,
        },
      ],
    },
    {
      title: "Products",
      description: "Unsere Geräte für Bau und Renovierung.",
      items: [
        {
          title: "Werkzeuge",
          href: "/products/tools",
          icon: <Hammer size={16} />,
        },
        {
          title: "Maschinen",
          href: "/products/machines",
          icon: <Package size={16} />,
        },
        {
          title: "Zubehör",
          href: "/products/accessories",
          icon: <Settings size={16} />,
        },
        {
          title: "Leasingangebote",
          href: "/leasingPrice",
          icon: <LinkIcon size={16} />,
        },
      ],
    },
    {
      title: "Über Epic",
      description: "Qualität und Innovation in der Bauindustrie.",
      items: [
        {
          title: "Unser Team",
          href: "/team",
          icon: <HelpCircle size={16} />,
        },
        {
          title: "Karriere",
          href: "/careers",
          icon: <Settings size={16} />,
        },
        {
          title: "Kontakt",
          href: "/contact",
          icon: <Package size={16} />,
        },
        {
          title: "Händler werden",
          href: "/become-a-dealer",
          icon: <Hammer size={16} />,
        },
      ],
    },
  ];

  return (
    <div className="bg-foreground text-background w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="flex flex-col items-start gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
                Epic Bau- und Renovierungsgeräte
              </h2>
              <p className="text-background/75 max-w-lg text-left text-lg leading-relaxed tracking-tight">
                Hochwertige Maschinen und Werkzeuge für professionelle
                Bauprojekte.
              </p>
            </div>
            <div className="flex flex-row gap-20">
              <div className="text-background/75 flex max-w-lg flex-col text-left text-sm leading-relaxed tracking-tight">
                <p>Epic Innovations GmbH</p>
                <p>Bauweg 10</p>
                <p>12345 Berlin</p>
              </div>
              <div className="text-background/75 flex max-w-lg flex-col text-left text-sm leading-relaxed tracking-tight">
                <h4 className="text-lg font-semibold">Rechtliche Links</h4>
                <Link to="/" className="mt-2 hover:underline">
                  AGB
                </Link>
                <Link to="/" className="mt-2 hover:underline">
                  Datenschutz
                </Link>
              </div>
            </div>
          </div>

          <div className="grid items-start gap-10 lg:grid-cols-3">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-start gap-4 text-base"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-xl font-semibold">{item.title}</p>
                  <p className="text-background/75 text-sm">
                    {item.description}
                  </p>

                  {item.items &&
                    item.items.map((subItem) => (
                      <div
                        key={subItem.title}
                        className="mt-2 flex items-center gap-2"
                      >
                        {subItem.icon}
                        <Link
                          to={subItem.href}
                          className="text-background/75 hover:underline"
                        >
                          {subItem.title}
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
