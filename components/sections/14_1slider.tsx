import left from '../../public/images/icons/arrow_left.svg'
import right from '../../public/images/icons/arrow_right.svg'
import Reviews_slide from '../ui/Reviews_slide';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import smetanin from '../../public/images/reviews/fedor_smetanin.png'
import em from '../../public/images/reviews/venera_em.png'
import evseeva from '../../public/images/reviews/anastasia_evseeva.png'
import chubar from '../../public/images/reviews/yana_chubar.png'
import rubinstein from '../../public/images/reviews/natalia_rubinshtein.png'
import fedorov from '../../public/images/reviews/iliya_fedorov.png'
import terenteva from '../../public/images/reviews/larisa_terenteva.png'
import popov from '../../public/images/reviews/oleg_popov.png'
import rauh from '../../public/images/reviews/rauh.png'
import kumarin from '../../public/images/reviews/vladimir_kumarin.png'
import dokuchaeva from '../../public/images/reviews/galina_dokuchaeva.png'
import beher from '../../public/images/reviews/natalia_beher.png'
import kondratuk from '../../public/images/reviews/dima_kondratuk.png'
import vasileva from '../../public/images/reviews/marina_vasileva.png'
import nabieva from '../../public/images/reviews/julia_nabieva.png'
import bytkivskaya from '../../public/images/reviews/anna_bytkivskaya.png'
import turkin from '../../public/images/reviews/sergei_turkin.png'
import grant from '../../public/images/reviews/artur_grant.png'
import kuzovkova from '../../public/images/reviews/anna_kuzovkovva.png'
import andrienko from '../../public/images/reviews/vikrotia_andrienjo.png'
import malyhin from '../../public/images/reviews/iliya_malyhin.png'
import umanceva from '../../public/images/reviews/irina_umantceva.png'
import chusovitina from '../../public/images/reviews/svetlana_chusovitina.png'
import kurlovich from '../../public/images/reviews/lera_kurlovich.png'
import lazareva from '../../public/images/reviews/anna_lazareva.png'
import vinograod from '../../public/images/reviews/dmitrii_vinogradov.png'
import smirnova from '../../public/images/reviews/marina_smirnova.png'
import mihailova from '../../public/images/reviews/julia_mihailova.png'
import churyakov from '../../public/images/reviews/aleksandr_churyakov.png'
import aisana from '../../public/images/reviews/aisana.png'

import Fixed from '../ui/Fixed';
import { useState } from 'react';


