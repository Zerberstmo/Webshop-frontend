import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface Team1Props {
  heading?: string;
  subheading?: string;
  description?: string;
  members?: TeamMember[];
}

const Team1 = ({
  heading = "Unser Team",
  subheading = "Wir stellen uns vor",
  description = "Lernen Sie unser talentiertes Team kennen, das unsere Vision vorantreibt und innovative Lösungen schafft.",
  members = [
    {
      id: "person-1",
      name: "Maurice",
      role: "Owner",
      avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
    },
    {
      id: "person-2",
      name: "Marco",
      role: "Role",
      avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
    },
    {
      id: "person-3",
      name: "Merry",
      role: "Role",
      avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
    },
    {
      id: "person-4",
      name: "Maik",
      role: "Role",
      avatar: "https://shadcnblocks.com/images/block/avatar-4.webp",
    },
    {
      id: "person-5",
      name: "Nille",
      role: "Role",
      avatar: "https://shadcnblocks.com/images/block/avatar-5.webp",
    },
    {
      id: "person-6",
      name: "Natta",
      role: "Role",
      avatar: "https://shadcnblocks.com/images/block/avatar-6.webp",
    },
    {
      id: "person-7",
      name: "Nils",
      role: "Role",
      avatar: "https://shadcnblocks.com/images/block/avatar-7.webp",
    },
    {
      id: "person-8",
      name: "Burak",
      role: "Role",
      avatar: "https://shadcnblocks.com/images/block/avatar-8.webp",
    },
    {
      id: "person-9",
      name: "Mehmet",
      role: "Role",
      avatar: "https://shadcnblocks.com/images/block/avatar-8.webp",
    },
  ],
}: Team1Props) => {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <p className="semibold">{subheading}</p>
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
          {heading}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-3xl lg:text-xl">
          {description}
        </p>
      </div>
      <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
        {members.map((person) => (
          <div key={person.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={person.avatar} />
              <AvatarFallback>{person.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{person.name}</p>
            <p className="text-muted-foreground text-center">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export { Team1 };
