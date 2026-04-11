// Japan 2026 Travel Itinerary PWA
// Luigi & Isabella — 13 Abril a 05 Maio 2026

// ============================================
// ESSENTIAL INFO PANEL
// ============================================
const ESSENTIAL_INFO = {
  emergency: {
    police: "110",
    ambulance: "119",
    embassy_br: "+81 3-3404-5211"
  },
  transport: {
    jr_pass: "21 dias — ativar no aeroporto",
    ic_card: "Suica/Pasmo — carregar na estação"
  },
  connectivity: {
    sim: "eSIM recomendado — ativar antes de embarcar"
  },
  phrases: [
    { jp: "Konnichiwa", pt: "Olá" },
    { jp: "Arigatou gozaimasu", pt: "Muito obrigado" },
    { jp: "Sumimasen", pt: "Com licença" },
    { jp: "Ikura desu ka?", pt: "Quanto custa?" },
    { jp: "Okanjo onegaishimasu", pt: "A conta por favor" },
    { jp: "Eigo wa hanasemasu ka?", pt: "Fala inglês?" },
    { jp: "Tasukete!", pt: "Socorro!" }
  ]
};

// ============================================
// RESTAURANT GUIDE
// ============================================
const RESTAURANT_GUIDE = {
  neighborhoods: [
    {
      name: "Tsukiji",
      restaurants: [
        { name: "Itadori Bekkan", type: "Casual Sushi", address: "1F, 4-10-16 Tsukiji, Chuo-ku", price: "¥¥", avg: "¥2.000–4.000", reservation: "nao", tip: "Escondido atrás de lojas. Sushi simples, sem frescura, peixe de altíssima qualidade. Atum gordo e uni obrigatórios.", must: false }
      ]
    },
    {
      name: "Shibuya",
      restaurants: [
        { name: "Narukiyo", type: "Izakaya / Gastropub", address: "VORT Aoyama B1, 2-7-14 Shibuya", price: "¥¥", avg: "¥5.000–8.000", reservation: "recomendada", tip: "Izakaya animado, caótico e divertido. Menu japonês do dia. Melhor sentar no balcão e pedir omakase.", must: true },
        { name: "Katsudon-ya Zuicho", type: "Tonkatsu", address: "41-26 Udagawacho, Shibuya-ku", price: "¥", avg: "¥1.500–2.000", reservation: "nao", tip: "Só 8 lugares, uma opção no menu. Sempre fila. Cash only.", must: false },
        { name: "Kotaro", type: "Izakaya", address: "2-28-2 Sakuragaokacho, Shibuya-ku", price: "¥¥¥", avg: "¥8.000–15.000", reservation: "muito dificil", tip: "Sem menu fixo, tudo sazonal. Izakaya sofisticado. Meses de espera pra reservar.", must: true },
        { name: "Ryan Soba", type: "Soba", address: "1F, 1-4-13 Shibuya", price: "¥¥", avg: "¥1.500–3.000", reservation: "nao", tip: "Soba artesanal moderno. Cozinha aberta. Bom pra almoço e jantar.", must: false },
        { name: "Uogashi Dogenzaka", type: "Standing Sushi", address: "2-9-1 Dogenzaka, Shibuya-ku", price: "¥", avg: "¥1.000–2.500", reservation: "nao", tip: "Sushi em pé. Barato e bom. Várias unidades em Tokyo.", must: false },
        { name: "Tori Chataro", type: "Yakitori", address: "1F, 7-12 Uguisudanicho, Shibuya-ku", price: "¥¥", avg: "¥4.000–7.000", reservation: "obrigatoria", tip: "Yakitori omakase. Carne de altíssima qualidade.", must: false },
        { name: "Tofu Sorano", type: "Casual Kaiseki", address: "Cherry Garden 4F, 4-17 Sakuragaokacho", price: "¥¥", avg: "¥3.000–5.000", reservation: "nao", tip: "Menu inteiro baseado em tofu (criativo). Pratos pequenos pra compartilhar.", must: false },
        { name: "Ryukyu Chinese Tama", type: "Izakaya", address: "2-3 Shibuya", price: "¥¥", avg: "¥4.000–6.000", reservation: "nao", tip: "Mistura China + Okinawa. Experiência diferente, chef's counter criativo.", must: false },
        { name: "Morimoto", type: "Yakitori", address: "2-7-4 Dogenzaka, Shibuya-ku", price: "¥¥", avg: "¥4.000–6.000", reservation: "nao", tip: "Minúsculo, intenso, estilo omakase no balcão.", must: false }
      ]
    },
    {
      name: "Azabujuban",
      restaurants: [
        { name: "Savoy", type: "Pizza", address: "2-20-12 Azabujuban, Minato-ku", price: "¥¥", avg: "¥2.000–3.500", reservation: "recomendada", tip: "Pizza napolitana nível altíssimo. Destaque: pizza de atum com wasabi e marinara.", must: true },
        { name: "Tempura Takiya", type: "Tempura", address: "2F Labell, 2-8-6 Azabujuban", price: "¥¥¥", avg: "¥15.000–25.000", reservation: "obrigatoria", tip: "Tempura high-end com ingredientes premium.", must: false }
      ]
    },
    {
      name: "Roppongi",
      restaurants: [
        { name: "Iruca Tokyo", type: "Ramen", address: "4-12-12 Roppongi, Minato-ku", price: "¥", avg: "¥1.200–1.800", reservation: "nao", tip: "Um dos melhores ramen de Tokyo. Famoso pelo porcini + yuzu. Sempre com fila, vale a espera.", must: true },
        { name: "PST Roppongi", type: "Pizza", address: "7-6-2 Roppongi", price: "¥¥", avg: "¥2.500–4.000", reservation: "recomendada", tip: "Uma das melhores pizzas da cidade. Difícil reserva.", must: false },
        { name: "Sougo", type: "Vegan Kaiseki", address: "Roppongi Green Building 3F, 6-1-8 Roppongi", price: "¥¥¥", avg: "¥10.000–15.000", reservation: "obrigatoria", tip: "Alta cozinha vegetariana japonesa. Shojin ryori refinado.", must: false }
      ]
    },
    {
      name: "Nakameguro",
      restaurants: [
        { name: "Schmatz", type: "Izakaya / Cervejaria", address: "Ekimae Building, 1-22-4 Kamimeguro", price: "¥¥", avg: "¥3.000–5.000", reservation: "nao", tip: "Cerveja artesanal alemã + comida japonesa moderna. Ambiente jovem e descontraído.", must: false },
        { name: "Udatsu Sushi", type: "High-End Sushi", address: "2-48-10 Kamimeguro", price: "¥¥¥", avg: "¥13.200/pessoa", reservation: "obrigatoria", tip: "Sushi Michelin com clima mais relaxado. Excelente omakase. Tem opção vegetariana. JÁ RESERVADO!", must: true },
        { name: "Seirinkan", type: "Pizza", address: "2-6-4 Kamimeguro", price: "¥¥", avg: "¥1.800–3.000", reservation: "nao", tip: "Pizza napolitana cult. Só margarita e marinara. Ambiente Beatles/industrial.", must: true },
        { name: "Kushiwakamaru", type: "Yakitori", address: "1-19-2 Kamimeguro", price: "¥¥", avg: "¥3.000–5.000", reservation: "recomendada", tip: "Yakitori top com clima animado. Ótimo com highball. Pode ter fila.", must: false },
        { name: "Akamaru Curry", type: "Japanese Curry", address: "Yamashita Building 1F, 3-16-4 Kamimeguro", price: "¥", avg: "¥1.000–1.500", reservation: "nao", tip: "Curry clássico japonês muito bem feito. Cheiro já te puxa pra dentro.", must: false },
        { name: "Yakumo", type: "Ramen (Wonton)", address: "3-5 Higashiyama, Meguro-ku", price: "¥", avg: "¥1.000–1.500", reservation: "nao", tip: "Ramen de wonton top. Chegue cedo.", must: false },
        { name: "Warito Ramen", type: "Tsukemen", address: "Cross One, 3-7-10 Aobadai", price: "¥", avg: "¥1.000–1.500", reservation: "nao", tip: "Tsukemen famoso. Sem fotos. Fila comum.", must: false },
        { name: "Beef Kitchen", type: "Yakiniku", address: "Kamimeguro", price: "¥¥", avg: "¥5.000–8.000", reservation: "nao", tip: "Carne premium com vibe moderna.", must: false },
        { name: "Yuzuha", type: "Kaiseki", address: "3F, 1-16-11 Aobadai", price: "¥¥¥", avg: "¥10.000–15.000", reservation: "recomendada", tip: "Kaiseki moderno. Menu degustação recomendado.", must: false }
      ]
    },
    {
      name: "Daikanyama",
      restaurants: [
        { name: "Tatemichiya", type: "Izakaya", address: "30-8 Sarugakucho, Shibuya-ku", price: "¥¥", avg: "¥3.000–5.000", reservation: "recomendada", tip: "Izakaya punk rock clássico. Pequeno, barato e muito autêntico.", must: true }
      ]
    },
    {
      name: "Toranomon",
      restaurants: [
        { name: "Teppanyaki Sazanka", type: "Teppanyaki", address: "Okura Tokyo 41F, 2-10-4 Toranomon", price: "¥¥¥¥", avg: "¥25.000–40.000", reservation: "obrigatoria", tip: "Teppanyaki de alto nível com vista incrível da cidade. Ingredientes premium. Experiência completa.", must: true }
      ]
    },
    {
      name: "Ginza",
      restaurants: [
        { name: "Tempura Kondo", type: "Tempura", address: "Sakaguchi Building 9F, 5-5-13 Ginza", price: "¥¥¥", avg: "¥15.000–25.000", reservation: "muito dificil", tip: "2 estrelas Michelin. Tempura extremamente leve. Destaques: cenoura e batata-doce.", must: true },
        { name: "Nemuro Hanamaru", type: "Sushi Esteira", address: "Tokyo Plaza Ginza 10F, 5-2-1 Ginza", price: "¥", avg: "¥2.000–4.000", reservation: "nao", tip: "Melhor custo-benefício de sushi. Fila mas roda rápido.", must: false },
        { name: "Tempura Onodera", type: "Tempura", address: "Sunlit Ginza Building 11F", price: "¥¥¥", avg: "¥12.000–20.000", reservation: "obrigatoria", tip: "Tempura refinado, precisa reserva.", must: false },
        { name: "Ginza Kappou Ukai", type: "Kaiseki", address: "Jewel Box Ginza B1", price: "¥¥¥", avg: "¥10.000–18.000", reservation: "recomendada", tip: "Kaiseki moderno elegante.", must: false }
      ]
    },
    {
      name: "Nishi-Azabu",
      restaurants: [
        { name: "Sushi Yuu", type: "High-End Sushi", address: "1-4-15 Nishiazabu", price: "¥¥¥", avg: "¥15.000–25.000", reservation: "obrigatoria", tip: "Omakase moderno, ambiente animado.", must: false },
        { name: "Sushi Shin", type: "High-End Sushi", address: "4-18-20 Nishiazabu", price: "¥¥¥", avg: "¥20.000–30.000", reservation: "obrigatoria", tip: "Sushi tradicional com técnica Michelin.", must: false },
        { name: "Butagumi", type: "Tonkatsu", address: "2-24-9 Nishiazabu", price: "¥¥", avg: "¥2.500–4.000", reservation: "nao", tip: "Casa pequena especializada em tonkatsu. Vá cedo.", must: true }
      ]
    },
    {
      name: "Ebisu",
      restaurants: [
        { name: "Gem by Moto", type: "Sake Bar / Izakaya", address: "1-30-9 Ebisu", price: "¥¥¥", avg: "¥8.000–15.000", reservation: "obrigatoria", tip: "Focado em sake premium. Educativo, íntimo, produtor direto. A experiência sake da viagem.", must: true },
        { name: "Sowado", type: "Izakaya", address: "1-12-15 Hiroo, Shibuya-ku", price: "¥¥", avg: "¥4.000–6.000", reservation: "nao", tip: "Izakaya escondido, bom pra grupo.", must: false },
        { name: "Udon Yamacho", type: "Udon", address: "Ebisu Oak Building 1F", price: "¥", avg: "¥800–1.200", reservation: "nao", tip: "Simples, barato e muito bom.", must: false }
      ]
    },
    {
      name: "Omotesando",
      restaurants: [
        { name: "Aoyama Kawakami", type: "Soba", address: "3-14-1 Minamiaoyama", price: "¥¥", avg: "¥1.500–3.000", reservation: "nao", tip: "Soba tradicional em ambiente mais relaxado.", must: false }
      ]
    },
    {
      name: "Ueno",
      restaurants: [
        { name: "Jambo Hanare", type: "Yakiniku", address: "Hongo, Bunkyo-ku", price: "¥¥", avg: "¥5.000–8.000", reservation: "obrigatoria", tip: "Yakiniku top. Peça arroz com carne e manteiga.", must: false }
      ]
    },
    {
      name: "Yotsuya",
      restaurants: [
        { name: "Sumibi Yakiniku Nakahara", type: "Yakiniku", address: "GEMS Ichigaya 9F, 4-3 Rokubancho", price: "¥¥¥", avg: "¥12.000–20.000", reservation: "obrigatoria", tip: "Um dos melhores yakiniku de Tokyo. Wagyu selecionado com precisão absurda.", must: true }
      ]
    },
    {
      name: "Nihonbashi",
      restaurants: [
        { name: "Hiyama", type: "Sukiyaki", address: "2-5-1 Nihonbashi Ningyocho", price: "¥¥¥", avg: "¥10.000–18.000", reservation: "recomendada", tip: "Restaurante Michelin de sukiyaki. Carne nível absurdo. Açougue desde 1912.", must: false }
      ]
    },
    {
      name: "Meguro",
      restaurants: [
        { name: "Land", type: "Japanese Curry", address: "2F, 2-21-28 Shinomeguro", price: "¥¥", avg: "¥1.500–2.500", reservation: "nao", tip: "Curry autoral extremamente complexo. Imperdível.", must: true },
        { name: "Katsu Midori", type: "Sushi Esteira", address: "Meguro Atré 2", price: "¥", avg: "¥2.000–4.000", reservation: "nao", tip: "Ótimo custo-benefício, filas grandes.", must: false },
        { name: "Men-ya Ichizu", type: "Ramen", address: "2-17-30 Koyama, Shinagawa-ku", price: "¥", avg: "¥1.000–1.500", reservation: "nao", tip: "Ramen com influência francesa.", must: false }
      ]
    },
    {
      name: "Shimokitazawa",
      restaurants: [
        { name: "Shirubee", type: "Izakaya", address: "2-18-2 Kitazawa, Setagaya-ku", price: "¥", avg: "¥2.000–4.000", reservation: "nao", tip: "Izakaya clássico japonês. Tire o sapato.", must: false }
      ]
    },
    {
      name: "Shinjuku",
      restaurants: [
        { name: "Katsukura", type: "Tonkatsu", address: "Takashimaya Times Square 14F", price: "¥¥", avg: "¥2.000–3.500", reservation: "nao", tip: "Katsu estilo Kyoto, leve e crocante.", must: false }
      ]
    },
    {
      name: "Jimbocho",
      restaurants: [
        { name: "Curry Bondy", type: "Japanese Curry", address: "Kanda Koso Center 2F", price: "¥", avg: "¥1.000–1.500", reservation: "nao", tip: "Clássico curry japonês famoso.", must: false }
      ]
    },
    {
      name: "Kanda",
      restaurants: [
        { name: "Kikanbo", type: "Ramen Picante", address: "2-10-9 Kajicho", price: "¥", avg: "¥1.000–1.500", reservation: "nao", tip: "Ramen de miso com nível de pimenta ajustável.", must: false }
      ]
    }
  ],
  highEndSushi: ["Arai", "Kurosaki", "Nanba", "Saito", "Sawada", "Sugita"],
  depachika: [
    { name: "Takashimaya", area: "Shinjuku" },
    { name: "Isetan", area: "Shinjuku" },
    { name: "Mitsukoshi", area: "Ginza" },
    { name: "Tokyu Food Show", area: "Shibuya" }
  ],
  nonJapanese: {
    vietnamese: ["An Di", "Banh Xeo Saigon"],
    chinese: ["GONI", "Chugoku Hanten"],
    thai: ["Chao Chao Bamboo", "Kaffir Lime"],
    burger: ["Henry's Burger"],
    french: ["Pignon"],
    indian: ["Shiva Curry"],
    korean: ["Kippyo"],
    italian: ["Cignale"]
  }
};

