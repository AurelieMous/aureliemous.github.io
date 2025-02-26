import { Popover, PopoverContent, PopoverTrigger } from "@heroui/popover";
import { Button } from "@heroui/button";
import { BiLogoNodejs } from "react-icons/bi";
import { SiDjango, SiNestjs } from "react-icons/si";
import { DiPython } from "react-icons/di";

export default function Backend() {
  const skills = [
    {
      name: "Python",
      color: "bg-blue-500 text-white",
      icon: <DiPython />,
      learning: "Formation CDA*",
      source: "En entreprise",
    },
    {
      name: "Django",
      color: "bg-green-500",
      icon: <SiDjango />,
      learning: "Formation CDA*",
      source: "En entreprise",
    },
    {
      name: "NodeJS",
      color: "bg-green-700 text-white",
      icon: <BiLogoNodejs />,
      learning: "Formation CDA*",
      source: "École O'Clock",
    },
    {
      name: "NestJS",
      color: "bg-red-500 text-white",
      icon: <SiNestjs />,
      learning: "Formation CDA*",
      source: "École O'Clock",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 pt-6 pb-5 w-full">
      {skills.map(({ name, color, icon, learning, source }) => (
        <Popover key={name} className="relative" placement="bottom">
          <PopoverTrigger>
            <Button
              className={`${color} flex items-center gap-2 px-4 py-2 rounded-lg text-white`}
            >
              {name} {icon}
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="text-small font-bold">{learning}</div>
            <div className="text-tiny">{source}</div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
