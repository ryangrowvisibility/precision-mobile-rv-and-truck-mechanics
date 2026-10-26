import Icon from "./Icon";
import Reveal from "./Reveal";

const PHONE = "(209) 947-0839";
const TEL = "tel:+12099470839";
const SMS = "sms:+12099470839";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Precision%20mobile%20rv%20and%20truck%20mechanics&query_place_id=ChIJ7XZ7BuhrkYARsq9yQfR0OUU";

const services = [
  { icon: "truck", name: "Mobile RV repair", text: "Eddie drives a fully equipped service truck to your campground, RV park or campsite, including inside Yosemite. No towing your rig to a dealer and waiting weeks.", featured: true },
  { icon: "shield", name: "RV & truck brakes", text: "Brake pads and brake service on motorhomes and trucks, including Mercedes-based Winnebagos, done right where you're parked." },
  { icon: "bolt", name: "RV electrical & landing gear", text: "Electrical faults, dead landing gear and power problems on 5th wheels and trailers, traced and fixed on site." },
  { icon: "layers", name: "Slide-out repair", text: "Slide stuck out and you need to head home? Eddie comes out to get it retracted and working so you can hit the road." },
  { icon: "waves", name: "Airbag & suspension repair", text: "Failed air bags and suspension problems diagnosed and repaired, with Eddie tracking down the parts himself." },
  { icon: "search", name: "RV inspections", text: "A careful look over your RV before a trip or a purchase, so you know what you're driving and what needs attention." },
];

const reviews = [
  { name: "Kristen D.", where: "Yosemite", job: "RV airbag failure", text: "Our RV's airbag failed in Yosemite. Eddie answered right away, found the part and installed it the same day. He saved our trip." },
  { name: "Tim S.", where: "", job: "5th wheel landing gear", text: "He traced the electrical fault in our landing gear within an hour, then drove 45 minutes each way to pick up the part and installed it." },
  { name: "Deb M.", where: "Coarsegold", job: "RV brakes", text: "We were looking at a pricey dealership trip plus a hotel. Eddie came out and did the brakes on site instead." },
  { name: "Jeff J.", where: "", job: "Stuck slide-out", text: "We were stuck at the campground with the slide out. Eddie came the same day so we could head home." },
  { name: "E. A.", where: "Yosemite", job: "Bus breakdown", text: "Eddie came to the rescue in Yosemite, found the parts we needed and got our bus back on the road." },
  { name: "Kevin P.", where: "", job: "On-site RV repair", text: "Showed up at my location on time, diagnosed the problem quickly, and didn't try to upsell me." },
];

const why = [
  { icon: "phone", title: "He picks up", text: "Customers say Eddie answers right away, even mid-trip." },
  { icon: "clock", title: "Often same day", text: "Many repairs are done the day you call." },
  { icon: "route", title: "Chases the parts", text: "He drives to get parts himself to keep your trip on schedule." },
  { icon: "tag", title: "Honest, no upsell", text: "You pay for the fix you need, nothing extra." },
];

const steps = [
  { title: "Call or text Eddie", text: `Call ${PHONE}. Tell him what's wrong, what you're driving and where you're parked.` },
  { title: "He drives to you", text: "Eddie brings the service truck to your campsite, RV park or driveway." },
  { title: "Diagnose & fix on site", text: "He finds the problem, tells you what it needs and what it costs, then fixes it. If a part is needed, he goes and gets it." },
  { title: "Back on the road", text: "You keep your trip, skip the tow and the dealership wait." },
];

const faqs = [
  { q: "Do you really come to the campground?", a: "Yes. That's the whole idea. Eddie works at campgrounds, RV parks and campsites, including inside Yosemite, with a fully equipped service truck." },
  { q: "What areas do you cover?", a: "Yosemite, Coarsegold and the surrounding foothills and Central California. Call with your location and Eddie will tell you if he can get there." },
  { q: "How fast can you get to me?", a: "Many customers got same-day help. It depends on where you are and what the day looks like, so call and Eddie will give you a straight answer." },
  { q: "What if you need a part?", a: "Eddie tracks parts down himself and will drive to pick them up so your repair, and your trip, stays on schedule." },
  { q: "Do you work on trucks and buses too?", a: "Yes. Along with motorhomes, trailers and 5th wheels, Eddie works on trucks and has gotten broken-down buses back on the road." },
  { q: "Will you try to sell me work I don't need?", a: "No. Reviewers specifically mention quick diagnosis and no upselling. You'll hear what it needs before any work starts." },
];