// ============================================
// STATE & CONFIG
// ============================================
let currentCity = "nagano";
let currentDay = 0;
let currentMood = "all";
let doneActivities = {};

const TRIP = {
  travelers: "Luigi & Isabella",
  dates: "13 Abril — 05 Maio 2026",
  nights: 19,
  flights: [
    { from: "IGU", to: "GRU", date: "13/04", dep: "11:20", arr: "13:00", airline: "Gol G3 1179", type: "domestic" },
    { from: "GRU", to: "EWR", date: "13/04", dep: "21:00", arr: "14/04 06:00", airline: "United UA148", type: "intl" },
    { from: "EWR", to: "HND", date: "14/04", dep: "10:05", arr: "15/04 13:35", airline: "United UA131", type: "intl" },
    { from: "HND", to: "EWR", date: "04/05", dep: "17:45", arr: "17:50", airline: "United UA130", type: "intl" },
    { from: "EWR", to: "GRU", date: "04/05", dep: "20:30", arr: "05/05 07:10", airline: "United UA149", type: "intl" },
    { from: "GRU", to: "IGU", date: "05/05", dep: "12:20", arr: "14:05", airline: "LATAM LA3202", type: "domestic" }
  ],
  reservations: {
    confirmed: [
      { name: "Udatsu Sushi", date: "30/04", time: "12:00", city: "Tokyo", id: "I-ZL9TCC7N", price: "¥13.200/pessoa", note: "Omakase em Nakameguro" }
    ],
    pending: [
      { name: "Narukiyo", date: "29/04", city: "Tokyo", priority: "alta", note: "Izakaya em Shibuya, VORT Aoyama B1" },
      { name: "Gem by Moto", date: "30/04", city: "Tokyo", priority: "critica", note: "Sake bar em Ebisu — educativo, íntimo" },
      { name: "Tatemichiya", date: "30/04", city: "Tokyo", priority: "media", note: "Jantar em Daikanyama" },
      { name: "Teppanyaki Sazanka", date: "03/05", city: "Tokyo", priority: "alta", note: "Hotel Okura 41F — vista cidade" },
      { name: "Kotaro", date: "03/05", city: "Tokyo", priority: "critica", note: "Meses de espera — tentar lista" }
    ]
  },
  cities: [
    {
      id: "nagano",
      name: "Nagano",
      kanji: "長野",
      emoji: "🏔️",
      dates: "15/04 — 19/04",
      nights: 4,
      hotel: {
        name: "Hotel Metropolitan Nagano",
        detail: "Conectado à estação JR",
        note: "A confirmar"
      },
      gastro: [
        {
          name: "Soba Uzuraya",
          price: "¥1.200–2.000",
          location: "Togakushi, Nagano — 30 min de bus do centro",
          must: true,
          note: "Soba artesanal Togakushi style. O mais famoso da região."
        },
        {
          name: "Fuji no Mori Soba",
          price: "¥1.000–1.800",
          location: "Perto da estação JR Nagano, centro",
          must: false,
          note: "Soba quente ou frio. Bom pra primeiro jantar em Nagano."
        },
        {
          name: "Nishino-ya Sake Brewery",
          price: "¥500–2.000",
          location: "Zenkoji-shita, centro de Nagano",
          must: false,
          note: "Degustação de sake local. Várias breweries na mesma rua."
        }
      ],
      days: [
        {
          date: "15/04",
          dayOfWeek: "Ter",
          theme: "Chegada",
          activities: [
            {
              name: "Chegada Haneda",
              time: "13:35",
              emoji: "✈️",
              tags: ["transport"],
              duration: "",
              detail: "Pouso no Aeroporto de Haneda",
              note: ""
            },
            {
              name: "Shinkansen HND → Nagano",
              time: "~15:00",
              emoji: "🚅",
              tags: ["transport"],
              duration: "1h40",
              detail: "JR Pass | Primeiro uso do passe",
              note: ""
            },
            {
              name: "Check-in Hotel",
              time: "~17:00",
              emoji: "🏨",
              tags: ["transport"],
              duration: "",
              detail: "Hotel Metropolitan Nagano, conectado à estação",
              note: ""
            },
            {
              name: "Jantar — Fuji no Mori Soba",
              time: "19:00",
              emoji: "🍜",
              tags: ["food"],
              duration: "1h30",
              detail: "Perto da estação JR Nagano, centro. ¥1.000–1.800 (~$9 USD). Primeiro jantar no Japão — soba quente + sake local.",
              note: "Soba Togakushi style — a especialidade de Nagano. Sem reserva."
            }
          ]
        },
        {
          date: "16/04",
          dayOfWeek: "Qua",
          theme: "Zenkoji + Macacos",
          activities: [
            {
              name: "Zenkoji — ritual matinal",
              time: "06:00",
              emoji: "⛩️",
              tags: ["culture", "photo"],
              duration: "1h30",
              detail: "Templo vazio ao amanhecer. Ritual matinal budista. Fotografia A7CR com luz dourada.",
              note: "A pé ou taxi 5 min do hotel"
            },
            {
              name: "Café + soba — Fuji no Mori",
              time: "08:00",
              emoji: "☕",
              tags: ["food"],
              duration: "45 min",
              detail: "Perto da estação JR Nagano. ¥1.000–1.800 (~$9 USD). Soba quente + café.",
              note: "Sem reserva"
            },
            {
              name: "Bus para Jigokudani",
              time: "09:00",
              emoji: "🚌",
              tags: ["transport"],
              duration: "45 min",
              detail: "Bus Stop No.23, saída leste da estação | ~¥3.000",
              note: ""
            },
            {
              name: "Caminhada floresta de cedros",
              time: "09:45",
              emoji: "🌲",
              tags: ["nature", "photo"],
              duration: "35 min",
              detail: "Trilha pela floresta até o parque dos macacos",
              note: ""
            },
            {
              name: "Jigokudani Monkey Park",
              time: "10:30",
              emoji: "🐒",
              tags: ["nature", "photo"],
              duration: "1h30",
              detail: "Snow monkeys nas termas! Filhotes em abril/maio. Fotografia A7CR.",
              note: "Experiência única — macacos tomando banho quente nas montanhas"
            },
            {
              name: "Almoço — Soba Uzuraya",
              time: "13:30",
              emoji: "🍜",
              tags: ["food"],
              duration: "1h",
              detail: "Togakushi, Nagano. ¥1.200–2.000 (~$10 USD). A soba mais famosa da região.",
              note: "30 min de bus do centro. Sem reserva."
            },
            {
              name: "Tarde livre",
              time: "15:00",
              emoji: "🍶",
              tags: ["night"],
              duration: "Flex",
              detail: "Sake local, descanso, explorar a cidade no seu ritmo",
              note: "Primeiro dia inteiro — sem pressa"
            }
          ]
        },
        {
          date: "17/04",
          dayOfWeek: "Qui",
          theme: "Matsumoto",
          activities: [
            {
              name: "Trem Nagano → Matsumoto",
              time: "09:00",
              emoji: "🚃",
              tags: ["transport"],
              duration: "50 min",
              detail: "JR Pass",
              note: ""
            },
            {
              name: "Matsumoto Castle",
              time: "10:00",
              emoji: "🏯",
              tags: ["culture", "photo"],
              duration: "2h",
              detail: "Fachada negra, fosso com reflexo. Fotografia A7CR obrigatória.",
              note: "Um dos castelos mais fotogênicos do Japão — madeira original do século XVI"
            },
            {
              name: "Nawate-dori + Nakamachi",
              time: "12:30",
              emoji: "🏘️",
              tags: ["shop", "culture", "photo"],
              duration: "2h",
              detail: "Artesanato, cafés, ruas históricas a pé",
              note: ""
            },
            {
              name: "Almoço — Kobayashi Soba",
              time: "14:30",
              emoji: "🍜",
              tags: ["food"],
              duration: "1h",
              detail: "Nawate-dori, Matsumoto. ¥1.000–1.800 (~$9 USD). Soba artesanal com vista pro rio.",
              note: "Sem reserva"
            },
            {
              name: "Sake — Brewery Zenkoji",
              time: "16:00",
              emoji: "🍶",
              tags: ["food", "night"],
              duration: "1h",
              detail: "Nakamachi, Matsumoto. Degustação de sake local nas breweries do bairro histórico.",
              note: "Várias opções na mesma rua"
            },
            {
              name: "Trem de volta",
              time: "17:30",
              emoji: "🚃",
              tags: ["transport"],
              duration: "50 min",
              detail: "Matsumoto → Nagano | JR Pass",
              note: ""
            }
          ]
        },
        {
          date: "18/04",
          dayOfWeek: "Sex",
          theme: "Dia Livre",
          free: true,
          activities: [
            {
              name: "Obuse — day trip opcional",
              time: "Flex",
              emoji: "🏘️",
              tags: ["culture", "food"],
              duration: "Meio dia",
              detail: "30 min de trem. Vila de sake, chestnuts, charme rural.",
              note: "Opcional — só se estiver com energia"
            },
            {
              name: "Descanso & cafés em Nagano",
              time: "Flex",
              emoji: "☕",
              tags: ["food"],
              duration: "Flex",
              detail: "Explorar a cidade no seu ritmo. Artesanato, sake, soba.",
              note: ""
            }
          ]
        }
      ]
    },
    {
      id: "takayama",
      name: "Takayama",
      kanji: "高山",
      emoji: "🏡",
      dates: "19/04 — 21/04",
      nights: 2,
      hotel: {
        name: "Hotel Wood Takayama",
        detail: "Superior Japanese-Western Room",
        note: "Gifu Prefecture"
      },
      gastro: [
        {
          name: "Maruaki — Hida Beef",
          price: "¥5.000–12.000",
          location: "Sanmachi Suji, 6 Kamisannomachi, Takayama",
          must: true,
          note: "Wagyu Hida grelhado no carvão. Melhor corte da região."
        },
        {
          name: "Masagosoba — Ramen Takayama",
          price: "¥900–1.300",
          location: "Centro de Takayama, perto do rio Miyagawa",
          must: false,
          note: "Ramen shoyu estilo Takayama. Caldo fino, macarrão enrolado."
        },
        {
          name: "Funasaka Sake Brewery",
          price: "¥300–1.500",
          location: "Sanmachi Suji — procurar sugidama (bola de cedro) na porta",
          must: false,
          note: "Degustação grátis. Várias breweries na mesma rua."
        }
      ],
      days: [
        {
          date: "19/04",
          dayOfWeek: "Sab",
          theme: "Chegada + Sanmachi",
          activities: [
            {
              name: "Transfer Nagano → Takayama",
              time: "09:00",
              emoji: "🚃",
              tags: ["transport"],
              duration: "~3h",
              detail: "JR Wide View Hida | JR Pass | Vista montanhas",
              note: ""
            },
            {
              name: "Check-in Hotel Wood",
              time: "12:00",
              emoji: "🏨",
              tags: ["transport"],
              duration: "",
              detail: "Hotel Wood Takayama",
              note: ""
            },
            {
              name: "Almoço — Maruaki Hida Beef",
              time: "13:00",
              emoji: "🥩",
              tags: ["food"],
              duration: "1h",
              detail: "6 Kamisannomachi, Sanmachi Suji, Takayama. ¥5.000–12.000 (~$55 USD). Wagyu Hida grelhado no carvão.",
              note: "A carne wagyu local — intensidade e marmoreio"
            },
            {
              name: "Sanmachi Suji",
              time: "14:30",
              emoji: "🏘️",
              tags: ["culture", "photo"],
              duration: "2h",
              detail: "Distrito histórico Edo. Ruas de madeira, comércio tradicional. Fotografia A7CR.",
              note: "Uma das ruas mais preservadas do Japão — era Edo pura"
            },
            {
              name: "Funasaka Sake Brewery — degustação",
              time: "16:30",
              emoji: "🍶",
              tags: ["food", "night"],
              duration: "1h",
              detail: "Sanmachi Suji, Kamisan-no-machi, Takayama. Grátis–¥500 (~$3 USD). Degustação de sake artesanal. Visite também Harada Sake Brewery na mesma rua.",
              note: "Funasaka tem 15+ variedades pra provar. Cash only."
            },
            {
              name: "Rio Miyagawa ao entardecer",
              time: "18:00",
              emoji: "🌅",
              tags: ["photo", "nature"],
              duration: "45 min",
              detail: "Luz dourada no rio. Fotografia A7CR.",
              note: ""
            },
            {
              name: "Jantar — Masagosoba Ramen",
              time: "19:00",
              emoji: "🍜",
              tags: ["food", "night"],
              duration: "1h30",
              detail: "Centro de Takayama, perto do rio Miyagawa. ¥900–1.300 (~$7 USD). Ramen shoyu estilo Takayama + sake local.",
              note: "Sem reserva"
            }
          ]
        },
        {
          date: "20/04",
          dayOfWeek: "Dom",
          theme: "Shirakawa-go",
          activities: [
            {
              name: "Bus para Shirakawa-go",
              time: "08:00",
              emoji: "🚌",
              tags: ["transport"],
              duration: "50 min",
              detail: "Nohi Bus | ~¥2.500",
              note: ""
            },
            {
              name: "Shirakawa-go — aldeias UNESCO",
              time: "09:00",
              emoji: "🏡",
              tags: ["culture", "photo", "nature"],
              duration: "4h",
              detail: "Aldeias gassho-zukuri (telhado de palha). UNESCO World Heritage. A pé.",
              note: "Shiroyama Viewpoint — foto panorâmica obrigatória"
            },
            {
              name: "Almoço — Soba Dokoro Noraku",
              time: "13:00",
              emoji: "🍜",
              tags: ["food"],
              duration: "1h",
              detail: "Ogimachi, Shirakawa-go. ¥1.000–1.500 (~$8 USD). Soba artesanal feito à mão dentro de uma casa gassho-zukuri.",
              note: "Fica perto do Wada House. Sem reserva, chega cedo."
            },
            {
              name: "Bus de volta",
              time: "14:30",
              emoji: "🚌",
              tags: ["transport"],
              duration: "50 min",
              detail: "Nohi Bus de volta a Takayama",
              note: ""
            },
            {
              name: "Hida Folk Village",
              time: "15:30",
              emoji: "🏡",
              tags: ["culture"],
              duration: "1h30",
              detail: "Museu a céu aberto. Casas tradicionais. | Taxi 10 min",
              note: ""
            },
            {
              name: "Jantar — Jakurin (Hida Beef)",
              time: "19:00",
              emoji: "🥩",
              tags: ["food"],
              duration: "1h30",
              detail: "2-84 Kamichinomachi, Takayama. ¥5.000–10.000 (~$49 USD). Hida beef grelhado no carvão estilo yakiniku. Cortes premium A5.",
              note: "Diferente do Maruaki — aqui é yakiniku, você grelha na mesa. Sem reserva."
            }
          ]
        }
      ]
    },
    {
      id: "kanazawa",
      name: "Kanazawa",
      kanji: "金沢",
      emoji: "✨",
      dates: "21/04 — 25/04",
      nights: 4,
      hotel: {
        name: "Soki Kanazawa",
        detail: "Design hotel japonês",
        note: "Ishikawa Prefecture"
      },
      gastro: [
        {
          name: "Omicho Market — Yamasan Sushi",
          price: "¥2.000–5.000",
          location: "50-1 Omicho, Kanazawa — dentro do mercado",
          must: true,
          note: "Sushi no balcão dentro do mercado. Bluefin, uni, king crab frescos."
        },
        {
          name: "Sushi Kobashi",
          price: "¥15.000–25.000",
          location: "Katamachi, Kanazawa — pedir indicação no Soki",
          must: false,
          note: "Omakase com frutos do mar do Mar do Japão. Reserva recomendada."
        },
        {
          name: "Fukumitsuya Sake Brewery",
          price: "¥500–2.000",
          location: "2-2-3 Imaizumi, Kanazawa",
          must: false,
          note: "Brewery mais antiga de Kanazawa. Degustação inclusa."
        }
      ],
      days: [
        {
          date: "21/04",
          dayOfWeek: "Seg",
          theme: "Chegada + Higashi Chaya",
          activities: [
            {
              name: "Transfer Takayama → Kanazawa",
              time: "09:00",
              emoji: "🚃",
              tags: ["transport"],
              duration: "~2h30",
              detail: "JR Pass",
              note: ""
            },
            {
              name: "Check-in Soki",
              time: "12:00",
              emoji: "🏨",
              tags: ["transport"],
              duration: "",
              detail: "Soki Kanazawa",
              note: ""
            },
            {
              name: "Almoço — Yamasan Sushi (Omicho)",
              time: "13:00",
              emoji: "🦀",
              tags: ["food"],
              duration: "1h30",
              detail: "50-1 Omicho, Kanazawa. ¥2.000–5.000 (~$23 USD). Sushi no balcão dentro do mercado. Bluefin, uni, king crab frescos.",
              note: "Sem reserva. O melhor mercado de frutos do mar fora de Tokyo."
            },
            {
              name: "Higashi Chaya District",
              time: "15:00",
              emoji: "🏘️",
              tags: ["culture", "photo"],
              duration: "2h",
              detail: "Bairro geisha histórico. Casas de madeira, lanternas. Fotografia A7CR.",
              note: "Melhor bairro geisha do Japão — mais autêntico que Gion"
            },
            {
              name: "Gold leaf shops",
              time: "17:30",
              emoji: "✨",
              tags: ["shop"],
              duration: "45 min",
              detail: "Kanazawa produz 99% do gold leaf do Japão",
              note: ""
            },
            {
              name: "Jantar — Itaru Honten (Katamachi)",
              time: "19:00",
              emoji: "🍶",
              tags: ["food", "night"],
              duration: "2h",
              detail: "2-7 Katamachi, Kanazawa. ¥4.000–8.000 (~$39 USD). Izakaya famosa com frutos do mar do Mar do Japão + sake local.",
              note: "Reserva recomendada. Fila comum sem reserva."
            }
          ]
        },
        {
          date: "22/04",
          dayOfWeek: "Ter",
          theme: "Kenroku-en + Omicho",
          activities: [
            {
              name: "Kenroku-en ao amanhecer",
              time: "07:00",
              emoji: "🌿",
              tags: ["nature", "photo", "culture"],
              duration: "2h",
              detail: "Um dos 3 jardins mais bonitos do Japão. Entrar às 7h, vazio. Fotografia A7CR.",
              note: "Luz de manhã perfeita — antes dos tours chegarem"
            },
            {
              name: "Kanazawa Castle Park",
              time: "09:00",
              emoji: "🏯",
              tags: ["culture", "photo"],
              duration: "1h",
              detail: "A pé do Kenroku-en",
              note: ""
            },
            {
              name: "Omicho Market — round 2",
              time: "10:30",
              emoji: "🦀",
              tags: ["food"],
              duration: "1h30",
              detail: "Bluefin, uni, king crab. Comer no balcão.",
              note: ""
            },
            {
              name: "Almoço — Sushi Kobashi",
              time: "12:00",
              emoji: "🍣",
              tags: ["food"],
              duration: "2h",
              detail: "Katamachi, Kanazawa. ¥15.000–25.000 (~$130 USD). Omakase com frutos do Mar do Japão.",
              note: "Reserva recomendada. Pedir indicação no Soki."
            },
            {
              name: "Nishi Chaya District",
              time: "15:00",
              emoji: "🏘️",
              tags: ["culture", "photo"],
              duration: "1h30",
              detail: "Segundo bairro geisha — menor, mais quieto",
              note: ""
            },
            {
              name: "Fukumitsuya Sake Brewery",
              time: "17:00",
              emoji: "🍶",
              tags: ["food", "night"],
              duration: "1h",
              detail: "Degustação na brewery mais antiga de Kanazawa | 2-2-3 Imaizumi",
              note: ""
            },
            {
              name: "Jantar — Tamazushi (Katamachi)",
              time: "19:00",
              emoji: "🍽️",
              tags: ["food"],
              duration: "2h",
              detail: "Katamachi, Kanazawa. ¥8.000–15.000 (~$75 USD). Frutos do mar premium do Mar do Japão.",
              note: ""
            }
          ]
        },
        {
          date: "23/04",
          dayOfWeek: "Qua",
          theme: "Ninja-dera + Artesanato",
          activities: [
            {
              name: "Ninja-dera (Myoryuji)",
              time: "09:00",
              emoji: "🥷",
              tags: ["culture"],
              duration: "1h30",
              detail: "Templo com armadilhas ninja, passagens secretas. Reservar antecedência! | Taxi 15 min",
              note: "Tour guiado em japonês — mas visualmente impressionante"
            },
            {
              name: "Higashi Chaya — segunda visita",
              time: "11:00",
              emoji: "🏘️",
              tags: ["culture", "photo"],
              duration: "1h30",
              detail: "Voltar para explorar com calma, fotografar detalhes",
              note: ""
            },
            {
              name: "Artesanato — gold leaf, Kutani, Kaga Yuzen",
              time: "14:00",
              emoji: "🎨",
              tags: ["shop", "culture"],
              duration: "2h",
              detail: "Gold leaf, cerâmica Kutani, tecidos Kaga Yuzen. Peças com história.",
              note: "Artesanato de Kanazawa é dos mais refinados do Japão"
            },
            {
              name: "Jantar — Itaru Honten (uni + bluefin)",
              time: "19:00",
              emoji: "🍣",
              tags: ["food"],
              duration: "2h",
              detail: "2-7 Katamachi, Kanazawa. ¥5.000–10.000 (~$49 USD). Uni e bluefin frescos do Mar do Japão.",
              note: ""
            }
          ]
        },
        {
          date: "24/04",
          dayOfWeek: "Qui",
          theme: "Dia Livre",
          free: true,
          activities: [
            {
              name: "Omicho Market — manhã",
              time: "Flex",
              emoji: "🦀",
              tags: ["food"],
              duration: "Flex",
              detail: "Voltar ao mercado pela última vez",
              note: ""
            },
            {
              name: "Kenroku-en ao entardecer",
              time: "Flex",
              emoji: "🌿",
              tags: ["nature", "photo"],
              duration: "Flex",
              detail: "Luz dourada no jardim — diferente da manhã",
              note: "Duas visitas, duas luzes diferentes"
            },
            {
              name: "Sake Bar Fukumitsuya — Katamachi",
              time: "Flex",
              emoji: "🍶",
              tags: ["night"],
              duration: "Flex",
              detail: "2-3-29 Katamachi, Kanazawa. ¥2.000–5.000 (~$23 USD). Sake brewery desde 1625, bar de degustação no local. Também: Bar Mitsuya na mesma rua.",
              note: "Fukumitsuya é a brewery mais antiga de Kanazawa"
            }
          ]
        }
      ]
    },
    {
      id: "kobe",
      name: "Kobe",
      kanji: "神戸",
      emoji: "🥩",
      dates: "25/04 — 27/04",
      nights: 2,
      hotel: {
        name: "Meriken Park Oriental Hotel",
        detail: "2-chome Hatoba-cho, Chuo-ku | Na beira do porto",
        note: ""
      },
      gastro: [
        {
          name: "Mouriya Honten — Wagyu Kobe",
          price: "¥15.000–30.000",
          location: "2-1-17 Shimoyamatedori, Chuo-ku, Kobe",
          must: true,
          note: "O verdadeiro Kobe beef. Reserva obrigatória. Teppanyaki no balcão."
        },
        {
          name: "Steakland Kobe",
          price: "¥8.000–15.000",
          location: "1-8-2 Kitanagasadori, Chuo-ku, Kobe",
          must: false,
          note: "Wagyu mais acessível. Bom custo-benefício sem reserva."
        },
        {
          name: "Hakutsuru Sake Brewery Museum",
          price: "Grátis",
          location: "4-5-1 Sumiyoshi Minamimachi, Higashinada-ku, Kobe",
          must: false,
          note: "Museu grátis + degustação. Distrito Nada."
        }
      ],
      days: [
        {
          date: "25/04",
          dayOfWeek: "Sex",
          theme: "Chegada + Nada Sake",
          activities: [
            {
              name: "Transfer Kanazawa → Kobe",
              time: "09:00",
              emoji: "🚅",
              tags: ["transport"],
              duration: "~1h30",
              detail: "Shinkansen | JR Pass",
              note: ""
            },
            {
              name: "Check-in Meriken Park",
              time: "11:00",
              emoji: "🏨",
              tags: ["transport"],
              duration: "",
              detail: "Meriken Park Oriental Hotel, beira do porto",
              note: ""
            },
            {
              name: "Almoço — Fisherman's Market (porto)",
              time: "12:00",
              emoji: "🦐",
              tags: ["food"],
              duration: "1h",
              detail: "Meriken Park / Harborland, Kobe. ¥2.000–4.000 (~$20 USD). Frutos do mar frescos no porto. Também: Kobe Totoan na mesma zona.",
              note: "5 minutos a pé do hotel. Sem reserva."
            },
            {
              name: "Nada Sake District",
              time: "14:00",
              emoji: "🍶",
              tags: ["food", "culture"],
              duration: "2h30",
              detail: "Hakutsuru + Kikumasamune — ir nos dois. Metro ~15 min.",
              note: "Nada é o maior distrito de sake do Japão — produz 1/3 de todo sake"
            },
            {
              name: "Jantar — Mouriya Honten (Wagyu Kobe)",
              time: "19:00",
              emoji: "🥩",
              tags: ["food"],
              duration: "2h",
              detail: "2-1-17 Shimoyamatedori, Chuo-ku, Kobe. ¥15.000–30.000 (~$146 USD). O VERDADEIRO Wagyu Kobe A5 grelhado na sua frente. Reserva obrigatória! | Taxi 10 min",
              note: "Mouriya é referência desde 1885. RESERVAR COM ANTECEDÊNCIA pelo site.",
              reserved: "pending"
            }
          ]
        },
        {
          date: "26/04",
          dayOfWeek: "Sab",
          theme: "Kitano + Arima Onsen",
          activities: [
            {
              name: "Kitano District",
              time: "09:00",
              emoji: "🏘️",
              tags: ["culture", "photo"],
              duration: "2h",
              detail: "Casas ocidentais do século XIX. Fotografia A7CR. | Taxi 15 min",
              note: "Arquitetura colonial europeia em contexto japonês"
            },
            {
              name: "Meriken Park",
              time: "11:30",
              emoji: "📷",
              tags: ["photo"],
              duration: "1h",
              detail: "Porto Tower, vista da baía. Fotografia. A pé do hotel.",
              note: ""
            },
            {
              name: "Nankinmachi — Roshoki (Chinatown)",
              time: "13:00",
              emoji: "🥟",
              tags: ["food"],
              duration: "1h",
              detail: "Nankinmachi-dori, Chuo-ku, Kobe. ¥1.000–2.500 (~$11 USD). Nikuman (pão de carne) gigante + gyoza frito na rua. Street food + Roshoki pra sentar. | Taxi 10 min",
              note: "Roshoki é famoso pelo butaman (pão de porco). Sem reserva."
            },
            {
              name: "Arima Onsen",
              time: "14:30",
              emoji: "♨️",
              tags: ["nature", "culture"],
              duration: "3h",
              detail: "Uma das onsens mais antigas do Japão. Águas douradas. | Taxi 30 min",
              note: "Kinsen (água dourada) — experiência única. Trazer toalha."
            },
            {
              name: "Jantar — Ganko Kobe (frutos do mar)",
              time: "20:00",
              emoji: "🦐",
              tags: ["food", "night"],
              duration: "2h",
              detail: "1-8-2 Higashikawasakicho, Chuo-ku, Kobe (Harborland). ¥4.000–8.000 (~$39 USD). Frutos do mar + sushi + tempura. Última noite em Kobe.",
              note: "No complexo Harborland, vista do porto. Sem reserva necessária."
            }
          ]
        }
      ]
    },
    {
      id: "tokyo",
      name: "Tokyo",
      kanji: "東京",
      emoji: "🗼",
      dates: "27/04 — 04/05",
      nights: 7,
      hotel: {
        name: "Hyatt Centric Ginza Tokyo",
        detail: "6-6-7 Ginza, Chuo-ku | Tel: +81 3-6837-1234",
        note: "Confirmação #62759457"
      },
      gastro: [
        {
          name: "Tempura Kondo",
          price: "¥15.000–25.000",
          location: "5-5-13 Ginza 9F, Chuo-ku",
          must: false,
          note: "2 estrelas Michelin. Reserva muito difícil."
        },
        {
          name: "Udatsu Sushi",
          price: "¥13.200/pessoa",
          location: "2-48-10 Kamimeguro, Meguro-ku",
          must: true,
          note: "JÁ RESERVADO! Omakase Michelin."
        },
        {
          name: "Narukiyo",
          price: "¥5.000–8.000",
          location: "VORT Aoyama B1, 2-7-14 Shibuya-ku",
          must: true,
          note: "Izakaya criativa. Reserva recomendada."
        },
        {
          name: "Butagumi Tonkatsu",
          price: "¥2.500–4.000",
          location: "2-24-9 Nishi-Azabu, Minato-ku",
          must: false,
          note: "Tonkatsu de porco de raça. Ir cedo."
        },
        {
          name: "Gem by Moto",
          price: "¥8.000–15.000",
          location: "1-30-9 Ebisu, Shibuya-ku",
          must: true,
          note: "Sake bar premium. Reserva obrigatória."
        }
      ],
      days: [
        {
          date: "27/04",
          dayOfWeek: "Seg",
          theme: "Ginza + Tsukiji",
          activities: [
            {
              name: "Transfer Kobe → Tokyo",
              time: "09:00",
              emoji: "🚅",
              tags: ["transport"],
              duration: "~2h45",
              detail: "Shinkansen | JR Pass",
              note: ""
            },
            {
              name: "Check-in Hyatt Centric Ginza",
              time: "12:00",
              emoji: "🏨",
              tags: ["transport"],
              duration: "",
              detail: "6-6-7 Ginza | Confirmação #62759457",
              note: ""
            },
            {
              name: "Tsukiji mercado externo",
              time: "13:00",
              emoji: "🐟",
              tags: ["food", "photo"],
              duration: "1h30",
              detail: "A pé 10 min do hotel. Mercado vibrante, street food.",
              note: "Não é mais o mercado de atum (esse foi pra Toyosu), mas ainda é incrível"
            },
            {
              name: "Ginza — arquitetura a pé",
              time: "15:00",
              emoji: "🏛️",
              tags: ["culture", "photo"],
              duration: "2h30",
              detail: "Hermès (Renzo Piano), Tiffany (Kengo Kuma), Shizuoka Tower (Kenzo Tange), Wako (Seiko)",
              note: "Circuito arquitetônico de grife — cada prédio é uma obra"
            },
            {
              name: "Dover Street Market Ginza",
              time: "17:30",
              emoji: "🛍️",
              tags: ["shop"],
              duration: "1h",
              detail: "Curadoria de moda conceitual",
              note: ""
            },
            {
              name: "Itoya Stationery",
              time: "18:30",
              emoji: "✏️",
              tags: ["shop"],
              duration: "45 min",
              detail: "12 andares de papelaria. 2-7-15 Ginza",
              note: "Paraíso para quem aprecia papelaria japonesa"
            },
            {
              name: "Jantar — Itadori Bekkan (Tsukiji)",
              time: "19:30",
              emoji: "🍽️",
              tags: ["food"],
              duration: "1h30",
              detail: "4-10-16 Tsukiji",
              note: ""
            },
            {
              name: "Old Imperial Bar",
              time: "21:30",
              emoji: "🥃",
              tags: ["night"],
              duration: "1h",
              detail: "Bar clássico no Imperial Hotel. Taxi 10 min.",
              note: "Ambiente Frank Lloyd Wright. Whisky japonês."
            }
          ]
        },
        {
          date: "28/04",
          dayOfWeek: "Ter",
          theme: "Flex — Ginza cont.",
          free: true,
          activities: [
            {
              name: "Repetir favoritos de Ginza/Tsukiji",
              time: "Flex",
              emoji: "🐟",
              tags: ["food", "photo"],
              duration: "Flex",
              detail: "Voltar ao que mais gostou do dia anterior",
              note: ""
            },
            {
              name: "Kabuki-za + Tokyo International Forum",
              time: "Flex",
              emoji: "🏛️",
              tags: ["culture", "photo"],
              duration: "1h30",
              detail: "Arquitetura icônica de Tokyo",
              note: ""
            },
            {
              name: "Tempura Kondo",
              time: "12:30",
              emoji: "🍤",
              tags: ["food"],
              duration: "1h30",
              detail: "5-5-13 Ginza 9F. Tempura de referência.",
              note: "Legendário — se conseguir mesa"
            }
          ]
        },
        {
          date: "29/04",
          dayOfWeek: "Qua",
          theme: "Omotesando + Harajuku",
          activities: [
            {
              name: "Koffee Mameya",
              time: "08:30",
              emoji: "☕",
              tags: ["food"],
              duration: "45 min",
              detail: "4-15-3 Jingumae. Specialty coffee. | Metro 15 min",
              note: "Grãos selecionados, preparo impecável"
            },
            {
              name: "Arquitetura Omotesando a pé",
              time: "09:30",
              emoji: "🏛️",
              tags: ["culture", "photo"],
              duration: "2h",
              detail: "Prada Aoyama, Omotesando Hills, Gyre, Sunnyhills (Kengo Kuma)",
              note: "A avenida é um museu de arquitetura a céu aberto"
            },
            {
              name: "Curious Curio — Cartier",
              time: "11:00",
              emoji: "⌚",
              tags: ["shop"],
              duration: "1h",
              detail: "Correias Cartier. Minamiaoyama",
              note: "Peças vintage e acessórios para o Tank"
            },
            {
              name: "Nezu Museum — jardim koi",
              time: "12:00",
              emoji: "🌿",
              tags: ["culture", "nature", "photo"],
              duration: "1h",
              detail: "Arte + jardim japonês com carpas. Kengo Kuma.",
              note: ""
            },
            {
              name: "Almoço — Aoyama Kawakamian",
              time: "13:00",
              emoji: "🍜",
              tags: ["food"],
              duration: "1h30",
              detail: "Soba artesanal. 3-14-1 Minamiaoyama",
              note: ""
            },
            {
              name: "Meiji Jingu",
              time: "15:00",
              emoji: "⛩️",
              tags: ["culture", "nature", "photo"],
              duration: "1h30",
              detail: "Santuário no meio da floresta. Metro Harajuku.",
              note: "Floresta plantada há 100 anos — silêncio no meio de Tokyo"
            },
            {
              name: "CFCL + F.I.L Tokyo (VISVIM)",
              time: "17:00",
              emoji: "🛍️",
              tags: ["shop"],
              duration: "1h30",
              detail: "CFCL no Gyre 3F + VISVIM flagship",
              note: ""
            },
            {
              name: "Jantar — Narukiyo",
              time: "19:30",
              emoji: "🍶",
              tags: ["food", "night"],
              duration: "2h",
              detail: "VORT Aoyama B1, 2-7-14 Shibuya. Izakaya criativa.",
              note: "RESERVAR! Atmosfera íntima, ingredientes sazonais",
              reserved: "pending"
            },
            {
              name: "Grandfathers record bar",
              time: "22:00",
              emoji: "🎵",
              tags: ["night"],
              duration: "1h30",
              detail: "1-24-7 Shibuya. Listening bar + vinyl.",
              note: "Curadoria musical e bom whisky"
            }
          ]
        },
        {
          date: "30/04",
          dayOfWeek: "Qui",
          theme: "Nakameguro + Daikanyama",
          activities: [
            {
              name: "Onibus Coffee",
              time: "08:30",
              emoji: "☕",
              tags: ["food"],
              duration: "45 min",
              detail: "2-14-1 Kamimeguro. Specialty coffee. | Metro 20 min",
              note: ""
            },
            {
              name: "Rio Meguro — fotografia",
              time: "09:30",
              emoji: "📷",
              tags: ["photo", "nature"],
              duration: "1h",
              detail: "Margem do rio, fotografia de rua. A7CR.",
              note: ""
            },
            {
              name: "Waltz record store + VISVIM",
              time: "10:30",
              emoji: "🎵",
              tags: ["shop"],
              duration: "1h",
              detail: "Vinyl + VISVIM Nakameguro. Curadoria.",
              note: ""
            },
            {
              name: "UDATSU SUSHI",
              time: "12:00",
              emoji: "🍣",
              tags: ["food"],
              duration: "2h",
              detail: "2-48-10 Kamimeguro. Omakase premium.",
              note: "RESERVADO! ID: I-ZL9TCC7N | ¥13.200/pessoa",
              reserved: "confirmed"
            },
            {
              name: "Daikanyama T-Site (Tsutaya)",
              time: "14:30",
              emoji: "📚",
              tags: ["culture", "shop", "photo"],
              duration: "2h",
              detail: "A pé 15 min. Livraria + café. Arquitetura.",
              note: "Projeto Klein Dytham — a livraria mais bonita do mundo"
            },
            {
              name: "Bonjour Records",
              time: "16:30",
              emoji: "🎵",
              tags: ["shop"],
              duration: "45 min",
              detail: "24-1 Sarugakucho. Vinyl e música.",
              note: ""
            },
            {
              name: "Maison Kitsuné + Log Road",
              time: "17:30",
              emoji: "🛍️",
              tags: ["shop"],
              duration: "45 min",
              detail: "Moda + complexo ao ar livre em Daikanyama",
              note: ""
            },
            {
              name: "Jantar — Tatemichiya",
              time: "19:30",
              emoji: "🍽️",
              tags: ["food"],
              duration: "2h",
              detail: "30-8 Sarugakucho, Daikanyama",
              note: "RESERVAR! Cozinha japonesa refinada",
              reserved: "pending"
            },
            {
              name: "Gem by Moto",
              time: "22:00",
              emoji: "🍶",
              tags: ["night", "food"],
              duration: "1h30",
              detail: "1-30-9 Ebisu. Sake bar premium.",
              note: "RESERVAR! Educativo, íntimo, produtor direto. A experiência sake da viagem.",
              reserved: "pending"
            }
          ]
        },
        {
          date: "01/05",
          dayOfWeek: "Sex",
          theme: "Kamakura day trip",
          activities: [
            {
              name: "Trem Shibuya → Kamakura",
              time: "07:30",
              emoji: "🚃",
              tags: ["transport"],
              duration: "1h",
              detail: "JR Pass",
              note: ""
            },
            {
              name: "Grande Buda — Kotoku-in",
              time: "08:45",
              emoji: "🧘",
              tags: ["culture", "photo"],
              duration: "1h30",
              detail: "Buda de bronze ao ar livre. Taxi 10 min da estação.",
              note: "13m de altura, século XIII. Fotografia obrigatória."
            },
            {
              name: "Hokoku-ji — jardim bambu + matcha",
              time: "10:30",
              emoji: "🎋",
              tags: ["nature", "culture", "photo"],
              duration: "1h",
              detail: "Floresta de bambu + matcha tradicional",
              note: ""
            },
            {
              name: "Almoço — Shirasuya (shirasu de Kamakura)",
              time: "12:00",
              emoji: "🐟",
              tags: ["food"],
              duration: "1h30",
              detail: "2-22-28 Hase, Kamakura. ¥1.500–2.500 (~$13 USD). Shirasu-don (peixinho branco fresco) — especialidade de Kamakura. Perto do Hasedera.",
              note: "Shirasu fresco só tem em Kamakura. Fila no almoço, chega às 11:30."
            },
            {
              name: "Engaku-ji",
              time: "14:00",
              emoji: "⛩️",
              tags: ["culture", "photo"],
              duration: "1h30",
              detail: "Templo Zen no topo da colina. Paz e silêncio.",
              note: ""
            },
            {
              name: "Trem de volta",
              time: "16:00",
              emoji: "🚃",
              tags: ["transport"],
              duration: "1h",
              detail: "Kamakura → Tokyo | JR Pass",
              note: ""
            },
            {
              name: "Omoide Yokocho ou Golden Gai",
              time: "18:00",
              emoji: "🍶",
              tags: ["food", "night"],
              duration: "2h",
              detail: "Shinjuku. Becos minúsculos, izakayas, yakitori.",
              note: "Escolher um: Omoide Yokocho (yakitori) ou Golden Gai (bares)"
            }
          ]
        },
        {
          date: "02/05",
          dayOfWeek: "Sab",
          theme: "Asakusa + Yanaka",
          activities: [
            {
              name: "Senso-ji ao amanhecer",
              time: "06:00",
              emoji: "⛩️",
              tags: ["culture", "photo"],
              duration: "1h30",
              detail: "Templo vazio, luz perfeita. Metro 20 min.",
              note: "O templo mais antigo de Tokyo — às 6h é só você e os monges"
            },
            {
              name: "Kappabashi — rua de utensílios",
              time: "09:00",
              emoji: "🔪",
              tags: ["shop"],
              duration: "2h",
              detail: "Facas artesanais + utensílios. Taxi 10 min.",
              note: "Kamata Hakensha (gravam nome na faca, 2-12-6 Matsugaya) + Kamaasa (desde 1908, 2-24-1 Matsugaya)"
            },
            {
              name: "Asakusa Culture Center (Kengo Kuma)",
              time: "11:30",
              emoji: "🏛️",
              tags: ["culture", "photo"],
              duration: "30 min",
              detail: "Arquitetura Kengo Kuma. Vista do terraço.",
              note: ""
            },
            {
              name: "Almoço — Sometaro (okonomiyaki em Asakusa)",
              time: "12:00",
              emoji: "🍖",
              tags: ["food"],
              duration: "1h",
              detail: "2-2-2 Nishi-Asakusa, Taito-ku, Tokyo. ¥1.000–2.000 (~$10 USD). Okonomiyaki e monjayaki numa casa antiga de 1937. Você cozinha na mesa.",
              note: "Atmosfera incrível — casa de madeira original. Sem reserva, cash only."
            },
            {
              name: "Yanaka — cemitério, becos, gatos",
              time: "14:00",
              emoji: "🐈",
              tags: ["culture", "photo"],
              duration: "2h",
              detail: "Cemitério antigo, SCAI Bathhouse (galeria), becos do velho Tokyo",
              note: "O bairro que sobreviveu aos bombardeios — Tokyo do pré-guerra"
            },
            {
              name: "Ueno Park",
              time: "16:30",
              emoji: "🌿",
              tags: ["nature", "photo"],
              duration: "45 min",
              detail: "Parque + museus se quiser",
              note: ""
            },
            {
              name: "Asahi Super Dry Hall (Starck)",
              time: "18:00",
              emoji: "📷",
              tags: ["photo", "culture"],
              duration: "30 min",
              detail: "Chama dourada de Philippe Starck ao entardecer. Fotografia.",
              note: ""
            },
            {
              name: "Jantar — Ishibashi sukiyaki 1872",
              time: "19:30",
              emoji: "🥩",
              tags: ["food"],
              duration: "2h",
              detail: "3-6-1 Sotokanda. Desde 1872.",
              note: "Sukiyaki da era Meiji — história e carne"
            }
          ]
        },
        {
          date: "03/05",
          dayOfWeek: "Dom",
          theme: "Shibuya + Despedida",
          activities: [
            {
              name: "Camelback — espresso + omelete",
              time: "08:30",
              emoji: "☕",
              tags: ["food"],
              duration: "45 min",
              detail: "42-2 Kamiyamacho. Sandwich omelete lendária.",
              note: ""
            },
            {
              name: "Shibuya Crossing — fotografia",
              time: "09:30",
              emoji: "📷",
              tags: ["photo"],
              duration: "30 min",
              detail: "O cruzamento mais famoso do mundo. A7CR.",
              note: ""
            },
            {
              name: "Face Records + Lighthouse Records",
              time: "10:00",
              emoji: "🎵",
              tags: ["shop"],
              duration: "2h",
              detail: "Vinyl hunt em Shibuya",
              note: ""
            },
            {
              name: "Disk Union Shinjuku",
              time: "12:00",
              emoji: "🎵",
              tags: ["shop"],
              duration: "1h30",
              detail: "Metro 10 min. O maior vinyl store do mundo.",
              note: "Andares inteiros organizados por gênero"
            },
            {
              name: "Used Camera Box",
              time: "13:30",
              emoji: "📷",
              tags: ["shop"],
              duration: "1h",
              detail: "1-13-7 Nishishinjuku. Cameras vintage.",
              note: "Se achar uma Leica interessante..."
            },
            {
              name: "Almoço — Butagumi tonkatsu",
              time: "15:00",
              emoji: "🐷",
              tags: ["food"],
              duration: "1h30",
              detail: "2-24-9 Nishi-Azabu. Tonkatsu premium de porco de raça. | Taxi 15 min",
              note: "Porco de raça específica — outro nível"
            },
            {
              name: "Japan Traditional Crafts Aoyama Square",
              time: "17:00",
              emoji: "🎨",
              tags: ["shop", "culture"],
              duration: "1h30",
              detail: "8-1-22 Akasaka. Artesanato japonês curado.",
              note: ""
            },
            {
              name: "Toraya Confectioners",
              time: "18:30",
              emoji: "🍵",
              tags: ["food", "culture"],
              duration: "45 min",
              detail: "4-9-22 Akasaka. Wagashi desde o século XVI.",
              note: "Doces para o imperador — levar de presente"
            },
            {
              name: "Jantar — Teppanyaki Sazanka",
              time: "20:00",
              emoji: "🥩",
              tags: ["food"],
              duration: "2h30",
              detail: "Hotel Okura 41F, 2-10-4 Toranomon. Vista + teppanyaki.",
              note: "RESERVAR! Jantar de despedida com vista de Tokyo",
              reserved: "pending"
            },
            {
              name: "Record Bar Analog ou SG Club",
              time: "23:00",
              emoji: "🎵",
              tags: ["night"],
              duration: "Flex",
              detail: "Última noite. Vinyl + drinks.",
              note: "Escolher um para fechar a viagem"
            }
          ]
        },
        {
          date: "04/05",
          dayOfWeek: "Seg",
          theme: "Partida",
          activities: [
            {
              name: "Manhã livre — Tsukiji ou Ginza",
              time: "Flex",
              emoji: "🐟",
              tags: ["food", "shop"],
              duration: "Flex",
              detail: "Últimas horas. Voltar ao favorito.",
              note: ""
            },
            {
              name: "Check-out Hyatt",
              time: "12:00",
              emoji: "🏨",
              tags: ["transport"],
              duration: "",
              detail: "Check-out e organizar malas",
              note: ""
            },
            {
              name: "Keikyu Line → Haneda",
              time: "14:30",
              emoji: "🚃",
              tags: ["transport"],
              duration: "30 min",
              detail: "¥630 | Metro direto para o aeroporto",
              note: ""
            },
            {
              name: "Voo HND → EWR",
              time: "17:45",
              emoji: "✈️",
              tags: ["transport"],
              duration: "",
              detail: "United UA130. Sayonara, Japan.",
              note: ""
            }
          ]
        }
      ]
    }
  ]
};

