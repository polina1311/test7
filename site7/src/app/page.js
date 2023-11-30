import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='flex gap-[500px] justify-center items-center w-[100%] '>
        <div className='w-[250px] '><img src="/burger.png"></img></div>
        <div className='w-[800px] '><img src="/logo.png"></img></div>
        <div className='flex gap-[10px] justify-center items-center w-[100%]'>
        <div className='w-[40px] '><img src="/search.png"></img></div>
        <div className='w-[40px] '><img src="/person.png"></img></div>
        <div className='w-[40px] '><img src="/grafic.png"></img></div>
        <div className='w-[40px] '><img src="/heart.png"></img></div>
        <div className='w-[40px] '><img src="/korzina.png"></img></div>
        </div>
      </div>

      <div className="p-50 flex justify-center items-center  h-[600px] text-[25px]">Cчастливые пробуждения становятся 
      реальностью с darwin - экспертом 
      в качественном и здоровом сне</div>

      <div className='flex gap-[10px] justify-center items-center w-[100%] px-10'>
        <div className=''><img src="/left.png"></img></div>
        <img className='h-[400px] bg-red-200 w-[100%]' src="/promo1.png"></img>
        <div className=""><img src="/right.png"></img></div>
      </div>

      

      <div className='flex justify-center items-center my-20'>
        <div className='flex flex-col'>
          <div className='w-[150px]'><img src="/matrass.png"></img></div>
          <div className='ml-8'>Матрасы</div>
         </div>
        <div className='flex flex-col'>
          <div className='w-[150px]'><img src="/podushka.png"></img></div>
          <div className='ml-9'>Подушки</div>
        </div>
        <div className='flex flex-col'>
          <div className='w-[150px]'><img src="/forkids.png"></img></div>
          <div className='ml-7'>Для детей</div>
        </div>
        <div className='flex flex-col'>
          <div className='w-[150px]'><img src="/podyshka2.png"></img></div>
          <div className='ml-6'>Аксессуары</div>
        </div>
        <div className='flex flex-col'>
          <div className='w-[150px]'><img src="/toper.png"></img></div>
          <div className='ml-10'>Топеры</div>
        </div>
        <div className='flex flex-col'>
          <div className='w-[150px]'><img src="/bed.png"></img></div>
          <div className='ml-9'>Кровати</div>
        </div>
        <div className='flex flex-col'>
          <div className='w-[150px]'><img src="/divan.png"></img></div>
          <div className='ml-10'>Диваны</div>
        </div>
      </div>


      <div class="border-t-4 border-indigo-500/100 "></div>
      
      <div className='flex gap-[100px] justify-center items-center w-[100%] p-20'>
        <div className='text-[38px]'>ПОЧЕМУ DARWIN?</div>
        <div className='text-[19px]'>Больше 10 лет мы проработали в индустрии товаров для сна. 
