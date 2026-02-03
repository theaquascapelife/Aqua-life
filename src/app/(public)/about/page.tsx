
export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">

        {/* Hero / Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold md:text-5xl">
            About Us
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Welcome to <span className="font-medium text-foreground">
              The Aqua Lifescape
            </span>
          </p>
        </div>

        {/* Content */}
        <div className="mx-auto mt-14 max-w-4xl space-y-8 text-base leading-relaxed text-muted-foreground">

          <p>
            At <span className="font-medium text-foreground">
              The Aqua Lifescape
            </span>, we’re passionate about bringing the beauty of aquatic life
            into your everyday spaces. Based in Vasai (Mumbai), we specialize in
            creating bespoke aquariums that blend artistry with sustainable
            functionality — crafted to fit your lifestyle, aesthetic, and space
            requirements.
          </p>

          <p>
            From luxurious home aquascapes to large-scale commercial
            installations, our team combines premium design, advanced filtration
            technology, and expert fish care to deliver breathtaking underwater
            ecosystems that truly thrive.
          </p>

        </div>

        {/* What Sets Us Apart */}
        <div className="mt-20">
          <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
            What Sets Us Apart
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            <div className="rounded-xl border bg-white p-6 text-center">
              <h3 className="text-lg font-semibold">
                Tailor-Made Aquarium Solutions
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every aquarium is custom-designed to suit your space,
                preferences, and lifestyle.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 text-center">
              <h3 className="text-lg font-semibold">
                Eco-Friendly Materials & Equipment
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We use sustainable materials and efficient systems that support
                long-term aquatic health.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 text-center">
              <h3 className="text-lg font-semibold">
                Experienced Aquascape Designers
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Our designers bring years of experience and artistic expertise
                to every project.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-6 text-center">
              <h3 className="text-lg font-semibold">
                Complete End-to-End Service
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                From concept and installation to maintenance and upgrades, we
                handle it all.
              </p>
            </div>

          </div>
        </div>

        {/* After Sales */}
        <div className="mx-auto mt-16 max-w-3xl text-center">
          <h3 className="text-2xl font-semibold">
            Reliable After-Sales Support
          </h3>
          <p className="mt-3 text-muted-foreground">
            Our commitment does not end after installation. We provide dependable
            after-sales support to ensure your aquarium continues to flourish
            for years to come.
          </p>
        </div>

      </div>
    </section>
  );
}