export const REVIEWS = [
    {photo: mihailova, name: "Юлия Михайлова", src: "https://www.youtube.com/embed/dAAyfmKaiQQ", review: "Более 20 лет я работаю учителем музыки и недавно поняла, что качество моего собственного голоса меня абсолютно не устраивает! В Петь Легко мне во-первых очень повезло с педагогом, во-вторых - очень нравится что методика выстроена от легкого, постепенно усложняясь, к самому сложному..."},
    {photo: churyakov, name: "Александр Чуряков", src: "https://www.youtube.com/embed/xWIVBrUQsK8", review: " - Я сам педагог доп. образования, веду кружки гитары, ансамбля - но чувствовал при пении, что где-то недотягиваю, где-то не тот звук получается... Как это исправить - не понимал. Решил найти школу где есть четкий план и методика... После второй ступени - был небольшой концерт, и я просто обалдел от реакции людей! Все начали аплодировать, фотографироваться!  ... Никогда не думал, что распоюсь до трех октав, всегда в распевках было полторы. Так что о Лепсе я мог просто мечтать, не говоря о песнях Шамана))"},
    {photo: aisana, name: "Айсана", src: "https://www.youtube.com/embed/Z3ICJmkoZqc", review: "Айсана за несколько месяцев прошла путь от детских песенок - до крутой конкурсной соул баллады 'Happy for You' 👇🏻 Изменилось все: - тембр, - объем в голосе, - диапазон - он больше двух октав в этой песне! - появились 'взрослые' мелизмы..."},
    {photo: smetanin, name: 'Федор Сметанин', src: "https://www.youtube.com/embed/fhby1d7lhMk", review: 'История Федора: "В июле меня пригласили в группу на ритм-гитару - а оказалось, что и петь там некому)) Быть солистом - большая ответственность, так что я начал искать школу, чтоб расширить диапазон, увеличить силу голоса. Остановился на "Петь Легко". Куратор у меня - Мика, ооочень строгая))) в начале было тяжело. Но в итоге и, я и музыканты заметили, что петь стал гораздо лучше. Диапазон увеличился, песни зазвучали по-другому. Сейчас у нас уже 12 песен в репертуаре!"'},
    {photo: em, name: 'Венера Эм', src: "https://www.youtube.com/embed/GsNU_AUSuZA", review: 'Венера давно пробовала петь, но близкие и окружающие говорили (как и многим нашим ученикам) - "да куда тебе, нет же ни слуха ни голоса..." Многих это страшно демотивирует и парализует - но Венера не остановилась: прошла курс, поставила голос на опору, проработала интонацию. Результат можете услышать сами - он фантастический!'},
    {photo: evseeva, name: 'Анастасия Евсеева', src: "https://www.youtube.com/embed/cDvZmBAJBFo", review: 'Настя Евсеева проходила вокальный курс в 2 этапа, с перерывом на рождение ребенка - смотрим на ее крутой результат! "Только в Петь Легко я до конца поняла как работает опора, что такое микст... очень много упражнений, о которых я даже не знала. Я постепенно начала развиваться с самых азов..."'},
    {photo: chubar, name: 'Яна Чубарь', src: "https://www.youtube.com/embed/Au2QI4h8O2Y", review: 'Яна всегда мечтала украсить свой вокал приемами и фишками, но даже не думала, что это получится сделать так быстро. Смотрим результат!'},
    {photo: rubinstein, name: 'Наталья Рубинштейн', src: "https://www.youtube.com/embed/EQWAxGnXDkk", review: 'Всем привет из солнечной Калифорнии. Меня зовут Наталья. Я учусь в школе вокала Жанны Серопян. Я с детства люблю петь. Сначала пела в хоре, повзрослев, начала иногда петь на праздниках и застольях, там, где была возможность. Я просмотрела очень много видео на YouTube и мне понравился результат, который получают ученики школы Жанны Серопян. Также мне понравилась методика, потому что очень доступно объясняются все моменты. '},
    {photo: fedorov, name: 'Илья Федоров', src: "https://www.youtube.com/embed/P9WTIRlmKP0", review: 'Я музыкой занимаюсь очень давно, я гитарист. Играл в музыкальных группах, но никогда не было желания петь. Я пробовал, но у меня не было нормальных проводников в этом деле. Я думал, что мне не дано петь и что мне “медведь на ухо наступил”, особенно, когда я слушал свои записи. Буквально год назад я принял участие в тренинге “Сила Голоса”. Уже после первого урока я почувствовал, что действительно у меня в голосе появилась какая-то сила и решил приобрести курс “Профи”. Я занимаюсь у преподавателя Артема, мне очень нравится его подход, как он подает материал и процесс подбора песен. Желаю всем ученикам школы, чтобы у вас все получалось.'},
    {photo: terenteva, name: 'Лариса Тереньтьева', src: "https://www.youtube.com/embed/diWRoQaWKIE", review: 'Всем привет! Я обучаюсь вокалу в школе вокала Жанны Серопян. Обучение мне безумно нравится. В этой школе потрясающие люди, они знают свое дело. Жанна Серопян сдела отличные видео уроки, в которых все очень понятно объясняется. За несколько месяцев обучения я научилась дышать, поставила опору, расширила свой диапазон: как вверх,так и вниз. '},
    {photo: popov, name: 'Олег Попов', src: "https://www.youtube.com/embed/YasZgpzCaZc", review: 'Всем привет, меня зовут Олег. В школе вокала Жанны Серопян мне понравилась удобная методика обучения. Первая встреча с Жанной Серопян у меня произошла на онлайн вебинаре, после которого мой голос зазвучал сильнее, громче, объемнее. Поэтому я решил начать полноценное обучение. Уроки мне открывал куратор не сразу, а постепенно, по мере обучения. Мы занимались по Skype, это очень удобно, так как можно всегда подобрать удобное время занятий. '},
    {photo: rauh, name: 'Александр Раух', src: "https://www.youtube.com/embed/lOdluaBE6PU", review: 'Всем привет, Меня зовут Александр Раух, я занимаюсь в школе вокала Петь Легко. Я хочу рассказать вам свою историю, почему мне захотелось научиться петь. Много лет назад, в 2001 году, я впервые взял в руки гитару и пытался научиться играть. Со временем я услышал группу Linkin Park и захотел петь так, как поет вокалист группы Честер Беннингтон. Я ходил ко многим педагогам, но никто и близко не мог научить меня тому, что я хотел. Когда я им включал песни Честера Беннингтона, они даже не знали, как делаются все эти вокальные приемы: хрип, сип и тд. Тогда, в 2001 году, я хотел создать свою группу. У меня это получилось. Мы немного поиграли и разошлись. С тех пор, ввиду некоторых обстоятельств, мне пришлось отложить свою мечту научиться петь на целых десять лет. Пока в этом году я не наткнулся на школу вокала с занятиями по Skype. '},
    // ВИДЕО НЕ ДОСТУПНО {photo: kumarin, name: 'Владимир Кумарин', src: "", review: 'Когда Вова пришел ко мне, у него были страшные проблемы со связками: предузелковое состояние, воспаление, несмыкание. В общем петь он почти не мог. Приходилось и лечиться и учиться. Но он не сдавался. Благодаря его трудолюбию и вере в себя, он стал легко брать высокие ноты, голос стал звучать ярче и объемнее.'},
    {photo: dokuchaeva, name: 'Галина Докучаева', src: "https://www.youtube.com/embed/fMnqYUhsqQU", review: 'Раньше я уже занималась вокалом с разными преподавателями. Во всех школах мне говорили, что у меня недостаточно таланта и голоса. Развитие моего голоса никого не интересовало и никто не хотел заниматься со мной. Однажды в интернете я нашла онлайн школу вокала “Петь Легко”. Жанна Серопян сразу заинтересовала меня. Я посмотрела всего два видеоурока и сразу поняла, что хочу именно здесь обучаться пению. '},
    {photo: beher, name: 'Наталия Бехер', src: "https://www.youtube.com/embed/vrnUsmxBpBM", review: 'Я из Германии, город Дорстон. В процессе занятий Жанна Серопян напомнила мне, что я всегда мечтала быть или певицей, или актрисой. Она вселила в меня какую-то веру, что я могу это сделать, показала как научиться петь максимально быстро. После занятий я пошла на прослушивание в одну немецкую группу и мне предложили работать.'},
    {photo: kondratuk, name: 'Дима Кондратюк', src: "https://www.youtube.com/embed/waMqQjHPA_0", review: 'Дима давно поет, но до того как попал к нам был недоволен своим голосом, и до конца не верил, что сможет петь как профи. Спустя 2 месяца обучения в "Петь Легко" у Димы раскрылся голос! В награду за свои труды мы пригласили Диму в Москву для записи на студии. Смотрите и слушайте, что у нас получилось!'},
    {photo: vasileva, name: 'Марина Васильева', src: "https://www.youtube.com/embed/ugbL-yDef2Y", review: 'Я немного занималась в музыкальной школе, но учеба не продолжилась, а любовь к пению осталась навсегда. В Англии я организовала музыкальную гостиную, где мы поем русские песни - и захотелось петь более профессионально. В Борнмуте учиться было негде, поэтому я нашла онлайн школу - Петь Легко. Занимаюсь не так давно, но результаты уже есть и я даже записала песню на студии - это было колоссальное впечатление, столько эмоций!'},
    {photo: nabieva, name: 'Юлия Набиева', src: "https://www.youtube.com/embed/SpcbtuU5Rpw", review: 'Меня зовут Юля. У меня была мечта - спеть так круто, чтобы всех накрыло мурашками! Именно поэтому я попала в школу Жанны Серопян. Я прошла полпути и уже улучшила свой голос на 50%, представляю что будет при 100%!!! Учиться очень интересно, а главное программа построена так, что мотивирует двигаться дальше.'},
    {photo: bytkivskaya, name: 'Анна Быткивская', src: "https://www.youtube.com/embed/vwfwgi5tn3U", review: 'Увидев обучающий курс "Петь легко", я поверила Жанне, что я смогу петь так же шикарно, как и она. Я еще только на половине обучения, даже меньше, но чувствую результат. Спрашиваю у родителей поменялось ли что-то в моем голосе, и ответ положительный.'},
    {photo: turkin, name: 'Сергей Туркин', src: "https://www.youtube.com/embed/zMrsAR9GKfA", review: 'По счастливой случайности, стал учеником школы вокала, созданной Жанной Серопян - "ПЕТЬ ЛЕГКО". Самые красивые и искренние слова благодарности, заслуживает весь коллектив преподавателей, во главе с основателем школы!'},
    {photo: grant, name: 'Артур Грант', src: "https://www.youtube.com/embed/tS1OVRUM1ig", review: 'Артур поет уже более 5 лет, но никак не мог пробить свой потолок, даже не верил, что это реально. После прохождения программы обучения, он говорит что его “Старый” голос буквально заменили на “Новый!”'},
    {photo: kuzovkova, name: 'Анна Кузовкова', src: "https://www.youtube.com/embed/fDW5zO7m2M4", review: 'Я с детства мечтала быть человеком творчества - стать актрисой, певицей, танцовщицей... После обучения я поехала попытать счастье - поступить на актрису мюзикла в Гамбург. В меня поверили экзаменаторы и даже без знания языка взяли на обучение со стипендией. Во время моей учёбы я сумела получить работу в 2 мюзиклах.'},
    {photo: andrienko, name: 'Виктория Андриенко', src: "https://www.youtube.com/embed/n2PtRPV9cFg", review: 'Занимаясь много лет хоровым пением, Вика однажды поняла, что ее результаты перестали расти – дрожал голос, не хватало дыхания, не получались верхние ноты... После двух месяцев занятий у Виктории “открылось второе дыхание” – появилась уверенность в голосе, расширился диапазон.'},
    {photo: malyhin, name: 'Илья Малыхин', src: "https://www.youtube.com/embed/lTic2kAsyvo", review: 'Обожает петь рок. несмотря на высокий голос - не получалось петь песни любимых исполнителей как в оригинале, голос звучал намного тише, а на высоких нотах не хватало драйва. Уже после 5 урока Илья ощутимо прокачал свой вокал - появилась настоящая рок-энергетика!'},
    {photo: umanceva, name: 'Ирина Уманцева', src: "https://www.youtube.com/embed/IBjgev5JAUU", review: 'Ирина пела всегда, но профессионально стала заниматься только недавно. “Бывает когда поешь всю жизнь и это звучит вроде нелохо, но со врмением понимаешь, что это далеко от иделала. Тогда я решила обратиться к профессионалам, к Жанне и ее педагогам. С удовольствием занимаюсь, несмотря на мой плотный график”.'},
    {photo: chusovitina, name: 'Светлана Чусовитина', src: "https://www.youtube.com/embed/6ZmXuyiyuIE", review: 'До занятий Света пела тихо, голос дрожал, не хватало объема и вибрато. После занятий голос стал звучать ярче, мощнее и звонче.'},
    //В ВИДЕО НА ЮТУБ ОДНА КАРТИНКА С ГОЛОСОМ {photo: kurlovich, name: 'Лера Курлович', src: "ESKfK2IdKcM", review: 'Лерочка занимается вокалом с детства, пела в хоре и в ансамблях, но всегда хотела петь сольно. После первого занятия по нашей методике была очень удивлена – голос изменился, стали браться высокие ноты, которые раньше не получались.'},
    {photo: lazareva, name: 'Анна Лазарева', src: "https://www.youtube.com/embed/L_YadMtKrvY", review: 'Я давно пою, занималась у многих педагогов... Все было неплохо, но это было не совсем то что я хотела - я как будто пела всегда одинаково. Благодаря Жанне я уже через месяц была приятно удивлена изменениями в голосе - стала звучать объемнее, мощнее, как я всегда и хотела!'},
    {photo: vinograod, name: 'Дмитрий Вингорадов', src: "https://www.youtube.com/embed/BCed_a44MNQ", review: '” – Во первых – все разложено по полочкам, во вторых – все объясняется очень доступным и понятным языком, без непонятных сравнений и ассоциаций. И в третьих – сжатые сроки! Нужный результат вы получаете не за 5 лет музыкального образования а за два месяца!”'},
    {photo: smirnova, name: 'Мария Смирнова', src: "https://www.youtube.com/embed/eV70DYKhhEw", review: '“ – Когда я пришла к Жанне, я знала, что случай у меня сложный. Мне надо было переучиваться с фольклорного звука на рок-вокал, о котором я так мечтала. Многое для меня на занятиях было открытием...'},
]


