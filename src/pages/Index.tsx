import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const upcomingEvents = [
    { id: 1, title: "Чемпионат России", date: "15 декабря 2025", location: "Москва", daysLeft: 18 },
    { id: 2, title: "Кубок Федерации", date: "20 января 2026", location: "Санкт-Петербург", daysLeft: 54 },
    { id: 3, title: "Открытый турнир", date: "10 февраля 2026", location: "Казань", daysLeft: 75 }
  ];

  const latestNews = [
    {
      id: 1,
      title: "Сборная России завоевала 5 медалей на международном турнире",
      date: "24 ноября 2025",
      category: "Соревнования",
      image: "https://cdn.poehali.dev/projects/03cc3836-1e65-4348-9c74-7adeeab13959/files/61708f6a-366e-41ba-9b16-d22346f24820.jpg"
    },
    {
      id: 2,
      title: "Открыта регистрация на Чемпионат России 2025",
      date: "22 ноября 2025",
      category: "Объявления",
      image: "https://cdn.poehali.dev/projects/03cc3836-1e65-4348-9c74-7adeeab13959/files/9d5c10a0-908f-4d08-b1e6-f9082ad44fb8.jpg"
    },
    {
      id: 3,
      title: "Новые правила проведения соревнований в 2026 году",
      date: "20 ноября 2025",
      category: "Правила",
      image: "https://cdn.poehali.dev/projects/03cc3836-1e65-4348-9c74-7adeeab13959/files/61708f6a-366e-41ba-9b16-d22346f24820.jpg"
    }
  ];

  const topAthletes = [
    { id: 1, name: "Алексей Иванов", rank: 1, points: 2450, category: "Кумите", change: "+2" },
    { id: 2, name: "Мария Петрова", rank: 2, points: 2380, category: "Ката", change: "0" },
    { id: 3, name: "Дмитрий Смирнов", rank: 3, points: 2310, category: "Кумите", change: "-1" },
    { id: 4, name: "Анна Козлова", rank: 4, points: 2280, category: "Ката", change: "+1" },
    { id: 5, name: "Сергей Волков", rank: 5, points: 2250, category: "Кумите", change: "+3" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-heading text-xl font-bold">ФКР</span>
            </div>
            <div>
              <h1 className="text-white font-heading text-xl font-bold">Федерация Карате России</h1>
              <p className="text-white/70 text-sm">IKO</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#competitions" className="text-white hover:text-primary transition-colors">Соревнования</a>
            <a href="#ratings" className="text-white hover:text-primary transition-colors">Рейтинги</a>
            <a href="#news" className="text-white hover:text-primary transition-colors">Новости</a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Личный кабинет
            </Button>
          </nav>
          <button className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <section className="relative h-screen flex items-center justify-center overflow-hidden mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-transparent z-10" />
        <img 
          src="https://cdn.poehali.dev/projects/03cc3836-1e65-4348-9c74-7adeeab13959/files/9d5c10a0-908f-4d08-b1e6-f9082ad44fb8.jpg"
          alt="Karate hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 text-white animate-fade-in">
          <h2 className="font-heading text-5xl md:text-7xl font-black mb-6">
            СИЛА.<br />ДИСЦИПЛИНА.<br />ПОБЕДА.
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-white/90">
            Официальный сайт Федерации Карате России
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-accent text-white font-semibold px-8">
              Зарегистрироваться на соревнования
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-secondary">
              Календарь событий
            </Button>
          </div>
        </div>
      </section>

      <section id="competitions" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Ближайшие соревнования</h2>
            <Button variant="ghost" className="text-primary">
              Все события <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Через {event.daysLeft} дней
                    </Badge>
                    <Icon name="Calendar" size={24} className="text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={16} />
                      <span>{event.date}</span>
                    </div>
                  </div>
                  <Button className="w-full mt-6 bg-primary hover:bg-accent">
                    Зарегистрироваться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="ratings" className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Топ спортсменов</h2>
            <div className="flex gap-2">
              <Button 
                variant={selectedCategory === "all" ? "default" : "outline"}
                onClick={() => setSelectedCategory("all")}
                className={selectedCategory === "all" ? "bg-primary" : ""}
              >
                Все
              </Button>
              <Button 
                variant={selectedCategory === "kumite" ? "default" : "outline"}
                onClick={() => setSelectedCategory("kumite")}
                className={selectedCategory === "kumite" ? "bg-primary" : ""}
              >
                Кумите
              </Button>
              <Button 
                variant={selectedCategory === "kata" ? "default" : "outline"}
                onClick={() => setSelectedCategory("kata")}
                className={selectedCategory === "kata" ? "bg-primary" : ""}
              >
                Ката
              </Button>
            </div>
          </div>
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 font-heading">Место</th>
                      <th className="text-left p-4 font-heading">Спортсмен</th>
                      <th className="text-left p-4 font-heading">Категория</th>
                      <th className="text-left p-4 font-heading">Баллы</th>
                      <th className="text-left p-4 font-heading">Изменение</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topAthletes.map((athlete, index) => (
                      <tr 
                        key={athlete.id} 
                        className="border-t hover:bg-muted/30 transition-colors animate-fade-in"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <td className="p-4">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            athlete.rank === 1 ? 'bg-yellow-500 text-white' :
                            athlete.rank === 2 ? 'bg-gray-400 text-white' :
                            athlete.rank === 3 ? 'bg-orange-600 text-white' :
                            'bg-muted text-foreground'
                          }`}>
                            {athlete.rank}
                          </div>
                        </td>
                        <td className="p-4 font-semibold">{athlete.name}</td>
                        <td className="p-4">
                          <Badge variant="outline">{athlete.category}</Badge>
                        </td>
                        <td className="p-4 font-bold text-primary">{athlete.points}</td>
                        <td className="p-4">
                          <span className={`flex items-center gap-1 ${
                            athlete.change.startsWith('+') ? 'text-green-600' :
                            athlete.change.startsWith('-') ? 'text-red-600' :
                            'text-muted-foreground'
                          }`}>
                            {athlete.change.startsWith('+') && <Icon name="TrendingUp" size={16} />}
                            {athlete.change.startsWith('-') && <Icon name="TrendingDown" size={16} />}
                            {athlete.change === '0' && <Icon name="Minus" size={16} />}
                            {athlete.change}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="news" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Последние новости</h2>
            <Button variant="ghost" className="text-primary">
              Все новости <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestNews.map((news, index) => (
              <Card 
                key={news.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">{news.category}</Badge>
                  <h3 className="font-heading text-lg font-bold mb-2 line-clamp-2">{news.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Icon name="Calendar" size={14} />
                    {news.date}
                  </p>
                  <Button variant="ghost" className="w-full mt-4 text-primary">
                    Читать далее <Icon name="ChevronRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Готовы начать свой путь в карате?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Зарегистрируйтесь на соревнования, отслеживайте свои достижения и станьте частью сообщества
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Создать личный кабинет
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">О Федерации</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">История</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Руководство</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документы</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Спортсменам</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Регистрация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Рейтинги</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Календарь</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Информация</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-primary transition-colors">Новости</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@iko-fkr.ru</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, Россия</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2025 Федерация Карате России (IKO). Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
