import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Catalog = () => {
  const tobaccoByStrength = {
    weak: [
      { name: 'Adalya', price: '450₽' },
      { name: 'Afzal', price: '480₽' },
      { name: 'Al Ajamy', price: '500₽' },
      { name: 'Al Fakher', price: '520₽' },
      { name: 'Al Waha', price: '490₽' },
      { name: 'Argelini', price: '530₽' },
      { name: 'Daily Hookah', price: '470₽' },
      { name: 'D-Gastro', price: '550₽' },
      { name: 'Fumari', price: '580₽' },
      { name: 'Gin', price: '510₽' },
      { name: 'Haze', price: '540₽' },
      { name: 'Hookafina', price: '520₽' },
      { name: 'Layalina', price: '460₽' },
      { name: 'Serbetli', price: '490₽' },
      { name: 'Social Smoke', price: '550₽' },
      { name: 'Starbuzz', price: '600₽' },
      { name: 'Vega', price: '530₽' },
    ],
    medium: [
      { name: 'Виноград с мятой', price: '550₽' },
      { name: 'Манго маракуйя', price: '600₽' },
      { name: 'Вишня', price: '530₽' },
      { name: 'Апельсин', price: '540₽' },
    ],
    strong: [
      { name: 'Двойное яблоко', price: '580₽' },
      { name: 'Грейпфрут', price: '600₽' },
      { name: 'Мята экстра', price: '620₽' },
      { name: 'Кола', price: '590₽' },
    ]
  };

  const coals = [
    { name: 'Кокосовые угли 1кг', price: '300₽' },
    { name: 'Быстроразжигаемые угли', price: '200₽' },
    { name: 'Премиум кокосовые', price: '400₽' },
    { name: 'Угли для калауда', price: '350₽' },
  ];

  return (
    <div className="min-h-screen relative">
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/7c96ef46-a61a-4c50-afb9-b5ee0966d522/files/d59b32a2-37a8-49f0-bbe7-22ad73800e68.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/30 border-b border-border/40">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Icon name="ArrowLeft" size={20} />
            <span className="font-semibold">Назад</span>
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Каталог</h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-card/95 backdrop-blur-sm border-border/50">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/7c96ef46-a61a-4c50-afb9-b5ee0966d522/files/146015cb-1514-4ccb-b62b-bb4ca5ec3f86.jpg"
                alt="Табак"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="bg-primary/20 backdrop-blur-sm p-2 rounded-lg">
                  <Icon name="Leaf" size={28} className="text-primary" />
                </div>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-2xl">Табак</CardTitle>
              <CardDescription className="text-muted-foreground">
                Премиальные табачные смеси для незабываемого вкуса
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Tabs defaultValue="weak" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-4">
                  <TabsTrigger value="weak">Слабый</TabsTrigger>
                  <TabsTrigger value="medium">Средний</TabsTrigger>
                  <TabsTrigger value="strong">Крепкий</TabsTrigger>
                </TabsList>
                
                <TabsContent value="weak" className="space-y-3">
                  {tobaccoByStrength.weak.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex justify-between items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                    >
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="medium" className="space-y-3">
                  {tobaccoByStrength.medium.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex justify-between items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                    >
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="strong" className="space-y-3">
                  {tobaccoByStrength.strong.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex justify-between items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                    >
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </span>
                      <span className="text-primary font-semibold">{item.price}</span>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-card/95 backdrop-blur-sm border-border/50">
            <div className="relative h-48 overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/7c96ef46-a61a-4c50-afb9-b5ee0966d522/files/146015cb-1514-4ccb-b62b-bb4ca5ec3f86.jpg"
                alt="Угли"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <div className="bg-primary/20 backdrop-blur-sm p-2 rounded-lg">
                  <Icon name="Flame" size={28} className="text-primary" />
                </div>
              </div>
            </div>
            
            <CardHeader>
              <CardTitle className="text-2xl">Угли</CardTitle>
              <CardDescription className="text-muted-foreground">
                Качественные угли для идеального курения
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-3">
                {coals.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex justify-between items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group"
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {item.name}
                    </span>
                    <span className="text-primary font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Catalog;