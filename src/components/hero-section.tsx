import Button from './button';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up text-center lg:text-left">
            <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Desarrollador <br />
              <span className="text-foreground">Fullstack</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-10">
              Especializado en Java Spring Boot, React, Python y Docker.
              Transformando ideas en soluciones digitales elegantes y
              funcionales.
            </p>

            <div className="flex flex-row gap-8 mb-5">
              <Button size="medium">Ver Proyectos</Button>
              <Button color="secondary" size="medium">
                Contactar
              </Button>
            </div>

            <div className="flex flex-row space-x-6 mt-2.5 lg:justify-start">
              <a
                href="https://github.com/Hyosuporte"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/carlos-andres-cuervo-galeano-54154a239/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href=""
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gray-900 rounded-lg border border-primary/20 shadow-2xl overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-4">
                    ~/developer
                  </span>
                </div>

                <div className="p-4 font-mono text-sm">
                  <div className="text-green-400 animate-typing">
                    <span className="text-blue-400">$</span> npm run dev
                  </div>
                  <div className="text-gray-300 mt-2 animate-fade-in-delayed">
                    <span className="text-yellow-400">✓</span> Ready on
                    http://localhost:3000
                  </div>
                  <div className="text-gray-300 mt-1 animate-fade-in-delayed-2">
                    <span className="text-green-400">✓</span> Compiled
                    successfully
                  </div>
                  <div className="text-blue-400 mt-4 animate-typing-2">
                    <span className="text-blue-400">$</span> git commit -m
                    "feat: new feature"
                  </div>
                  <div className="text-gray-300 mt-2 animate-fade-in-delayed-3">
                    <span className="text-green-400">[main]</span> 3 files
                    changed, 42 insertions(+)
                  </div>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-3 animate-float">
                <div className="text-primary font-mono text-xs">
                  {'{ "status": "success" }'}
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-lg p-3 animate-float-delayed">
                <div className="text-accent font-mono text-xs">
                  {'<Component />'}
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-lg p-2 animate-float-slow">
                <div className="text-primary font-mono text-xs">
                  {'@SpringBootApplication'}
                </div>
              </div>

              <div className="absolute -top-8 left-1/4 w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center animate-bounce-slow">
                <span className="text-orange-500 font-bold text-xs">J</span>
              </div>

              <div className="absolute -bottom-8 right-1/4 w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center animate-bounce-slow-delayed">
                <span className="text-blue-500 font-bold text-xs">R</span>
              </div>

              <div className="absolute top-1/4 -left-8 w-8 h-8 bg-yellow-500/20 rounded-full flex items-center justify-center animate-bounce-slow-delayed-2">
                <span className="text-yellow-500 font-bold text-xs">P</span>
              </div>

              <div className="absolute bottom-1/4 -right-8 w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center animate-bounce-slow-delayed-3">
                <span className="text-blue-600 font-bold text-xs">D</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button className="text-muted-foreground hover:text-primary transition-colors">
            <a href="#about">
              <ArrowDown size={24} />
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
