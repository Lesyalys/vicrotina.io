export const backgroundImages = [
    'url("./public/imgLight/modalBack.png")',
    'url("./public/imgLight/modalBack2.png")',
    'url("./public/imgLight/modalBack3.png")',
];

// Данные вопросов (5 категорий по 5 вопросов)
export const questionsData = [
    {
        name: "Периферийные устройства",
        questions: [
            { text: "Как называется стандартный интерфейс для подключения флеш-накопителей, внешних жёстких дисков и других периферийных устройств, впервые представленный в 1996 году? ",answer: "USB", points: 10 },
            { text: "Как называется устройство для ввода рукописного текста и рисунков в компьютер? ", answer: "Графический планшет", points: 20 },
            { text: "Какой тип принтера использует порошковый краситель для печати?", answer: "Лазерный принтер", points: 30 },
            { text: "Какой интерфейс используется для передачи цифровых аудиосигналов через оптоволокно?", answer: "SPDIF 'тюльпан'", points: 40 },
            { text: "Какие цвета 'тюльпанов' используются для компонентного выхода HDTV?",answer: "Жёлтый, белый и красный", points: 50 },
            { text: "Какой цвет разъема PS/2 обычно используется для подключения клавиатуры?", answer: "Сиреневый/Фиолетовый ", points: 60 },
            { text: "Как называется устройство, преобразующее аналоговый видеосигнал с ТВ-антенны или кабельного телевидения в цифровой формат, пригодный для воспроизведения на компьютере?", answer: "TV-тюнер", points: 70 },
            { text: "Какой интерфейс передачи данных, использующий дифференциальную передачу и поддерживающий скорости до 10 Гбит/с, пришёл на смену USB 2.0?", answer: "USB 3.0 / USB 3.1", points: 80 },
            { text: "Какое устройство позволяет преобразовать аналоговые сигналы, полученные с физических датчиков (температуры, давления и т.д.), в цифровой вид для анализа на компьютере?", answer: "АЦП — Аналого-цифровой преобразователь", points: 90 },
            { text: "Какой интерфейс, используемый в профессиональной сфере, позволяет передавать данные между компьютером и аудиоустройствами с высокой пропускной способностью, был разработан компанией Apple?", answer: "Thunderbolt или FireWire", points: 100 }
        ]
    },
    {
        name: "Архитектура компьютера",
        questions: [
            { text: "Как называется основной вычислительный элемент компьютера? ", answer: "Процессор, CPU", points: 10 },
            { text: "Как называется устройство преобразующее электроэнергию для ПК", answer: "Блок питания", points: 20 },
            { text: "Как называется область памяти в процессоре, используемая для хранения промежуточных результатов вычислений и управления?", answer: "Регистр", points: 30 },
            { text: "Элемент, управляющий выводом графической информации, может быть встроенным или отдельным", answer: "Видеоконтроллер", points: 40 },
            { text: "Какой компонент компьютера хранит данные и инструкции, необходимые для текущих вычислений, но теряет их при выключении питания?", answer: "Оперативная память, RAM", points: 50 },
            { text: "Интерфейс для передачи данных несколькими битами одновременно -  ", answer: "Параллельный порт", points: 60 },
            { text: "Как называется шина, соединяющая процессор, оперативную память и другие устройства? ", answer: "Системная шина", points: 70 },
            { text: "Как называется высокоскоростная память, используемая процессором для временного хранения часто используемых данных, которая делится на уровни L1, L2 и L3?", answer: "Кеш-память процессора", points: 80 },
            { text: "Какой компонент архитектуры ЭВМ контролирует выполнение команд, организует выборку и декодирование инструкций?", answer: "Устройство управления (Control Unit)", points: 90 },
            { text: "Как называется микросхема или набор микросхем, который управляет работой материнской платы и взаимодействием её компонентов?  ", answer: "Чипсет", points: 100 }
        ]
    },
    {
        name: "История вычислительной техники",
        questions: [
            { text: "Кто считается создателем первого программируемого электромеханического компьютера?", answer: " Конрад Цузе", points: 10 },
            { text: "Как назывался первый массово произведённый персональный компьютер? ", answer: "IBM PC 5150", points: 20 },
            { text: "Какой британский математик и логик в 1830-х годах разработал концепцию аналитической машины, предвосхитившую ЭВМ?", answer: "Чарльз Бэббидж", points: 30 },
            { text: "Как звали женщину, считающуюся первой программисткой, которая писала алгоритмы для аналитической машины?", answer: "Ада Лавлейс", points: 40 },
            { text: "Какой компьютер стал первым в истории ноутбуком? ", answer: "Osborne 1", points: 50 },
            { text: "Какой советский инженер возглавлял разработку первой советской ЭВМ «МЭСМ», запущенной в 1951 году?", answer: "Сергей Алексеевич Лебедев", points: 60 },
            { text: "Какая компания выпустила первый коммерческий микропроцессор? ", answer: "Intel — 4004 в 1971 году", points: 70 },
            { text: "Как называлась советская серия компьютеров, созданная как аналог IBM PC? ", answer: "ЕС ЭВМ — Единая Система ЭВМ", points: 80 },
            { text: "Как назывался первый в мире компьютер с хранимой в памяти программой?", answer: "Манчестерская «Baby» (Manchester Small-Scale Experimental Machine)", points: 90 },
            { text: "Какая операционная система была установлена на первом Macintosh, выпущенном в 1984 году?", answer: "System 1 (Macintosh System Software)", points: 100 }
        ]
    },
    {
        name: "Программное обеспечение",
        questions: [
            { text: "Как называется программа, которая интерпретирует машинный код, обеспечивает взаимодействие между прикладными программами и оборудованием?", answer: "Операционная система (ОС)", points: 10 },
            { text: "Как называется самая распространённая операционная система для персональных компьютеров, разработанная компанией Microsoft?", answer: "Windows", points: 20 },
            { text: "Как называется программный компонент, обеспечивающий пользователю взаимодействие с операционной системой через окна, кнопки и пиктограммы? ", answer: "Графический интерфейс, GUI", points: 30 },
            { text: "Как называется технология, позволяющая запускать несколько виртуальных ОС на одном ПК? ", answer: "Виртуализация", points: 40 },
            { text: "Какой язык программирования, разработанный Деннисом Ритчи в 1972 году, до сих пор используется для написания ядра большинства операционных систем? ", answer: "C", points: 50 },
            { text: "Какой вид программного обеспечения компилируется в байт-код и выполняется в виртуальной машине, например, JVM?", answer: "Java-программы", points: 60 },
            { text: "Как называется программный механизм, предотвращающий копирование и модификацию программного кода, применяемый в коммерческом ПО и играх?", answer: "DRM", points: 70 },
            { text: "Как называется подход к разработке программного обеспечения, при котором создаются независимые модули, взаимодействующие через API, например, в архитектуре микросервисов?", answer: "Сервис-ориентированная архитектура (SOA / Microservices)", points: 80 },
            { text: "Как называется системная программа, которая управляет оборудованием компьютера и предоставляет базовые функции для других программ?", answer: "Ядро операционной системы", points: 90 },
            { text: "Как называется тип программного обеспечения, исходный код которого открыт и доступен для изменения пользователями?", answer: "Свободное (open-source) программное обеспечение", points: 100 }
        ]
    },
    {
        name: "Алгоритмы и вычисления",
        questions: [
            { text: "Как называется точная и конечная последовательность действий, предназначенная для решения поставленной задачи?", answer: "Алгоритм", points: 10 },
            { text: "Как называется метод поиска элемента в отсортированном массиве с делением на части? ", answer: "Бинарный поиск", points: 20 },
            { text: "Какая структура данных работает по принципу «первый вошёл – первый вышел»?", answer: "Очередь", points: 30 },
            { text: "Как называется структура данных, в которой элементы добавляются и удаляются с одного конца, по принципу «последний вошёл — первый вышел»?", answer: "Стек", points: 40 },
            { text: "Какая структура данных представляет собой иерархическое дерево, в котором каждый узел имеет не более двух потомков?", answer: "Бинарное дерево (Binary Tree)", points: 50 },
            { text: "Какой алгоритм используется для нахождения кратчайшего пути в графе?", answer: "Алгоритм Дейкстры", points: 60 },
            { text: "Какой алгоритм сортировки имеет среднюю и худшую временную сложность O(n log n) и основан на стратегии «разделяй и властвуй»?", answer: "Быстрая сортировка (Quicksort)", points: 70 },
            { text: "Как называется алгоритм, предназначенный для оценки сложности функций и операций, с обозначением верхней границы роста?", answer: "Асимптотическая сложность / нотация 'Большое O' (Big O notation)", points: 80 },
            { text: "В чём заключается принцип работы квантовых вычислений по сравнению с классическими?", answer: "Использование кубитов, суперпозиции и квантового запутывания", points: 90 },
            { text: "Какой алгоритм применяется для обхода графа в глубину?", answer: "Поиск в глубину (DFS, Depth-First Search)", points: 100 }
        ]
    }
];

// Состояние игры
export const state = {
    teams: [],
    usedQuestions: [],
    currentQuestion: null,
    timer: null,
    timeLeft: 60,
    gameStarted: false,
    timerExpired: false,
    questionClosedManually: false
};


// Элементы DOM
export const elements = {
    teamsContainer: document.getElementById('teamsContainer'),
    addTeam: document.getElementById('addTeam'),
    startGame: document.getElementById('startGame'),
    gameBoard: document.getElementById('gameBoard'),
    categories: document.getElementById('categories'),
    teamsScore: document.getElementById('teamsScore'),
    questionModal: document.getElementById('questionModal'),
    modalQuestionText: document.getElementById('modalQuestionText'),
    timer: document.getElementById('timer'),
    correctAnswer: document.getElementById('correctAnswer'),
    modalTeamsScore: document.getElementById('modalTeamsScore'),
    showAnswer: document.getElementById('showAnswer'),
    addPoints: document.getElementById('addPoints'),
    closeModal: document.getElementById('closeModal'),
    restartGame: document.getElementById('restartGame'),
    darckShem: document.getElementById('logoNVSU')
};