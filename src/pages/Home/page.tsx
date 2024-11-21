import Logo from "../../assets/logo-soy.svg";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SesionSection from "./SesionSection";
import HeroBanner from "./HeroBanner";
export default function Home() {
  return (
    <>
      <div className="relative bg-[url('bgmobile.png')] bg-beige  md:bg-[url('backgroundhome.png')] bg-cover">
        <section id="header" className="bg-transparent">
          <nav className="py-8 px-5 lg:px-20  flex-row hidden xl:flex justify-between gap-5">
            <div>
              <img
                src={Logo}
                className="w-[161px] h-[40px] xl:w-[194px] "
                alt="..."
              />
            </div>
            <div className="flex items-center justify-between gap-x-4 ">
              <div>
                <a href="#" className="text-midgray text-base font-medium">
                  Sobre Jael
                </a>
              </div>
              <div>
                <a href="#" className="text-midgray text-base font-medium">
                  Método SOY
                </a>
              </div>
              <div>
                <a href="#" className="text-midgray text-base font-medium">
                  Preguntas
                </a>
              </div>
              <div>
                <a href="#" className="text-midgray text-base font-medium">
                  Contacto
                </a>
              </div>
              <div className="flex gap-1">
                <Button
                  variant="outline"
                  className="bg-midgray text-white tracking-[5px] text-base font-medium rounded-none uppercase hover:text-white hover:bg-midgray "
                >
                  Comprar ahora
                </Button>
                <Button
                  variant="outline"
                  className="bg-white text-darkgray tracking-[5px] border-darkgray text-base rounded-none uppercase font-medium"
                >
                  Iniciar sesión
                </Button>
              </div>
            </div>
          </nav>
          <nav className="flex xl:hidden justify-between px-5 py-8">
            <Sheet>
              <div>
                <img src={Logo} className="w-[161px] h-[40px]" alt="..." />
              </div>

              <div className="flex items-center">
                <SheetTrigger>
                  <Menu size={32} />
                </SheetTrigger>
              </div>
              <SheetContent className="w-full">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                  <SheetDescription className="flex flex-col gap-y-3">
                    <a href="#" className="text-midgray text-base">
                      Sobre Jael
                    </a>
                    <a href="#" className="text-midgray text-base">
                      Método SOY
                    </a>
                    <a href="#" className="text-midgray text-base">
                      Preguntas
                    </a>
                    <a href="#" className="text-midgray text-base">
                      Contacto
                    </a>
                    <Button
                      variant="outline"
                      className="bg-midgray text-white tracking-[5px] rounded-none uppercase hover:bg-midgray font-medium"
                    >
                      Comprar ahora
                    </Button>
                    <Button
                      variant="outline"
                      className="bg-white text-darkgray tracking-[5px] border-darkgray rounded-none uppercase font-medium"
                    >
                      Iniciar sesión
                    </Button>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </nav>
        </section>
        <HeroBanner />
      </div>
      <SesionSection />
    </>
  );
}
