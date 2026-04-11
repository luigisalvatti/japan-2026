// ===== JAPAN 2026 — TRIP DATA & APP ENGINE =====

// ===== TRIP DATA =====
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
    { from: "GRU", to: "IGU", date: "05/05", dep: "12:20", arr: "14:05", airline: "LATAM LA3202", type: "domestic" },
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
      { name: "Kotaro", date: "03/05", city: "Tokyo", priority: "critica", note: "Meses de espera — tentar lista" },
    ]
  },

  cities: [
    // ===== NAGANO =====
    {
      id: "nagano",
      name: "Nagano",
      kanji: "長野",
      emoji: "🏔️",
      dates: "15/04 — 19/04",
      nights: 4,
      hotel: { name: "Hotel Metropolitan Nagano", detail: "Conectado à estação JR", note: "A confirmar" },
      gastro: [
        { name: "Soba Togakushi style", price: "¥1.000–2.500", address: "Centro de Nagano", must: false },
        { name: "Sake local — breweries", price: "Variado", address: "Várias no centro", must: false }
      ],
      days: [
        {
          date: "15/04", weekday: "Ter", label: "Chegada",
          activities: [
            { name: "Chegada Haneda", time: "13:35", emoji: "✈️", tags: ["transport"], duration: "", detail: "Pouso no Aeroporto de Haneda" },
            { name: "Shinkansen HND → Nagano", time: "~15:00", emoji: "🚅", tags: ["transport"], duration: "1h40", detail: "JR Pass | Primeiro uso do passe" },
            { name: "Check-in Hotel", time: "~17:00", emoji: "🏨", tags: ["transport"], duration: "", detail: "Hotel Metropolitan Nagano, conectado à estação" },
            { name: "Soba artesanal — jantar de chegada", time: "19:00", emoji: "🍜", tags: ["food"], duration: "1h30", detail: "Primeiro jantar no Japão. Soba local com sake.", note: "Togakushi style — a especialidade de Nagano" }
          ]
        },
        {
          date: "16/04", weekday: "Qua", label: "Zenkoji + Macacos",
          activities: [
            { name: "Zenkoji — ritual matinal", time: "06:00", emoji: "⛩️", tags: ["culture", "photo"], duration: "1h30", detail: "Templo vazio ao amanhecer. Ritual matinal budista. Fotografia A7CR com luz dourada.", note: "A pé ou taxi 5 min do hotel" },
            { name: "Café + soba matinal", time: "08:00", emoji: "☕", tags: ["food"], duration: "45 min", detail: "Café da manhã com soba quente" },
            { name: "Bus para Jigokudani", time: "09:00", emoji: "🚌", tags: ["transport"], duration: "45 min", detail: "Bus Stop No.23, saída leste da estação | ~¥3.000" },
            { name: "Caminhada floresta de cedros", time: "09:45", emoji: "🌲", tags: ["nature", "photo"], duration: "35 min", detail: "Trilha pela floresta até o parque dos macacos" },
            { name: "Jigokudani Monkey Park", time: "10:30", emoji: "🐒", tags: ["nature", "photo"], duration: "1h30", detail: "Snow monkeys nas termas! Filhotes em abril/maio. Fotografia A7CR.", note: "Experiência única — macacos tomando banho quente nas montanhas" },
            { name: "Almoço — Togakushi soba", time: "13:30", emoji: "🍜", tags: ["food"], duration: "1h", detail: "Soba artesanal estilo Togakushi" },
            { name: "Tarde livre", time: "15:00", emoji: "🍶", tags: ["night"], duration: "Flex", detail: "Sake local, descanso, explorar a cidade no seu ritmo", note: "Primeiro dia inteiro — sem pressa" }
          ]
        },
        {
          date: "17/04", weekday: "Qui", label: "Matsumoto",
          activities: [
            { name: "Trem Nagano → Matsumoto", time: "09:00", emoji: "🚃", tags: ["transport"], duration: "50 min", detail: "JR Pass" },
            { name: "Matsumoto Castle", time: "10:00", emoji: "🏯", tags: ["culture", "photo"], duration: "2h", detail: "Fachada negra, fosso com reflexo. Fotografia A7CR obrigatória.", note: "Um dos castelos mais fotogênicos do Japão — madeira original do século XVI" },
            { name: "Nawate-dori + Nakamachi", time: "12:30", emoji: "🏘️", tags: ["shop", "culture", "photo"], duration: "2h", detail: "Artesanato, cafés, ruas históricas a pé" },
            { name: "Soba artesanal", time: "14:30", emoji: "🍜", tags: ["food"], duration: "1h", detail: "Soba local em Matsumoto" },
            { name: "Sake em Matsumoto", time: "16:00", emoji: "🍶", tags: ["food", "night"], duration: "1h", detail: "Provar sake das breweries locais" },
            { name: "Trem de volta", time: "17:30", emoji: "🚃", tags: ["transport"], duration: "50 min", detail: "Matsumoto → Nagano | JR Pass" }
          ]
        },
        {
          date: "18/04", weekday: "Sex", label: "Dia Livre", free: true,
          activities: [
            { name: "Obuse — day trip opcional", time: "Flex", emoji: "🏘️", tags: ["culture", "food"], duration: "Meio dia", detail: "30 min de trem. Vila de sake, chestnuts, charme rural.", note: "Opcional — só se estiver com energia" },
            { name: "Descanso & cafés em Nagano", time: "Flex", emoji: "☕", tags: ["food"], duration: "Flex", detail: "Explorar a cidade no seu ritmo. Artesanato, sake, soba." }
          ]
        }
      ]
    },

    // ===== TAKAYAMA =====
    {
      id: "takayama",
      name: "Takayama",
      kanji: "高山",
      emoji: "🏡",
      dates: "19/04 — 21/04",
      nights: 2,
      hotel: { name: "Hotel Wood Takayama", detail: "Superior Japanese-Western Room", note: "Gifu Prefecture" },
      gastro: [
        { name: "Hida Beef", price: "¥5.000–12.000", address: "Sanmachi Suji", must: true },
        { name: "Ramen Takayama style (shoyu)", price: "¥900–1.500", address: "Centro", must: false },
        { name: "Sake breweries", price: "Variado", address: "Procurar sugidama (bola de cedro) na porta", must: false }
      ],
      days: [
        {
          date: "19/04", weekday: "Sab", label: "Chegada + Sanmachi",
          activities: [
            { name: "Transfer Nagano → Takayama", time: "09:00", emoji: "🚃", tags: ["transport"], duration: "~3h", detail: "JR Wide View Hida | JR Pass | Vista montanhas" },
            { name: "Check-in Hotel Wood", time: "12:00", emoji: "🏨", tags: ["transport"], duration: "", detail: "Hotel Wood Takayama" },
            { name: "Almoço — Hida Beef", time: "13:00", emoji: "🥩", tags: ["food"], duration: "1h", detail: "Primeiro Hida beef no Sanmachi Suji", note: "A carne wagyu local — intensidade e marmoreio" },
            { name: "Sanmachi Suji", time: "14:30", emoji: "🏘️", tags: ["culture", "photo"], duration: "2h", detail: "Distrito histórico Edo. Ruas de madeira, comércio tradicional. Fotografia A7CR.", note: "Uma das ruas mais preservadas do Japão — era Edo pura" },
            { name: "Sake breweries — degustação", time: "16:30", emoji: "🍶", tags: ["food", "night"], duration: "1h", detail: "Degustação nas breweries do Sanmachi Suji" },
            { name: "Rio Miyagawa ao entardecer", time: "18:00", emoji: "🌅", tags: ["photo", "nature"], duration: "45 min", detail: "Luz dourada no rio. Fotografia A7CR." },
            { name: "Jantar — ramen + sake", time: "19:00", emoji: "🍜", tags: ["food", "night"], duration: "1h30", detail: "Ramen shoyu estilo Takayama + sake local" }
          ]
        },
        {
          date: "20/04", weekday: "Dom", label: "Shirakawa-go",
          activities: [
            { name: "Bus para Shirakawa-go", time: "08:00", emoji: "🚌", tags: ["transport"], duration: "50 min", detail: "Nohi Bus | ~¥2.500" },
            { name: "Shirakawa-go — aldeias UNESCO", time: "09:00", emoji: "🏡", tags: ["culture", "photo", "nature"], duration: "4h", detail: "Aldeias gassho-zukuri (telhado de palha). UNESCO World Heritage. A pé.", note: "Shiroyama Viewpoint — foto panorâmica obrigatória" },
            { name: "Almoço em Shirakawa-go", time: "13:00", emoji: "🍜", tags: ["food"], duration: "1h", detail: "Soba local na aldeia" },
            { name: "Bus de volta", time: "14:30", emoji: "🚌", tags: ["transport"], duration: "50 min", detail: "Nohi Bus de volta a Takayama" },
            { name: "Hida Folk Village", time: "15:30", emoji: "🏡", tags: ["culture"], duration: "1h30", detail: "Museu a céu aberto. Casas tradicionais. | Taxi 10 min" },
            { name: "Jantar — Hida Beef segunda vez", time: "19:00", emoji: "🥩", tags: ["food"], duration: "1h30", detail: "Porque Hida beef merece repetir", note: "Desta vez tente um corte diferente" }
          ]
        }
      ]
    },

    // ===== KANAZAWA =====
    {
      id: "kanazawa",
      name: "Kanazawa",
      kanji: "金沢",
      emoji: "✨",
      dates: "21/04 — 25/04",
      nights: 4,
      hotel: { name: "Soki Kanazawa", detail: "Design hotel japonês", note: "Ishikawa Prefecture" },
      gastro: [
        { name: "Omicho Market", price: "¥2.000–8.000", address: "50-1 Omicho", must: true },
        { name: "Sushi omakase local", price: "¥15.000–30.000", address: "Pedir indicação no Soki", must: false },
        { name: "Fukumitsuya Sake Brewery", price: "¥500–2.000", address: "2-2-3 Imaizumi", must: false }
      ],
      days: [
        {
          date: "21/04", weekday: "Seg", label: "Chegada + Higashi Chaya",
          activities: [
            { name: "Transfer Takayama → Kanazawa", time: "09:00", emoji: "🚃", tags: ["transport"], duration: "~2h30", detail: "JR Pass" },
            { name: "Check-in Soki", time: "12:00", emoji: "🏨", tags: ["transport"], duration: "", detail: "Soki Kanazawa" },
            { name: "Almoço — Omicho Market", time: "13:00", emoji: "🦀", tags: ["food"], duration: "1h30", detail: "Frutos do mar frescos. Bluefin, uni, king crab no mercado.", note: "O melhor mercado de frutos do mar fora de Tokyo" },
            { name: "Higashi Chaya District", time: "15:00", emoji: "🏘️", tags: ["culture", "photo"], duration: "2h", detail: "Bairro geisha histórico. Casas de madeira, lanternas. Fotografia A7CR.", note: "Melhor bairro geisha do Japão — mais autêntico que Gion" },
            { name: "Gold leaf shops", time: "17:30", emoji: "✨", tags: ["shop"], duration: "45 min", detail: "Kanazawa produz 99% do gold leaf do Japão" },
            { name: "Katamachi — jantar + sake", time: "19:00", emoji: "🍶", tags: ["food", "night"], duration: "2h", detail: "Distrito de entretenimento de Kanazawa" }
          ]
        },
        {
          date: "22/04", weekday: "Ter", label: "Kenroku-en + Omicho",
          activities: [
            { name: "Kenroku-en ao amanhecer", time: "07:00", emoji: "🌿", tags: ["nature", "photo", "culture"], duration: "2h", detail: "Um dos 3 jardins mais bonitos do Japão. Entrar às 7h, vazio. Fotografia A7CR.", note: "Luz de manhã perfeita — antes dos tours chegarem" },
            { name: "Kanazawa Castle Park", time: "09:00", emoji: "🏯", tags: ["culture", "photo"], duration: "1h", detail: "A pé do Kenroku-en" },
            { name: "Omicho Market — round 2", time: "10:30", emoji: "🦀", tags: ["food"], duration: "1h30", detail: "Bluefin, uni, king crab. Comer no balcão." },
            { name: "Almoço — sushi omakase", time: "12:00", emoji: "🍣", tags: ["food"], duration: "2h", detail: "Omakase local. Pedir indicação no Soki.", note: "Kanazawa = frutos do mar do Mar do Japão, qualidade extrema" },
            { name: "Nishi Chaya District", time: "15:00", emoji: "🏘️", tags: ["culture", "photo"], duration: "1h30", detail: "Segundo bairro geisha — menor, mais quieto" },
            { name: "Fukumitsuya Sake Brewery", time: "17:00", emoji: "🍶", tags: ["food", "night"], duration: "1h", detail: "Degustação na brewery mais antiga de Kanazawa | 2-2-3 Imaizumi" },
            { name: "Jantar — kaiseki ou frutos do mar", time: "19:00", emoji: "🍽️", tags: ["food"], duration: "2h", detail: "Jantar especial — kaiseki ou frutos do mar premium" }
          ]
        },
        {
          date: "23/04", weekday: "Qua", label: "Ninja-dera + Artesanato",
          activities: [
            { name: "Ninja-dera (Myoryuji)", time: "09:00", emoji: "🥷", tags: ["culture"], duration: "1h30", detail: "Templo com armadilhas ninja, passagens secretas. Reservar antecedência! | Taxi 15 min", note: "Tour guiado em japonês — mas visualmente impressionante" },
            { name: "Higashi Chaya — segunda visita", time: "11:00", emoji: "🏘️", tags: ["culture", "photo"], duration: "1h30", detail: "Voltar para explorar com calma, fotografar detalhes" },
            { name: "Artesanato — gold leaf, Kutani, Kaga Yuzen", time: "14:00", emoji: "🎨", tags: ["shop", "culture"], duration: "2h", detail: "Gold leaf, cerâmica Kutani, tecidos Kaga Yuzen. Peças com história.", note: "Artesanato de Kanazawa é dos mais refinados do Japão" },
            { name: "Jantar — ouriço e bluefin", time: "19:00", emoji: "🍣", tags: ["food"], duration: "2h", detail: "Uni e bluefin de Kanazawa — última oportunidade nesta cidade" }
          ]
        },
        {
          date: "24/04", weekday: "Qui", label: "Dia Livre", free: true,
          activities: [
            { name: "Omicho Market — manhã", time: "Flex", emoji: "🦀", tags: ["food"], duration: "Flex", detail: "Voltar ao mercado pela última vez" },
            { name: "Kenroku-en ao entardecer", time: "Flex", emoji: "🌿", tags: ["nature", "photo"], duration: "Flex", detail: "Luz dourada no jardim — diferente da manhã", note: "Duas visitas, duas luzes diferentes" },
            { name: "Sake bars em Katamachi", time: "Flex", emoji: "🍶", tags: ["night"], duration: "Flex", detail: "Explorar os bares de sake do distrito" }
          ]
        }
      ]
    },

    // ===== KOBE =====
    {
      id: "kobe",
      name: "Kobe",
      kanji: "神戸",
      emoji: "🥩",
      dates: "25/04 — 27/04",
      nights: 2,
      hotel: { name: "Meriken Park Oriental Hotel", detail: "2-chome Hatoba-cho, Chuo-ku | Na beira do porto", note: "" },
      gastro: [
        { name: "Mouriya Honten", price: "¥15.000–30.000", address: "2-1-17 Shimoyamatedori", must: true },
        { name: "Steakland Kobe", price: "¥8.000–15.000", address: "1-8-2 Kitanagasadori", must: false },
        { name: "Hakutsuru Sake Brewery Museum", price: "Grátis", address: "4-5-1 Sumiyoshi Minamimachi", must: false }
      ],
      days: [
        {
          date: "25/04", weekday: "Sex", label: "Chegada + Nada Sake",
          activities: [
            { name: "Transfer Kanazawa → Kobe", time: "09:00", emoji: "🚅", tags: ["transport"], duration: "~1h30", detail: "Shinkansen | JR Pass" },
            { name: "Check-in Meriken Park", time: "11:00", emoji: "🏨", tags: ["transport"], duration: "", detail: "Meriken Park Oriental Hotel, beira do porto" },
            { name: "Almoço — frutos do mar no porto", time: "12:00", emoji: "🦐", tags: ["food"], duration: "1h", detail: "A pé do hotel, frutos do mar frescos no porto" },
            { name: "Nada Sake District", time: "14:00", emoji: "🍶", tags: ["food", "culture"], duration: "2h30", detail: "Hakutsuru + Kikumasamune — ir nos dois. Metro ~15 min.", note: "Nada é o maior distrito de sake do Japão — produz 1/3 de todo sake" },
            { name: "Jantar — Wagyu Kobe", time: "19:00", emoji: "🥩", tags: ["food"], duration: "2h", detail: "O VERDADEIRO Wagyu Kobe. Reserva obrigatória! | Taxi 10 min", note: "Mouriya Honten recomendado — RESERVAR COM ANTECEDÊNCIA", reserved: "pending" }
          ]
        },
        {
          date: "26/04", weekday: "Sab", label: "Kitano + Arima Onsen",
          activities: [
            { name: "Kitano District", time: "09:00", emoji: "🏘️", tags: ["culture", "photo"], duration: "2h", detail: "Casas ocidentais do século XIX. Fotografia A7CR. | Taxi 15 min", note: "Arquitetura colonial europeia em contexto japonês" },
            { name: "Meriken Park", time: "11:30", emoji: "📷", tags: ["photo"], duration: "1h", detail: "Porto Tower, vista da baía. Fotografia. A pé do hotel." },
            { name: "Nankinmachi (Chinatown) — almoço", time: "13:00", emoji: "🥟", tags: ["food"], duration: "1h", detail: "Chinatown de Kobe. Street food. | Taxi 10 min" },
            { name: "Arima Onsen", time: "14:30", emoji: "♨️", tags: ["nature", "culture"], duration: "3h", detail: "Uma das onsens mais antigas do Japão. Águas douradas. | Taxi 30 min", note: "Kinsen (água dourada) — experiência única. Trazer toalha." },
            { name: "Jantar — frutos do mar no porto", time: "20:00", emoji: "🦐", tags: ["food", "night"], duration: "2h", detail: "Última noite em Kobe. Frutos do mar frescos." }
          ]
        }
      ]
    },

    // ===== TOKYO =====
    {
      id: "tokyo",
      name: "Tokyo",
      kanji: "東京",
      emoji: "🗼",
      dates: "27/04 — 04/05",
      nights: 7,
      hotel: { name: "Hyatt Centric Ginza Tokyo", detail: "6-6-7 Ginza, Chuo-ku | Tel: +81 3-6837-1234", note: "Confirmação #62759457" },
      gastro: [
        { name: "Tempura Kondo", price: "¥¥¥", address: "5-5-13 Ginza 9F", must: false },
        { name: "Udatsu Sushi", price: "¥13.200/pessoa", address: "2-48-10 Kamimeguro", must: true },
        { name: "Narukiyo", price: "¥¥", address: "VORT Aoyama B1, 2-7-14 Shibuya", must: true },
        { name: "Butagumi Tonkatsu", price: "¥¥", address: "2-24-9 Nishi-Azabu", must: false },
        { name: "Gem by Moto", price: "¥¥¥", address: "1-30-9 Ebisu", must: true },
      ],
      days: [
        {
          date: "27/04", weekday: "Seg", label: "Ginza + Tsukiji",
          activities: [
            { name: "Transfer Kobe → Tokyo", time: "09:00", emoji: "🚅", tags: ["transport"], duration: "~2h45", detail: "Shinkansen | JR Pass" },
            { name: "Check-in Hyatt Centric Ginza", time: "12:00", emoji: "🏨", tags: ["transport"], duration: "", detail: "6-6-7 Ginza | Confirmação #62759457" },
            { name: "Tsukiji mercado externo", time: "13:00", emoji: "🐟", tags: ["food", "photo"], duration: "1h30", detail: "A pé 10 min do hotel. Mercado vibrante, street food.", note: "Não é mais o mercado de atum (esse foi pra Toyosu), mas ainda é incrível" },
            { name: "Ginza — arquitetura a pé", time: "15:00", emoji: "🏛️", tags: ["culture", "photo"], duration: "2h30", detail: "Hermès (Renzo Piano), Tiffany (Kengo Kuma), Shizuoka Tower (Kenzo Tange), Wako (Seiko)", note: "Circuito arquitetônico de grife — cada prédio é uma obra" },
            { name: "Dover Street Market Ginza", time: "17:30", emoji: "🛍️", tags: ["shop"], duration: "1h", detail: "Curadoria de moda conceitual" },
            { name: "Itoya Stationery", time: "18:30", emoji: "✏️", tags: ["shop"], duration: "45 min", detail: "12 andares de papelaria. 2-7-15 Ginza", note: "Paraíso para quem aprecia papelaria japonesa" },
            { name: "Jantar — Itadori Bekkan (Tsukiji)", time: "19:30", emoji: "🍽️", tags: ["food"], duration: "1h30", detail: "4-10-16 Tsukiji" },
            { name: "Old Imperial Bar", time: "21:30", emoji: "🥃", tags: ["night"], duration: "1h", detail: "Bar clássico no Imperial Hotel. Taxi 10 min.", note: "Ambiente Frank Lloyd Wright. Whisky japonês." }
          ]
        },
        {
          date: "28/04", weekday: "Ter", label: "Flex — Ginza cont.",
          free: true,
          activities: [
            { name: "Repetir favoritos de Ginza/Tsukiji", time: "Flex", emoji: "🐟", tags: ["food", "photo"], duration: "Flex", detail: "Voltar ao que mais gostou do dia anterior" },
            { name: "Kabuki-za + Tokyo International Forum", time: "Flex", emoji: "🏛️", tags: ["culture", "photo"], duration: "1h30", detail: "Arquitetura icônica de Tokyo" },
            { name: "Tempura Kondo", time: "12:30", emoji: "🍤", tags: ["food"], duration: "1h30", detail: "5-5-13 Ginza 9F. Tempura de referência.", note: "Legendário — se conseguir mesa" }
          ]
        },
        {
          date: "29/04", weekday: "Qua", label: "Omotesando + Harajuku",
          activities: [
            { name: "Koffee Mameya", time: "08:30", emoji: "☕", tags: ["food"], duration: "45 min", detail: "4-15-3 Jingumae. Specialty coffee. | Metro 15 min", note: "Grãos selecionados, preparo impecável" },
            { name: "Arquitetura Omotesando a pé", time: "09:30", emoji: "🏛️", tags: ["culture", "photo"], duration: "2h", detail: "Prada Aoyama, Omotesando Hills, Gyre, Sunnyhills (Kengo Kuma)", note: "A avenida é um museu de arquitetura a céu aberto" },
            { name: "Curious Curio — Cartier", time: "11:00", emoji: "⌚", tags: ["shop"], duration: "1h", detail: "Correias Cartier. Minamiaoyama", note: "Peças vintage e acessórios para o Tank" },
            { name: "Nezu Museum — jardim koi", time: "12:00", emoji: "🌿", tags: ["culture", "nature", "photo"], duration: "1h", detail: "Arte + jardim japonês com carpas. Kengo Kuma." },
            { name: "Almoço — Aoyama Kawakamian", time: "13:00", emoji: "🍜", tags: ["food"], duration: "1h30", detail: "Soba artesanal. 3-14-1 Minamiaoyama" },
            { name: "Meiji Jingu", time: "15:00", emoji: "⛩️", tags: ["culture", "nature", "photo"], duration: "1h30", detail: "Santuário no meio da floresta. Metro Harajuku.", note: "Floresta plantada há 100 anos — silêncio no meio de Tokyo" },
            { name: "CFCL + F.I.L Tokyo (VISVIM)", time: "17:00", emoji: "🛍️", tags: ["shop"], duration: "1h30", detail: "CFCL no Gyre 3F + VISVIM flagship" },
            { name: "Jantar — Narukiyo", time: "19:30", emoji: "🍶", tags: ["food", "night"], duration: "2h", detail: "VORT Aoyama B1, 2-7-14 Shibuya. Izakaya criativa.", note: "RESERVAR! Atmosfera íntima, ingredientes sazonais", reserved: "pending" },
            { name: "Grandfathers record bar", time: "22:00", emoji: "🎵", tags: ["night"], duration: "1h30", detail: "1-24-7 Shibuya. Listening bar + vinyl.", note: "Curadoria musical e bom whisky" }
          ]
        },
        {
          date: "30/04", weekday: "Qui", label: "Nakameguro + Daikanyama",
          activities: [
            { name: "Onibus Coffee", time: "08:30", emoji: "☕", tags: ["food"], duration: "45 min", detail: "2-14-1 Kamimeguro. Specialty coffee. | Metro 20 min" },
            { name: "Rio Meguro — fotografia", time: "09:30", emoji: "📷", tags: ["photo", "nature"], duration: "1h", detail: "Margem do rio, fotografia de rua. A7CR." },
            { name: "Waltz record store + VISVIM", time: "10:30", emoji: "🎵", tags: ["shop"], duration: "1h", detail: "Vinyl + VISVIM Nakameguro. Curadoria." },
            { name: "UDATSU SUSHI", time: "12:00", emoji: "🍣", tags: ["food"], duration: "2h", detail: "2-48-10 Kamimeguro. Omakase premium.", note: "RESERVADO! ID: I-ZL9TCC7N | ¥13.200/pessoa", reserved: "confirmed" },
            { name: "Daikanyama T-Site (Tsutaya)", time: "14:30", emoji: "📚", tags: ["culture", "shop", "photo"], duration: "2h", detail: "A pé 15 min. Livraria + café. Arquitetura.", note: "Projeto Klein Dytham — a livraria mais bonita do mundo" },
            { name: "Bonjour Records", time: "16:30", emoji: "🎵", tags: ["shop"], duration: "45 min", detail: "24-1 Sarugakucho. Vinyl e música." },
            { name: "Maison Kitsuné + Log Road", time: "17:30", emoji: "🛍️", tags: ["shop"], duration: "45 min", detail: "Moda + complexo ao ar livre em Daikanyama" },
            { name: "Jantar — Tatemichiya", time: "19:30", emoji: "🍽️", tags: ["food"], duration: "2h", detail: "30-8 Sarugakucho, Daikanyama", note: "RESERVAR! Cozinha japonesa refinada", reserved: "pending" },
            { name: "Gem by Moto", time: "22:00", emoji: "🍶", tags: ["night", "food"], duration: "1h30", detail: "1-30-9 Ebisu. Sake bar premium.", note: "RESERVAR! Educativo, íntimo, produtor direto. A experiência sake da viagem.", reserved: "pending" }
          ]
        },
        {
          date: "01/05", weekday: "Sex", label: "Kamakura day trip",
          activities: [
            { name: "Trem Shibuya → Kamakura", time: "07:30", emoji: "🚃", tags: ["transport"], duration: "1h", detail: "JR Pass" },
            { name: "Grande Buda — Kotoku-in", time: "08:45", emoji: "🧘", tags: ["culture", "photo"], duration: "1h30", detail: "Buda de bronze ao ar livre. Taxi 10 min da estação.", note: "13m de altura, século XIII. Fotografia obrigatória." },
            { name: "Hokoku-ji — jardim bambu + matcha", time: "10:30", emoji: "🎋", tags: ["nature", "culture", "photo"], duration: "1h", detail: "Floresta de bambu + matcha tradicional" },
            { name: "Porto — frutos do mar frescos", time: "12:00", emoji: "🐟", tags: ["food"], duration: "1h30", detail: "Frutos do mar direto do mar em Kamakura" },
            { name: "Engaku-ji", time: "14:00", emoji: "⛩️", tags: ["culture", "photo"], duration: "1h30", detail: "Templo Zen no topo da colina. Paz e silêncio." },
            { name: "Trem de volta", time: "16:00", emoji: "🚃", tags: ["transport"], duration: "1h", detail: "Kamakura → Tokyo | JR Pass" },
            { name: "Omoide Yokocho ou Golden Gai", time: "18:00", emoji: "🍶", tags: ["food", "night"], duration: "2h", detail: "Shinjuku. Becos minúsculos, izakayas, yakitori.", note: "Escolher um: Omoide Yokocho (yakitori) ou Golden Gai (bares)" }
          ]
        },
        {
          date: "02/05", weekday: "Sab", label: "Asakusa + Yanaka",
          activities: [
            { name: "Senso-ji ao amanhecer", time: "06:00", emoji: "⛩️", tags: ["culture", "photo"], duration: "1h30", detail: "Templo vazio, luz perfeita. Metro 20 min.", note: "O templo mais antigo de Tokyo — às 6h é só você e os monges" },
            { name: "Kappabashi — rua de utensílios", time: "09:00", emoji: "🔪", tags: ["shop"], duration: "2h", detail: "Facas artesanais + utensílios. Taxi 10 min.", note: "Kamata Hakensha (gravam nome na faca, 2-12-6 Matsugaya) + Kamaasa (desde 1908, 2-24-1 Matsugaya)" },
            { name: "Asakusa Culture Center (Kengo Kuma)", time: "11:30", emoji: "🏛️", tags: ["culture", "photo"], duration: "30 min", detail: "Arquitetura Kengo Kuma. Vista do terraço." },
            { name: "Almoço — katsudon", time: "12:00", emoji: "🍖", tags: ["food"], duration: "1h", detail: "Katsudon local em Asakusa" },
            { name: "Yanaka — cemitério, becos, gatos", time: "14:00", emoji: "🐈", tags: ["culture", "photo"], duration: "2h", detail: "Cemitério antigo, SCAI Bathhouse (galeria), becos do velho Tokyo", note: "O bairro que sobreviveu aos bombardeios — Tokyo do pré-guerra" },
            { name: "Ueno Park", time: "16:30", emoji: "🌿", tags: ["nature", "photo"], duration: "45 min", detail: "Parque + museus se quiser" },
            { name: "Asahi Super Dry Hall (Starck)", time: "18:00", emoji: "📷", tags: ["photo", "culture"], duration: "30 min", detail: "Chama dourada de Philippe Starck ao entardecer. Fotografia." },
            { name: "Jantar — Ishibashi sukiyaki 1872", time: "19:30", emoji: "🥩", tags: ["food"], duration: "2h", detail: "3-6-1 Sotokanda. Desde 1872.", note: "Sukiyaki da era Meiji — história e carne" }
          ]
        },
        {
          date: "03/05", weekday: "Dom", label: "Shibuya + Despedida",
          activities: [
            { name: "Camelback — espresso + omelete", time: "08:30", emoji: "☕", tags: ["food"], duration: "45 min", detail: "42-2 Kamiyamacho. Sandwich omelete lendária." },
            { name: "Shibuya Crossing — fotografia", time: "09:30", emoji: "📷", tags: ["photo"], duration: "30 min", detail: "O cruzamento mais famoso do mundo. A7CR." },
            { name: "Face Records + Lighthouse Records", time: "10:00", emoji: "🎵", tags: ["shop"], duration: "2h", detail: "Vinyl hunt em Shibuya" },
            { name: "Disk Union Shinjuku", time: "12:00", emoji: "🎵", tags: ["shop"], duration: "1h30", detail: "Metro 10 min. O maior vinyl store do mundo.", note: "Andares inteiros organizados por gênero" },
            { name: "Used Camera Box", time: "13:30", emoji: "📷", tags: ["shop"], duration: "1h", detail: "1-13-7 Nishishinjuku. Cameras vintage.", note: "Se achar uma Leica interessante..." },
            { name: "Almoço — Butagumi tonkatsu", time: "15:00", emoji: "🐷", tags: ["food"], duration: "1h30", detail: "2-24-9 Nishi-Azabu. Tonkatsu premium de porco de raça. | Taxi 15 min", note: "Porco de raça específica — outro nível" },
            { name: "Japan Traditional Crafts Aoyama Square", time: "17:00", emoji: "🎨", tags: ["shop", "culture"], duration: "1h30", detail: "8-1-22 Akasaka. Artesanato japonês curado." },
            { name: "Toraya Confectioners", time: "18:30", emoji: "🍵", tags: ["food", "culture"], duration: "45 min", detail: "4-9-22 Akasaka. Wagashi desde o século XVI.", note: "Doces para o imperador — levar de presente" },
            { name: "Jantar — Teppanyaki Sazanka", time: "20:00", emoji: "🥩", tags: ["food"], duration: "2h30", detail: "Hotel Okura 41F, 2-10-4 Toranomon. Vista + teppanyaki.", note: "RESERVAR! Jantar de despedida com vista de Tokyo", reserved: "pending" },
            { name: "Record Bar Analog ou SG Club", time: "23:00", emoji: "🎵", tags: ["night"], duration: "Flex", detail: "Última noite. Vinyl + drinks.", note: "Escolher um para fechar a viagem" }
          ]
        },
        {
          date: "04/05", weekday: "Seg", label: "Partida",
          activities: [
            { name: "Manhã livre — Tsukiji ou Ginza", time: "Flex", emoji: "🐟", tags: ["food", "shop"], duration: "Flex", detail: "Últimas horas. Voltar ao favorito." },
            { name: "Check-out Hyatt", time: "12:00", emoji: "🏨", tags: ["transport"], duration: "", detail: "Check-out e organizar malas" },
            { name: "Keikyu Line → Haneda", time: "14:30", emoji: "🚃", tags: ["transport"], duration: "30 min", detail: "¥630 | Metro direto para o aeroporto" },
            { name: "Voo HND → EWR", time: "17:45", emoji: "✈️", tags: ["transport"], duration: "", detail: "United UA130. Sayonara, Japan." }
          ]
        }
      ]
    }
  ]
};

