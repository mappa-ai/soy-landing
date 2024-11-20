import Logo from "../assets/logo-soy.svg";

export default function Home() {
  return (
    <div>
      <section id="header" className="bg-beige">
        <nav className="space-x-1 flex flex-row  justify-between">
          <div>
            <img src={Logo} alt="..." />
          </div>
          <div className="flex flex-row gap-[10px]">
            <div>
              <a href="#" className="text-midgray text-base">
                Sobre Jael
              </a>
            </div>
            <div>
              <a href="#" className="text-midgray text-base">
                Método SOY
              </a>
            </div>
            <div>
              <a href="#" className="text-midgray text-base">
                Preguntas
              </a>
            </div>
            <div>
              <a href="#" className="text-midgray text-base">
                Contacto
              </a>
            </div>
          </div>
        </nav>
      </section>
    </div>
  );
}
