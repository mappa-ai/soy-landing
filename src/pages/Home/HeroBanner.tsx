import { Button } from "@/components/ui/button";

export default function HeroBanner() {
    return (
        <div className="px-5 pt-[355px] pb-20 lg:px-20 md:py-48 md:w-2/4">
        <p className="font-light text-4xl lg:text-6xl">
          Una experiencia para ReDescubrirte, ReConectarte & ReConocerte
        </p>
        <h6 className="font-normal text-xl pt-5 md:pt-10 pb-20">
          SOY es un viaje de cuatro sesiones diseñada para reconectar
          <br />
          contigo misma, para que descubras tu verdad interior y puedas <br />
          vivir en libertad emocional.
        </h6>
        <Button
          variant="outline"
          className="bg-transparent w-full md:w-auto font-medium border-darkgray text-darkgray tracking-[5px] rounded-none uppercase hover:bg-midgray px-10 py-4"
        >
          Empieza hoy
        </Button>
      </div>
    )}