// ===== APP STATE =====
let currentCity = 0;
let currentDay = 0;
let currentMood = 'all';
let doneActivities = JSON.parse(localStorage.getItem('japan2026_done') || '{}');

// ===== INIT =====
function init() {
  renderBottomNav();
  renderCity(0);
  renderFlights();
  renderReservations();
}

// ===== SPLASH =====
function closeSplash() {
  const splash = document.getElementById('splash');
  splash.style.transition = 'opacity 0.4s, transform 0.4s';
  splash.style.opacity = '0';
  splash.style.transform = 'scale(1.05)';
  setTimeout(() => {
    splash.classList.add('hidden');
    document.getElementById('app').classList.remove('hidden');
    init();
  }, 400);
}

// ===== BOTTOM NAV =====
function renderBottomNav() {
  const nav = document.getElementById('bottomNav');
  nav.innerHTML = TRIP.cities.map((city, i) =>
    `<button class="nav-item ${i === currentCity ? 'active' : ''}" onclick="switchCity(${i})">
      <span class="nav-emoji">${city.emoji}</span>
      <span class="nav-label">${city.name}</span>
    </button>`
  ).join('');
}

function switchCity(index) {
  currentCity = index;
  currentDay = 0;
  currentMood = 'all';
  document.querySelectorAll('.mood-chip').forEach(c => c.classList.remove('active'));
  document.querySelector('[data-mood="all"]').classList.add('active');
  renderBottomNav();
  renderCity(index);
}

