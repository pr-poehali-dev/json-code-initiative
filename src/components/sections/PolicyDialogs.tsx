import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface PolicyDialogsProps {
  isPolicyOpen: boolean;
  setIsPolicyOpen: (open: boolean) => void;
  isOfferOpen: boolean;
  setIsOfferOpen: (open: boolean) => void;
}

const PolicyDialogs = ({ isPolicyOpen, setIsPolicyOpen, isOfferOpen, setIsOfferOpen }: PolicyDialogsProps) => {
  return (
    <>
      <Dialog open={isPolicyOpen} onOpenChange={setIsPolicyOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#151C45] mb-4">
              Политика конфиденциальности и обработки персональных данных
            </DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="AlertCircle" size={24} className="text-yellow-900" />
                </div>
                <h3 className="text-lg font-bold text-yellow-800 flex-1 pt-1">ВАЖНО: АКТУАЛЬНОСТЬ ЗАКОНОДАТЕЛЬСТВА</h3>
              </div>
              <p className="text-sm text-yellow-700 mb-2">Ключевые законы и изменения (2025-2026):</p>
              <ul className="text-sm text-yellow-700 list-disc pl-5 space-y-1">
                <li>Федеральный закон от 27.07.2006 N 152-ФЗ «О персональных данных» (редакция от 24.06.2025)</li>
                <li>Федеральный закон от 24.06.2025 N 156-ФЗ (изменения, вступили в силу с 01.09.2025)</li>
                <li>Федеральный закон от 06.12.2011 N 402-ФЗ «О бухгалтерском учете»</li>
                <li>Закон РФ от 07.02.1992 N 2300-I «О защите прав потребителей»</li>
                <li>Гражданский кодекс РФ (ст. 435-449 - об офертах, ст. 30 - розничная купля-продажа)</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-red-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="ShieldAlert" size={24} className="text-red-900" />
                </div>
                <h3 className="text-lg font-bold text-red-800 flex-1 pt-1">КРИТИЧНЫЕ ТРЕБОВАНИЯ (введены в 2025):</h3>
              </div>
              <ul className="text-sm text-red-700 list-disc pl-5 space-y-1">
                <li>С 01.09.2025 согласие на обработку ПДн должно быть оформлено ОТДЕЛЬНО от других документов</li>
                <li>Штрафы за нарушение: 15 млн. ₽ за утечку, 300 тыс. ₽ за работу без регистрации</li>
                <li>Блокировка сайта Роскомнадзором за трансграничную передачу данных</li>
              </ul>
            </div>

            <div className="flex items-center gap-3 mt-6 mb-3">
              <div className="w-10 h-10 bg-[#B89968] rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="FileText" size={24} className="text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#151C45]">ВСТУПЛЕНИЕ</h2>
            </div>
            <p>
              Общество с ограниченной ответственностью «ДексКидс» (далее – Компания, Оператор), признавая важность 
              конфиденциальности и защиты персональных данных, размещает данную Политику конфиденциальности (далее – Политика) 
              в целях информирования пользователей сайта dekskids.ru (далее – Сайт) и мобильного приложения DeksKids о том, 
              как Компания собирает, обрабатывает, хранит и защищает персональные данные.
            </p>
            <p>
              <strong>Статус документа:</strong> Политика конфиденциальности размещена на основе требований статьи 18.1 
              Федерального закона от 27.07.2006 N 152-ФЗ «О персональных данных» и является публично доступным документом.
            </p>
            <p>
              <strong>Дата вступления в силу:</strong> 15 января 2026 года<br />
              <strong>Версия:</strong> 2.0 (актуальна для всех операций, совершаемых после указанной даты)
            </p>

            <div className="flex items-center gap-3 mt-6 mb-3">
              <div className="w-10 h-10 bg-[#B89968] rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="BookOpen" size={24} className="text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#151C45]">1. ОПРЕДЕЛЕНИЯ И ТЕРМИНЫ</h2>
            </div>
            <p><strong>Персональные данные</strong> – любая информация, относящаяся к физическому лицу, в том числе:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>ФИО, дата рождения, место рождения</li>
              <li>Адрес проживания и адрес доставки</li>
              <li>Номер телефона, электронная почта</li>
              <li>Данные документов, удостоверяющих личность</li>
              <li>Фотографии и видеозаписи</li>
              <li>Биометрические данные (если применимо)</li>
            </ul>

            <p className="mt-4">
              <strong>Оператор персональных данных</strong> – ООО «ДексКидс», юридическое лицо, самостоятельно или 
              совместно с другими лицами организующее и/или осуществляющее обработку персональных данных, а также 
              определяющее цели обработки персональных данных, состав персональных данных, подлежащих обработке, 
              действия (операции), совершаемые с персональными данными.
            </p>

            <p className="mt-4">
              <strong>Обработка персональных данных</strong> – любое действие (операция) или совокупность действий 
              (операций) с персональными данными, совершаемых с использованием средств автоматизации или без их 
              использования. Включает в себя: сбор, запись, систематизацию, накопление, хранение, уточнение 
              (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), 
              обезличивание, блокирование, удаление, уничтожение.
            </p>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3 mb-2">
                <Icon name="Info" size={20} className="text-gray-500 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-600 italic flex-1">
                  Данная Политика является публичным документом и доступна всем пользователям Сайта. 
                  Продолжая использование Сайта, вы соглашаетесь с условиями данной Политики конфиденциальности.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isOfferOpen} onOpenChange={setIsOfferOpen}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-[#151C45] mb-4">
              Договор оферты
            </DialogTitle>
          </DialogHeader>
          <div className="prose prose-sm max-w-none text-gray-700 space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Scale" size={24} className="text-blue-900" />
                </div>
                <h3 className="text-lg font-bold text-blue-800 flex-1 pt-1">Юридические документы в соответствии с законодательством РФ</h3>
              </div>
              <p className="text-sm text-blue-700">
                Данный документ составлен в соответствии с Гражданским кодексом РФ и действующим законодательством 
                Российской Федерации по состоянию на 2025-2026 годы.
              </p>
            </div>

            <div className="flex items-center gap-3 mt-6 mb-3">
              <div className="w-10 h-10 bg-[#B89968] rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="FileSignature" size={24} className="text-white" />
              </div>
              <h2 className="text-xl font-bold text-[#151C45]">ДОГОВОР ОФЕРТЫ</h2>
            </div>
            <p>
              Настоящий документ является официальной офертой (предложением) Общества с ограниченной ответственностью 
              «ДексКидс» (далее – Продавец) заключить договор купли-продажи товаров дистанционным способом 
              (далее – Договор) на условиях, изложенных ниже.
            </p>

            <div className="flex items-center gap-3 mt-4 mb-2">
              <div className="w-8 h-8 bg-[#151C45] rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="List" size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#151C45]">1. ОБЩИЕ ПОЛОЖЕНИЯ</h3>
            </div>
            <p>
              1.1. В соответствии с пунктом 2 статьи 437 Гражданского кодекса РФ данный документ является публичной 
              офертой, и в случае принятия изложенных ниже условий лицо, производящее акцепт этой оферты, осуществляет 
              оплату товара Продавца в соответствии с условиями настоящего Договора.
            </p>
            <p>
              1.2. Настоящая оферта вступает в силу с момента размещения на сайте dekskids.ru и действует до момента 
              отзыва оферты Продавцом.
            </p>
            <p>
              1.3. Продавец имеет право внести изменения в условия оферты и/или отозвать оферту в любой момент по своему 
              усмотрению. Изменения вступают в силу с момента публикации на сайте.
            </p>

            <div className="flex items-center gap-3 mt-4 mb-2">
              <div className="w-8 h-8 bg-[#151C45] rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Package" size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#151C45]">2. ПРЕДМЕТ ДОГОВОРА</h3>
            </div>
            <p>
              2.1. Продавец обязуется передать в собственность Покупателю товар (школьную форму для девочек, аксессуары 
              и сопутствующие товары), а Покупатель обязуется принять и оплатить товар на условиях настоящего Договора.
            </p>
            <p>
              2.2. Наименование, количество, цена выбранного Покупателем товара указываются в корзине Покупателя на сайте 
              dekskids.ru и в заказе.
            </p>

            <div className="flex items-center gap-3 mt-4 mb-2">
              <div className="w-8 h-8 bg-[#151C45] rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="CreditCard" size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#151C45]">3. ЦЕНА ТОВАРА И ПОРЯДОК ОПЛАТЫ</h3>
            </div>
            <p>
              3.1. Цены на товары определяются Продавцом самостоятельно и указываются на сайте dekskids.ru.
            </p>
            <p>
              3.2. Цены на товары могут изменяться Продавцом в одностороннем порядке. При этом цена на заказанный 
              Покупателем товар изменению не подлежит.
            </p>
            <p>
              3.3. Оплата товара Покупателем производится в российских рублях одним из следующих способов:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Наличными курьеру при доставке</li>
              <li>Банковской картой на сайте</li>
              <li>Безналичным переводом на расчетный счет Продавца (для юридических лиц)</li>
              <li>Электронными деньгами через платежные системы</li>
            </ul>

            <div className="flex items-center gap-3 mt-4 mb-2">
              <div className="w-8 h-8 bg-[#151C45] rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon name="Truck" size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#151C45]">4. ДОСТАВКА ТОВАРА</h3>
            </div>
            <p>
              4.1. Продавец осуществляет доставку товара следующими способами:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Курьерская доставка по указанному адресу</li>
              <li>Доставка в пункт выдачи заказов</li>
              <li>Почтовая доставка</li>
              <li>Самовывоз из офиса Продавца</li>
            </ul>
            <p className="mt-2">
              4.2. Стоимость доставки рассчитывается индивидуально и зависит от региона, способа доставки и общей 
              стоимости заказа.
            </p>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-[#B89968] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600">
                    <strong>Реквизиты продавца:</strong><br />
                ООО «ДексКидс»<br />
                Адрес: г. Владивосток, Приморский край<br />
                Телефон: 8 902 559 00 05<br />
                    Email: info@декскидс.рф
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PolicyDialogs;