// ============================================
// SERVICE WORKER REGISTRATION
// ============================================
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}

// ============================================
// COUNTDOWN FUNCTION
// ============================================
function renderCountdown() {
  const tripStart = new Date(2026, 3, 13); // April 13, 2026
  const tripEnd = new Date(2026, 4, 5); // May 5, 2026
  const today = new Date();

  const splashDate = document.querySelector('.splash-date');
  if (!splashDate) return;

  if (today < tripStart) {
    const daysUntil = Math.ceil((tripStart - today) / (1000 * 60 * 60 * 24));
    splashDate.innerHTML = `${daysUntil} dias até a viagem 🎌`;
  } else if (today > tripEnd) {
    splashDate.innerHTML = 'Saudades do Japão 🥺';
  } else {
    const dayCount = Math.floor((today - tripStart) / (1000 * 60 * 60 * 24)) + 1;
    splashDate.innerHTML = `Dia ${dayCount} de 22 🇯🇵`;
  }
}

// ============================================
// ESSENTIAL INFO TOGGLE
// ============================================
function toggleEssentialInfo() {
  const panel = document.getElementById('essential-info-panel');
  if (panel) {
    panel.classList.toggle('hidden');
  }
}

function renderEssentialInfo() {
  const container = document.getElementById('essential-info-panel');
  if (!container) return;

  let html = '<div class="essential-info-content">';
  html += '<h3>Informações Essenciais</h3>';

  // Emergency
  html += '<div class="essential-section">';
  html += '<h4>🚨 Emergência</h4>';
  html += `<p>Polícia: ${ESSENTIAL_INFO.emergency.police}</p>`;
  html += `<p>Ambulância: ${ESSENTIAL_INFO.emergency.ambulance}</p>`;
  html += `<p>Embaixada BR: ${ESSENTIAL_INFO.emergency.embassy_br}</p>`;
  html += '</div>';

  // Transport
  html += '<div class="essential-section">';
  html += '<h4>🚆 Transporte</h4>';
  html += `<p>JR Pass: ${ESSENTIAL_INFO.transport.jr_pass}</p>`;
  html += `<p>IC Card: ${ESSENTIAL_INFO.transport.ic_card}</p>`;
  html += '</div>';

  // Connectivity
  html += '<div class="essential-section">';
  html += '<h4>📱 Conectividade</h4>';
  html += `<p>eSIM: ${ESSENTIAL_INFO.connectivity.sim}</p>`;
  html += '</div>';

  // Phrases
  html += '<div class="essential-section">';
  html += '<h4>🗣️ Frases Úteis</h4>';
  ESSENTIAL_INFO.phrases.forEach(phrase => {
    html += `<p><strong>${phrase.jp}</strong><br/>${phrase.pt}</p>`;
  });
  html += '</div>';

  html += '</div>';
  container.innerHTML = html;
}