// ===== RENDER CITY =====
function renderCity(index) {
  const city = TRIP.cities[index];
  document.getElementById('headerCity').textContent = `${city.name} ${city.kanji}`;
  document.getElementById('headerDates').textContent = `${city.dates} | ${city.nights} noites`;
  renderDayTabs(city);
  renderActivities(city, 0);
  renderHotel(city);
  renderGastro(city);
  checkReservationBanner(city);
}

// ===== DAY TABS =====
function renderDayTabs(city) {
  const tabs = document.getElementById('dayTabs');
  tabs.innerHTML = city.days.map((day, i) => {
    const d = day.date.split('/');
    return `<div class="day-tab ${i === currentDay ? 'active' : ''} ${day.free ? 'free' : ''}" onclick="switchDay(${i})">
      <div class="day-num">${d[0]}</div>
      <div class="day-name">${day.free ? 'Livre' : day.weekday}</div>
    </div>`;
  }).join('');
}

function switchDay(index) {
  currentDay = index;
  const city = TRIP.cities[currentCity];
  renderDayTabs(city);
  renderActivities(city, index);
  checkReservationBanner(city);
}

// ===== RENDER ACTIVITIES =====
function renderActivities(city, dayIndex) {
  const container = document.getElementById('activities');
  const day = city.days[dayIndex];
  let activities = day.activities;

  if (currentMood !== 'all') {
    activities = activities.filter(a => a.tags.includes(currentMood));
  }

  if (activities.length === 0) {
    container.innerHTML = `<div class="empty-state fade-in">
      <div class="empty-emoji">🔍</div>
      <p>Nada nessa vibe pra esse dia.<br>Tente outro filtro ou dia.</p>
    </div>`;
    return;
  }

  const dayKey = `${city.id}_${day.date}`;

  container.innerHTML = `
    <div class="day-label fade-in">${day.label}${day.free ? ' — no seu ritmo' : ''} • ${day.date}</div>
    ${activities.map((a, i) => {
      const actKey = `${dayKey}_${i}`;
      const isDone = doneActivities[actKey];
      return `<div class="activity-card fade-in ${isDone ? 'done' : ''} ${a.reserved ? 'reserved' : ''}"
        style="animation-delay: ${i * 0.04}s"
        onclick="toggleActivity(this)">
        ${a.reserved ? `<span class="reserved-badge">${a.reserved === 'confirmed' ? '✓ Reservado' : '⏳ Reservar'}</span>` : ''}
        <div class="activity-check" onclick="event.stopPropagation(); toggleDone('${actKey}', this)"></div>
        <div class="activity-top">
          <div class="activity-emoji">${a.emoji}</div>
          <div class="activity-info">
            <div class="activity-name">${a.name}</div>
            <div class="activity-meta">
              ${a.time !== 'Flex' ? `<span class="time-badge">${a.time}</span>` : '<span class="time-badge" style="color:var(--green)">Flex</span>'}
              ${a.duration ? `<span>${a.duration}</span>` : ''}
            </div>
            <div style="margin-top:6px; display:flex; gap:4px; flex-wrap:wrap;">
              ${a.tags.map(t => `<span class="activity-tag tag-${t}">${tagLabel(t)}</span>`).join('')}
            </div>
          </div>
        </div>
        <div class="activity-details">
          ${a.detail ? `<div class="detail-row"><span class="detail-icon">📍</span> ${a.detail}</div>` : ''}
          ${a.note ? `<div class="activity-note">"${a.note}"</div>` : ''}
        </div>
      </div>`;
    }).join('')}
  `;
}

