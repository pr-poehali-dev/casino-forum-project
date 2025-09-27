import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [hoveredCasino, setHoveredCasino] = useState<number | null>(null);

  const topCasinos = [
    {
      id: 1,
      name: 'Royal Casino',
      rating: 9.8,
      bonus: '200% + 100 FS',
      features: ['Лицензия', 'Быстрые выплаты', 'Live Casino'],
      logo: '👑',
      gradient: 'gradient-orange-purple'
    },
    {
      id: 2,
      name: 'Diamond Slots',
      rating: 9.5,
      bonus: '150% + 50 FS',
      features: ['2000+ игр', 'VIP программа', 'Мобильная версия'],
      logo: '💎',
      gradient: 'gradient-purple-pink'
    },
    {
      id: 3,
      name: 'Gold Rush',
      rating: 9.2,
      bonus: '100% + 25 FS',
      features: ['Быстрая регистрация', 'Криптовалюты', 'Турниры'],
      logo: '🎰',
      gradient: 'gradient-gold'
    }
  ];

  const blogPosts = [
    {
      title: 'Топ-10 слотов 2024 года',
      excerpt: 'Обзор самых популярных и прибыльных игровых автоматов',
      date: '27 сентября',
      category: 'Обзоры'
    },
    {
      title: 'Стратегии игры в блэкджек',
      excerpt: 'Эффективные методы увеличения шансов на победу',
      date: '25 сентября',
      category: 'Стратегии'
    },
    {
      title: 'Новые бонусы октября',
      excerpt: 'Актуальные промокоды и предложения от казино',
      date: '24 сентября',
      category: 'Бонусы'
    }
  ];

  const forumStats = {
    topics: 1247,
    posts: 8956,
    users: 3421,
    online: 156
  };

  const activeGiveaways = [
    {
      prize: '50,000₽',
      title: 'Еженедельный розыгрыш',
      participants: 342,
      endDate: '30 сентября'
    },
    {
      prize: 'iPhone 15 Pro',
      title: 'Мега розыгрыш',
      participants: 1205,
      endDate: '15 октября'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/img/1ca02549-f17d-471c-baf3-ce8adf8fc9be.jpg" alt="Casino Blog" className="w-12 h-12 rounded-full" />
              <h1 className="text-2xl font-bold text-white gradient-orange-purple bg-clip-text text-transparent">
                Casino Blog
              </h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#rating" className="text-gray-300 hover:text-white transition-colors">Рейтинг</a>
              <a href="#blog" className="text-gray-300 hover:text-white transition-colors">Блог</a>
              <a href="#forum" className="text-gray-300 hover:text-white transition-colors">Форум</a>
              <a href="#giveaways" className="text-gray-300 hover:text-white transition-colors">Розыгрыши</a>
            </nav>
            <Button className="gradient-orange-purple text-white border-0 hover-glow">
              <Icon name="User" size={16} />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Лучшие <span className="gradient-orange-purple bg-clip-text text-transparent">Казино</span> 2024
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
            Честные обзоры, актуальные бонусы и проверенные казино от экспертов индустрии
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button size="lg" className="gradient-orange-purple text-white border-0 hover-glow">
              <Icon name="Star" size={20} />
              Топ Казино
            </Button>
            <Button size="lg" variant="outline" className="text-white border-gray-600 hover:bg-gray-800">
              <Icon name="BookOpen" size={20} />
              Читать Блог
            </Button>
          </div>
        </div>
      </section>

      {/* Top Casinos Rating */}
      <section id="rating" className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">
            🏆 Топ Казино Сентябрь 2024
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {topCasinos.map((casino, index) => (
              <Card 
                key={casino.id}
                className={`bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-casino-orange/50 transition-all duration-300 cursor-pointer hover-glow ${hoveredCasino === casino.id ? 'scale-105' : ''}`}
                onMouseEnter={() => setHoveredCasino(casino.id)}
                onMouseLeave={() => setHoveredCasino(null)}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{casino.logo}</div>
                      <div>
                        <CardTitle className="text-white text-xl">{casino.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Icon name="Star" size={16} className="text-yellow-400 fill-yellow-400" />
                          <span className="text-yellow-400 font-semibold">{casino.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-casino-orange text-white">#{index + 1}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className={`${casino.gradient} p-4 rounded-lg mb-4`}>
                    <p className="text-white font-semibold text-center">Бонус: {casino.bonus}</p>
                  </div>
                  <div className="space-y-2 mb-4">
                    {casino.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-300">
                        <Icon name="Check" size={16} className="text-green-400" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button className={`flex-1 ${casino.gradient} text-white border-0 hover-glow`}>
                      Играть
                    </Button>
                    <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700">
                      Обзор
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="blog" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-800/50 border border-gray-700">
              <TabsTrigger value="blog" className="text-white data-[state=active]:bg-casino-orange">
                <Icon name="BookOpen" size={16} />
                Блог
              </TabsTrigger>
              <TabsTrigger value="forum" className="text-white data-[state=active]:bg-casino-purple">
                <Icon name="MessageSquare" size={16} />
                Форум
              </TabsTrigger>
              <TabsTrigger value="giveaways" className="text-white data-[state=active]:bg-casino-gold">
                <Icon name="Gift" size={16} />
                Розыгрыши
              </TabsTrigger>
            </TabsList>

            <TabsContent value="blog" className="mt-8">
              <div className="grid gap-6 md:grid-cols-3">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-casino-orange/50 transition-all duration-300 hover-glow">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-casino-orange/20 text-casino-orange">
                          {post.category}
                        </Badge>
                        <span className="text-sm text-gray-400">{post.date}</span>
                      </div>
                      <CardTitle className="text-white text-lg">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm mb-4">{post.excerpt}</p>
                      <Button variant="outline" className="w-full text-white border-gray-600 hover:bg-gray-700">
                        Читать далее
                        <Icon name="ArrowRight" size={16} />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="forum" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} className="text-casino-purple" />
                      Статистика форума
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-casino-purple">{forumStats.topics}</div>
                        <div className="text-sm text-gray-400">Тем</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-casino-purple">{forumStats.posts}</div>
                        <div className="text-sm text-gray-400">Сообщений</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-casino-purple">{forumStats.users}</div>
                        <div className="text-sm text-gray-400">Пользователей</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 animate-glow">{forumStats.online}</div>
                        <div className="text-sm text-gray-400">Онлайн</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-gray-800/50 backdrop-blur-sm border-gray-700">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Icon name="MessageSquare" size={20} className="text-casino-purple" />
                      Последние обсуждения
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {['Лучшие стратегии для рулетки', 'Обзор нового казино', 'Вопросы по выводу средств'].map((topic, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-2 rounded hover:bg-gray-700/50 cursor-pointer">
                          <Icon name="MessageCircle" size={16} className="text-casino-purple" />
                          <span className="text-gray-300 text-sm">{topic}</span>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4 gradient-purple-pink text-white border-0">
                      Перейти в форум
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="giveaways" className="mt-8">
              <div className="grid gap-6 md:grid-cols-2">
                {activeGiveaways.map((giveaway, index) => (
                  <Card key={index} className="bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-casino-gold/50 transition-all duration-300 hover-glow">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-white text-xl">{giveaway.title}</CardTitle>
                        <div className="text-3xl animate-float">🎁</div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-6">
                        <div className="text-4xl font-bold gradient-gold bg-clip-text text-transparent mb-2">
                          {giveaway.prize}
                        </div>
                        <p className="text-gray-300">Главный приз</p>
                      </div>
                      <div className="space-y-3 mb-4">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Участников:</span>
                          <span className="text-white font-semibold">{giveaway.participants}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Окончание:</span>
                          <span className="text-white font-semibold">{giveaway.endDate}</span>
                        </div>
                      </div>
                      <Button className="w-full gradient-gold text-black font-semibold hover-glow">
                        <Icon name="Gift" size={16} />
                        Участвовать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 border-t border-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h4 className="text-white font-semibold mb-4">Casino Blog</h4>
              <p className="text-gray-400 text-sm">
                Ваш надежный источник информации о мире онлайн-казино
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Разделы</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Рейтинг казино</a>
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Обзоры игр</a>
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Стратегии</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Сообщество</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Форум</a>
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Розыгрыши</a>
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Новости</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">О нас</a>
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Реклама</a>
                <a href="#" className="block text-gray-400 text-sm hover:text-white transition-colors">Поддержка</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Casino Blog. Играйте ответственно. 18+
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;