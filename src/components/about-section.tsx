const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif font-bold text-3xl md:text-4xl text-center mb-12">
            Sobre <span className="text-primary">Mí</span>
          </h2>

          <div className="bg-card border-2 rounded-md border-secondary p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-serif font-semibold text-2xl mb-4 text-primary">
                  Passionate Fullstack Developer
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Soy Carlos Cuervo, Desarrollador FullStack apasionado por
                  crear aplicaciones web que sean útiles, escalables y fáciles
                  de usar. Disfruto combinar la solidez del backend con
                  interfaces modernas, siempre cuidando el detalle y el código
                  limpio
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">
                    1+ años de experiencia
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Aprendizaje continuo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-foreground">
                    Enfoque en calidad y rendimiento
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
2;