function tagLabel(t) {
  const labels = { food: 'Comer', culture: 'Cultura', shop: 'Compras', nature: 'Natureza', night: 'Noite', photo: 'Foto', transport: 'Transfer' };
  return labels[t] || t;
}

function toggleActivity(el) {
  if (el.classList.contains('expanded')) {
    el.classList.remove('expanded');
  } else {
    document.querySelectorAll('.activity-card.expanded').forEach(c => c.classList.remove('expanded'));
    el.classList.add('expanded');
  }
}

function toggleDone(key, el) {
  if (doneActivities[key]) {
    delete doneActivities[key];
  } else {
    doneActivities[key] = true;
  }
  localStorage.setItem('japan2026_done', JSON.stringify(doneActivities));
  const card = el.closest('.activity-card');
  card.classList.toggle('done');
}

// ===== MOOD FILTER =====
function filterMood(mood) {
  currentMood = mood;
  document.querySelectorAll('.mood-chip').forEach(c => c.classList.remove('active'));
  document.querySelector(`[data-mood="${mood}"]`).classList.add('active');
  renderActivities(TRIP.cities[currentCity], currentDay);
}

// ===== HOTEL =====
function renderHotel(city) {
  const h = city.hotel;
  document.getElementById('hotelCard').innerHTML = `
    <div class="hotel-label">Hospedagem</div>
    <div class="hotel-name">${h.name}</div>
    <div class="hotel-detail">${h.detail}</div>
    ${h.note ? `<div class="hotel-detail" style="color:var(--text3); font-style:italic; margin-top:4px;">${h.note}</div>` : ''}
  `;
}

