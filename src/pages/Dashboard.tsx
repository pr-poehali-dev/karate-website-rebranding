import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Dashboard = () => {
  const athleteProfile = {
    name: "Алексей Иванов",
    rank: 1,
    belt: "Чёрный пояс, 3-й дан",
    club: "СШОР Московской области",
    category: "Кумите",
    points: 2450,
    photo: "https://cdn.poehali.dev/files/28a63087-760b-4581-a474-1301dd88f67e.jpg"
  };

  const upcomingCompetitions = [
    {
      id: 1,
      title: "Чемпионат России",
      date: "15 декабря 2025",
      location: "Москва",
      status: "Зарегистрирован",
      category: "Кумите, мужчины +75кг"
    },
    {
      id: 2,
      title: "Кубок Федерации",
      date: "20 января 2026",
      location: "Санкт-Петербург",
      status: "Доступна регистрация",
      category: "Кумите, мужчины +75кг"
    }
  ];

  const recentResults = [
    {
      id: 1,
      competition: "Открытый турнир Москвы",
      date: "15 ноября 2025",
      place: 1,
      points: 100,
      medal: "gold"
    },
    {
      id: 2,
      competition: "Кубок России",
      date: "20 октября 2025",
      place: 2,
      points: 80,
      medal: "silver"
    },
    {
      id: 3,
      competition: "Первенство ЦФО",
      date: "5 октября 2025",
      place: 1,
      points: 90,
      medal: "gold"
    }
  ];

  const trainingStats = {
    thisWeek: 8,
    thisMonth: 32,
    goal: 40,
    streak: 12
  };

  const achievements = [
    { id: 1, title: "Чемпион России", year: "2025", icon: "Trophy" },
    { id: 2, title: "Мастер спорта", year: "2024", icon: "Award" },
    { id: 3, title: "10 побед подряд", year: "2025", icon: "Target" },
    { id: 4, title: "Лучший боец года", year: "2024", icon: "Star" }
  ];

  const documents = [
    { id: 1, name: "Заявка на Чемпионат России", date: "10.11.2025", status: "Одобрена" },
    { id: 2, name: "Медицинская справка", date: "01.11.2025", status: "Действует до 01.11.2026" },
    { id: 3, name: "Страховой полис", date: "15.10.2025", status: "Действует до 15.10.2026" }
  ];

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
            <a href="/media" className="text-white hover:text-primary transition-colors">Медиа</a>
            <a href="/dashboard" className="text-primary">Личный кабинет</a>
          </nav>
          <button className="md:hidden text-white">
            <Icon name="Menu" size={24} />
          </button>
        </div>
      </header>

      <section className="pt-24 pb-8 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-4">
          <Card className="border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Avatar className="w-24 h-24 border-4 border-primary">
                  <AvatarImage src={athleteProfile.photo} />
                  <AvatarFallback>АИ</AvatarFallback>
                </Avatar>
                <div className="flex-1 text-center md:text-left">
                  <h1 className="font-heading text-3xl font-bold mb-2">{athleteProfile.name}</h1>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      <Icon name="Award" size={14} className="mr-1" />
                      {athleteProfile.belt}
                    </Badge>
                    <Badge variant="outline">
                      <Icon name="Users" size={14} className="mr-1" />
                      {athleteProfile.club}
                    </Badge>
                    <Badge variant="outline">#{athleteProfile.rank} в рейтинге</Badge>
                  </div>
                  <p className="text-muted-foreground">{athleteProfile.category}</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary mb-1">
                    {athleteProfile.points}
                  </div>
                  <p className="text-sm text-muted-foreground">Баллов в рейтинге</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="competitions" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="competitions">
                <Icon name="Calendar" size={18} className="mr-2 hidden md:inline" />
                Соревнования
              </TabsTrigger>
              <TabsTrigger value="results">
                <Icon name="Trophy" size={18} className="mr-2 hidden md:inline" />
                Результаты
              </TabsTrigger>
              <TabsTrigger value="training">
                <Icon name="Activity" size={18} className="mr-2 hidden md:inline" />
                Тренировки
              </TabsTrigger>
              <TabsTrigger value="documents">
                <Icon name="FileText" size={18} className="mr-2 hidden md:inline" />
                Документы
              </TabsTrigger>
            </TabsList>

            <TabsContent value="competitions" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingCompetitions.map((comp) => (
                  <Card key={comp.id} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-xl mb-2">{comp.title}</CardTitle>
                          <Badge
                            variant={comp.status === "Зарегистрирован" ? "default" : "secondary"}
                            className={comp.status === "Зарегистрирован" ? "bg-green-600" : ""}
                          >
                            {comp.status}
                          </Badge>
                        </div>
                        <Icon name="Calendar" size={24} className="text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="MapPin" size={16} />
                        <span>{comp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{comp.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Tag" size={16} />
                        <span>{comp.category}</span>
                      </div>
                      {comp.status === "Зарегистрирован" ? (
                        <Button variant="outline" className="w-full mt-4">
                          <Icon name="FileText" size={16} className="mr-2" />
                          Посмотреть заявку
                        </Button>
                      ) : (
                        <Button className="w-full mt-4 bg-primary hover:bg-accent">
                          <Icon name="UserPlus" size={16} className="mr-2" />
                          Зарегистрироваться
                        </Button>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <div className="grid gap-4">
                {recentResults.map((result) => (
                  <Card key={result.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                            result.medal === "gold" ? "bg-yellow-500" :
                            result.medal === "silver" ? "bg-gray-400" :
                            "bg-orange-600"
                          }`}>
                            <span className="text-2xl font-bold text-white">{result.place}</span>
                          </div>
                          <div>
                            <h3 className="font-heading font-bold text-lg">{result.competition}</h3>
                            <p className="text-sm text-muted-foreground">{result.date}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="text-lg px-4 py-2 bg-primary/10 text-primary">
                          +{result.points} баллов
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" size={24} className="text-primary" />
                    Достижения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {achievements.map((achievement) => (
                      <div key={achievement.id} className="text-center p-4 bg-background rounded-lg">
                        <Icon name={achievement.icon as any} size={32} className="text-primary mx-auto mb-2" />
                        <h4 className="font-heading font-bold text-sm mb-1">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground">{achievement.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="training" className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Эта неделя</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-heading font-bold text-primary mb-2">
                      {trainingStats.thisWeek}
                    </div>
                    <p className="text-sm text-muted-foreground">тренировок</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Этот месяц</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-heading font-bold text-primary mb-2">
                      {trainingStats.thisMonth}
                    </div>
                    <p className="text-sm text-muted-foreground">тренировок</p>
                    <Progress value={(trainingStats.thisMonth / trainingStats.goal) * 100} className="mt-4" />
                    <p className="text-xs text-muted-foreground mt-2">
                      Цель: {trainingStats.goal} тренировок
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Серия</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-heading font-bold text-primary mb-2">
                      {trainingStats.streak}
                    </div>
                    <p className="text-sm text-muted-foreground">дней подряд</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>График тренировок</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <Icon name="BarChart3" size={48} className="mx-auto mb-4" />
                      <p>График активности</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="documents" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Мои документы</CardTitle>
                    <Button className="bg-primary hover:bg-accent">
                      <Icon name="Upload" size={16} className="mr-2" />
                      Загрузить документ
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents.map((doc) => (
                      <div
                        key={doc.id}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon name="FileText" size={24} className="text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{doc.name}</h4>
                            <p className="text-sm text-muted-foreground">{doc.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant={doc.status.includes("Одобрена") || doc.status.includes("Действует") ? "default" : "secondary"}>
                            {doc.status}
                          </Badge>
                          <Button variant="ghost" size="icon">
                            <Icon name="Download" size={18} />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="border-t border-white/20 pt-8 text-center text-white/70">
            <p>&copy; 2025 Федерация Карате России (IKO). Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
