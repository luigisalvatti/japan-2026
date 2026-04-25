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
        { name: "Mizunotori (ex-Gem by Moto)", type: "Sake Bar / Izakaya", address: "1-30-9 Ebisu, Shibuya-ku", price: "¥¥¥", avg: "¥8.000–15.000", reservation: "obrigatoria", tip: "Foi renomeado em 2025 — mesmo lugar, mesma pegada. Focado em sake premium. Educativo, íntimo, produtor direto. A experiência sake da viagem.", must: true },
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
// TOKYO GUIDE (LOJAS, DISCOS, ARQUITETURA, ETC)
// ============================================
const TOKYO_GUIDE = {
  categories: [
    {
      name: "Fashion / Lojas",
      tag: "fashion",
      places: [
        { name: "Dover Street Market", area: "Ginza", type: "Concept Store", address: "6-9-5 Ginza, Chuo-ku", desc: "Loja criada por Rei Kawakubo (Comme des Garçons). Varejo como experiência artística, reunindo diversas marcas em espaço com design experimental.", highlight: true },
        { name: "Maison Kitsuné", area: "Daikanyama", type: "Fashion / Café", address: "20-14 Sarugakucho, Shibuya-ku", desc: "Moda, música e café com estética franco-japonesa. Ambiente bonito, vibe tranquila.", highlight: false },
        { name: "Itoya Stationery", area: "Ginza", type: "Papelaria / Design", address: "2-7-15 Ginza, Chuo-ku", desc: "Loja histórica de papelaria japonesa. Canetas, papéis e objetos de design. 12 andares.", highlight: true },
        { name: "Y&Son's", area: "Kanda", type: "Kimono Contemporâneo", address: "2-17-2 Sotokanda, Chiyoda-ku", desc: "Kimono com estética contemporânea. O Japão modernizando o tradicional.", highlight: false },
        { name: "Private Eyes & Trackers", area: "Aoyama", type: "Eyewear", address: "Minamiaoyama, Minato-ku", desc: "Ótica com marcas independentes e curadoria diferenciada. Peças raras.", highlight: false },
        { name: "Log Road", area: "Daikanyama", type: "Lifestyle / Walk", address: "Daikanyama, Shibuya-ku", desc: "Área com cafés, lojas e espaços ao ar livre. Caminhada agradável com várias paradas.", highlight: false },
        { name: "Visvim", area: "Nakameguro", type: "Fashion", address: "Meguro-ku", desc: "Marca japonesa de culto. Materiais premium e design minimalista. Loja muito bonita.", highlight: true },
        { name: "Vendor", area: "Nakameguro", type: "Fashion", address: "Meguro-ku", desc: "Curadoria de roupas minimalistas e objetos. Seleção moderna e ambiente clean.", highlight: false },
        { name: "Jantiques", area: "Nakameguro", type: "Vintage", address: "Kamimeguro, Meguro-ku", desc: "Boutique vintage com peças selecionadas. Um dos melhores garimpos da cidade.", highlight: true },
        { name: "Addict Clothes", area: "Shinjuku", type: "Fashion", address: "Yotsuya, Shinjuku-ku", desc: "Roupas inspiradas no universo motociclista clássico. Identidade forte, acabamento premium.", highlight: false },
        { name: "Neighborhood", area: "Shibuya", type: "Streetwear", address: "Jingumae, Shibuya-ku", desc: "Marca japonesa influente. Estética urbana com inspiração biker/militar. Referência global.", highlight: true },
        { name: "The Real McCoy's", area: "Shibuya", type: "Fashion", address: "Jingumae, Shibuya-ku", desc: "Recria roupas militares clássicas com altíssimo nível de detalhe. Qualidade absurda.", highlight: true },
        { name: "Hands", area: "Shibuya", type: "Department Store", address: "Udagawacho, Shibuya-ku", desc: "Loja com tudo: utilidades, design, ferramentas, lifestyle. Literalmente de tudo.", highlight: false },
        { name: "Hoka Harajuku", area: "Harajuku", type: "Tênis / Running", address: "6-16-23 Jingumae, Shibuya-ku", desc: "Flagship com modelos exclusivos Japão. Cores e edições que não saem no Brasil.", highlight: true },
        { name: "Byredo Aoyama", area: "Aoyama", type: "Perfumaria", address: "3-5-29 Kitaaoyama, Minato-ku", desc: "Flagship com toda a linha + exclusivos Japão. Loja bonita.", highlight: true }
      ]
    },
    {
      name: "Livrarias",
      tag: "livros",
      places: [
        { name: "Post Books", area: "Ebisu", type: "Livraria de Arte", address: "Ebisu Minami, Shibuya-ku", desc: "Focada em arte e publicações raras. Curadoria diferenciada.", highlight: false },
        { name: "Utrecht", area: "Shibuya", type: "Livraria Independente", address: "Jingumae, Shibuya-ku", desc: "Foco em arte contemporânea e zines. Ambiente intimista e criativo.", highlight: true },
        { name: "Bookmark", area: "Shibuya", type: "Livraria / Café", address: "Shibuya-ku", desc: "Livraria com café, ambiente agradável e seleção variada. Bom pra parar e relaxar.", highlight: false }
      ]
    },
    {
      name: "Discos",
      tag: "discos",
      places: [
        { name: "Waltz", area: "Nakameguro", type: "Fitas Cassete / Vintage", address: "Nakameguro, Meguro-ku", desc: "Especializada em fitas cassete e música vintage. Diferente de tudo.", highlight: true },
        { name: "Ella Records", area: "Shibuya", type: "House / Jazz", address: "Shibuya-ku", desc: "Seleção de house, jazz e música underground. Clima de DJ/club.", highlight: true },
        { name: "Lighthouse Records", area: "Shibuya", type: "Eletrônica / Soul", address: "Shibuya-ku", desc: "Focada em música eletrônica e soul. Referência na cena.", highlight: false },
        { name: "Banana Records", area: "Osu (Nagoya)", type: "Vinyl", address: "Osu, Naka-ku, Nagoya", desc: "No roteiro de Nagoya — enorme acervo de vinil em vários andares.", highlight: true }
      ]
    },
    {
      name: "Bairros pra Explorar",
      tag: "bairros",
      places: [
        { name: "Shimokitazawa", area: "Setagaya", type: "Vintage / Cafés / Alternativo", address: "Shimokitazawa, Setagaya-ku", desc: "Lojas vintage, cafés e cultura alternativa. Melhor lugar pra vibe jovem e criativa.", highlight: true },
        { name: "Nakano Broadway", area: "Nakano", type: "Otaku / Colecionáveis", address: "Nakano, Nakano-ku", desc: "Centro da cultura otaku e colecionáveis. Experiência única no Japão.", highlight: false },
        { name: "Koenji", area: "Suginami", type: "Bares / Vintage / Underground", address: "Koenji, Suginami-ku", desc: "Bares, vintage e cultura underground. Clima local e autêntico.", highlight: true }
      ]
    },
    {
      name: "Cozinha / Utensílios",
      tag: "cozinha",
      places: [
        { name: "Kamaasa", area: "Kappabashi", type: "Utensílios artesanais", address: "2-24-1 Matsugaya, Taito-ku", desc: "Ferramentas de cozinha feitas à mão desde 1908. Qualidade japonesa raiz.", highlight: true },
        { name: "Kamata Hakensha", area: "Kappabashi", type: "Facas", address: "2-12-6 Matsugaya, Taito-ku", desc: "Facas japonesas artesanais. Gravam seu nome na faca. Uma das melhores de Tokyo.", highlight: true }
      ]
    },
    {
      name: "Câmera",
      tag: "camera",
      places: [
        { name: "Oosawa Camera", area: "Ebisu", type: "Câmeras Analógicas", address: "Ebisu, Shibuya-ku", desc: "Câmeras usadas e analógicas. Tesouro pra quem curte fotografia.", highlight: false }
      ]
    },
    {
      name: "Templos",
      tag: "templos",
      places: [
        { name: "Reiyukai Shakaden Temple", area: "Azabudai", type: "Templo Moderno", address: "Azabudai, Minato-ku", desc: "Estrutura moderna com arquitetura marcante. Fora do comum.", highlight: false },
        { name: "Shinjuku Ruriko-in Byakurenge-do", area: "Shinjuku", type: "Templo Contemporâneo", address: "Shinjuku-ku", desc: "Design minimalista. Mistura tradição e modernidade.", highlight: false }
      ]
    },
    {
      name: "Arquitetura",
      tag: "arquitetura",
      places: [
        { name: "Prada Aoyama", area: "Aoyama", type: "Herzog & de Meuron", address: "Minamiaoyama, Minato-ku", desc: "Fachada geométrica em vidro. Um dos edifícios mais icônicos de Tokyo.", highlight: true },
        { name: "SunnyHills", area: "Aoyama", type: "Kengo Kuma", address: "Minamiaoyama, Minato-ku", desc: "Estrutura de madeira entrelaçada única. Prove o bolo de abacaxi.", highlight: true },
        { name: "Shizuoka Press", area: "Ginza", type: "Kenzo Tange", address: "Ginza, Chuo-ku", desc: "Torre brutalista com módulos suspensos. Ícone do metabolismo japonês.", highlight: false },
        { name: "NOA Building", area: "Azabudai", type: "Edifício Escultural", address: "Azabudai, Minato-ku", desc: "Formas curvas marcantes.", highlight: false },
        { name: "House NA", area: "Shinjuku", type: "Sou Fujimoto", address: "Shinjuku-ku", desc: "Casa transparente experimental. Residência icônica.", highlight: false },
        { name: "Sogetsu Headquarters", area: "Aoyama", type: "Kenzo Tange", address: "Akasaka, Minato-ku", desc: "Espaço artístico com design marcante. Sede da escola de ikebana.", highlight: false },
        { name: "Tokyo International Forum", area: "Marunouchi", type: "Rafael Viñoly", address: "Marunouchi, Chiyoda-ku", desc: "Estrutura de vidro e aço monumental. Foto obrigatória do interior.", highlight: true },
        { name: "Yoyogi National Gymnasium", area: "Harajuku", type: "Kenzo Tange", address: "Jinnan, Shibuya-ku", desc: "Teto suspenso revolucionário. Obra-prima de 1964.", highlight: false },
        { name: "Tokyo Opera City", area: "Shinjuku", type: "Torre Cultural", address: "Nishi-Shinjuku, Shinjuku-ku", desc: "Complexo cultural com galeria de arte no 4º andar.", highlight: false }
      ]
    },
    {
      name: "Arquitetura Comercial (Ginza/Omotesando)",
      tag: "arq-comercial",
      places: [
        { name: "Chanel", area: "Ginza", type: "Peter Marino", address: "Ginza, Chuo-ku", desc: "Fachada monolítica preta.", highlight: false },
        { name: "Dior", area: "Ginza", type: "Peter Marino", address: "Ginza, Chuo-ku", desc: "Fachada com ondulações em tecido de vidro.", highlight: false },
        { name: "Hermès", area: "Ginza", type: "Renzo Piano", address: "Ginza, Chuo-ku", desc: "Blocos de vidro translúcidos. Lanterna gigante.", highlight: true },
        { name: "Louis Vuitton", area: "Omotesando", type: "Jun Aoki", address: "Jingumae, Shibuya-ku", desc: "Fachada em mosaico de vidro irregular.", highlight: false }
      ]
    },
    {
      name: "Cultura / Experiência",
      tag: "cultura",
      places: [
        { name: "Tokyo Bunka Kaikan", area: "Ueno", type: "Sala de Concertos", address: "Ueno, Taito-ku", desc: "Interior em madeira. Kunio Maekawa, discípulo de Le Corbusier.", highlight: false },
        { name: "Gallery of Horyuji Treasures", area: "Ueno", type: "Museu", address: "Ueno Park, Taito-ku", desc: "Dentro do Tokyo National Museum. Yoshio Taniguchi. Espaço zen.", highlight: true },
        { name: "Bunka Yokusen", area: "Sumida", type: "Sento", address: "Sumida-ku", desc: "Banho público tradicional japonês. Experiência autêntica.", highlight: false },
        { name: "Tokyo Toilet Project", area: "Shibuya", type: "Design Urbano", address: "Vários pontos, Shibuya-ku", desc: "Banheiros públicos com design assinado por arquitetos como Ban, Ando, Fujimoto.", highlight: true }
      ]
    }
  ]
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
      { name: "Udatsu Sushi", date: "30/04", time: "12:00", city: "Tokyo", id: "I-ZL9TCC7N", price: "¥13.200/pessoa", note: "Omakase em Nakameguro" },
      { name: "teamLab Borderless", date: "28/04", time: "15:00–15:30", city: "Tokyo", id: "AYHCTMHPFXKP-0001", price: "¥10.000 (2 adultos)", note: "Azabudai Hills, Toranomon. Entrada 15:00–15:30. Ticket URL no email da teamLab." }
    ],
    pending: [
{ name: "Parfum Satori (appointment)", date: "28/04", time: "18:00", city: "Tokyo", priority: "alta", how: "Marcar pelo site parfum-satori.com ou email", note: "Perfumaria japonesa artesanal em Roppongi (2F, 3-6-8). Só por appointment. 10 min de Azabudai Hills." },
      { name: "HARRY Asakusa — otter cafe", date: "02/05", time: "13:15", city: "Tokyo", priority: "alta", how: "rakuten travel experiences ou harinezumi-cafe.com", note: "Lontras + ouriços + corujas. 5F Masuda Bldg, 1-1-17 Asakusa. ¥1.500–2.500/pessoa, 30 min." },
      { name: "Narukiyo", date: "29/04", time: "19:30", city: "Tokyo", priority: "alta", how: "Pedir pro concierge do Hyatt (telefone japonês)", note: "Izakaya em Shibuya, VORT Aoyama B1. Recomendada." },
      { name: "Tatemichiya", date: "30/04", time: "19:30", city: "Tokyo", priority: "alta", how: "Pedir pro concierge do Hyatt", note: "Izakaya punk rock em Daikanyama. Recomendada." },
      { name: "Ginza Kappou Ukai", date: "28/04", time: "19:00", city: "Tokyo", priority: "alta", how: "Pedir pro concierge do Hyatt", note: "Kaiseki, Jewel Box Ginza B1. 5 min do hotel. Recomendada." },
      { name: "Tempura Onodera (ou Takiya)", date: "28/04", time: "12:30", city: "Tokyo", priority: "alta", how: "Pedir pro concierge do Hyatt", note: "Substituto do Tempura Kondo. Onodera = Sunlit Ginza 11F. Takiya = Azabujuban 2F Labell." },
      { name: "Sushi Kobashi", date: "22/04", time: "12:00", city: "Kanazawa", priority: "alta", how: "Pedir pro Soki Kanazawa no check-in (21/04)", note: "Omakase em Katamachi. Recomendada." },
      { name: "Ninja-dera (Myoryuji)", date: "23/04", time: "09:00", city: "Kanazawa", priority: "alta", how: "Pedir pro Soki Kanazawa — reservar com ANTECEDÊNCIA", note: "Tour guiado em japonês. Templo com armadilhas secretas. Obrigatório reservar." },
      { name: "Kotaro", date: "03/05", city: "Tokyo", priority: "baixa", how: "Concierge Hyatt — meses de espera", note: "Lendário mas quase impossível. Tentar lista de espera." }
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
        detail: "Standard Single Non-Smoking | Conectado à estação JR",
        note: "CONFIRMADO | Ref: F042640THM / B0426AMQAX | $849.84"
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
          dayOfWeek: "Qua",
          theme: "Chegada",
          synopsis: "Dia leve — chegada + compras. Pouso em Haneda 13:35, Shinkansen ~1h40 pra Nagano. Hotel colado na estação, então sem stress. Compras rápidas de essenciais (Uniqlo, Shiseido, Bose) tudo dentro do shopping da estação. Jantar soba a pé. Quase zero caminhada — corpo vai estar destruído do voo. Dormir cedo.",
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
              name: "Check-in Hotel Metropolitan",
              time: "~17:00",
              emoji: "",
              tags: ["transport"],
              duration: "",
              detail: "Hotel Metropolitan Nagano | Standard Single Non-Smoking | Ref: F042640THM | Conectado à estação JR",
              note: "CONFIRMADO | $849.84 | 4 noites"
            },
            {
              name: "Compras estação — Uniqlo + Shiseido",
              time: "17:30",
              emoji: "",
              tags: ["shop"],
              duration: "1h",
              detail: "MIDORI Shopping, dentro da estação JR Nagano. Uniqlo 3F (cuecas Airism, meias, calça). Shiseido no drugstore 1F — sabonete rosto + skincare (Matsumoto Kiyoshi ou Tsuruha Drug).",
              note: "Tudo dentro da estação, do lado do hotel. Aberta até 20h. Bose foi pra Tokyo — Omotesando Hills dia 29/04."
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
          dayOfWeek: "Qui",
          theme: "Zenkoji + Macacos",
          synopsis: "Dia puxado — acordar 5:30, bastante caminhada e transporte. Zenkoji a pé de manhã (ritual budista ao amanhecer), depois bus 45 min pra Jigokudani + trilha de 35 min na floresta até os macacos. Volta de bus, almoço soba em Togakushi (30 min de bus). Tarde livre pra descansar ou sake brewery. Levar casaco — montanha é frio de manhã. Sapato de caminhada obrigatório.",
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
          dayOfWeek: "Sex",
          theme: "Matsumoto",
          synopsis: "Day trip tranquilo — trem 50 min pra Matsumoto, tudo a pé lá. Castelo de manhã (original do século XVI, madeira, não reconstrução). Depois ruas históricas Nawate-dori e Nakamachi com lojas de artesanato e cafés. Soba + sake brewery à tarde. Trem 50 min de volta. Caminhada moderada, cidade plana e compacta. Bom dia pra câmera — castelo refletido no fosso é a melhor foto.",
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
          dayOfWeek: "Sab",
          theme: "Dia Livre",
          free: true,
          synopsis: "Dia livre — sem programação fixa. Pode repetir o que curtiu, ir pra Obuse (30 min trem, vila de sake e doces) ou simplesmente descansar. Sem caminhada pesada, sem transporte obrigatório. Aproveitar pra organizar malas à noite — amanhã cedo sai pra Takayama (trem 3h).",
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
        detail: "Superior Japanese-Western Room | Gifu Prefecture",
        note: "CONFIRMADO | Ref: F0426YKZEN / B0426TT4YH | $454.44"
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
          dayOfWeek: "Dom",
          theme: "Chegada + Sanmachi",
          synopsis: "Meio dia — chegada + explorar. Trem 3h de Nagano com vista dos Alpes. Check-in ao meio-dia. Tudo a pé a partir do hotel — Sanmachi Suji (3 ruas históricas da era Edo) + sake breweries + rio ao entardecer. Cidade compacta, caminhada leve e plana. Hida beef no almoço (wagyu local, obrigatório). Ramen à noite. Ritmo calmo de cidade pequena.",
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
              emoji: "",
              tags: ["transport"],
              duration: "",
              detail: "Hotel Wood Takayama | Superior Japanese-Western | Ref: F0426YKZEN",
              note: "CONFIRMADO | $454.44 | 2 noites"
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
          dayOfWeek: "Seg",
          theme: "Shirakawa-go",
          synopsis: "Dia cheio — bus + caminhada. Bus 50 min pra Shirakawa-go (vila UNESCO, casas de telhado de palha). Muita caminhada pela vila, subida ao mirante Shiroyama pra vista panorâmica. Almoço soba dentro de uma casa gassho-zukuri. Bus 50 min de volta, depois Hida Folk Village (taxi 10 min). Yakiniku Hida beef à noite. Levar sapato de caminhada e guarda-chuva — pode chover.",
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
        detail: "Moderate King Room | Kanazawa, Ishikawa",
        note: "CONFIRMADO | Ref: F0426SEHDL / B0426WUSSE | $363.88"
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
          dayOfWeek: "Ter",
          theme: "Chegada + Higashi Chaya",
          synopsis: "Meio dia — chegada + bairro geisha. Trem 2h30 de Takayama. Check-in no Soki ao meio-dia. Almoço sushi no mercado Omicho (a pé). Depois Higashi Chaya — bairro das gueixas, casas de madeira e lanternas, tudo a pé. Lojas de folha de ouro no caminho. Izakaya à noite em Katamachi. Caminhada moderada, cidade plana. Kanazawa é mais elegante e calma que as outras cidades.",
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
              emoji: "",
              tags: ["transport"],
              duration: "",
              detail: "Soki Kanazawa | Moderate King Room | Ref: F0426SEHDL",
              note: "CONFIRMADO | $363.88 | 4 noites"
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
          dayOfWeek: "Qua",
          theme: "Kenroku-en + Omicho",
          synopsis: "Dia completo — jardim, mercado, sushi, sake. Acordar cedo pro Kenroku-en (7h, vazio). Castelo ao lado, a pé. Omicho Market pra comer frutos do mar no balcão. Almoço omakase no Sushi Kobashi (reservar). Nishi Chaya à tarde (segundo bairro geisha, menor). Sake brewery Fukumitsuya. Tudo a pé ou taxi curto. Caminhada média, sem subida. Dia de templo + comida + cultura — ritmo bom.",
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
              detail: "Katamachi, Kanazawa. ¥15.000–25.000 (~$132 USD). Omakase com frutos do Mar do Japão.",
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
          dayOfWeek: "Qui",
          theme: "Ninja-dera + Artesanato",
          synopsis: "Dia mais leve — templo + artesanato + lojas. Ninja-dera de manhã (templo com armadilhas secretas e passagens ocultas, reservar tour). Volta pra Higashi Chaya pra explorar com calma. Tarde inteira pra artesanato: folha de ouro, cerâmica Kutani, tecidos Kaga Yuzen. Pouca caminhada, ritmo tranquilo. Levar cash — muitas lojas de artesanato só aceitam dinheiro.",
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
          dayOfWeek: "Sex",
          theme: "Dia Livre",
          synopsis: "Dia livre — sem obrigação. Pode voltar ao Omicho, revisitar Kenroku-en ao entardecer (luz diferente), ou ir ao Nagamachi (bairro samurai, pouco visitado). Sake bar em Katamachi à noite. Sem transporte, tudo a pé. Dia bom pra comprar presentes. Organizar malas — amanhã Shinkansen 2h30 pra Nagoya.",
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
      id: "nagoya",
      name: "Nagoya",
      kanji: "名古屋",
      emoji: "🏯",
      dates: "25/04 — 27/04",
      nights: 2,
      hotel: {
        name: "Nagoya Marriott Associa Hotel",
        detail: "Standard Queen, Guest Room | 1-1-4 Meieki, Nakamura-ku | Conectado à estação",
        note: "CONFIRMADO | Ref: F0426AW1T1 / B0426FAATK | $490.44"
      },
      gastro: [
        {
          name: "Hitsumabushi (unagi grelhado)",
          price: "¥3.000–5.000",
          location: "Atsuta Horaiken ou Bincho",
          must: true,
          note: "O prato mais famoso de Nagoya — comer em 3 etapas: puro, com condimentos, com dashi"
        },
        {
          name: "Miso katsu (Yabaton)",
          price: "¥1.500–2.500",
          location: "3-6-18 Osu, Naka-ku",
          must: true,
          note: "O miso vermelho de Nagoya é mais intenso e doce — diferente de qualquer outro"
        },
        {
          name: "Tebasaki (Sekai no Yamachan)",
          price: "¥1.000–2.000",
          location: "Várias filiais",
          must: false,
          note: "Asas de frango crocantes estilo Nagoya"
        },
        {
          name: "Kishimen (udon achatado)",
          price: "¥800–1.500",
          location: "Estação Nagoya",
          must: false,
          note: "Textura diferente do udon normal — mais leve e sedoso"
        }
      ],
      days: [
        {
          date: "25/04",
          dayOfWeek: "Sab",
          theme: "Chegada + Atsuta + Osu",
          synopsis: "ATRASO — chegada no hotel só às 15h. Dia bem comprimido: drop malas rápido no Marriott, Atsuta Shrine no fim da tarde, Hitsumabushi como jantar (Atsuta Horaiken do lado do santuário), depois Osu Kannon pra vintage à noite. Banana Records se der tempo (fecha 20h). Sakae pra fechar com drink. Yabaton miso katsu fica pra amanhã.",
          activities: [
            {
              name: "Chegada hotel — Marriott Associa",
              time: "15:00",
              emoji: "",
              tags: ["transport"],
              duration: "30 min",
              detail: "Nagoya Marriott Associa Hotel | Standard Queen | Ref: F0426AW1T1 | Conectado à estação JR.",
              note: "Drop malas rápido e sair direto pro Atsuta — não perder tempo."
            },
            {
              name: "Atsuta Jingu",
              time: "15:45",
              emoji: "",
              tags: ["culture", "photo"],
              duration: "1h15",
              detail: "Um dos santuários mais sagrados do Japão (2.000+ anos). Metro Meijo Line ~15 min de Nagoya Station.",
              note: "Guarda a espada Kusanagi — um dos 3 tesouros imperiais. Floresta densa, ótimo no fim de tarde."
            },
            {
              name: "Jantar — Hitsumabushi (Atsuta Horaiken)",
              time: "17:15",
              emoji: "",
              tags: ["food"],
              duration: "1h15",
              detail: "Atsuta Horaiken — fica ao lado do santuário Atsuta. Unagi grelhado estilo Nagoya. Aberto até ~20h30.",
              note: "Comer em 3 etapas: 1) puro 2) com cebolinha/wasabi/nori 3) com dashi (ochazuke). Prato icônico de Nagoya."
            },
            {
              name: "Osu Kannon + Osu Shopping Street",
              time: "18:45",
              emoji: "",
              tags: ["culture", "shop", "photo"],
              duration: "1h",
              detail: "Metro Tsurumai Line de Atsuta. Templo budista + shotengai vibrante. Vintage, street food, eletrônicos.",
              note: "Lojas até 20h, mas a rua fica viva à noite. Mistura Akihabara com Shimokitazawa."
            },
            {
              name: "Banana Records Osu",
              time: "19:45",
              emoji: "",
              tags: ["shop"],
              duration: "15 min",
              detail: "Loja de vinyl no shotengai de Osu. Fecha 20h — chegar antes.",
              note: "Se não der tempo, pular sem dó."
            },
            {
              name: "Sakae — drinks/sake",
              time: "20:30",
              emoji: "",
              tags: ["night"],
              duration: "Flex",
              detail: "Distrito de entretenimento de Nagoya. Metro Higashiyama Line de Osu (1 estação). Bares e sake.",
              note: "Pra fechar o dia. Yabaton miso katsu fica pra amanhã (já no roteiro do dia 26 às 13h)."
            }
          ]
        },
        {
          date: "26/04",
          dayOfWeek: "Dom",
          theme: "Castle + Noritake + Artesanato (compensando ontem)",
          synopsis: "Dia tema CARRO + Komehyo. Acordar 7:30, café tranquilo. Castelo Nagoya 9h. Taxi pro Toyota Automobile Museum em Nagakute (150 carros clássicos do mundo). Porsche Center Nagoya (Classic Partner — 911 air-cooled restaurados). Volta pro almoço Yabaton em Osu. Tarde no Komehyo Main Store (maior usado luxo Japão, 7 andares!) + Osu Kannon + Endoji. Tebasaki Sakae. Fushimi sake. Última noite — amanhã 8h Shinkansen pra Tokyo.",
          activities: [
            {
              name: "Corrida matinal — Meijo Park (opcional)",
              time: "06:00",
              emoji: "",
              tags: ["nature"],
              duration: "1h15",
              detail: "Meijo Park (鶴舞公園) — parque do Castelo de Nagoya, 24h aberto, perfeito pra runners. ~5km loop ao redor do Ofukeike Pond + castelo de fundo. Da Marriott: metro Higashiyama Line → Sakae (2 stops) → trocar Meijo Line → Nagoyajo Station (2 stops) + 3 min a pé. Ou taxi 10 min ¥1.500.",
              note: "Tem running station com vestiário/banho na zona norte do parque. Pulse: ~5–8km easy, vista do castelo no nascer do sol."
            },
            {
              name: "Volta + café tranquilo",
              time: "07:30",
              emoji: "",
              tags: ["food"],
              duration: "1h15",
              detail: "Banho no hotel. Café no Marriott ou na estação JR.",
              note: "Sem pressa. Compensando o tempo perdido ontem."
            },
            {
              name: "Nagoya Castle + Honmaru Palace",
              time: "09:00",
              emoji: "",
              tags: ["culture", "photo"],
              duration: "1h45",
              detail: "Castelo abre 9:00. Palácio Honmaru reconstruído com técnicas tradicionais. Metro Meijo Line ~10 min da estação.",
              note: "Chegar logo na abertura — vazio pra fotos. Pinturas fusuma impressionantes."
            },
            {
              name: "Taxi → Toyota Automobile Museum",
              time: "10:45",
              emoji: "",
              tags: ["transport"],
              duration: "30 min",
              detail: "Taxi do Castelo de Nagoya até o museu em Nagakute. ~¥4.000–5.000 (~$26–33). 25–30 min.",
              note: "Mais rápido que metro+bus. Vale o investimento pra otimizar o dia."
            },
            {
              name: "Toyota Automobile Museum (Nagakute)",
              time: "11:15",
              emoji: "",
              tags: ["culture", "photo"],
              duration: "1h45",
              detail: "Toyota Automobile Museum, Nagakute. ¥1.200/adulto (~$8). 150 carros clássicos do mundo todo (1880s–presente), todos restaurados a showroom. Cultural Gallery: 4.000+ posters/peças. 9:30–17:00, fecha Segunda.",
              note: "O museu de carros mais completo do Japão. Para fã de auto é imperdível."
            },
            {
              name: "Taxi → Porsche Center Nagoya (Chikusa)",
              time: "13:00",
              emoji: "",
              tags: ["transport"],
              duration: "15 min",
              detail: "Do Toyota Auto Museum até Porsche Center em Chikusa-ku (~¥2.500). 15 min taxi.",
              note: ""
            },
            {
              name: "Porsche Center Nagoya (Classic Partner)",
              time: "13:15",
              emoji: "",
              tags: ["culture", "shop"],
              duration: "45 min",
              detail: "Chikusa 3-38-15, Chikusa-ku, Nagoya. Certificado Porsche Classic Partner — uma das maiores salas de exposição de dealer Porsche do Japão (Feb/2025). Oficina de restauração de 911 air-cooled e clássicos. Carrera Lounge espaçoso.",
              note: "Showroom aberto a visitantes. Pra ver 911 antigos restaurados + novos. Vale ligar antes (+81 52-734-7911) pra confirmar se tem clássicos em exposição no dia."
            },
            {
              name: "Taxi → Yabaton Osu",
              time: "14:00",
              emoji: "",
              tags: ["transport"],
              duration: "15 min",
              detail: "De Chikusa até Osu (~¥2.500).",
              note: ""
            },
            {
              name: "Almoço — Yabaton miso katsu (Osu)",
              time: "14:15",
              emoji: "",
              tags: ["food"],
              duration: "1h",
              detail: "Yabaton Honten, 3-6-18 Osu, Naka-ku. Tonkatsu com miso vermelho de Nagoya. ¥1.500–2.500 (~$10–16).",
              note: "O miso vermelho daqui é mais intenso e doce. Casa fundada 1947 — o original."
            },
            {
              name: "Komehyo Main Store (maior usado luxo Japão)",
              time: "15:30",
              emoji: "",
              tags: ["shop"],
              duration: "1h30",
              detail: "Komehyo Honten, 3-25-31 Osu, Naka-ku, Nagoya 460-0011. 7 andares: 1F joias/metais preciosos, 2F relógios, 3F bolsas/acessórios de marca, 4F feminino+pele, 5F masculino+sapatos+câmeras+guitarras, 6F masculino fashion, 7F compra. 11h–19h30.",
              note: "A LOJA — sede da rede, headquarters em Nagoya. Maior reuse department store do Japão. Muito mais variedade que filial de Tokyo."
            },
            {
              name: "Osu Kannon + Endoji Shotengai",
              time: "17:00",
              emoji: "",
              tags: ["culture", "shop", "photo"],
              duration: "1h",
              detail: "Templo + shotengai. Aproveitar Osu de dia. Endoji Shotengai a 10 min de metro Tsurumai Line.",
              note: "Shotengai autêntico sem turismo — o Japão real."
            },
            {
              name: "Jantar — Tebasaki Sekai no Yamachan",
              time: "19:00",
              emoji: "",
              tags: ["food", "night"],
              duration: "1h30",
              detail: "Sakae. Asas de frango crocantes estilo Nagoya + cerveja gelada.",
              note: "Combo clássico de Nagoya. Tebasaki + bira."
            },
            {
              name: "Fushimi — sake bars",
              time: "21:00",
              emoji: "",
              tags: ["night"],
              duration: "Flex",
              detail: "Distrito de Fushimi, bares de sake e whisky. A pé de Sakae.",
              note: "Última noite antes de Tokyo. Voltar cedo — amanhã 8h Shinkansen pra Hachigou fila."
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
        detail: "Standard Room King | 6-6-7 Ginza, Chuo-ku 104-0061 | Tel: +81 3-6837-1234",
        note: "CONFIRMADO | #62759457 | 27/04–04/05 (7 noites) | Pontos + ¥ | Check-in 15:00 / Check-out 12:00"
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
          synopsis: "Dia de corrida inicial — sair cedo de Nagoya (Shinkansen 08:00) pra pegar fila do Ginza Hachigou (ramen 1 Michelin) às 10:30. Drop malas no Hyatt antes. Após o ramen: Tsukiji, Jean Rousseau (Tank), Ginza arquitetura, Goldwin Marunouchi + LEGO Tokyo Station, Dover Street Market, Nose Shop (perfumes), Itoya. Jantar sushi em Tsukiji. Tudo walkable de Ginza/Marunouchi. Primeiro contato com Tokyo — ritmo direto.",
          activities: [
            {
              name: "Shinkansen Nagoya → Tokyo",
              time: "08:00",
              emoji: "",
              tags: ["transport"],
              duration: "~1h40",
              detail: "Sair cedo de Nagoya pra dar tempo da fila do Hachigou | JR Pass",
              note: "Chegada ~09:40 em Tokyo Station"
            },
            {
              name: "Drop malas no Hyatt",
              time: "10:00",
              emoji: "",
              tags: ["transport"],
              duration: "30 min",
              detail: "6-6-7 Ginza, Chuo-ku. Taxi/metro de Tokyo Station. Check-in oficial só às 15:00, mas deixam guardar malas.",
              note: "Não perder tempo — direto na fila do Hachigou"
            },
            {
              name: "FILA Ginza Hachigou (chegar 10:30)",
              time: "10:30",
              emoji: "",
              tags: ["food"],
              duration: "1h30",
              detail: "3-14-2 Ginza, Chuo-ku. A pé 8 min do Hyatt. Abre 11:30. Chegar 10:30–11:00 pra pegar primeira seating. ¥1.200–2.000 (~$11 USD). Shoyu ramen com frango e trufa — 1 estrela Michelin.",
              note: "FILA: ir cedo (10:30). Não aceita reserva no mesmo dia. Só ~10 lugares no balcão — rotação rápida depois que abre."
            },
            {
              name: "Check-in Hyatt Centric Ginza",
              time: "13:00",
              emoji: "",
              tags: ["transport"],
              duration: "",
              detail: "6-6-7 Ginza, Chuo-ku 104-0061 | Standard Room King | Confirmação #62759457",
              note: "CONFIRMADO | 7 noites (27/04–04/05) | 192.500 pts + ¥40.500 | Check-in oficial 15:00 mas pode dar early"
            },
            {
              name: "Samsonite Ginza — concertar mala",
              time: "13:15",
              emoji: "",
              tags: ["shop"],
              duration: "30 min",
              detail: "Samsonite Black Label Ginza (flagship asiático). 3-4-12 Ginza, Bunshodo Ginza Bldg 1F. Tel +81 3-6263-2099. 8 min a pé do Hyatt. 11h–20h. Roda quebrada — Samsonite tem garantia de 10 anos pra defeito de fabricação (não cobre dano por uso). Substituição de roda é peça simples.",
              note: "Levar a mala. Se for warranty, é grátis; se não for, peça custa ~¥3.000–8.000 + serviço. Pode ser same-day se tiver a peça. Pegar na volta antes do voo dia 04."
            },
            {
              name: "Tsukiji mercado externo",
              time: "14:00",
              emoji: "",
              tags: ["food", "photo"],
              duration: "30 min",
              detail: "A pé 15 min. Mercado vibrante, street food + fotografia.",
              note: "Não é mais o mercado de atum (foi pra Toyosu), mas ainda é incrível. Snacks pós-ramen."
            },
            {
              name: "Atelier Jean Rousseau — pulseira Cartier Tank",
              time: "14:30",
              emoji: "⌚",
              tags: ["shop"],
              duration: "45 min",
              detail: "Ginza. Atelier francês desde 1954. Pulseiras prontas e sob medida (alligator ~¥45.000+). Seg–Sáb 12h–19h, Dom 12h–18h.",
              note: "A poucos minutos do Hyatt — pulseiras de luxo prontas na hora"
            },
            {
              name: "Ginza — arquitetura a pé",
              time: "15:00",
              emoji: "",
              tags: ["culture", "photo"],
              duration: "2h",
              detail: "Hermès (Renzo Piano), Tiffany (Kengo Kuma), Shizuoka Tower (Kenzo Tange), Wako (Seiko)",
              note: "Circuito arquitetônico de grife — cada prédio é uma obra"
            },
            {
              name: "Snow Peak + Goldwin + LEGO (Marunouchi)",
              time: "16:30",
              emoji: "",
              tags: ["shop"],
              duration: "1h15",
              detail: "Snow Peak LAND STATION TOKYO (KITTE 4F, 2-7-2 Marunouchi): soft cooler 38 ¥18.000 (~$118), Hopper-style ¥12.000–25.000, gear premium. Goldwin Brick Square 1F, 2-6-1 Marunouchi: camisetas ¥8.000–15.000, Goldwin 0 ¥30.000–80.000. LEGO Tokyo Station Ichiban Gai B1, 1-9-1 Marunouchi: sets ¥3.000–50.000+, Architecture Tokyo ¥10.000 (~$66).",
              note: "Trinca em Marunouchi — todos a 5 min a pé entre si. 10 min de Ginza. Snow Peak tem soft cooler que cabe na mala. Tax refund 10% acima de ¥5.500."
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
              name: "Nose Shop (perfumaria nicho)",
              time: "18:30",
              emoji: "",
              tags: ["shop"],
              duration: "45 min",
              detail: "Tokyu Plaza Ginza 5F, 5-2-1 Ginza, Chuo-ku. Melhor curadoria de perfumes nicho do Japão: Kilian, MFK, Penhaligon's, Diptyque, Matiere Premiere, Creed, Essential Parfums. 11h–21h. Filial Nose também em 3-6-1 Ginza.",
              note: "Ao lado do Dover Street Market. Mesmo prédio do Nemuro Hanamaru (10F). Essential Parfums disponível aqui."
            },
            {
              name: "Itoya Stationery",
              time: "19:15",
              emoji: "",
              tags: ["shop"],
              duration: "30 min",
              detail: "12 andares de papelaria. 2-7-15 Ginza.",
              note: "Paraíso para quem aprecia papelaria japonesa. Fecha 20:00."
            },
            {
              name: "Jantar — Itadori Bekkan sushi (Tsukiji)",
              time: "20:00",
              emoji: "",
              tags: ["food"],
              duration: "1h30",
              detail: "1F, 4-10-16 Tsukiji, Chuo-ku. ¥2.000–4.000 (~$20 USD). Escondido atrás de lojas. Sushi simples, sem frescura, peixe de altíssima qualidade. Atum gordo e uni obrigatórios.",
              note: "Do guia. Sem reserva. Casual e direto ao ponto."
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
          synopsis: "Dia médio — Ginza + teamLab + Roppongi. Manhã toda a pé em Ginza: sushi esteira Nemuro Hanamaru, Kabuki-za, Tokyo International Forum, almoço Tempura Kondo (2 Michelin). Tarde: metro 15 min pra Azabudai Hills — teamLab Borderless (2h30) + arquitetura Heatherwick. Parfum Satori em Roppongi ao entardecer (appointment). Volta de metro pra Ginza pro jantar kaiseki Ginza Kappou Ukai. Caminhada média, pouco metro. CONFIRMADO: teamLab. RESERVAR: Parfum Satori.",
          activities: [
            {
              name: "Nemuro Hanamaru — sushi esteira",
              time: "10:00",
              emoji: "",
              tags: ["food"],
              duration: "1h",
              detail: "Tokyo Plaza Ginza 10F, 5-2-1 Ginza. ¥2.000–4.000 (~$20 USD). Melhor custo-benefício de sushi em Tokyo. Fila mas roda rápido.",
              note: "Do guia — sushi de qualidade altíssima por preço acessível"
            },
            {
              name: "Kabuki-za + Tokyo International Forum",
              time: "11:30",
              emoji: "",
              tags: ["culture", "photo"],
              duration: "1h30",
              detail: "Arquitetura icônica de Tokyo. Rafael Viñoly (Forum) — foto obrigatória do interior.",
              note: ""
            },
            {
              name: "Tempura Kondo",
              time: "12:30",
              emoji: "",
              tags: ["food"],
              duration: "1h30",
              detail: "Sakaguchi Building 9F, 5-5-13 Ginza. ¥15.000–25.000 (~$132 USD). 2 estrelas Michelin. Tempura extremamente leve — cenoura e batata-doce são lendários.",
              note: "Reserva muito difícil — tentar pelo hotel. Do guia."
            },
            {
              name: "teamLab Borderless (Azabudai Hills)",
              time: "15:00",
              emoji: "",
              tags: ["culture", "photo"],
              duration: "2h30",
              detail: "Azabudai Hills Garden Plaza B B1F, 5-8-1 Toranomon, Minato-ku. Entrada 15:00–15:30 | 2 adultos ¥10.000. Museu de arte digital imersiva — salas que mudam com sua presença. Metro 15 min de Ginza (linha Hibiya → Kamiyacho).",
              note: "RESERVADO! Ticket: AYHCTMHPFXKP-0001. URL no email da teamLab. Chegar antes das 15:30 pra não perder o slot.",
              reserved: "confirmed"
            },
            {
              name: "Azabudai Hills — arquitetura + Essential Parfums",
              time: "17:30",
              emoji: "",
              tags: ["culture", "photo", "shop"],
              duration: "30 min",
              detail: "Complexo Heatherwick Studio + Pelli Clarke. Jardins, praça central, torres. Essential Parfums na Tower Plaza (1-3-1 Azabudai). Um dos lançamentos mais ambiciosos de Tokyo.",
              note: "Logo após o teamLab. Essential Parfums — marca francesa com fragrâncias limpas e acessíveis. Também tem no Nose Shop (dia 27)."
            },
            {
              name: "Parfum Satori (Roppongi)",
              time: "18:00",
              emoji: "",
              tags: ["shop"],
              duration: "45 min",
              detail: "2F, 3-6-8 OURS, Roppongi, Minato-ku. Perfumaria japonesa artesanal da Satori Osawa. 10 min a pé de Azabudai Hills. Fragrâncias inspiradas em conceitos japoneses (incenso, hinoki, yuzu, chá).",
              note: "ATENÇÃO: normalmente só por APPOINTMENT. Marcar antes pelo site parfum-satori.com. 5 min de Roppongi-Icchome station."
            },
            {
              name: "Ginza Kappou Ukai — jantar",
              time: "19:00",
              emoji: "",
              tags: ["food"],
              duration: "2h",
              detail: "Jewel Box Ginza B1, Ginza. ¥10.000–18.000 (~$92 USD). Kaiseki moderno elegante. Reserva recomendada.",
              note: "Do guia — kaiseki sofisticado a 5 min do hotel"
            }
          ]
        },
        {
          date: "29/04",
          dayOfWeek: "Qua",
          theme: "Omotesando + Harajuku",
          synopsis: "Dia mais cheio de lojas da viagem — Aoyama + Harajuku a pé. Curious Curio (Tank), Auralee (camisetas TOP), Graphpaper, Lemaire, Mug Pop (xícaras espresso), Mountain Hardwear + Goldwin Harajuku, MixTHINKS (vintage luxo), Bose Omotesando Hills (trocar espuma fone), Byredo, Moscot, CFCL+VISVIM. Menchirashi udon viral no almoço. Meiji Jingu (santuário). Narukiyo izakaya + Grandfathers record bar à noite. Bastante caminhada, levar sacolas grandes.",
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
              name: "Curious Curio + Accurate Form — Cartier Tank",
              time: "11:00",
              emoji: "",
              tags: ["shop"],
              duration: "45 min",
              detail: "Minamiaoyama. Pulseiras 19/16mm pro Tank. Accurate Form = couro japonês artesanal. Qua–Dom 15h–20h.",
              note: "Material especial sob medida: prazo ~2 meses"
            },
            {
              name: "Auralee Tokyo (camisetas)",
              time: "11:45",
              emoji: "",
              tags: ["shop"],
              duration: "30 min",
              detail: "QC cube Minamiaoyama 63 1F, 6-3-2 Minamiaoyama. Seamless Crew Neck ¥12.000–18.000 (~$80–120), camisas ¥25.000–45.000, knit ¥40.000–80.000. 11h–20h.",
              note: "Prioridade TOP. Algodão Suvin, corte limpo. Equivalente japonês da Barthélémy."
            },
            {
              name: "Graphpaper + Lemaire Aoyama",
              time: "12:15",
              emoji: "",
              tags: ["shop"],
              duration: "45 min",
              detail: "Graphpaper (Minamiaoyama): camisetas oversized ¥15.000–22.000, camisas ¥30.000–50.000. Lemaire Aoyama: tshirt dropped shoulder ¥18.000–30.000, knits ¥60.000–120.000.",
              note: "Mesma rua do Curious Curio. Lemaire é o mais caro do circuito."
            },
            {
              name: "Nezu Museum — jardim koi",
              time: "13:00",
              emoji: "",
              tags: ["culture", "nature", "photo"],
              duration: "45 min",
              detail: "Arte + jardim japonês com carpas. Kengo Kuma.",
              note: ""
            },
            {
              name: "Almoço — Menchirashi (carbonara udon, Harajuku)",
              time: "13:45",
              emoji: "",
              tags: ["food"],
              duration: "1h30",
              detail: "6-13-7 Jingumae, Shibuya-ku, Tokyo. ¥1.500–2.500 (~$13 USD). Udon viral — carbonara com ovo e queijo + menchirashi (udon com carne). Escondido num beco da Cat Street. 11:30–22:00.",
              note: "Sem reserva, pode ter fila. A 10 min a pé do Meiji Jingu/Omotesando."
            },
            {
              name: "Mug Pop (xícaras de café/espresso)",
              time: "14:45",
              emoji: "",
              tags: ["shop"],
              duration: "30 min",
              detail: "Cat Street, Harajuku. 400+ canecas e xícaras de artesãos japoneses (Arita, Mino, Kutani). Xícaras de espresso ¥2.500–8.000 (~$16–53), peças autorais ¥10.000+. Café no local — tomar na xícara que escolher.",
              note: "Pra louça de espresso de cerâmica japonesa autoral. Mesma rua do Menchirashi e Mountain Hardwear."
            },
            {
              name: "Mountain Hardwear + Goldwin Harajuku",
              time: "15:15",
              emoji: "",
              tags: ["shop"],
              duration: "1h",
              detail: "Mountain Hardwear (6-13-11 Jingumae): camisetas ¥6.000–10.000, fleece ¥15.000–28.000, jaquetas ¥30.000–80.000. Goldwin Harajuku (Citta Jingu-mae 1F, 6-10-12 Jingumae): camisetas/shorts técnicos ¥8.000–13.000, jaquetas ¥18.000–45.000.",
              note: "Goldwin é a prioridade esportiva. Mountain Hardwear pra outdoor/exclusivos Japão. Ambos 11h–20h."
            },
            {
              name: "MixTHINKS Harajuku (vintage luxo)",
              time: "16:15",
              emoji: "",
              tags: ["shop"],
              duration: "30 min",
              detail: "Q Plaza Harajuku 1F, 6-28-6 Jingumae, Shibuya-ku. Vintage de luxo japonês — bolsas (Hermès/Chanel/LV), joias, relógios e acessórios em condição premium. Tax-free. 11h–20h.",
              note: "Mesma quadra do Goldwin Harajuku. Curadoria vintage de alto nível — peças seladas autenticadas."
            },
            {
              name: "Meiji Jingu",
              time: "16:45",
              emoji: "",
              tags: ["culture", "nature", "photo"],
              duration: "30 min",
              detail: "Santuário no meio da floresta. A pé 10 min.",
              note: "Floresta plantada há 100 anos — silêncio no meio de Tokyo. Visita rápida."
            },
            {
              name: "Bose Direct Store (Omotesando Hills)",
              time: "17:30",
              emoji: "",
              tags: ["shop"],
              duration: "45 min",
              detail: "Omotesando Hills, 4-12-10 Jingumae, Shibuya-ku. Loja oficial Bose — trocar espuma (earpads) do seu fone + comprar capa nova. Atendimento técnico no local. 11:00–21:00.",
              note: "Confirmar se o modelo do fone tem peças em estoque. Se for QC35/45/Ultra, geralmente tem. Caso contrário, encomendar."
            },
            {
              name: "Byredo — perfume",
              time: "17:45",
              emoji: "",
              tags: ["shop"],
              duration: "30 min",
              detail: "3-5-29 Kitaaoyama, Minato-ku (Aoyama). Flagship linda, toda a linha disponível.",
              note: "Exclusivos Japão disponíveis. 5 min a pé de Omotesando Hills."
            },
            {
              name: "Moscot (Aoyama flagship)",
              time: "18:15",
              emoji: "",
              tags: ["shop"],
              duration: "30 min",
              detail: "102 Dai-2 Kuyo Bldg., 5-10-2 Minami-Aoyama, Minato-ku. Flagship asiático da NY. 12h–20h, fechado Terças. Tel +81 3-6434-1070.",
              note: "5 min a pé do Byredo. Linha completa Lemtosh, Zev, Miltzen."
            },
            {
              name: "CFCL + F.I.L Tokyo (VISVIM)",
              time: "18:45",
              emoji: "",
              tags: ["shop"],
              duration: "45 min",
              detail: "CFCL no Gyre 3F + VISVIM flagship (se der tempo antes do jantar).",
              note: "Se apertar, priorizar CFCL (mais único)."
            },
            {
              name: "Jantar — Narukiyo izakaya (Shibuya)",
              time: "19:30",
              emoji: "",
              tags: ["food", "night"],
              duration: "2h",
              detail: "VORT Aoyama B1, 2-7-14 Shibuya. ¥5.000–8.000 (~$43 USD). Izakaya animado, caótico e divertido. Menu japonês do dia. Melhor sentar no balcão e pedir omakase.",
              note: "Do guia — TOP. RESERVAR! Alternativa: Kotaro (Sakuragaokacho, ¥8.000–15.000) — sofisticado, meses de espera.",
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
          synopsis: "Dia completo Nakameguro+Daikanyama — café, vinyl, sushi, watch roll, lojas técnicas, pizza, izakaya. Metro de Ginza até Nakameguro (20 min), depois tudo a pé. Rio Meguro, Waltz records+VISVIM, Tsuchiya Kaban (watch roll) + Coverchord (multimarca), Udatsu Sushi omakase (RESERVADO). Daikanyama: T-Site, Descente Allterrain+Nanamica, Seirinkan pizza, Bonjour Records+Maison Kitsuné. Jantar Tatemichiya izakaya. Muita caminhada plana.",
          activities: [
            {
              name: "Onibus Coffee",
              time: "08:30",
              emoji: "",
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
              emoji: "",
              tags: ["shop"],
              duration: "45 min",
              detail: "Vinyl + VISVIM Nakameguro. Curadoria.",
              note: ""
            },
            {
              name: "SML — louça artesanal (Nakameguro)",
              time: "10:45",
              emoji: "",
              tags: ["shop"],
              duration: "30 min",
              detail: "Nakameguro, perto do rio. Curadoria de louça japonesa artesanal — pratos, tigelas, xícaras de espresso ¥3.000–9.000 (~$20–60). Workshops de cerâmica no espaço.",
              note: "Outra opção pra xícara de espresso — feito por artesãos locais, peças únicas."
            },
            {
              name: "Tsuchiya Kaban + Coverchord (Nakameguro)",
              time: "11:15",
              emoji: "",
              tags: ["shop"],
              duration: "45 min",
              detail: "Tsuchiya Kaban: watch roll ¥30.000–80.000, carteiras ¥20.000–60.000, bolsas ¥80.000–250.000. Coverchord: tshirts ¥10.000–18.000, camisas ¥25.000–50.000, jaquetas Goldwin 0/TNF Purple ¥40.000–120.000.",
              note: "Tsuchiya pra watch roll (couro japonês premium). Coverchord pra catch-all multimarca."
            },
            {
              name: "UDATSU SUSHI — omakase (Nakameguro)",
              time: "12:00",
              emoji: "",
              tags: ["food"],
              duration: "2h",
              detail: "2-48-10 Kamimeguro. ¥13.200/pessoa (~$87 USD). Sushi Michelin com clima mais relaxado. Excelente omakase. Tem opção vegetariana.",
              note: "Do guia — TOP. RESERVADO! ID: I-ZL9TCC7N. A experiência sushi da viagem.",
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
              name: "Seirinkan — pizza cult (Nakameguro)",
              time: "16:00",
              emoji: "",
              tags: ["food"],
              duration: "45 min",
              detail: "2-6-4 Kamimeguro. ¥1.800–3.000 (~$16 USD). Pizza napolitana cult. Só margarita e marinara. Ambiente Beatles/industrial.",
              note: "Do guia — TOP. Sem reserva. Alternativa: Land curry (Meguro, ¥1.500–2.500) — curry autoral imperdível."
            },
            {
              name: "Descente Allterrain + Nanamica (Daikanyama)",
              time: "17:00",
              emoji: "",
              tags: ["shop"],
              duration: "45 min",
              detail: "Descente Allterrain: camisetas/shorts ¥9.000–15.000, jaquetas técnicas ¥25.000–60.000. Nanamica: tshirts ¥10.000–18.000, camisas/shorts ¥18.000–35.000, GORE-TEX ¥45.000–90.000.",
              note: "Esportiva + casual técnico num só circuito. Alternativa à Goldwin."
            },
            {
              name: "Bonjour Records + Maison Kitsuné",
              time: "17:45",
              emoji: "",
              tags: ["shop"],
              duration: "45 min",
              detail: "Bonjour Records: vinyl e música, 24-1 Sarugakucho. Maison Kitsuné + Log Road na sequência.",
              note: ""
            },
            {
              name: "Jantar — Tatemichiya izakaya (Daikanyama)",
              time: "19:30",
              emoji: "",
              tags: ["food"],
              duration: "2h",
              detail: "30-8 Sarugakucho, Shibuya-ku. ¥3.000–5.000 (~$26 USD). Izakaya punk rock clássico. Pequeno, barato e muito autêntico.",
              note: "Do guia — TOP. RESERVAR! Alternativa: Schmatz cervejaria (Nakameguro, ¥3.000–5.000).",
              reserved: "pending"
            },
          ]
        },
        {
          date: "01/05",
          dayOfWeek: "Sex",
          theme: "Kamakura day trip",
          synopsis: "Day trip — trem + bastante caminhada + escadarias. Trem 1h de Shibuya até Kamakura. Grande Buda (taxi 10 min da estação), floresta de bambu Hokoku-ji, almoço shirasu local, templo Engaku-ji. Tudo a pé entre os pontos (com escadarias nos templos — sapato bom). Trem 1h de volta. Ramen no Iruca em Roppongi + Golden Gai bares em Shinjuku. Dia mais físico em Tokyo — muita caminhada e subida. Levar garrafa d'água e protetor solar.",
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
              name: "Iruca Tokyo — ramen (Roppongi)",
              time: "18:00",
              emoji: "",
              tags: ["food"],
              duration: "1h",
              detail: "4-12-12 Roppongi, Minato-ku. ¥1.200–1.800 (~$10 USD). Um dos melhores ramen de Tokyo — porcini + yuzu. Sempre fila, vale a espera.",
              note: "Do guia — TOP. Alternativa: Kikanbo (Kanda) ramen picante."
            },
            {
              name: "Golden Gai — bares",
              time: "20:00",
              emoji: "",
              tags: ["night"],
              duration: "2h",
              detail: "Shinjuku. 200+ bares minúsculos em becos. | Metro 15 min de Roppongi.",
              note: "Cada bar tem 5-8 lugares. Entrar nos que parecerem interessantes."
            }
          ]
        },
        {
          date: "02/05",
          dayOfWeek: "Sab",
          theme: "Asakusa + Yanaka",
          synopsis: "Dia longo — acordar 5:30, muito a pé + metro. Senso-ji às 6h (templo vazio, foto incrível). Kappabashi rua de facas e utensílios (taxi 10 min). Okonomiyaki almoço em casa antiga. Yanaka à tarde — becos, cemitério, gatos, o bairro mais antigo de Tokyo. Ueno Park. Yakiniku Jambo Hanare jantar perto de Ueno. Metro entre os pontos (Asakusa → Kappabashi → Yanaka → Ueno). Bastante caminhada. Dia mais fotogênico de Tokyo — levar câmera carregada.",
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
              emoji: "",
              tags: ["food"],
              duration: "1h",
              detail: "2-2-2 Nishi-Asakusa, Taito-ku, Tokyo. ¥1.000–2.000 (~$10 USD). Okonomiyaki e monjayaki numa casa antiga de 1937. Você cozinha na mesa.",
              note: "Atmosfera incrível — casa de madeira original. Sem reserva, cash only."
            },
            {
              name: "HARRY Asakusa — otter cafe (lontras!)",
              time: "13:15",
              emoji: "",
              tags: ["culture"],
              duration: "45 min",
              detail: "5F Masuda Building, 1-1-17 Asakusa, Taito-ku. 5 min do Kaminarimon. Lontras + ouriços + corujas + outros bichos. ¥1.500–2.500 (~$13 USD)/pessoa por 30 min, drink incluso.",
              note: "RESERVAR online (rakuten travel ou site oficial harinezumi-cafe.com). Lontras são o destaque — interagem direto."
            },
            {
              name: "Yanaka — cemitério, becos, gatos",
              time: "14:30",
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
              name: "Jantar — Jambo Hanare yakiniku (Ueno)",
              time: "19:00",
              emoji: "",
              tags: ["food"],
              duration: "2h",
              detail: "Hongo, Bunkyo-ku. ¥5.000–8.000 (~$43 USD). Yakiniku top perto de Ueno. Peça arroz com carne e manteiga — combinação absurda.",
              note: "Do guia. Reserva obrigatória. Alternativa: Hiyama sukiyaki Michelin (Nihonbashi, ¥10.000–18.000)."
            }
          ]
        },
        {
          date: "03/05",
          dayOfWeek: "Dom",
          theme: "Shibuya + Despedida",
          synopsis: "Último dia completo — geek + lojas + comida. Shibuya Crossing, vinyl (Face/Lighthouse Records), Oakley Store Shibuya (customizar óculos de corrida — único do Japão com bordado). Kith + GR8 (Miyashita Park). Pokémon Center + Nintendo + Yu-Gi-Oh (Parco 6F — boosters mystery!). Disk Union Shinjuku. Almoço Katsudon Zuicho. Butagumi tonkatsu. Artesanato Aoyama. Jantar de despedida (a definir). Record bar pra fechar.",
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
              emoji: "",
              tags: ["shop"],
              duration: "1h",
              detail: "Vinyl hunt em Shibuya",
              note: ""
            },
            {
              name: "Oakley Store Shibuya — custom corrida",
              time: "11:00",
              emoji: "",
              tags: ["shop"],
              duration: "1h",
              detail: "2-29-22 Dogenzaka, Shibuya-ku (2 min do Crossing). Flagship asiático — única loja do Japão com Customization Bar + Prescription Lab + bordado. Eyewear no 1F (uma das maiores seleções do Japão), apparel no 2F. Couselor full-time pra explicar funções. Sutro/Kato/Encoder ¥25.000–40.000 (~$165–265). Custom com lentes Prizm + bordado +¥5.000–15.000.",
              note: "Pra óculos de corrida customizado — escolher armação, cor das lentes Prizm, gravar nome. Tax refund 10% acima de ¥5.500."
            },
            {
              name: "Kith Tokyo + GR8 (Miyashita Park)",
              time: "12:00",
              emoji: "",
              tags: ["shop"],
              duration: "45 min",
              detail: "MIYASHITA PARK North 1F, 6-20-10 Jingumae. Kith: tshirts ¥8.000–18.000, hoodies ¥20.000–40.000, sneakers ¥15.000–80.000. GR8: Satisfy Running ¥15.000–35.000, District Vision óculos ¥30.000–50.000, statement pieces ¥20.000–150.000.",
              note: "5 min do Shibuya Crossing. Kith mais acessível, GR8 statement/curado."
            },
            {
              name: "Pokémon Center + Nintendo + Card Shops (Parco 6F)",
              time: "12:45",
              emoji: "",
              tags: ["shop"],
              duration: "1h30",
              detail: "Shibuya Parco 6F, 15-1 Udagawacho. Booster pack Pokémon ¥165–550 (1 pacote), box completa ¥4.500–8.000. Yu-Gi-Oh booster ¥165–500, deck pronto ¥2.000–5.000. Cartas raras: ¥1.000–500.000+. Pelúcias Pokémon ¥1.500–8.000, figures Nintendo ¥3.000–15.000. 10h–21h.",
              note: "TUDO num só andar — Pokémon Center + Nintendo Tokyo + Capcom + card shops Yu-Gi-Oh/One Piece. Boosters mystery escarlate/violeta tem cartas EX/UR. Tax refund 10% acima de ¥5.500."
            },
            {
              name: "Disk Union Shinjuku",
              time: "14:15",
              emoji: "",
              tags: ["shop"],
              duration: "1h",
              detail: "Metro 10 min. O maior vinyl store do mundo.",
              note: "Andares inteiros organizados por gênero. Apertar pra ir direto ao gênero favorito."
            },
            {
              name: "Almoço rápido — Katsudon-ya Zuicho (Shibuya)",
              time: "15:15",
              emoji: "",
              tags: ["food"],
              duration: "45 min",
              detail: "41-26 Udagawacho, Shibuya-ku. ¥1.500–2.000 (~$12 USD). Só 8 lugares e uma opção no menu. Sempre fila. Cash only.",
              note: "Do guia. Alternativa: Ryan Soba (1-4-13 Shibuya, ¥1.500–3.000) — soba artesanal moderno."
            },
            {
              name: "Used Camera Box",
              time: "14:30",
              emoji: "",
              tags: ["shop"],
              duration: "1h",
              detail: "1-13-7 Nishishinjuku. Cameras vintage.",
              note: "Se achar uma Leica interessante..."
            },
            {
              name: "Butagumi — tonkatsu premium (Nishi-Azabu)",
              time: "16:00",
              emoji: "",
              tags: ["food"],
              duration: "1h",
              detail: "2-24-9 Nishi-Azabu. ¥2.500–4.000 (~$21 USD). Casa pequena, tonkatsu de porco de raça específica. Sem reserva, vá cedo.",
              note: "Do guia — TOP. Outro nível de tonkatsu. Taxi 15 min de Shinjuku."
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
              name: "Jantar — despedida (a definir)",
              time: "20:00",
              emoji: "",
              tags: ["food"],
              duration: "2h",
              detail: "Slot flex pra jantar de despedida. Sugestões do guia: Hiyama sukiyaki Michelin (Nihonbashi, ¥10.000–18.000), Sushi Shin (Nishi-Azabu, ¥20.000–30.000), Kotaro (Shibuya, ¥8.000–15.000 — meses de espera).",
              note: "Sazanka removido. Escolher alternativa antes da viagem ou pedir indicação no Hyatt."
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
          synopsis: "Dia curto — manhã livre + aeroporto. Sushi no Itadori Bekkan em Tsukiji (8h, 10 min a pé do hotel). Últimas compras Tsukiji/Ginza. Check-out Hyatt 12:00. Keikyu Line direto pro Haneda (30 min, ¥630). Voo 17:45. Sem caminhada pesada, sem metro complicado. Organizar malas na noite anterior. Facas na mala despachada, não no carryon. Lembrar dos recibos de tax-free.",
          activities: [
            {
              name: "Manhã — Itadori Bekkan sushi (Tsukiji)",
              time: "08:00",
              emoji: "",
              tags: ["food"],
              duration: "1h",
              detail: "1F, 4-10-16 Tsukiji, Chuo-ku. ¥2.000–4.000 (~$20 USD). Escondido atrás de lojas. Sushi simples, peixe de altíssima qualidade. Atum gordo e uni obrigatórios.",
              note: "Do guia. Sem reserva. Alternativa: Nemuro Hanamaru (Ginza, ¥2.000–4.000) — melhor custo-benefício."
            },
            {
              name: "Últimas compras — Tsukiji/Ginza",
              time: "09:30",
              emoji: "",
              tags: ["shop"],
              duration: "2h",
              detail: "Últimas horas em Tokyo. Voltar ao favorito ou pegar presentes.",
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
    if (!panel.classList.contains('hidden')) {
      renderEssentialInfo();
    }
  }
}

function renderEssentialInfo() {
  // Create content container if it doesn't exist
  let container = document.getElementById('essential-info-content');
  if (!container) {
    const panel = document.getElementById('essential-info-panel');
    if (!panel) return;
    container = document.createElement('div');
    container.id = 'essential-info-content';
    panel.appendChild(container);
  }

  let html = '';

  // Emergency
  html += '<div class="essential-section">';
  html += '<h4>Emergência</h4>';
  html += `<p>Polícia: ${ESSENTIAL_INFO.emergency.police}</p>`;
  html += `<p>Ambulância: ${ESSENTIAL_INFO.emergency.ambulance}</p>`;
  html += `<p>Embaixada BR: ${ESSENTIAL_INFO.emergency.embassy_br}</p>`;
  html += '</div>';

  // Transport
  html += '<div class="essential-section">';
  html += '<h4>Transporte</h4>';
  html += `<p>JR Pass: ${ESSENTIAL_INFO.transport.jr_pass}</p>`;
  html += `<p>IC Card: ${ESSENTIAL_INFO.transport.ic_card}</p>`;
  html += '</div>';

  // Connectivity
  html += '<div class="essential-section">';
  html += '<h4>Conectividade</h4>';
  html += `<p>eSIM: ${ESSENTIAL_INFO.connectivity.sim}</p>`;
  html += '</div>';

  // Phrases
  html += '<div class="essential-section">';
  html += '<h4>Frases Úteis</h4>';
  ESSENTIAL_INFO.phrases.forEach(phrase => {
    html += `<p><strong>${phrase.jp}</strong><br/>${phrase.pt}</p>`;
  });
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
    { key: 'must', label: 'Top' },
    { key: 'sushi', label: 'Sushi' },
    { key: 'ramen', label: 'Ramen' },
    { key: 'izakaya', label: 'Izakaya' },
    { key: 'yakitori', label: 'Yakitori' },
    { key: 'pizza', label: 'Pizza' },
    { key: 'curry', label: 'Curry' },
    { key: 'tempura', label: 'Tempura' },
    { key: 'yakiniku', label: 'Yakiniku' },
    { key: 'tonkatsu', label: 'Tonkatsu' },
    { key: 'kaiseki', label: 'Kaiseki' }
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
    html += `<h4>${hood.name}</h4>`;

    filteredRestaurants.forEach(r => {
      const mapsQuery = encodeURIComponent(`${r.name} ${r.address} Tokyo Japan`);
      const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
      const usd = yenToUsd(r.avg);

      html += `<div class="guide-restaurant ${r.must ? 'guide-must' : ''}">`;
      // Header row: name + price tier
      html += `<div class="guide-restaurant-header">`;
      html += `<span class="guide-restaurant-name">${r.name}</span>`;
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
      html += `<div class="guide-address">${r.address}</div>`;
      // Tip
      html += `<p class="guide-restaurant-tip">${r.tip}</p>`;
      // Maps link
      html += `<a href="${mapsLink}" target="_blank" class="guide-maps-link">mapa</a>`;
      html += `</div>`;
    });

    html += `</div>`;
  });

  // Non-Japanese favorites
  if (filter === 'all') {
    html += '<div class="guide-neighborhood">';
    html += '<h4>Não-Japonês (Favoritos)</h4>';
    const cats = {
      vietnamese: 'Vietnamita', chinese: 'Chinês', thai: 'Thai',
      burger: 'Burger', french: 'Francês', indian: 'Indiano',
      korean: 'Coreano', italian: 'Italiano'
    };
    Object.entries(RESTAURANT_GUIDE.nonJapanese).forEach(([key, names]) => {
      html += `<div class="guide-restaurant"><span class="guide-restaurant-name">${cats[key] || key}</span><p class="guide-restaurant-tip" style="margin-top:4px">${names.join(' · ')}</p></div>`;
    });
    html += '</div>';

    // Depachika section
    html += '<div class="guide-neighborhood">';
    html += '<h4>Depachika (Food Halls)</h4>';
    html += '<div class="guide-restaurant">';
    RESTAURANT_GUIDE.depachika.forEach(d => {
      html += `<div style="display:flex;justify-content:space-between;padding:4px 0;"><span>${d.name}</span><span style="color:var(--text3)">${d.area}</span></div>`;
    });
    html += '</div></div>';

    // High-end sushi (hard to book)
    html += '<div class="guide-neighborhood">';
    html += '<h4>Sushi Ultra High-End (meses de espera)</h4>';
    html += '<div class="guide-restaurant"><p class="guide-restaurant-tip">' + RESTAURANT_GUIDE.highEndSushi.join(' · ') + '</p></div>';
    html += '</div>';
  }

  container.innerHTML = html;
}

function filterRestaurants() {
  // Helper function for filtering - currently delegated to renderRestaurantGuide
}

// ============================================
// TOGGLE TOKYO GUIDE
// ============================================
function toggleTokyoGuide() {
  const panel = document.getElementById('tokyo-guide-panel');
  if (panel) {
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) {
      renderTokyoGuide();
    }
  }
}