const gallery = [
  { src: "/images/p2.jpg", alt: "Precision Mechanics service box truck parked beside a monster truck" },
  { src: "/images/p4.jpg", alt: "Red heavy-duty truck at a job site" },
  { src: "/images/p5.jpg", alt: "Service van parked next to a large motorhome at a campground" },
  { src: "/images/p6.jpg", alt: "RV interior with a ladder set up for a roof repair" },
  { src: "/images/p7.jpg", alt: "Red service truck on an airfield" },
  { src: "/images/p8.jpg", alt: "Large motorhome in a garage bay being serviced" },
  { src: "/images/p9.jpg", alt: "Turbo parts laid out on the tailgate of the red service truck" },
  { src: "/images/p10.jpg", alt: "Truck with the hood open and engine partly removed" },
  { src: "/images/p11.jpg", alt: "Small travel trailer inside the shop" },
  { src: "/images/p12.jpg", alt: "Eddie working on a heavy vehicle part in the yard" },
  { src: "/images/p13.jpg", alt: "Vehicle under repair at night with the hood up" },
  { src: "/images/p14.jpg", alt: "Brake rotor and drain pan under a vehicle during a brake job" },
  { src: "/images/p15.jpg", alt: "Engine work on a boat at the water" },
  { src: "/images/p1.png", alt: "Precision Mechanics box truck parked on a gravel lot" },
];

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z" />
        </svg>
      ))}
    </span>
  );
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Precision Mobile RV and Truck Mechanics",
  telephone: "+1-209-947-0839",
  image: "https://precision-mobile-rv-and-truck-mechanics.growlocalvisibility.com/images/p3.jpg",
  url: "https://precision-mobile-rv-and-truck-mechanics.growlocalvisibility.com",
  areaServed: ["Yosemite, CA", "Coarsegold, CA", "Central California"],
  founder: { "@type": "Person", name: "Eddie" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "37" },
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Reveal />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-4 focus:py-2">Skip to content</a>

      <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-5">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Precision Mobile RV & Truck Mechanics home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white"><Icon name="wrench" className="h-5 w-5" /></span>
            <span className="leading-none">
              <span className="block font-[family-name:var(--font-head)] text-[22px] font-bold">Precision</span>
              <span className="block text-[13px] font-semibold text-muted">Mobile RV &amp; Truck Mechanics</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[16px] font-semibold text-muted lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#work" className="hover:text-brand">Our Work</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={TEL} className="ring-phone hidden items-center gap-2 font-bold md:flex"><Icon name="phone" className="h-5 w-5 text-brand" />{PHONE}</a>
            <a href={TEL} className="btn btn-cta hidden sm:inline-flex">Call Eddie</a>
            <a href={TEL} aria-label={`Call ${PHONE}`} className="grid h-11 w-11 place-items-center rounded-lg bg-cta text-ink sm:hidden"><Icon name="phone" className="h-5 w-5" /></a>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="top" className="bg-tint">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:py-20 lg:grid-cols-2">
            <div>
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[15px] font-semibold text-brand-deep ring-1 ring-line"><Icon name="truck" className="h-4 w-4" /> We come to your campsite</p>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)]">Mobile RV &amp; Truck Repair Around Yosemite, Coarsegold &amp; Central California</h1>
              <p className="mt-5 max-w-[58ch] text-[19px] text-muted">Broken down mid-trip? Eddie brings the shop to you: brakes, electrical, slide-outs and air bags, fixed at your campsite, often the same day.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={TEL} className="btn btn-cta ring-phone text-[18px]"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
                <a href={SMS} className="btn btn-ghost text-[18px]"><Icon name="text" className="h-5 w-5 text-brand" />Text your location</a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[16px]">
                <span className="flex items-center gap-2"><Stars className="h-[18px] w-[18px]" /><span className="font-bold">4.9</span></span>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="text-muted underline decoration-line underline-offset-4 hover:text-brand">37 Google reviews</a>
                <span className="text-muted">Same-day help</span>
                <span className="text-muted">No upselling</span>
              </div>
            </div>
            <div className="reveal">
              <img src="/images/p3.jpg" alt="Precision Mechanics mobile service truck ready to roll" width={1440} height={1080} className="aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_30px_60px_-30px_oklch(0.3_0.08_255/0.5)]" />
            </div>
          </div>
        </section>

        <section aria-label="Why RVers call Eddie" className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
            {[
              { icon: "thumb", t: "4.9 on Google", s: "37 reviews" },
              { icon: "truck", t: "Fully mobile", s: "Campgrounds & RV parks" },
              { icon: "clock", t: "Same-day help", s: "When the schedule allows" },
              { icon: "user", t: "Owner-operated", s: "You deal with Eddie" },
            ].map((x) => (
              <div key={x.t} className="flex items-start gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={x.icon} /></span>
                <div><p className="font-bold leading-tight">{x.t}</p><p className="text-[15px] text-muted">{x.s}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <h2 className="max-w-[640px] text-[clamp(1.9rem,3.6vw,2.7rem)]">RV and truck repairs, done where you&rsquo;re parked</h2>
            <p className="mt-4 max-w-[640px] text-muted">No tow, no dealership wait, no hotel. Here&rsquo;s what Eddie fixes on the road.</p>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article key={s.name} className={`reveal lift flex flex-col rounded-2xl bg-white p-7 ring-1 ${s.featured ? "ring-2 ring-brand" : "ring-line"}`}>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft text-brand"><Icon name={s.icon} /></span>
                  <h3 className="mt-5 text-[1.35rem]">{s.name}</h3>
                  <p className="mt-2 flex-1 text-[17px] text-muted">{s.text}</p>
                  <a href={TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand hover:text-brand-deep">Call about this <Icon name="arrow" className="h-4 w-4" /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-[640px]">
                <h2 className="text-[clamp(1.9rem,3.6vw,2.7rem)]">Rated 4.9 from 37 Google reviews</h2>
                <p className="mt-3 text-muted">The line we hear most: &ldquo;Eddie saved our trip.&rdquo;</p>
              </div>
              <a href={MAPS} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">Read all reviews on Google <Icon name="arrow" className="h-4 w-4" /></a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.map((r) => (
                <figure key={r.name} className="reveal flex flex-col rounded-2xl bg-white p-6 ring-1 ring-line">
                  <Stars className="h-[18px] w-[18px]" />
                  <blockquote className="mt-3 flex-1 text-[17px] leading-relaxed">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-line pt-4">
                    <span className="block font-bold">{r.name}{r.where && <span className="font-normal text-muted"> · {r.where}</span>}</span>
                    <span className="text-[15px] text-muted">{r.job} · Google review</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 lg:grid-cols-2">
            <img src="/images/p12.jpg" alt="Eddie working on a heavy-duty part in the yard" width={1434} height={1080} loading="lazy" className="reveal aspect-[4/3] w-full rounded-2xl object-cover" />
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.7rem)]">Meet Eddie, the mechanic who drives to you</h2>
              <div className="mt-5 space-y-4 text-muted">
                <p>Precision Mobile RV and Truck Mechanics is Eddie&rsquo;s business. He works out of a fully equipped service truck and covers the Yosemite and Coarsegold area and the wider Central Valley, so a breakdown at a campground doesn&rsquo;t have to end your trip.</p>
                <p>Most of his calls come from travelers in a jam: a failed air bag in Yosemite, brakes that need doing before the drive home, a slide that won&rsquo;t come in. Eddie answers, shows up, figures out what&rsquo;s wrong and fixes it on the spot. When a part isn&rsquo;t on the truck, he goes and gets it, even if that means a 90-minute round trip.</p>
                <p>He prices fairly, explains what he&rsquo;s doing and doesn&rsquo;t pad the bill. That&rsquo;s why so many reviews end the same way: he saved our trip.</p>
              </div>
              <ul className="mt-8 grid gap-5 sm:grid-cols-2">
                {why.map((w) => (
                  <li key={w.title} className="flex gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand"><Icon name={w.icon} className="h-5 w-5" /></span>
                    <span><span className="block font-bold text-ink">{w.title}</span><span className="text-[16px] text-muted">{w.text}</span></span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="how" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <h2 id="how" className="text-[clamp(1.9rem,3.6vw,2.7rem)]">How it works</h2>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="reveal rounded-2xl bg-white p-6 ring-1 ring-line">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-[family-name:var(--font-head)] text-lg font-bold text-white">{i + 1}</span>
                  <h3 className="mt-5 text-[1.25rem]">{s.title}</h3>
                  <p className="mt-2 text-[16px] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="work" className="py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5">
            <h2 className="text-[clamp(1.9rem,3.6vw,2.7rem)]">On the job</h2>
            <p className="mt-3 text-muted">Real photos from Eddie&rsquo;s service calls and shop work.</p>
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {gallery.map((g) => (
                <img key={g.src} src={g.src} alt={g.alt} loading="lazy" className="aspect-[4/3] h-full w-full rounded-xl object-cover" />
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="area" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 id="area" className="text-[clamp(1.9rem,3.6vw,2.7rem)]">Where Eddie works</h2>
              <p className="mt-4 text-muted">Yosemite, Coarsegold and the surrounding foothills, plus the wider Central Valley. Text your location and he&rsquo;ll tell you if he can get there.</p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {["Yosemite", "Coarsegold", "Sierra foothills", "Central California"].map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-semibold ring-1 ring-line"><Icon name="pin" className="h-4 w-4 text-brand" />{a}</li>
                ))}
              </ul>
              <a href={TEL} className="btn btn-cta mt-8"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
            </div>
            <iframe title="Map of Coarsegold, CA" src="https://maps.google.com/maps?q=Coarsegold%2C%20CA&output=embed" className="h-[360px] w-full rounded-2xl border-0 ring-1 ring-line lg:h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </section>

        <section id="faq" className="py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5">
            <h2 className="text-[clamp(1.9rem,3.6vw,2.7rem)]">Questions</h2>
            <div className="mt-10 divide-y divide-line rounded-2xl bg-white ring-1 ring-line">
              {faqs.map((f) => (
                <details key={f.q} className="px-6">
                  <summary className="flex items-center justify-between gap-4 py-5 text-[18px] font-bold">
                    {f.q}
                    <span className="plus grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand"><Icon name="plus" className="h-4 w-4" /></span>
                  </summary>
                  <p className="pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center md:py-20">
            <div>
              <h2 className="text-[clamp(1.9rem,3.6vw,2.7rem)] text-white">Stuck at camp? Call Eddie at {PHONE}</h2>
              <p className="mt-3 text-[18px] text-white/85">Tell him what&rsquo;s wrong and where you are. He&rsquo;ll come to you.</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a href={TEL} className="btn btn-cta ring-phone text-[19px]"><Icon name="phone" className="h-5 w-5" />Call {PHONE}</a>
              <a href={SMS} className="btn border border-white/40 text-white hover:bg-white/10"><Icon name="text" className="h-5 w-5" />Text us</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 md:grid-cols-4">
          <div>
            <p className="font-[family-name:var(--font-head)] text-xl font-bold">Precision Mobile RV &amp; Truck Mechanics</p>
            <p className="mt-3 text-[16px] text-muted">Mobile RV and truck repair by Eddie. We come to you.</p>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-[16px] text-muted">
              <li><a href={TEL} className="font-semibold text-ink hover:text-brand">{PHONE}</a></li>
              <li><a href={SMS} className="hover:text-brand">Text us</a></li>
              <li>Mobile service, Yosemite &amp; Coarsegold area</li>
              <li><a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Find us on Google Maps</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <ul className="mt-3 space-y-2 text-[16px] text-muted">
              {services.map((s) => <li key={s.name}>{s.name}</li>)}
              <li>Roadside RV service</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Service area</p>
            <p className="mt-3 text-[16px] text-muted">Yosemite, Coarsegold, the Sierra foothills and Central California.</p>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[1200px] px-5 text-[14px] text-muted">&copy; {new Date().getFullYear()} Precision Mobile RV and Truck Mechanics. All rights reserved.</p>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-white p-3 md:hidden">
        <a href={TEL} className="btn btn-cta"><Icon name="phone" className="h-5 w-5" />Call</a>
        <a href={SMS} className="btn btn-ghost"><Icon name="text" className="h-5 w-5 text-brand" />Text</a>
      </div>
    </>
  );
}