// ===== GASTRO =====
function renderGastro(city) {
  const section = document.getElementById('gastroSection');
  if (!city.gastro || city.gastro.length === 0) {
    section.innerHTML = '';
    return;
  }
  section.innerHTML = `
    <div class="gastro-title">🍜 Gastronomia ${city.name}</div>
    ${city.gastro.map(g => `
      <div class="gastro-card">
        <div class="gastro-name">${g.name}${g.must ? '<span class="gastro-must">Obrigatório</span>' : ''}</div>
        <div class="gastro-price">${g.price}</div>
        ${g.address ? `<div class="gastro-address">${g.address}</div>` : ''}
      </div>
    `).join('')}
  `;
}

// ===== FLIGHTS =====
function toggleFlights() {
  document.getElementById('flightsPanel').classList.toggle('hidden');
}

function renderFlights() {
  const list = document.getElementById('flightsList');
  list.innerHTML = TRIP.flights.map(f => `
    <div class="flight-card">
      <div class="flight-route">
        <span class="flight-code">${f.from}</span>
        <div class="flight-arrow"></div>
        <span class="flight-code">${f.to}</span>
      </div>
      <div class="flight-time">${f.date} | ${f.dep} → ${f.arr}</div>
      <span class="flight-airline">${f.airline}</span>
    </div>
  `).join('');
}

