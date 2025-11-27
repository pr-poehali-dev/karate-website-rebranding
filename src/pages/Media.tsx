import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Media = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const photoGallery = [
    {
      id: 1,
      url: "https://cdn.poehali.dev/files/28a63087-760b-4581-a474-1301dd88f67e.jpg",
      title: "Чемпионат России 2025",
      category: "Соревнования",
      date: "Ноябрь 2025"
    },
    {
      id: 2,
      url: "https://cdn.poehali.dev/files/91232ea9-faf9-4bb5-ad6a-c44ee14edb15.jpg",
      title: "Рекламная кампания",
      category: "События",
      date: "Ноябрь 2025"
    },
    {
      id: 3,
      url: "https://cdn.poehali.dev/projects/03cc3836-1e65-4348-9c74-7adeeab13959/files/9d5c10a0-908f-4d08-b1e6-f9082ad44fb8.jpg",
      title: "Тренировки сборной",
      category: "Тренировки",
      date: "Октябрь 2025"
    },
    {
      id: 4,
      url: "https://cdn.poehali.dev/projects/03cc3836-1e65-4348-9c74-7adeeab13959/files/61708f6a-366e-41ba-9b16-d22346f24820.jpg",
      title: "Кубок Федерации",
      category: "Соревнования",
      date: "Сентябрь 2025"
    },
    {
      id: 5,
      url: "https://cdn.poehali.dev/files/28a63087-760b-4581-a474-1301dd88f67e.jpg",
      title: "Открытый турнир",
      category: "Соревнования",
      date: "Август 2025"
    },
    {
      id: 6,
      url: "https://cdn.poehali.dev/files/91232ea9-faf9-4bb5-ad6a-c44ee14edb15.jpg",
      title: "Семинар для тренеров",
      category: "Обучение",
      date: "Июль 2025"
    }
  ];

  const videoGallery = [
    {
      id: 1,
      thumbnail: "https://cdn.poehali.dev/files/28a63087-760b-4581-a474-1301dd88f67e.jpg",
      title: "Финал Чемпионата России 2025",
      duration: "12:45",
      views: "15.2K",
      date: "2 дня назад"
    },
    {
      id: 2,
      thumbnail: "https://cdn.poehali.dev/files/91232ea9-faf9-4bb5-ad6a-c44ee14edb15.jpg",
      title: "Обзор соревнований: лучшие моменты",
      duration: "8:30",
      views: "8.7K",
      date: "1 неделю назад"
    },
    {
      id: 3,
      thumbnail: "https://cdn.poehali.dev/projects/03cc3836-1e65-4348-9c74-7adeeab13959/files/9d5c10a0-908f-4d08-b1e6-f9082ad44fb8.jpg",
      title: "Техника удара: мастер-класс",
      duration: "15:20",
      views: "22.4K",
      date: "2 недели назад"
    },
    {
      id: 4,
      thumbnail: "https://cdn.poehali.dev/projects/03cc3836-1e65-4348-9c74-7adeeab13959/files/61708f6a-366e-41ba-9b16-d22346f24820.jpg",
      title: "Интервью с чемпионом",
      duration: "6:15",
      views: "12.1K",
      date: "3 недели назад"
    }
  ];

  const filteredPhotos = selectedCategory === "all" 
    ? photoGallery 
    : photoGallery.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-heading text-xl font-bold">ФКР</span>
            </div>
            <div>
              <h1 className="text-white font-heading text-xl font-bold">Федерация Карате России</h1>
              <p className="text-white/70 text-sm">IKO</p>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="/" className="text-white hover:text-primary transition-colors">Главная</a>
            <a href="/media" className="text-primary">Медиа</a>
            <a href="/dashboard" className="text-white hover:text-primary transition-colors">Личный кабинет</a>
          </nav>
          <button className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-black text-white mb-4">
            Фото и Видео
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Лучшие моменты соревнований, тренировок и мероприятий Федерации
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="photos" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="photos" className="text-lg">
                <Icon name="Image" size={20} className="mr-2" />
                Фотографии
              </TabsTrigger>
              <TabsTrigger value="videos" className="text-lg">
                <Icon name="Video" size={20} className="mr-2" />
                Видео
              </TabsTrigger>
            </TabsList>

            <TabsContent value="photos" className="space-y-8">
              <div className="flex flex-wrap gap-3 justify-center">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("all")}
                  className={selectedCategory === "all" ? "bg-primary" : ""}
                >
                  Все
                </Button>
                <Button
                  variant={selectedCategory === "Соревнования" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("Соревнования")}
                  className={selectedCategory === "Соревнования" ? "bg-primary" : ""}
                >
                  Соревнования
                </Button>
                <Button
                  variant={selectedCategory === "Тренировки" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("Тренировки")}
                  className={selectedCategory === "Тренировки" ? "bg-primary" : ""}
                >
                  Тренировки
                </Button>
                <Button
                  variant={selectedCategory === "События" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("События")}
                  className={selectedCategory === "События" ? "bg-primary" : ""}
                >
                  События
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhotos.map((photo, index) => (
                  <Card
                    key={photo.id}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer group"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={photo.url}
                        alt={photo.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                        <div className="p-4 text-white w-full">
                          <Badge variant="secondary" className="mb-2 bg-primary">
                            {photo.category}
                          </Badge>
                          <h3 className="font-heading font-bold text-lg">{photo.title}</h3>
                          <p className="text-sm text-white/80">{photo.date}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {videoGallery.map((video, index) => (
                  <Card
                    key={video.id}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in cursor-pointer group"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-secondary/40 group-hover:bg-secondary/60 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon name="Play" size={32} className="text-white ml-1" />
                        </div>
                      </div>
                      <Badge className="absolute top-4 right-4 bg-secondary/90 text-white">
                        {video.duration}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-heading font-bold text-lg mb-2 line-clamp-2">
                        {video.title}
                      </h3>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Icon name="Eye" size={16} />
                          {video.views}
                        </span>
                        <span>{video.date}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Хотите увидеть себя в нашей галерее?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Участвуйте в соревнованиях и становитесь частью истории карате
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
            Зарегистрироваться на соревнования
          </Button>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2025 Федерация Карате России (IKO). Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Media;
