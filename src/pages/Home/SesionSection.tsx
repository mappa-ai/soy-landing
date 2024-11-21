import { Card, CardContent, CardDescription } from "@/components/ui/card";
import LogoS from "../../assets/logo-s.svg";
import LogoO from "../../assets/logo-o.svg";
import LogoY from "../../assets/logo-y.svg";
import LogoCatarsis from "../../assets/logo-catarsis.svg";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { CircleChevronDown } from "lucide-react";

interface CardSectionProps {
  sesion: string;
  title: string;
  description: string;
  logo: string;
}

function CardSesion({ sesion, title, description, logo }: CardSectionProps) {
  return (
    <Card className="max-w-72 rounded-none shadow-none border-lightgray ">
      <CardContent className="flex flex-col items-center py-14 px-10">
        <div>
          <img src={logo} alt="..." />
        </div>
        <p className="tracking-[5px] font-medium text-base text-lightgray uppercase pt-5">
          {sesion}
        </p>
        <h6 className="text-xl text-midgray pb-5 text-center">{title}</h6>
        <CardDescription className="text-center text-midgray text-base">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

function CardSesionMobile({
  sesion,
  title,
  description,
  logo,
}: CardSectionProps) {
  return (
    <Card className="rounded-none shadow-none border-lightgray ">
      <Collapsible className="group">
        <CardContent className="flex flex-col items-start p-5">
          <CollapsibleTrigger className="flex w-full justify-between items-center ">
            <div className="flex">
              <div className="pr-4">
                <img src={logo} alt="..." className="w-[50px] h-[50px]" />
              </div>
              <div>
                <p className="tracking-[5px] font-medium text-base text-start text-lightgray uppercase">
                  {sesion}
                </p>
                <h6 className="text-xl text-midgray ">{title}</h6>
              </div>
            </div>
            
              <CircleChevronDown className="text-lightgray group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-180 " size={24}/>
            
          </CollapsibleTrigger>
          <CollapsibleContent>
            <CardDescription className="text-left text-midgray text-base pt-5 ">
              {description}
            </CardDescription>
          </CollapsibleContent>
        </CardContent>
      </Collapsible>
    </Card>
  );
}

export default function SesionSection() {
  return (
    <div className="bg-white">
      <div className="py-32 px-5 lg:px-20 hidden md:block ">
        <div className="flex gap-3 justify-center lg:justify-between flex-wrap lg:flex-nowrap ">
          <CardSesion
            sesion="sesión 1"
            title="LO QUE TE DIERON"
            description="Empezaremos entendiendo cómo eres, las actitudes que tienes y qué factores en tu vida te han hecho ser así"
            logo={LogoS}
          />

          <CardSesion
            sesion="sesión 2"
            title="LO QUE ESCOGEMOS"
            description="Profundizaremos en lo que es importante para ti: los valores y principios que te hacen única, esos a los que debes ser fiel."
            logo={LogoO}
          />

          <CardSesion
            sesion="sesión 3"
            title="LO QUE TE FRENA"
            description="Descubriremos cuáles son esas dificultades que están causando tu incomodidad y cómo las puedes trabajar."
            logo={LogoY}
          />

          <CardSesion
            sesion="EXTRA"
            title="CATARSIS"
            description="Profundizaremos en lo que es importante para ti: los valores y principios que te hacen única, esos a los que debes ser fiel."
            logo={LogoCatarsis}
          />
        </div>
      </div>
      <div className="py-32 px-5 lg:px-20  md:hidden ">
        <div className="flex gap-3 justify-between flex-col">
          <CardSesionMobile
            sesion="sesión 1"
            title="LO QUE TE DIERON"
            description="Empezaremos entendiendo cómo eres, las actitudes que tienes y qué factores en tu vida te han hecho ser así"
            logo={LogoS}
          />
          <CardSesionMobile
            sesion="sesión 2"
            title="LO QUE ESCOGEMOS"
            description="Profundizaremos en lo que es importante para ti: los valores y principios que te hacen única, esos a los que debes ser fiel."
            logo={LogoO}
          />

          <CardSesionMobile
            sesion="sesión 3"
            title="LO QUE TE FRENA"
            description="Descubriremos cuáles son esas dificultades que están causando tu incomodidad y cómo las puedes trabajar."
            logo={LogoY}
          />

          <CardSesionMobile
            sesion="EXTRA"
            title="CATARSIS"
            description="Profundizaremos en lo que es importante para ti: los valores y principios que te hacen única, esos a los que debes ser fiel."
            logo={LogoCatarsis}
          />
        </div>
      </div>
    </div>
  );
}