// ===== RESERVATIONS =====
function checkReservationBanner(city) {
  const banner = document.getElementById('resBanner');
  const allRes = [...TRIP.reservations.confirmed, ...TRIP.reservations.pending];
  const cityRes = allRes.filter(r => r.city === city.name);
  if (cityRes.length > 0) {
    banner.classList.remove('hidden');
    document.getElementById('resBannerText').textContent = `${cityRes.length} reserva${cityRes.length > 1 ? 's' : ''} em ${city.name}`;
  } else {
    banner.classList.add('hidden');
  }
}

function showReservations() {
  const modal = document.getElementById('resModal');
  const body = document.getElementById('resBody');

  let html = '';

  if (TRIP.reservations.confirmed.length > 0) {
    html += '<div class="day-label">Confirmadas</div>';
    html += TRIP.reservations.confirmed.map(r => `
      <div class="res-card">
        <span class="res-status res-confirmed">✓ Confirmada</span>
        <div class="res-name">${r.name}</div>
        <div class="res-detail">${r.date} às ${r.time} | ${r.city}</div>
        ${r.id ? `<div class="res-detail" style="color:var(--gold)">ID: ${r.id}</div>` : ''}
        ${r.price ? `<div class="res-detail">${r.price}</div>` : ''}
        ${r.note ? `<div class="res-detail" style="font-style:italic; color:var(--text3)">${r.note}</div>` : ''}
      </div>
    `).join('');
  }

  if (TRIP.reservations.pending.length > 0) {
    html += '<div class="day-label" style="margin-top:16px">Pendentes</div>';
    html += TRIP.reservations.pending.map(r => {
      const isCritical = r.priority === 'critica';
      return `<div class="res-card ${isCritical ? 'critical' : 'pending'}">
        <span class="res-status ${isCritical ? 'res-critical' : 'res-pending'}">${priorityLabel(r.priority)}</span>
        <div class="res-name">${r.name}</div>
        <div class="res-detail">${r.date} | ${r.city}</div>
        ${r.note ? `<div class="res-detail" style="font-style:italic; color:var(--text3)">${r.note}</div>` : ''}
      </div>`;
    }).join('');
  }

  body.innerHTML = html;
  modal.classList.remove('hidden');
}

function priorityLabel(p) {
  const labels = { alta: '⚡ Alta', media: '● Média', critica: '🔴 Crítica', baixa: '○ Baixa' };
  return labels[p] || p;
}

function closeReservations() {
  document.getElementById('resModal').classList.add('hidden');
}

// Close modal on backdrop click
document.getElementById('resModal')?.addEventListener('click', function(e) {
  if (e.target === this) closeReservations();
});

// ===== SERVICE WORKER (offline support) =====
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
