import { content } from "@/content";
import Koord from "@/components/graphics/Koord";
import Peg from "@/components/graphics/Peg";
import PegRoute from "@/components/graphics/PegRoute";
import ScaleBar from "@/components/graphics/ScaleBar";
import Uitgezet from "@/components/home/Uitgezet";
import RitmeKiezer from "@/components/home/RitmeKiezer";
import WorkImage from "@/components/photos/WorkImage";
import Werkbon from "@/components/photos/Werkbon";
import ContactBlock from "@/components/site/ContactBlock";
import FaqList from "@/components/site/FaqList";
import Kluslint from "@/components/site/Kluslint";
import Veldstaat from "@/components/site/Veldstaat";
import { OfferteLink, PhoneLink } from "@/components/site/Links";
import PegList from "@/components/site/PegList";
import { heroPhoto, jobById, jobs, photoByNumber, pickPhotos, portraits } from "@/lib/photos";

export default function Home() {
  const conniferen = jobById("conniferen-verwijderen-en-stobben-frezen");
  const landgoed = pickPhotos(
    "onderhoud-landgoed-t-haveke",
    [1, 4, 6, 9, 11, 13],
    "ONDERHOUD LANDGOED 'T HAVEKE · 6 FOTO'S",
  );
  const bestrating = content.bestratingStappen.map((step) => ({
    title: step.title,
    text: step.text,
    photo: photoByNumber(step.jobId, step.photoN),
    photoCaption: `Foto uit: ${jobById(step.jobId).title}`,
  }));

  return (
    <main>
      <section data-section="hero" className="wrap grid items-end gap-8 py-10 md:grid-cols-12 md:py-16">
        <div className="md:col-span-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-schors">Hoveniersbedrijf · Warnsveld</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.05] text-haag md:text-5xl xl:text-[3.4rem]">
            Uw tuin, aangelegd en bijgehouden door René
          </h1>
          <Koord />
          <p className="mt-5 max-w-xl">
            Aanleg, onderhoud en renovatie in {content.company.region}. Eén hovenier die langskomt, meedenkt en het werk zelf doet.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <PhoneLink className="btn btn-haag">Bel {content.contact.phoneDisplay}</PhoneLink>
            <OfferteLink className="btn btn-koord">Offerte aanvragen</OfferteLink>
          </div>
          <p className="mt-5 flex items-center gap-3">
            <Peg size="sm" />
            <span>Eerst een vrijblijvend gesprek bij u thuis.</span>
          </p>
        </div>
        <div className="md:col-span-7 md:mt-6">
          <WorkImage
            photo={heroPhoto}
            framed
            preload
            sizes="(max-width: 768px) 100vw, 720px"
            className="w-full border-[1.5px] border-haag"
          />
          <ScaleBar />
        </div>
      </section>

      <section data-section="vertrouwen" className="bg-haag">
        <p className="wrap py-4 text-center font-mono text-[12px] leading-relaxed tracking-wide text-zand md:text-[13px]">
          Warnsveld · aanleg, onderhoud, renovatie · bestrating & schuttingen · planten en materialen geleverd
        </p>
      </section>

      <section data-section="diensten" className="wrap py-16 md:py-20">
        <h2 id="diensten-titel" className="max-w-3xl font-display text-4xl font-extrabold text-haag md:text-5xl">
          Het werk, uitgezet
        </h2>
        <Koord />
        <p className="mt-5 max-w-3xl">
          Van een nieuwe tuin tot de tuinbeurt, het straatwerk en de schutting. Ik doe het in één hand, en ik begin bij u thuis.
        </p>
        <div className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-6">
          <Uitgezet {...content.services[0]} className="md:col-span-3" />
          <Uitgezet {...content.services[1]} className="md:col-span-3" />
          <Uitgezet {...content.services[2]} className="md:col-span-2" />
          <Uitgezet {...content.services[3]} className="md:col-span-2" />
          <Uitgezet {...content.services[4]} className="md:col-span-2" />
        </div>
        <a
          href="/planten-materialen"
          className="relative mt-12 block border-y-[1.5px] border-koord bg-wit px-5 py-5"
        >
          <span className="absolute -top-3.5 left-3">
            <Peg size="sm" />
          </span>
          <span className="absolute -top-3.5 right-3">
            <Peg size="sm" />
          </span>
          <span className="font-display text-2xl font-extrabold text-haag">Levering en afvoer</span>
          <span className="mt-1 block max-w-3xl">
            Levering van planten, struiken en bomen. Materialen zoals stenen, zand, grind en grond. Afvoeren van afval en grond.
          </span>
        </a>
      </section>

      <section data-section="werkwijze" className="bg-wit">
        <div className="wrap py-16 md:py-20">
          <h2 id="werkwijze-titel" className="font-display text-4xl font-extrabold text-haag md:text-5xl">
            Zo gaat het
          </h2>
          <Koord />
          <p className="mt-5 max-w-3xl">{content.visitLine}</p>
          <div className="mt-12">
            <PegRoute steps={content.route} labelledBy="werkwijze-titel" />
          </div>
        </div>
      </section>

      <section data-section="werkbon" className="wrap py-16 md:py-20">
        <h2 className="font-display text-4xl font-extrabold text-haag md:text-5xl">Werk in volgorde</h2>
        <Koord />
        <div className="mt-8">
          <Werkbon
            job={conniferen}
            intro="Tien foto's, van links naar rechts, in de volgorde van het werk: conniferen verwijderen en stobben frezen."
            moreHref="/fotos#conniferen-verwijderen-en-stobben-frezen"
            moreLabel="Alle foto's"
          />
        </div>
      </section>

      <section data-section="bestrating" className="bg-wit">
        <div className="wrap py-16 md:py-20">
          <h2 id="bestrating-titel" className="font-display text-4xl font-extrabold text-haag md:text-5xl">
            Bestrating in vier stappen
          </h2>
          <Koord />
          <p className="mt-5 max-w-3xl">
            Tegels, gebakken keiklinkers, natuursteen, en veel soorten grind en split. We kiezen samen.
          </p>
          <div className="mt-10">
            <PegRoute steps={bestrating} labelledBy="bestrating-titel" />
          </div>
          <p className="mt-10 max-w-3xl font-display text-2xl font-bold leading-snug text-haag">
            Zo kunt u lang plezier hebben van vakkundig aangelegde bestrating.
          </p>
          <h3 className="mt-8 font-display text-2xl font-extrabold text-haag">Materiaal</h3>
          <PegList items={content.bestratingMaterialen} />
          <p className="mt-6">
            <OfferteLink dienst="bestrating" className="btn btn-koord">
              Offerte voor bestrating
            </OfferteLink>
          </p>
        </div>
      </section>

      <section data-section="onderhoud" className="wrap py-16 md:py-20">
        <h2 className="font-display text-4xl font-extrabold text-haag md:text-5xl">Onderhoud in uw ritme</h2>
        <Koord />
        <p className="mt-5 max-w-3xl">
          Samen maken we een plan. Wekelijks, maandelijks of maar enkele keren per jaar een tuinbeurt, alles in overleg.
        </p>
        <div className="mt-8 max-w-3xl">
          <RitmeKiezer />
        </div>
        <h3 className="mt-10 font-display text-2xl font-extrabold text-haag">In de tuinbeurt</h3>
        <PegList items={content.onderhoudTaken} />
        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <Werkbon job={jobById("gazon-verticuteren")} />
          <Werkbon job={jobById("winterbeurt-tuin")} />
        </div>
      </section>

      <section data-section="landgoed" className="bg-wit">
        <div className="wrap py-16 md:py-20">
          <h2 className="max-w-3xl font-display text-4xl font-extrabold text-haag md:text-5xl">
            Ook voor grotere terreinen: onderhoud op Landgoed &apos;t Haveke
          </h2>
          <Koord />
          <p className="mt-5 max-w-3xl">Een selectie uit die klus. De hele reeks staat bij de foto&apos;s.</p>
          <div className="mt-8">
            <Werkbon
              job={landgoed}
              moreHref="/fotos#onderhoud-landgoed-t-haveke"
              moreLabel="Alle 13 foto's van Landgoed 't Haveke"
            />
          </div>
        </div>
      </section>

      <section data-section="over-rene" className="wrap grid items-center gap-10 py-16 md:grid-cols-[minmax(0,400px)_1fr] md:py-20">
        <WorkImage
          photo={portraits.rene}
          sizes="400px"
          className="w-full max-w-[400px] border-[1.5px] border-haag"
        />
        <div>
          <h2 className="font-display text-4xl font-extrabold text-haag md:text-5xl">René Zoerink</h2>
          <Koord />
          <p className="mt-5 max-w-2xl">
            Hoveniersbedrijf René Zoerink is een jong en dynamisch bedrijf. Ik kom bij u langs, denk met u mee en doe het werk: aanleg, onderhoud, renovatie, straatwerk, schuttingen en levering.
          </p>
          <p className="mt-4 max-w-2xl">Werkgebied: {content.company.region}.</p>
          <p className="mt-6">
            <a href="/over-rene" className="font-semibold text-schors underline decoration-koord decoration-2 underline-offset-4">
              Meer over René
            </a>
          </p>
        </div>
      </section>

      <Veldstaat jobs={jobs} />

      <section data-section="archief" className="bg-zand">
        <div className="wrap pt-16 md:pt-20">
          <h2 className="font-display text-4xl font-extrabold text-haag md:text-5xl">Nog drie klussen</h2>
          <Koord />
          <p className="mt-5 max-w-3xl">
            Een tuin in aanleg, bakken van betonnen bielzen, en een particuliere tuin die bijgehouden wordt. Meer staat op de fotopagina, per klus op een rij.
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {[
              { id: "aanleg-tuin", n: 7 },
              { id: "betonnen-bielzen-bakken", n: 5 },
              { id: "onderhoud-particuliere-tuin", n: 6 },
            ].map((item) => {
              const job = jobById(item.id);
              return (
                <a key={item.id} href={`/fotos#${item.id}`} className="block text-ink">
                  <WorkImage
                    photo={photoByNumber(item.id, item.n)}
                    framed
                    sizes="(max-width: 768px) 100vw, 360px"
                    className="w-full border-[1.5px] border-haag"
                  />
                  <p className="stamp mt-3">{job.title}</p>
                  <p className="mt-2 text-base">{job.blurb}</p>
                </a>
              );
            })}
          </div>
        </div>
        <div className="mt-10">
          <Kluslint jobs={jobs} />
        </div>
      </section>

      <section data-section="faq" className="bg-wit">
        <div className="wrap py-16 md:py-20">
          <h2 className="font-display text-4xl font-extrabold text-haag md:text-5xl">Vragen</h2>
          <Koord />
          <div className="mt-8">
            <FaqList />
          </div>
        </div>
      </section>

      <ContactBlock />
    </main>
  );
}
