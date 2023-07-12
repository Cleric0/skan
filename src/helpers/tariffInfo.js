import lamp from "../assets/images/first_tariff_icon.svg";
import target from "../assets/images/second_tariff_icon.svg";
import laptop from "../assets/images/third_tariff_icon.svg" ;

const tariffInfo = [
    {
        id: 1,
        classN: "first",        
        titleTariff: "Bisiness",        
        tarrifFor: "Для небольшого исследования",
        img: lamp,
        alt: "lamp",
        currentTariff: "Текущий тариф",
        inclusive: "В тариф входит:",        
        punctFirst: "Безлимитная история запросов",
        punctSecond: "Безопасная сделка",
        punctThirst: "Поддержка 24/7",
        lastPrice: "799 ₽",        
        currentPrice: "1 200 ₽",
        textButton: "Перейти в личный кабинет",
        dividePrice: "или 150 ₽/мес. при рассрочке на 24 мес.",
        "background": "#FFB64F",
        "border": "2px solid #FFB64F"
    },
    {
        id: 2,
        classN: "second",         
        titleTariff: "Pro",        
        tarrifFor: "Для HR и фрилансеров",
        img: target,
        alt: "target",
        inclusive: "В тариф входит:",
        punctFirst: "Все пункты тарифа Beginner",
        punctSecond: "Экспорт истории",
        punctThirst: "Рекомендации по приоритетам",
        lastPrice: "1 299 ₽",        
        currentPrice: "2 600 ₽",
        textButton: "Подробнее",
        dividePrice: "или 279 ₽/мес. при рассрочке на 24 мес.",
        "background": "#7CE3E1",
        "border": "2px solid #cccccc"

    },
    {
        id: 3,
        classN: "thirst", 
        titleTariff: "Business",
        tarrifFor: "Для корпоративных клиентов",
        img: laptop, 
        alt: "laptop",     
        inclusive: "В тариф входит:",
        punctFirst: "Все пункты тарифа Pro",
        punctSecond: "Безлимитная история запросов",
        punctThirst: "Приоритетная поддержка",
        lastPrice: "1 299 ₽",        
        currentPrice: "2 600 ₽",
        textButton: "Подробнее",
        "background": "#000000",
        "color": "#ffffff",
        "border": "2px solid #cccccc"

    }
]

export default tariffInfo