export default function Reviews_slider(){
    const [ isOpen, setIsOpen ] = useState<boolean>(false)
    const [ activeSRC, setActiveSRC ] = useState<string>('');
    const toggle = (src: string) => {
        setIsOpen(!isOpen)
        setActiveSRC(src)
    }

    return(
        <div className="relative mt-5 md:mt-[56px] flex justify-between px-2 xs:px-9 sm:gap-x-2 md:gap-x-3">
            <style>
                {`
                .swiper-button-disabled{
                    display: none;
                    
                }
                .swiper-pagination{
                    
                    bottom: 0px !important;
                    position: absolute;
                    z-index: 1; 
                }
                .swiper-pagination-bullet-active{
                    background-color: #FF83CF;
                }
                .swiper-pagination-bullet {
                    width: 7px;
                    height: 7px;
                }
                @media (min-width: 740px) {
                    .swiper-pagination-bullet {
                        width: 16px;
                        height: 16px;
                    }
                }
                @media (min-width: 910px) {
                    .swiper-pagination-bullet {
                        width: 22px;
                        height: 22px;
                    }
                }
                `}
            </style> 
            

            <div className="absolute z-10 left-[38%] sm:left-0 bottom-9 sm:h-full sm:flex sm:flex-col sm:justify-center">
                <button id="_PREV_REVIEWS_SLIDER" className="block">
                    <img src={left.src} alt="<"/>
                </button>
            </div>

            <Swiper
                id='reviews_slider'
                modules={ [Navigation, Pagination] }
                spaceBetween={10}
                slidesPerView={1} 
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    1000: {
                        slidesPerView: 3,
                    },
                }}
                navigation={{ nextEl: '#_NEXT_REVIEWS_SLIDER', prevEl: '#_PREV_REVIEWS_SLIDER' }}
                pagination={{ clickable: true }}
                
            >
                {REVIEWS.map((el, i) => {
                    return (
                        <SwiperSlide key={i} virtualIndex={i} className='pb-[80px] sm:pb-[50px]'>
                            <Reviews_slide {...el} toggle={toggle}/>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
            <div className="absolute z-10 right-[38%] sm:right-0 bottom-9 sm:h-full sm:flex sm:flex-col sm:justify-center">
                <button id='_NEXT_REVIEWS_SLIDER' className='block'>
                    <img src={right.src} alt=">" className=''/>
                </button>
            </div>  

            {isOpen && <Fixed src={activeSRC} toggle={toggle} />}

        </div>
    )
}