import Button from './button';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <span className="font-serif font-bold text-xl">Portafolio</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Button color={'primary'}>
              <a href="#home">Inicio</a>
            </Button>
            <Button color={'primary'}>Sobre mí</Button>
            <Button color={'primary'}>Habilidades</Button>
            <Button color={'primary'}>Proyectos</Button>
            <Button color={'default'} size="small">
              Contacto
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
