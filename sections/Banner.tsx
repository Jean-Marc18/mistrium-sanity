"use client";

import Loading from "@/app/(root)/(home)/loading";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Banner = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return <Loading/>
  }
  

  return (
    <section className="nav-padding w-full">
      <div className="w-full">
        <h1 className="sm:heading1 heading2 mb-6 text-start text-[#292019]">
          Modern Furniture For <br /> Modern Living Style
        </h1>
        <div>
            <div>
                <p>In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery.</p>
                <p>September few dependent extremity own continued and ten prevailed attending. Early to weeks we could. Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet.</p>
                <div>
                <Button variant="secondary">Request a Quote</Button>
                <Button variant="outline">Watch Video</Button>
                </div>
            </div>
            <div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