// ============================================
// CURRENCY CONVERTER
// ============================================
function toggleConverter() {
  const converter = document.getElementById('currency-converter');
  if (converter) {
    converter.classList.toggle('hidden');
  }
}

function convertCurrency() {
  const amount = parseFloat(document.getElementById('currency-amount').value);
  const from = document.getElementById('currency-from').value;
  const rate = 28; // 1 BRL = ~28 JPY
  let result;

  if (isNaN(amount)) return;

  if (from === 'BRL') {
    result = (amount * rate).toFixed(0);
    document.getElementById('currency-result').textContent = `¥${result}`;
  } else {
    result = (amount / rate).toFixed(2);
    document.getElementById('currency-result').textContent = `R$${result}`;
  }
}

// ============================================
// NOTES MANAGEMENT
// ============================================
function toggleNotes() {
  const notesPanel = document.getElementById('notes-panel');
  if (notesPanel) {
    notesPanel.classList.toggle('hidden');
  }
}

function renderNotes() {
  const notesContainer = document.getElementById('notes-content');
  if (!notesContainer) return;

  const notes = loadNotes(currentCity);
  let html = '<div class="notes-list">';

  if (notes.length === 0) {
    html += '<p style="color: #999;">Nenhuma nota para esta cidade</p>';
  } else {
    notes.forEach((note, index) => {
      html += `<div class="note-item">
        <p>${note}</p>
        <button onclick="deleteNote(${index})">Deletar</button>
      </div>`;
    });
  }

  html += '</div>';
  html += '<div class="note-input-group">';
  html += '<input type="text" id="new-note" placeholder="Adicione uma nota..." />';
  html += '<button onclick="saveNote()">Salvar</button>';
  html += '</div>';

  notesContainer.innerHTML = html;
}

