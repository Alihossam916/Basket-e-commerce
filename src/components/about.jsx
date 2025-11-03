export default function About() {
  return (
    <main>
      <div className="relative flex flex-col justify-center items-center text-white text-center bg-[url('/imgs/about_banner.jpg')] bg-cover bg-center bg-no-repeat h-60 md:h-80 lg:h-96">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 flex flex-col gap-2">
          <h1 className="text-5xl font-semibold">About for Bacola</h1>
          <p className="text-lg uppercase">We can do more for you</p>
        </div>
      </div>
      <section className="flex flex-col justify-center items-center gap-8 my-8 mx-10 lg:mx-40">
        <p className="">
          In nec purus eget neque accumsan finibus. Duis condimentum elit ut
          libero commodo iaculis. Donec augue diam, tristique et ultricies nec,
          consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id lacus
          rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus in
          dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum turpis.
          Curabitur porta auctor quam, pretium facilisis nisl. Pellentesque
          efficitur elit ante, vel vulputate tortor blandit nec.
        </p>
        <div className="mx-10 flex flex-col gap-8">
          <h2 className="text-3xl font-semibold">
            Quisque erat urna, congue et libero ineleifend euismod velit.
          </h2>
          <p>
            In nec purus eget neque accumsan finibus. Duis condimentum elit ut
            libero commodo iaculis. Donec augue diam, tristique et ultricies
            nec, consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
            lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
            in dapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
            turpis. Curabitur porta auctor quam, pretium facilisis nisl.
            Pellentesque efficitur elit ante, vel vulputate tortor blandit nec.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center xl:items-start gap-10">
          <img
            src="/imgs/image_2025-10-31_153641814.png"
            alt="About Bacola"
            className="rounded-lg shadow-lg h-[900px]"
          />
          <aside className="flex flex-col justify-center items-start gap-4 max-w-xl">
            <h4 className="text-lg mx-8">Rachel Leonard - Bacola CEO</h4>
            <h3 className="text-3xl font-semibold">
              Duis convallis luctus pretium. <br />
              Pellentesque habitant morbi
            </h3>
            <p className="mx-8 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmodtempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisseultrices gravida. Risus commodo viverra maecenas
              accumsan lacus velfacilisis.
            </p>
            <p className="mx-8">
              In fermentum mi ut sapien semper, a sagittis lorem vulputate.
              Integer gravida, dui eget aliquet tempus, turpis orci vehicula
              ipsum, eget porttitor sapien tortor at neque. Cras id pulvinar
              lacus, ac volutpat neque. Ut at magna id justo bibendum lobortis.
              Integer tortor nulla, ultricies et nisi sit amet, interdum dictum
              felis. In semper laoreet dui vitae pharetra. Etiam sit amet
              molestie nulla, eu efficitur orci. Praesent rutrum ante justo,
              eget malesuada ante ornare ac. Ut dignissim blandit urna, eget
              euismod leo rhoncus nec. Vestibulum ante ipsum primis in faucibus
              orci luctus et ultrices posuere cubilia curae; Quisque lobortis
              libero ante. Nullam in feugiat erat. Aenean sed justo dapibus,
              sodales nisi ut, fringilla lorem. Vestibulum in orci ac nisl
              condimentum fermentum at et sem. Curabitur fermentum dolor eu
              lacus consectetur varius.
            </p>
            <p className="">
              In nec purus eget neque accumsan finibus. Duis condimentum elit ut
              libero commodo iaculis. Donec augue diam, tristique et ultricies
              nec,consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus
              id lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum
              metus indapibus. Vestibulum sit amet sollicitudin enim. Ut id
              interdum turpis. Curabitur porta auctor quam, pretium facilisis
              nisl. Pellentesque efficitur elitante, vel vulputate tortor
              blandit nec.
            </p>
          </aside>
        </div>
        <p>
          In nec purus eget neque accumsan finibus. Duis condimentum elit ut
          libero commodo iaculis. Donec augue diam, tristique et ultricies
          nec,consectetur quis enim. Nullam id rutrum ex. Aliquam a lectus id
          lacus rhoncus dapibus non ac justo. Vivamus lacinia vestibulum metus
          indapibus. Vestibulum sit amet sollicitudin enim. Ut id interdum
          turpis. Curabitur porta auctor quam, pretium facilisis nisl.
          Pellentesque efficitur elitante, vel vulputate tortor blandit nec.
        </p>
      </section>
    </main>
  );
}