// ============================================
// RENDER TOKYO GUIDE
// ============================================
function renderTokyoGuide(filter = 'all') {
  const container = document.getElementById('tokyo-guide-content');
  if (!container) return;

  let html = '';

  // Count total places
  let totalCount = 0;
  TOKYO_GUIDE.categories.forEach(cat => totalCount += cat.places.length);

  html += `<div class="guide-stats">${totalCount} lugares curados em ${TOKYO_GUIDE.categories.length} categorias</div>`;

  // Filter buttons
  html += '<div class="guide-filters">';
  const filters = [
    { key: 'all', label: 'Todos' },
    { key: 'highlight', label: 'Top' },
    { key: 'bairro', label: 'Por Bairro' }
  ];
  TOKYO_GUIDE.categories.forEach(cat => {
    filters.push({ key: cat.tag, label: cat.name.split(' /')[0].split(' (')[0] });
  });
  filters.forEach(f => {
    html += `<button class="guide-filter-btn ${filter === f.key ? 'active' : ''}" onclick="renderTokyoGuide('${f.key}')">${f.label}</button>`;
  });
  html += '</div>';

  // === VIEW: POR BAIRRO ===
  if (filter === 'bairro') {
    // Collect all places grouped by area
    const byArea = {};
    TOKYO_GUIDE.categories.forEach(cat => {
      cat.places.forEach(p => {
        const area = p.area;
        if (!byArea[area]) byArea[area] = [];
        byArea[area].push({ ...p, category: cat.name });
      });
    });

    // Sort areas by number of places (most first)
    const sortedAreas = Object.keys(byArea).sort((a, b) => byArea[b].length - byArea[a].length);

    sortedAreas.forEach(area => {
      const places = byArea[area];
      html += '<div class="guide-neighborhood">';
      html += `<h4>${area} <span style="font-weight:400;opacity:0.5">${places.length}</span></h4>`;

      places.forEach(p => {
        const mapsQuery = encodeURIComponent(`${p.name} ${p.address} Tokyo Japan`);
        const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

        html += `<div class="guide-restaurant ${p.highlight ? 'guide-must' : ''}">`;
        html += `<div class="guide-restaurant-header">`;
        html += `<span class="guide-restaurant-name">${p.name}</span>`;
        html += `</div>`;
        html += `<div class="guide-type-row"><span class="guide-restaurant-type">${p.category}</span> <span class="guide-restaurant-type">${p.type}</span></div>`;
        html += `<div class="guide-address">${p.address}</div>`;
        html += `<p class="guide-restaurant-tip">${p.desc}</p>`;
        html += `<a href="${mapsLink}" target="_blank" class="guide-maps-link">mapa</a>`;
        html += `</div>`;
      });

      html += '</div>';
    });

    container.innerHTML = html;
    return;
  }

  // === VIEW: POR CATEGORIA (default) ===
  TOKYO_GUIDE.categories.forEach(cat => {
    let places = cat.places;

    if (filter === 'highlight') {
      places = cat.places.filter(p => p.highlight);
    } else if (filter !== 'all') {
      if (cat.tag !== filter) return;
    }

    if (places.length === 0) return;

    html += '<div class="guide-neighborhood">';
    html += `<h4>${cat.name}</h4>`;

    places.forEach(p => {
      const mapsQuery = encodeURIComponent(`${p.name} ${p.address} Tokyo Japan`);
      const mapsLink = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;

      html += `<div class="guide-restaurant ${p.highlight ? 'guide-must' : ''}">`;
      html += `<div class="guide-restaurant-header">`;
      html += `<span class="guide-restaurant-name">${p.name}</span>`;
      html += `<span class="guide-restaurant-price" style="color:var(--text3)">${p.area}</span>`;
      html += `</div>`;
      html += `<div class="guide-type-row"><span class="guide-restaurant-type">${p.type}</span></div>`;
      html += `<div class="guide-address">${p.address}</div>`;
      html += `<p class="guide-restaurant-tip">${p.desc}</p>`;
      html += `<a href="${mapsLink}" target="_blank" class="guide-maps-link">mapa</a>`;
      html += `</div>`;
    });

    html += '</div>';
  });

  container.innerHTML = html;
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
      ${city.name}
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
      <h2>${city.name}</h2>
      <p>${city.dates} • ${city.nights} noites</p>
    </div>
  `;

  // Hotel
  if (city.hotel) {
    html += `
      <div class="section hotel-section">
        <h3>Hotel</h3>
        <p><strong>${city.hotel.name}</strong></p>
        <p>${city.hotel.detail}</p>
        ${city.hotel.note ? `<p style="font-size: 0.85em; color: #999;">${city.hotel.note}</p>` : ''}
      </div>
    `;
  }

  // Gastro
  if (city.gastro && city.gastro.length > 0) {
    html += '<div class="section gastro-section"><h3>Onde Comer</h3>';
    city.gastro.forEach(place => {
      const usd = yenToUsd(place.price);
      html += `
        <div class="gastro-item">
          <p><strong>${place.name}</strong></p>
          <p style="font-size: 0.88em; color: var(--gold);">${place.price}${usd ? ` <span style="color: var(--text3);">(${usd} USD)</span>` : ''}</p>
          <p style="font-size: 0.82em; color: var(--text3);">${place.location}</p>
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
    ${day.synopsis ? `<div class="day-synopsis"><p>${day.synopsis}</p></div>` : ''}
    <div class="mood-filter">
      <button onclick="filterMood('all')" class="mood-btn ${currentMood === 'all' ? 'active' : ''}">Todos</button>
      <button onclick="filterMood('food')" class="mood-btn ${currentMood === 'food' ? 'active' : ''}">Comida</button>
      <button onclick="filterMood('culture')" class="mood-btn ${currentMood === 'culture' ? 'active' : ''}">Cultura</button>
      <button onclick="filterMood('photo')" class="mood-btn ${currentMood === 'photo' ? 'active' : ''}">Foto</button>
      <button onclick="filterMood('nature')" class="mood-btn ${currentMood === 'nature' ? 'active' : ''}">Natureza</button>
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
          <p class="activity-name">${activity.name}</p>
          ${activity.tags.map(tag => `<span class="tag">${tagLabel(tag)}</span>`).join('')}
          <p class="activity-duration">${activity.duration}</p>
          <p class="activity-detail">${activity.detail}${googleMapsLink ? ` <a href="${googleMapsLink}" target="_blank">mapa</a>` : ''}</p>
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
    'food': 'comida',
    'culture': 'cultura',
    'photo': 'foto',
    'nature': 'natureza',
    'shop': 'compras',
    'night': 'noite',
    'transport': 'transporte'
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
  const container = document.getElementById('flights-content');
  if (!container) return;

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
  container.innerHTML = html;
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

  const priorityOrder = { 'critica': 0, 'alta': 1, 'media': 2, 'baixa': 3 };
  const priorityLabel = {
    'critica': { label: 'URGENTE', cls: 'prio-critica' },
    'alta': { label: 'IMPORTANTE', cls: 'prio-alta' },
    'media': { label: 'MÉDIA', cls: 'prio-media' },
    'baixa': { label: 'BAIXA', cls: 'prio-baixa' }
  };

  const sortedPending = [...TRIP.reservations.pending].sort((a, b) => {
    const pa = priorityOrder[a.priority] ?? 9;
    const pb = priorityOrder[b.priority] ?? 9;
    if (pa !== pb) return pa - pb;
    const [da, ma] = a.date.split('/').map(Number);
    const [db, mb] = b.date.split('/').map(Number);
    return (ma * 100 + da) - (mb * 100 + db);
  });

  let html = '<div class="reservations-content">';
  html += `<p class="reservations-intro">${sortedPending.length} reservas pendentes + ${TRIP.reservations.confirmed.length} confirmadas</p>`;

  // Pending (mais urgentes primeiro)
  if (sortedPending.length > 0) {
    html += '<div class="reservations-section"><h3>Pendentes — fazer agora</h3>';
    sortedPending.forEach(res => {
      const prio = priorityLabel[res.priority] || priorityLabel['media'];
      html += `
        <div class="reservation-item pending ${prio.cls}">
          <div class="res-header">
            <span class="res-priority ${prio.cls}">${prio.label}</span>
            <span class="res-city">${res.city}</span>
          </div>
          <p class="res-name">${res.name}</p>
          <p class="res-when">${res.date}${res.time ? ' às ' + res.time : ''}</p>
          ${res.how ? `<p class="res-how"><strong>Como reservar:</strong> ${res.how}</p>` : ''}
          ${res.note ? `<p class="res-note">${res.note}</p>` : ''}
        </div>
      `;
    });
    html += '</div>';
  }

  // Confirmed
  if (TRIP.reservations.confirmed.length > 0) {
    html += '<div class="reservations-section"><h3>Confirmadas</h3>';
    TRIP.reservations.confirmed.forEach(res => {
      html += `
        <div class="reservation-item confirmed">
          <div class="res-header">
            <span class="res-priority prio-confirmed">CONFIRMADA</span>
            <span class="res-city">${res.city}</span>
          </div>
          <p class="res-name">${res.name}</p>
          <p class="res-when">${res.date} às ${res.time}</p>
          ${res.price ? `<p class="res-price">${res.price}</p>` : ''}
          ${res.id ? `<p class="res-id">ID: ${res.id}</p>` : ''}
          ${res.note ? `<p class="res-note">${res.note}</p>` : ''}
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