function saveNote() {
  const input = document.getElementById('new-note');
  if (!input || !input.value.trim()) return;

  const notes = loadNotes(currentCity);
  notes.push(input.value.trim());
  localStorage.setItem(`notes-${currentCity}`, JSON.stringify(notes));
  input.value = '';
  renderNotes();
}

function deleteNote(index) {
  const notes = loadNotes(currentCity);
  notes.splice(index, 1);
  localStorage.setItem(`notes-${currentCity}`, JSON.stringify(notes));
  renderNotes();
}

function loadNotes(cityId) {
  const stored = localStorage.getItem(`notes-${cityId}`);
  return stored ? JSON.parse(stored) : [];
}

// ============================================
// RESTAURANT GUIDE FUNCTIONS
// ============================================
function toggleRestaurantGuide() {
  const panel = document.getElementById('restaurant-guide-panel');
  if (panel) {
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) {
      renderRestaurantGuide();
    }
  }
}

function yenToUsd(avgStr) {
  // Parse "¥2.000–4.000" or "¥13.200/pessoa" to get average USD
  const nums = avgStr.match(/[\d.]+/g);
  if (!nums || nums.length === 0) return '';
  const parsed = nums.map(n => parseInt(n.replace(/\./g, '')));
  const avg = parsed.length >= 2 ? (parsed[0] + parsed[1]) / 2 : parsed[0];
  const usd = Math.round(avg / 154);
  if (usd < 10) return `~$${usd}`;
  return `~$${usd}`;
}