За это время видели много поставщиков, материалов и технологий. 
Мы не просто делаем товары для сна. 
Мы стали архитекторами подушек и инженерами матрасов. 
Пожалуй, никто в России не подходит к созданию товаров для сна 
так тщательно,  как мы.</div>
      </div>

      <div className="border-b-4 border-indigo-500/100 "></div>
      
      
      
      <div className='p-20'>
        <div className='flex text-[35px] text-blue-800 justify-center w-[100%]'>ХИТЫ</div>
        <div className='flex gap-[20px] w-[100%] mt-10'> 
          <div className='flex flex-col Card1'>
            <div className='w-[300px]'><img src="/hit1.png"></img></div>
         
            <div className='text-[13px]'>Анатомический беспружинный матрас air foam</div>
            <div className='flex gap-[140px] '>
              <div>36 890Р</div>
              <div className='w-[100px]'><img src="/button.png"></img></div>
              </div>
          </div>

          <div className='flex flex-col Card2'>
            <div className='w-[300px]'><img src="/hit2.png"></img></div>
         
            <div className='text-[13px]'>Анатомический пружинный матрас air spring</div>
            <div className='flex gap-[140px] '>
              <div>50 090Р</div>
              <div className='w-[100px]'><img src="/button.png"></img></div>
              </div>
          </div>

          <div className='flex flex-col Card3'>
            <div className='w-[300px]'><img src="/hit3.png"></img></div>
         
            <div className='text-[13px]'>Подушка "для него"</div>
            <div className='flex gap-[140px] '>
              <div>4699Р</div>
              <div className='w-[100px]'><img src="/button.png"></img></div>
              </div>
          </div>

          <div className='flex flex-col Card4'>
            <div className='w-[300px]'><img src="/hit4.png"></img></div>
         
            <div className='text-[13px]'>Подушка "для нее"</div>
            <div className='flex gap-[140px] '>
              <div>4299Р</div>
              <div className='w-[100px]'><img src="/button.png"></img></div>
              </div>
          </div>

          
        </div> 
      </div> 
      
      
      <div className=''>
        <div className='flex text-[35px] text-blue-800 justify-center w-[100%]'>БЛОГ</div>
        <div className='flex gap-[20px] px-20 mt-8 mb-40'> 
          <div className='w-[565px] '><img src="/blog1.png"></img> </div>
          <div className=''>
            <div className='flex gap-[5px]'>
              <div><img src="/blog2.png"></img></div>
              <div><img src="/blog3.png"></img></div>
            </div>
            <div className='flex gap-[10px] mt-1'>
              <div><img src="/blog4.png"></img></div>
              <div><img src="/blog5.png"></img></div>
            </div>

          </div>
        </div>
      </div>
          

      <div className="flex gap-[100px] ">
        <div className='w-[800px] justify-start px-20'><img src="/map.png"></img></div>
        <div className='flex flex-col gap-[10px]'>
          <div className='text-[35px] text-blue-800'>КОНТАКТЫ</div>
            <div>+7 495 532-26-64</div>
            <div>shop@darwin.store</div>
            <div>г. Москва, ул. Рябиновая 41к1, MADEX expo design center</div>
            <div>Время работы: с 10:00 до 18:00, Пн-Пт</div>
        
          <div className='flex mt-20'>
           <div className='w-[50px]'><img src="/youtube.png"></img></div>
           <div className='w-[50px]'><img src="/vk.png"></img></div> 
           <div className='w-[50px]'><img src="/tg.png"></img></div>
           <div className='w-[50px]'><img src="/ok.png"></img></div>
           <div className='w-[50px]'><img src="/yandex.png"></img></div>
           </div>

          </div>
      </div>

      <div className='flex bg-blue-900 h-[500px] mt-40 text-white'>
        <div className='p-10 ml-10'>
          <div className='text-[25px]'>ПОКУПАТЕЛЯМ</div>
          <div className='flex flex-col text-[15px] mt-10 gap-[5px]'>
          <div>Личный кабинет</div>
          <div>Блог</div>
          <div>Новости</div>
          <div>Доставка и оплата</div>
          <div>Гарантия и возврат</div>
          <div>Сертификаты</div>
          <div>Как заказать</div>
          <div>Дилерам</div>
          <div>Оферта и политика конфиденциальности</div>
          <div>Пользовательское соглашение</div>
          <div>Контакты</div>
          <div>Шоу-рум</div>
          </div>
        </div>

        <div className='p-10'>
          <div className='text-[25px]'>СОТРУДНИЧЕСТВО</div>
          <div className='flex flex-col text-[15px] mt-10 gap-[5px]'>
          <div>О компании</div>
          <div>Дизайнерам и архитекторам</div>
          <div>Дилерам</div>
          <div>Партнерам</div>
          <div>Обратная связь</div>
          </div>
        </div>

        <div className=' p-10 ml-20'>
          <div className='text-[25px]'>КАТАЛОГ</div>
          <div className='flex flex-col text-[15px] mt-10 gap-[5px]'>
          <div>Матрасы</div>
          <div>Подушки</div>
          <div>Топеры</div>
          <div>Кровати</div>
          <div>Модульные диваны</div>
          <div>Аксессуары</div>
          <div>АДля детей</div>
          </div>
        </div>

        <div className='flex flex-col p-10 ml-20'>
          <div className='text-[10px]'>служба поддержки клиентов</div>
          <div>+7 495 532-26-64</div>
          <div>8 800 444-04-14</div>
        </div>
      </div>
    


    </main>
  )
}
