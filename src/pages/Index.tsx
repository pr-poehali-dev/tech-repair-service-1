import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedDevice, setSelectedDevice] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [estimatedCost, setEstimatedCost] = useState(0);

  const services = [
    { name: 'Замена экрана', smartphones: 3500, laptops: 8500, tablets: 4500 },
    { name: 'Ремонт материнской платы', smartphones: 5500, laptops: 15000, tablets: 7500 },
    { name: 'Замена батареи', smartphones: 2000, laptops: 4500, tablets: 3000 },
    { name: 'Чистка от влаги', smartphones: 2500, laptops: 5500, tablets: 3500 },
    { name: 'Восстановление данных', smartphones: 3000, laptops: 7000, tablets: 4000 }
  ];

  const calculateCost = () => {
    if (!selectedDevice || !selectedService) return;
    
    const service = services.find(s => s.name === selectedService);
    if (service) {
      if (selectedDevice === 'smartphones') setEstimatedCost(service.smartphones);
      else if (selectedDevice === 'laptops') setEstimatedCost(service.laptops);
      else if (selectedDevice === 'tablets') setEstimatedCost(service.tablets);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Wrench" size={24} className="text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">ТехСервис</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-600 hover:text-blue-600 font-medium">Услуги</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">О нас</a>
              <a href="#guarantee" className="text-gray-600 hover:text-blue-600 font-medium">Гарантия</a>
              <a href="#contacts" className="text-gray-600 hover:text-blue-600 font-medium">Контакты</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Phone" size={16} className="mr-2" />
              Вызвать мастера
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Профессиональный ремонт техники с онлайн-диагностикой
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Быстрая предварительная оценка стоимости и диагностика неисправностей. 
                Опытные мастера, качественные запчасти, гарантия до 12 месяцев.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="px-4 py-2">
                  <Icon name="Clock" size={16} className="mr-2" />
                  Срочный ремонт
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Icon name="Shield" size={16} className="mr-2" />
                  Гарантия до 12 мес
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Icon name="Truck" size={16} className="mr-2" />
                  Выезд на дом
                </Badge>
              </div>
            </div>
            <div>
              <img 
                src="/img/1df8722d-b0d4-491e-99b2-19717113d9da.jpg" 
                alt="Ремонт техники" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Online Diagnostics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                Онлайн-диагностика и расчет стоимости
              </CardTitle>
              <p className="text-gray-600">
                Узнайте предварительную стоимость ремонта за 2 минуты
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="device-type">Тип устройства</Label>
                  <Select value={selectedDevice} onValueChange={setSelectedDevice}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите устройство" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="smartphones">Смартфон</SelectItem>
                      <SelectItem value="laptops">Ноутбук</SelectItem>
                      <SelectItem value="tablets">Планшет</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="service-type">Тип ремонта</Label>
                  <Select value={selectedService} onValueChange={setSelectedService}>
                    <SelectTrigger>
                      <SelectValue placeholder="Выберите услугу" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map(service => (
                        <SelectItem key={service.name} value={service.name}>
                          {service.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <Label htmlFor="description">Опишите проблему</Label>
                <Textarea 
                  placeholder="Детально опишите неисправность устройства..."
                  className="min-h-[100px]"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={calculateCost}
                  className="bg-blue-600 hover:bg-blue-700 flex-1"
                  disabled={!selectedDevice || !selectedService}
                >
                  <Icon name="Calculator" size={16} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                <Button variant="outline" className="flex-1">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить на диагностику
                </Button>
              </div>
              
              {estimatedCost > 0 && (
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <h3 className="font-bold text-lg text-blue-900 mb-2">
                    Предварительная стоимость
                  </h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">
                    {estimatedCost.toLocaleString()} ₽
                  </p>
                  <p className="text-sm text-blue-700">
                    * Окончательная стоимость определяется после диагностики
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Наши услуги</h2>
            <p className="text-xl text-gray-600">
              Комплексный ремонт и обслуживание электронной техники
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Smartphone" size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Ремонт смартфонов</h3>
                <p className="text-gray-600 mb-4">
                  Замена экранов, батарей, камер. Восстановление после влаги.
                </p>
                <Badge variant="outline">от 1500 ₽</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Laptop" size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Ремонт ноутбуков</h3>
                <p className="text-gray-600 mb-4">
                  Чистка, замена матриц, клавиатур, материнских плат.
                </p>
                <Badge variant="outline">от 3000 ₽</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Icon name="Tablet" size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Ремонт планшетов</h3>
                <p className="text-gray-600 mb-4">
                  Восстановление сенсора, замена дисплеев, настройка ПО.
                </p>
                <Badge variant="outline">от 2500 ₽</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/29de7cb3-757c-47d3-afa5-77649a598d50.jpg" 
                alt="Сервисный центр" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">О нашем сервисе</h2>
              <p className="text-lg text-gray-600 mb-6">
                Более 10 лет профессионального опыта в ремонте электронной техники. 
                Наши мастера регулярно проходят обучение и сертификацию.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span className="text-gray-700">Сертифицированные мастера</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span className="text-gray-700">Оригинальные запчасти</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span className="text-gray-700">Современное оборудование</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={20} className="text-green-600" />
                  <span className="text-gray-700">Экспресс-диагностика</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section id="guarantee" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Гарантийные обязательства</h2>
            <p className="text-xl text-gray-600">
              Мы уверены в качестве наших услуг
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-blue-200">
              <CardContent className="p-6">
                <Icon name="Shield" size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">До 12 месяцев</h3>
                <p className="text-gray-600">
                  Гарантия на выполненные работы и установленные запчасти
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-blue-200">
              <CardContent className="p-6">
                <Icon name="RefreshCw" size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Бесплатный возврат</h3>
                <p className="text-gray-600">
                  Если проблема повторится в гарантийный период
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center border-blue-200">
              <CardContent className="p-6">
                <Icon name="FileText" size={48} className="text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">Документы</h3>
                <p className="text-gray-600">
                  Официальный договор и чек на все виды работ
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами удобным способом
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Phone" size={32} className="text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (495) 123-45-67</p>
                <p className="text-gray-600">+7 (800) 555-35-35</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={32} className="text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">info@techservice.ru</p>
                <p className="text-gray-600">support@techservice.ru</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="MapPin" size={32} className="text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Адрес</h3>
                <p className="text-gray-600">ул. Техническая, 15</p>
                <p className="text-gray-600">Москва, 125009</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Clock" size={32} className="text-blue-600 mx-auto mb-3" />
                <h3 className="font-bold mb-2">Режим работы</h3>
                <p className="text-gray-600">Пн-Пт: 9:00-20:00</p>
                <p className="text-gray-600">Сб-Вс: 10:00-18:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" size={24} className="text-blue-400" />
                <h3 className="text-xl font-bold">ТехСервис</h3>
              </div>
              <p className="text-gray-400">
                Профессиональный ремонт техники с гарантией качества
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Ремонт смартфонов</li>
                <li>Ремонт ноутбуков</li>
                <li>Ремонт планшетов</li>
                <li>Восстановление данных</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О компании</li>
                <li>Гарантия</li>
                <li>Прайс-лист</li>
                <li>Отзывы</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (495) 123-45-67</p>
                <p>info@techservice.ru</p>
                <p>ул. Техническая, 15</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ТехСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;