function reservationBadge(res) {
  const badges = {
    'nao': { label: 'Sem reserva', cls: 'res-badge-none' },
    'recomendada': { label: 'Reserva recomendada', cls: 'res-badge-rec' },
    'obrigatoria': { label: 'Reserva obrigatória', cls: 'res-badge-req' },
    'muito dificil': { label: 'Muito difícil reservar', cls: 'res-badge-hard' }
  };
  const b = badges[res] || badges['nao'];
  return `<span class="res-badge ${b.cls}">${b.label}</span>`;
}

function renderRestaurantGuide(filter = 'all') {
  const container = document.getElementById('restaurant-guide-content');
  if (!container) return;

  let html = '';

  // Count total restaurants
  let totalCount = 0;
  RESTAURANT_GUIDE.neighborhoods.forEach(h => totalCount += h.restaurants.length);

  html += `<div class="guide-stats">${totalCount} restaurantes curados em ${RESTAURANT_GUIDE.neighborhoods.length} bairros de Tokyo</div>`;
  html += `<div class="guide-rate">Câmbio: $1 USD = ¥154</div>`;

  // Filter buttons
  html += '<div class="guide-filters">';
  const types = [
    { key: 'all', label: 'Todos' },
    { key: 'must', label: '⭐ Top' },
    { key: 'sushi', label: '🍣 Sushi' },
    { key: 'ramen', label: '🍜 Ramen' },
    { key: 'izakaya', label: '🍶 Izakaya' },
    { key: 'yakitori', label: '🍗 Yakitori' },
    { key: 'pizza', label: '🍕 Pizza' },
    { key: 'curry', label: '🍛 Curry' },
    { key: 'tempura', label: '🍤 Tempura' },
    { key: 'yakiniku', label: '🥩 Yakiniku' },
    { key: 'tonkatsu', label: '🐷 Tonkatsu' },
    { key: 'kaiseki', label: '🍽️ Kaiseki' }
  ];
  types.forEach(t => {
    html += `<button class="guide-filter-btn ${filter === t.key ? 'active' : ''}" onclick="renderRestaurantGuide('${t.key}')">${t.label}</button>`;
  });
  html += '</div>';

  let visibleCount = 0;

  RESTAURANT_GUIDE.neighborhoods.forEach(hood => {
    let filteredRestaurants = hood.restaurants;

    if (filter === 'must') {
      filteredRestaurants = hood.restaurants.filter(r => r.must);
    } else if (filter !== 'all') {
      filteredRestaurants = hood.restaurants.filter(r => r.type.toLowerCase().includes(filter));
    }

    if (filteredRestaurants.length === 0) return;
    visibleCount += filteredRestaurants.length;

    html += `<div class="guide-neighborhood">`;
    html += `<h4>📍 ${hood.name}</h4>`;

    filteredRestaurants.forEach(r => {
      const mapsQuery = encodeURIComponent(`${r.name} ${r.address} Tokyo Japan`);
      const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
      const usd = yenToUsd(r.avg);

      html += `<div class="guide-restaurant ${r.must ? 'guide-must' : ''}">`;
      // Header row: name + price tier
      html += `<div class="guide-restaurant-header">`;
      html += `<span class="guide-restaurant-name">${r.must ? '⭐ ' : ''}${r.name}</span>`;
      html += `<span class="guide-restaurant-price">${r.price}</span>`;
      html += `</div>`;
      // Type badge
      html += `<div class="guide-type-row"><span class="guide-restaurant-type">${r.type}</span></div>`;
      // Price + reservation row
      html += `<div class="guide-info-row">`;
      html += `<span class="guide-avg-price">${r.avg} <span class="guide-usd">(${usd} USD)</span></span>`;
      html += `</div>`;
      html += `<div class="guide-info-row">${reservationBadge(r.reservation)}</div>`;
      // Address
      html += `<div class="guide-address">📍 ${r.address}</div>`;
      // Tip
      html += `<p class="guide-restaurant-tip">${r.tip}</p>`;
      // Maps link
      html += `<a href="${mapsLink}" target="_blank" class="guide-maps-link">🗺️ Abrir no Google Maps</a>`;
      html += `</div>`;
    });

    html += `</div>`;
  });

  // Non-Japanese favorites
  if (filter === 'all') {
    html += '<div class="guide-neighborhood">';
    html += '<h4>🌍 Não-Japonês (Favoritos)</h4>';
    const cats = {
      vietnamese: '🇻🇳 Vietnamita', chinese: '🇨🇳 Chinês', thai: '🇹🇭 Thai',
      burger: '🍔 Burger', french: '🇫🇷 Francês', indian: '🇮🇳 Indiano',
      korean: '🇰🇷 Coreano', italian: '🇮🇹 Italiano'
    };
    Object.entries(RESTAURANT_GUIDE.nonJapanese).forEach(([key, names]) => {
      html += `<div class="guide-restaurant"><span class="guide-restaurant-name">${cats[key] || key}</span><p class="guide-restaurant-tip" style="margin-top:4px">${names.join(' · ')}</p></div>`;
    });
    html += '</div>';

    // Depachika section
    html += '<div class="guide-neighborhood">';
    html += '<h4>🏬 Depachika (Food Halls)</h4>';
    html += '<div class="guide-restaurant">';
    RESTAURANT_GUIDE.depachika.forEach(d => {
      html += `<div style="display:flex;justify-content:space-between;padding:4px 0;"><span>${d.name}</span><span style="color:var(--text3)">${d.area}</span></div>`;
    });
    html += '</div></div>';

    // High-end sushi (hard to book)
    html += '<div class="guide-neighborhood">';
    html += '<h4>🍣 Sushi Ultra High-End (meses de espera)</h4>';
    html += '<div class="guide-restaurant"><p class="guide-restaurant-tip">' + RESTAURANT_GUIDE.highEndSushi.join(' · ') + '</p></div>';
    html += '</div>';
  }

  container.innerHTML = html;
}

