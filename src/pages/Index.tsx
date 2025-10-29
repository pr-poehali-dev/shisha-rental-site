import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/7c96ef46-a61a-4c50-afb9-b5ee0966d522/files/d59b32a2-37a8-49f0-bbe7-22ad73800e68.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <nav className="relative z-10 backdrop-blur-md bg-background/20 border-b border-border/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-primary/20 backdrop-blur-sm p-2 rounded-lg">
                <Icon name="Wind" size={28} className="text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">Hookah Rent</span>
            </div>
            
            <div className="flex gap-6 items-center">
              <Link to="/catalog">
                <Button 
                  variant="ghost" 
                  className="text-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  Каталог
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                className="text-foreground hover:text-primary hover:bg-primary/10 transition-all"
              >
                О нас
              </Button>
              <Button 
                variant="default"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        <section className="container mx-auto px-4 py-24 min-h-[80vh] flex items-center justify-center">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8 inline-block">
              <div className="bg-primary/10 backdrop-blur-sm px-6 py-2 rounded-full border border-primary/30">
                <span className="text-primary font-medium">Премиум качество</span>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-foreground leading-tight animate-fade-in">
              Аренда <span className="text-primary">Кальянов</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
              Создайте атмосферу незабываемого вечера с нашими премиальными кальянами
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Link to="/catalog">
                <Button 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-lg shadow-primary/50 hover:shadow-primary/70 transition-all hover:scale-105"
                >
                  Открыть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </Link>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold text-lg px-8 py-6 backdrop-blur-sm transition-all hover:scale-105"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'Check', title: 'Качество', desc: 'Только премиум кальяны' },
                { icon: 'Truck', title: 'Доставка', desc: 'Быстрая доставка по городу' },
                { icon: 'HeartHandshake', title: 'Поддержка', desc: 'Консультация 24/7' },
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/50 transition-all hover:scale-105"
                >
                  <div className="bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name={feature.icon} size={28} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;