function filterRestaurants() {
  // Helper function for filtering - currently delegated to renderRestaurantGuide
}

// ============================================
// CLOSE SPLASH
// ============================================
function closeSplash() {
  document.getElementById('splash').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  renderBottomNav();
  switchCity('nagano');
}

// ============================================
// RENDER BOTTOM NAV
// ============================================
function renderBottomNav() {
  let html = '';
  TRIP.cities.forEach(city => {
    html += `<button class="nav-btn" onclick="switchCity('${city.id}')" id="nav-${city.id}">
      ${city.emoji}<br/><small>${city.name}</small>
    </button>`;
  });
  document.getElementById('bottom-nav').innerHTML = html;
}

// ============================================
// SWITCH CITY
// ============================================
function switchCity(cityId) {
  currentCity = cityId;
  currentDay = getTodayDayIndex(cityId);
  currentMood = 'all';
  doneActivities = JSON.parse(localStorage.getItem(`done-${cityId}`)) || {};

  // Update nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(`nav-${cityId}`).classList.add('active');

  renderCity();
}

// ============================================
// GET TODAY DAY INDEX
// ============================================
function getTodayDayIndex(cityId) {
  const today = new Date();
  const city = TRIP.cities.find(c => c.id === cityId);
  if (!city) return 0;

  const tripStart = new Date(2026, 3, 15); // April 15 is first day in Nagano
  const cityStart = new Date(2026, 3, parseInt(city.dates.split('/')[0]) - 1);

  if (today < cityStart) return 0;

  for (let i = 0; i < city.days.length; i++) {
    const dayDate = new Date(2026, 3, parseInt(city.days[i].date.split('/')[0]) - 1);
    if (dayDate.toDateString() === today.toDateString()) {
      return i;
    }
  }

  return 0;
}

// ============================================
// RENDER CITY
// ============================================
function renderCity() {
  const city = TRIP.cities.find(c => c.id === currentCity);
  const citySection = document.getElementById('city-content');

  let html = `
    <div class="city-header">
      <h2>${city.emoji} ${city.name}</h2>
      <p>${city.dates} • ${city.nights} noites</p>
    </div>
  `;

  // Hotel
  if (city.hotel) {
    html += `
      <div class="section hotel-section">
        <h3>🏨 Hotel</h3>
        <p><strong>${city.hotel.name}</strong></p>
        <p>${city.hotel.detail}</p>
        ${city.hotel.note ? `<p style="font-size: 0.85em; color: #999;">${city.hotel.note}</p>` : ''}
      </div>
    `;
  }

  // Gastro
  if (city.gastro && city.gastro.length > 0) {
    html += '<div class="section gastro-section"><h3>🍽️ Onde Comer</h3>';
    city.gastro.forEach(place => {
      const usd = yenToUsd(place.price);
      html += `
        <div class="gastro-item">
          <p><strong>${place.name}</strong></p>
          <p style="font-size: 0.88em; color: var(--gold);">${place.price}${usd ? ` <span style="color: var(--text3);">(${usd} USD)</span>` : ''}</p>
          <p style="font-size: 0.82em; color: var(--text3);">📍 ${place.location}</p>
          ${place.note ? `<p style="font-size: 0.82em; color: var(--text2); font-style: italic; margin-top: 4px;">${place.note}</p>` : ''}
        </div>
      `;
    });
    html += '</div>';
  }

  // Day tabs
  html += renderDayTabs(city);

  // Activities
  html += `<div id="activities-section"></div>`;

  citySection.innerHTML = html;
  switchDay(0);
}

// ============================================
// RENDER DAY TABS
// ============================================
function renderDayTabs(city) {
  let html = '<div class="day-tabs">';
  const today = new Date();

  city.days.forEach((day, index) => {
    const dayDate = new Date(2026, 3, parseInt(day.date.split('/')[0]) - 1);
    const isToday = dayDate.toDateString() === today.toDateString();

    html += `<button class="day-tab ${isToday ? 'today' : ''}" onclick="switchDay(${index})">
      ${day.dayOfWeek}<br/><small>${day.date.split('/')[0]}/${day.date.split('/')[1]}</small>
    </button>`;
  });

  html += '</div>';
  return html;
}

// ============================================
// SWITCH DAY
// ============================================
function switchDay(dayIndex) {
  currentDay = dayIndex;
  const city = TRIP.cities.find(c => c.id === currentCity);

  // Update day tabs
  document.querySelectorAll('.day-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === dayIndex);
  });

  renderActivities(city.days[dayIndex]);
}

// ============================================
// RENDER ACTIVITIES
// ============================================
function renderActivities(day) {
  let html = `
    <div class="activities-header">
      <h3>${day.date} — ${day.theme}</h3>
    </div>
    <div class="mood-filter">
      <button onclick="filterMood('all')" class="mood-btn ${currentMood === 'all' ? 'active' : ''}">Todos</button>
      <button onclick="filterMood('food')" class="mood-btn ${currentMood === 'food' ? 'active' : ''}">🍽️</button>
      <button onclick="filterMood('culture')" class="mood-btn ${currentMood === 'culture' ? 'active' : ''}">🎎</button>
      <button onclick="filterMood('photo')" class="mood-btn ${currentMood === 'photo' ? 'active' : ''}">📷</button>
      <button onclick="filterMood('nature')" class="mood-btn ${currentMood === 'nature' ? 'active' : ''}">🌿</button>
    </div>
    <div class="activities-list">
  `;

  day.activities.forEach((activity, index) => {
    const shouldShow = currentMood === 'all' || activity.tags.includes(currentMood);
    if (!shouldShow) return;

    const isDone = doneActivities[`${currentDay}-${index}`];
    let address = extractAddress(activity.detail);
    let googleMapsLink = '';

    if (address) {
      const query = encodeURIComponent(`${address} ${TRIP.cities.find(c => c.id === currentCity).kanji} Japan`);
      googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${query}`;
    }

    html += `
      <div class="activity-item ${isDone ? 'done' : ''}">
        <input type="checkbox" onchange="toggleDone(${currentDay}, ${index})" ${isDone ? 'checked' : ''} />
        <div class="activity-content">
          <p class="activity-time">${activity.time}</p>
          <p class="activity-name">${activity.emoji} ${activity.name}</p>
          ${activity.tags.map(tag => `<span class="tag">${tagLabel(tag)}</span>`).join('')}
          <p class="activity-duration">${activity.duration}</p>
          <p class="activity-detail">${activity.detail}${googleMapsLink ? ` <a href="${googleMapsLink}" target="_blank">📍</a>` : ''}</p>
          ${activity.note ? `<p class="activity-note">${activity.note}</p>` : ''}
          ${activity.reserved ? `<p class="reserved-status">${activity.reserved.toUpperCase()}</p>` : ''}
        </div>
      </div>
    `;
  });

  html += '</div>';
  document.getElementById('activities-section').innerHTML = html;
}

// ============================================
// EXTRACT ADDRESS
// ============================================
function extractAddress(detail) {
  const addressPattern = /([0-9]+[-–]\d+[-–]?\d*\s+[ァ-ヴー\w\s]+)/;
  const match = detail.match(addressPattern);
  return match ? match[1] : null;
}

// ============================================
// TAG LABEL
// ============================================
function tagLabel(tag) {
  const labels = {
    'food': '🍽️',
    'culture': '🎎',
    'photo': '📷',
    'nature': '🌿',
    'shop': '🛍️',
    'night': '🌙',
    'transport': '🚆'
  };
  return labels[tag] || tag;
}

// ============================================
// TOGGLE ACTIVITY DONE
// ============================================
function toggleDone(dayIndex, activityIndex) {
  const key = `${dayIndex}-${activityIndex}`;
  doneActivities[key] = !doneActivities[key];
  localStorage.setItem(`done-${currentCity}`, JSON.stringify(doneActivities));

  const city = TRIP.cities.find(c => c.id === currentCity);
  renderActivities(city.days[dayIndex]);
}

// ============================================
// FILTER MOOD
// ============================================
function filterMood(mood) {
  currentMood = mood;
  const city = TRIP.cities.find(c => c.id === currentCity);
  renderActivities(city.days[currentDay]);
}

// ============================================
// RENDER HOTEL
// ============================================
function renderHotel() {
  const city = TRIP.cities.find(c => c.id === currentCity);
  if (!city.hotel) return '';

  return `
    <div class="hotel-card">
      <h3>${city.hotel.name}</h3>
      <p>${city.hotel.detail}</p>
    </div>
  `;
}

// ============================================
// RENDER GASTRO
// ============================================
function renderGastro() {
  const city = TRIP.cities.find(c => c.id === currentCity);
  if (!city.gastro) return '';

  let html = '';
  city.gastro.forEach(place => {
    html += `
      <div class="gastro-card">
        <h4>${place.name}</h4>
        <p>${place.price}</p>
        <p>${place.location}</p>
      </div>
    `;
  });
  return html;
}

// ============================================
// TOGGLE FLIGHTS
// ============================================
function toggleFlights() {
  const panel = document.getElementById('flights-panel');
  if (panel) {
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) {
      renderFlights();
    }
  }
}

// ============================================
// RENDER FLIGHTS
// ============================================
function renderFlights() {
  const panel = document.getElementById('flights-panel');
  if (!panel) return;

  let html = '<div class="flights-list">';

  TRIP.flights.forEach(flight => {
    html += `
      <div class="flight-item">
        <div class="flight-route">
          <p class="flight-code">${flight.from} → ${flight.to}</p>
          <p class="flight-airline">${flight.airline}</p>
        </div>
        <div class="flight-times">
          <p class="flight-date">${flight.date}</p>
          <p class="flight-time">${flight.dep} → ${flight.arr}</p>
        </div>
      </div>
    `;
  });

  html += '</div>';
  panel.innerHTML = html;
}

// ============================================
// CHECK RESERVATION BANNER
// ============================================
function checkReservationBanner() {
  const pending = TRIP.reservations.pending;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  let urgent = [];
  pending.forEach(res => {
    const [d, m] = res.date.split('/');
    const resDate = new Date(2026, parseInt(m) - 1, parseInt(d));
    const daysUntil = Math.floor((resDate - today) / (1000 * 60 * 60 * 24));

    if (daysUntil <= 3 && daysUntil >= 0 && res.priority === 'critica') {
      urgent.push(res);
    }
  });

  if (urgent.length > 0) {
    let banner = document.getElementById('reservation-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'reservation-banner';
      banner.className = 'reservation-banner';
      document.getElementById('app').insertBefore(banner, document.getElementById('city-content'));
    }

    banner.innerHTML = `
      <p>⚠️ ${urgent.length} reserva(s) pendente(s) que precisam confirmação!</p>
      <button onclick="showReservations()">Ver Reservas</button>
    `;
    banner.style.display = 'block';
  }
}

// ============================================
// SHOW RESERVATIONS
// ============================================
function showReservations() {
  const modal = document.getElementById('reservations-modal');
  if (!modal) return;

  let html = '<div class="reservations-content">';
  html += '<h2>Reservas</h2>';

  // Confirmed
  if (TRIP.reservations.confirmed.length > 0) {
    html += '<div class="reservations-section"><h3>✅ Confirmadas</h3>';
    TRIP.reservations.confirmed.forEach(res => {
      html += `
        <div class="reservation-item confirmed">
          <p><strong>${res.name}</strong></p>
          <p>${res.date} às ${res.time}</p>
          <p>${res.price}</p>
          <p style="font-size: 0.85em; color: #666;">ID: ${res.id}</p>
          <p style="font-size: 0.85em; color: #999;">${res.note}</p>
        </div>
      `;
    });
    html += '</div>';
  }

  // Pending
  if (TRIP.reservations.pending.length > 0) {
    html += '<div class="reservations-section"><h3>⏳ Pendentes</h3>';
    TRIP.reservations.pending.forEach(res => {
      const priority = res.priority === 'critica' ? '🔴' : (res.priority === 'alta' ? '🟠' : '🟡');
      html += `
        <div class="reservation-item pending">
          <p><strong>${priority} ${res.name}</strong></p>
          <p>${res.date}</p>
          <p style="font-size: 0.85em; color: #999;">${res.note}</p>
        </div>
      `;
    });
    html += '</div>';
  }

  html += '</div>';
  modal.innerHTML = html;
  modal.style.display = 'block';
}

// ============================================
// PRIORITY LABEL
// ============================================
function priorityLabel(priority) {
  const labels = {
    'critica': '🔴 CRÍTICA',
    'alta': '🟠 ALTA',
    'media': '🟡 MÉDIA'
  };
  return labels[priority] || priority;
}

// ============================================
// CLOSE RESERVATIONS
// ============================================
function closeReservations() {
  const modal = document.getElementById('reservations-modal');
  if (modal) modal.style.display = 'none';
}

// ============================================
// INIT
// ============================================
window.addEventListener('DOMContentLoaded', () => {
  renderCountdown();
  checkReservationBanner();
});
