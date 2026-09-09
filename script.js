// Troque os valores de affiliateLink pelos seus links oficiais de afiliado da Shopee.
const products = [
  {
    id: 1,
    name: 'Kit Presilhas de Cabelo Estrela Coloridas Cores Sortidas 10 20 50 100 Unidades',
    category: 'Acessórios',
    price: 10.00,
    oldPrice: 23.90,
    rating: 4.5,
    reviews: 80,
    badge: '38% OFF',
    image: 'https://down-aka-br.img.susercontent.com/br-11134207-820mh-mpxpl22c3y825b.webp',
    description: 'Kit Presilhas de Cabelo Estrela Coloridas Cores Sortidas 10 20 50 100 Unidades.',
    affiliateLink: 'https://s.shopee.com.br/BTczSEivr'
  },
  {
    id: 2,
    name: 'PARAFUSADEIRA E FURADEIRA A BATERIA PF21B2 21V COM DUAS BATERIAS F02 4979 - FALASCA',
    category: 'Casa',
    price: 129.90,
    oldPrice: 234.90,
    rating: 4.6,
    reviews: 864,
    badge: '36% OFF',
    image: 'https://down-zl-br.img.susercontent.com/sg-11134201-824ij-mefom612h69td4.webp',
    description: 'PARAFUSADEIRA E FURADEIRA A BATERIA PF21B2 21V COM DUAS BATERIAS F02 4979.',
    affiliateLink: 'https://s.shopee.com.br/6fh6j85ZpP'
  },
  {
    id: 3,
    name: 'Controle Sem Fio Bluetooth PS4',
    category: 'Games',
    price: 47.00,
    oldPrice: 59.90,
    rating: 4.7,
    reviews: 2104,
    badge: '36% OFF',
    image: 'https://down-zl-br.img.susercontent.com/sg-11134201-825a5-mqm0ievp9xqlde.webp',
    description: 'Controle Sem Fio Bluetooth PS4 Recarregável Joystick | Vibração + Touchpad | Compatível PC Smart TV Preto.',
    affiliateLink: 'https://s.shopee.com.br/4qFSXcTSX3'
  },
  {
    id: 4,
    name: 'Chinelo Feminino Masculino Nuvem Slide Confortável Macio',
    category: 'Moda',
    price: 39.90,
    oldPrice: 59.90,
    rating: 4.8,
    reviews: 672,
    badge: '27% OFF',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-7rfid-m3nuo7lr5uzr9a.webp',
    description: 'Chinelo Feminino e Masculino Nuvem Slide Confortável Macio HYPE.',
    affiliateLink: 'https://s.shopee.com.br/8plbIbnv9Y'
  },
  {
    id: 5,
    name: 'Teclado compacto gamer RGB.',
    category: 'Games',
    price: 96.45,
    oldPrice: 102.90,
    rating: 4.9,
    reviews: 3390,
    badge: '39% OFF',
    image: 'https://down-zl-br.img.susercontent.com/sg-11134301-8260l-mlzt1h898agx9d.webp',
    description: 'Teclado pequeno Teclado portátil Teclado de jogo Teclado mini Teclado compacto de 61 teclas RGB com fio para jogadores',
    affiliateLink: 'https://s.shopee.com.br/6L4GJI6kQb'
  },
  {
    id: 6,
    name: 'Câmera de Segurança Wi-Fi 360° Panorâmica Smart HD Night Vision',
    category: 'Eletrônicos',
    price: 149.00,
    oldPrice: 189.90,
    rating: 4.6,
    reviews: 412,
    badge: '27% OFF',
    image: 'https://down-bs-br.img.susercontent.com/br-11134207-7r98o-mcx5cdlbdts177.webp',
    description: 'Câmera Wi-Fi panorâmica com rotação 360°, visão noturna e monitoramento inteligente.',
    affiliateLink: 'https://s.shopee.com.br/60RPu3ayBq'
  },
  {
    id: 7,
    name: 'Espelho Orgânico 120X50cm e 95x40cm Lapidado Moderno Grande Forms C/ SUPORTE ou LED TOUCH',
    category: 'Casa',
    price: 79.99,
    oldPrice: 99.90,
    rating: 4.8,
    reviews: 945,
    badge: '33% OFF',
    image: 'https://down-zl-br.img.susercontent.com/br-11134207-820ll-mslrmo2fppfq1b.webp',
    description: 'Conjunto versátil para deixar suas gavetas organizadas sem esforço.',
    affiliateLink: 'https://s.shopee.com.br/4Vcc8Xkua6'
  },
  {
    id: 8,
    name: 'Fone De Ouvido Bluetooth 5.0 com display.',
    category: 'Áudio',
    price: 29.92,
    oldPrice: 39.90,
    rating: 4.7,
    reviews: 753,
    badge: '33% OFF',
    image: 'https://down-zl-br.img.susercontent.com/sg-11134201-7rfgy-m96aexqaol2f4e.webp',
    description: 'Fone De Ouvido Fone Bluetooth 5.0 Fone Sem Fio Fone Gamer Fone TWS Fone Esporte Fone com Display.',
    affiliateLink: 'https://s.shopee.com.br/4qFSX2qnib'
  },
  {
    id: 9,
    name: 'Moletom Estilo Gringo Basic Ou Flores',
    category: 'Moda',
    price: 80.91,
    oldPrice: 223.90,
    rating: 4.5,
    reviews: 80,
    badge: '78% OFF',
    image: 'https://down-br.img.susercontent.com/file/sg-11134201-823p1-mot19976445p67@resize_w450_nl.webp',
    description: 'Moletom Estilo Gringo Basic Ou Flores, Qualidade E Envio Imediato Full.',
    affiliateLink: 'https://s.shopee.com.br/7pt4JQMbus'
  },
  {
    id: 10,
    name: 'Mousepad gamer homem aranha, speed.',
    category: 'Games',
    price: 18.90,
    oldPrice: 34.90,
    rating: 4.6,
    reviews: 864,
    badge: '36% OFF',
    image: 'https://down-aka-br.img.susercontent.com/br-11134207-81ztc-mk0yutb62n7nc1.webp',
    description: 'mousepad gamer homem aranha speed.',
    affiliateLink: 'https://s.shopee.com.br/7AdNXLirh2'
  },
  {
    id: 11,
    name: 'Kit Mobilador Completo ',
    category: 'Games',
    price: 75.34,
    oldPrice: 99.90,
    rating: 4.7,
    reviews: 2104,
    badge: '36% OFF',
    image: 'https://down-bs-br.img.susercontent.com/br-11134207-7r98o-m32g7d6pp4ib32.webp',
    description: 'Kit Mobilador Completo 7 Peças Teclado Mouse Gamer Rgb Mouse Pad Hub Tripe Otg Micro e Tipo c.',
    affiliateLink: 'https://s.shopee.com.br/30noaBLbGx'
  },
  {
    id: 12,
    name: 'Boné Verde Militar Qualidade Premium',
    category: 'Moda',
    price: 59.90,
    oldPrice: 59.99,
    rating: 4.8,
    reviews: 672,
    badge: '1% OFF',
    image: 'https://down-bs-br.img.susercontent.com/br-11134207-820l4-msd1elv5pkas57.webp',
    description: 'Boné Verde Militar Qualidade Premium.',
    affiliateLink: 'https://s.shopee.com.br/5AsJAQklFl'
  },
  {
    id: 13,
    name: 'tenis masculino moderno.',
    category: 'Moda',
    price: 135.00,
    oldPrice: 155.90,
    rating: 4.9,
    reviews: 3390,
    badge: '21% OFF',
    image: 'https://down-bs-br.img.susercontent.com/br-11134207-820m6-ms22l5ntsrnpae.webp',
    description: ' tenis leve , tênis esportivo, tênis para corrida, tenis para academia',
    affiliateLink: 'https://s.shopee.com.br/9051jlFxZc'
  },
  {
    id: 14,
    name: 'Tênis De Corrida carbon.',
    category: 'Moda',
    price: 71.62,
    oldPrice: 189.90,
    rating: 4.6,
    reviews: 412,
    badge: '27% OFF',
    image: 'https://down-bs-br.img.susercontent.com/sg-11134201-8261o-mjyfg9rs969s85.webp',
    description: 'Nova Placa De Carbono Profissional Tênis De Corrida Sapatos De Moda Para Homens E Mulheres 33-44.',
    affiliateLink: 'https://s.shopee.com.br/8plbYqCip3'
  },
  {
    id: 15,
    name: 'Suporte de Controle PlayStation, Xbox, Switch - Gengar Pokémon',
    category: 'Acessórios',
    price: 39.00,
    oldPrice: 77.90,
    rating: 4.8,
    reviews: 945,
    badge: '33% OFF',
    image: 'https://down-bs-br.img.susercontent.com/br-11134207-820mg-mljn8rkhglxje4.webp',
    description: 'disponivel!.',
    affiliateLink: 'https://s.shopee.com.br/2LY7pCpn4s'
  },
  {
    id: 16,
    name: 'Teclado Sem Fio.',
    category: 'Eletrônicos',
    price: 55.99,
    oldPrice: 77.90,
    rating: 4.7,
    reviews: 753,
    badge: '33% OFF',
    image: 'https://down-bs-br.img.susercontent.com/br-11134207-820mg-mrs7rnav1ath38.webp',
    description: 'H MASTON JP110 Teclado Para Tablet Teclado Bluetooth Teclado Sem Fio Para Notebook Teclado 2.4Ghz Teclado Tablet',
    affiliateLink: 'https://s.shopee.com.br/7pt4NWuC0d'
},
{
id: 17,
name: 'Body Splash Nativa SPA PROMOÇÃO RELÂMPAGO! mulher sedutora',
category: 'Moda',
price: 19.90,
oldPrice: 19.90,
rating: 4.7,
reviews: 0,
badge: '0% OFF',
image: 'https://down-bs-br.img.susercontent.com/sg-11134201-8257t-mrrmamulro5dd5.webp',
description: 'Body Splash Nativa SPA PROMOÇÃO RELÂMPAGO! mulher sedutora',
affiliateLink: 'https://s.shopee.com.br/6Aks4zDzOc'
},
{
id: 18,
name: 'Kit 10 Marmitas Potes 800ml ',
category: 'Casa',
price: 29.90,
oldPrice: 44.90,
rating: 4.7,
reviews: 46,
badge: '21% OFF',
image: 'https://down-zl-br.img.susercontent.com/sg-11134201-822xh-mofhxybsqoss0f.webp',
description: 'Kit 10 Marmitas Potes 800ml Travas Laterais hermeticas Livres de BPA Alimentos organiza congelador - KAZIVA',
affiliateLink: 'https://s.shopee.com.br/30nqJSIuXU'
},
{
id: 19,
name: 'Video Game Retrô SF900 ',
category: 'Games',
price: 148.98,
oldPrice: 223.90,
rating: 4.7,
reviews: 6,
badge: '32% OFF',
image: 'https://down-bs-br.img.susercontent.com/sg-11134201-8261v-mkb47xnci68546.webp',
description: 'Video Game Retrô SF900 Super Nintendo 2400 jogos + 2 controles s/ fio Otimo Qualidade',
affiliateLink: 'https://s.shopee.com.br/7KwpTXm3Kp'
},
{
id: 20,
name: 'Lâmpada Bulbo Led Rgb  ',
category: 'Eletrônicos',
price: 18.90,
oldPrice: 32.90,
rating: 4.1,
reviews: 46,
badge: '33% OFF',
image: 'https://down-bs-br.img.susercontent.com/br-11134207-81ztc-mjyb92ywhvybb9.webp',
description: 'Lâmpada Bulbo Led Rgb 9w/12w/15w Luz Colorida 16 Cores Bivolt com controle remoto',
affiliateLink: 'https://s.shopee.com.br/BTewaU9QL'
},
{
id: 21,
name: 'Caixa de som Bluetooth Portátil Com Led RGB Portátil  ',
category: 'Áudio',
price: 106.90,
oldPrice: 222.90,
rating: 4.3,
reviews: 4546,
badge: '33% OFF',
image: 'https://down-bs-br.img.susercontent.com/br-11134207-7r98o-lqo1mmf95gcjc2.webp',
description: 'Caixa de som Bluetooth Portátil Com Led RGB Portátil FM USB TWS 30W Para Praia, Festa ou Viagem',
affiliateLink: 'https://s.shopee.com.br/4LJDuSqlA2'
},
{
id: 22,
name: 'Árabe Perfume 100ml  ',
category: 'Moda',
price: 99.00,
oldPrice: 143.90,
rating: 4.7,
reviews: 442,
badge: '14% OFF',
image: 'https://down-bs-br.img.susercontent.com/br-11134207-820m8-ms24c9nmgow77e.webp',
description: 'PERFUME ARABE 100ML',
affiliateLink: 'https://s.shopee.com.br/6q0YtEcnbK'
},
{
id: 23,
name: 'KIT 3 perfumes Atracion100ML masculino  ',
category: 'Moda',
price: 59.91,
oldPrice: 63.90,
rating: 4.7,
reviews: 442,
badge: '3% OFF',
image: 'https://down-bs-br.img.susercontent.com/sg-11134201-825ax-mqq5n3pm35e5bd.webp',
description: 'PERFUME ARABE 100ML',
affiliateLink: 'https://s.shopee.com.br/1qbswBabDJ'
},
{
id: 24,
name: ' Samsung Smartwatch Galaxy Fit3 Grafite ',
category: 'Eletrônicos',
price: 279.89,
oldPrice: 299.90,
rating: 4.7,
reviews: 442,
badge: '17% OFF',
image: 'https://down-bs-br.img.susercontent.com/sg-11134201-7rdwf-mcjnhbqzlmww8c.webp',
description: 'Samsung Smartwatch Galaxy Fit3 Grafite oficial',
affiliateLink: 'https://s.shopee.com.br/4LJDuu1qvM'
},
{
id: 25,
name: ' Bomba de Ar Portatil Compressor Inflator Multi-função 4 em 1 PowerBank 8kmah Bateria Calibrador de Carro Auto Pneu ',
category: 'Eletrônicos',
price: 189.99,
oldPrice: 200.90,
rating: 4.7,
reviews: 442,
badge: '7% OFF',
image: 'https://down-br.img.susercontent.com/file/br-11134207-7r98o-md4vuscumrsi3e_tn',
description: 'Bomba de Ar Portatil Compressor Inflator Multi-função 4 em 1 PowerBank 8kmah Bateria Calibrador de Carro Auto Pneu',
affiliateLink: 'https://s.shopee.com.br/40gNWPvcvw'
},
{
id: 26,
name: ' Parafusadeira de alta potência 26V/48V, caixa de armazenamento e mais de 30 acessórios (uso profissional)',
category: 'Casa',
price: 59.99,
oldPrice: 200.90,
rating: 4.7,
reviews: 442,
badge: '67 six seven% OFF',
image: 'https://down-aka-br.img.susercontent.com/sg-11134201-7rffj-m9dxhfocrycn5d.webp',
description: 'Parafusadeira de alta potência 26V/48V, caixa de armazenamento e mais de 30 acessórios (uso profissional)',
affiliateLink: 'https://s.shopee.com.br/70Jz79X6ZG'
},
{
id: 27,
name: 'Fone Bluetooth 5.4 – Sem Fios Alta Qualidade ',
category: 'Áudio',
price: 25.00,
oldPrice: 34.90,
rating: 4.7,
reviews: 42,
badge: '15 % OFF',
image: 'https://down-bs-br.img.susercontent.com/br-11134207-81ztc-mke49o55mcxu47.webp',
description: 'Fone Bluetooth 5.4 – Sem Fios Alta Qualidade Fone De Ouvido fone ouvido fone sem fio bluetooth headphone Fones 895B Tws',
affiliateLink: 'https://s.shopee.com.br/7VGFiWg1km'
}

];
const categories = [['Todos', '◈'], ['Eletrônicos', '⌁'], ['Casa', '⌂'], ['Moda', '◇'], ['Acessórios', '◌'], ['Games', '⌘'], ['Áudio', '♫']];
let currentCategory = 'Todos', searchTerm = '', favorites = JSON.parse(localStorage.getItem('xoffFavorites') || '[]');
const grid = document.querySelector('#productGrid'), categoryList = document.querySelector('#categoryList'), modal = document.querySelector('#productModal');
const money = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
function saveFavorites() { localStorage.setItem('xoffFavorites', JSON.stringify(favorites)); document.querySelector('#favoriteCount').textContent = favorites.length }
function isFavorite(id) { return favorites.includes(id) }
function categoryMarkup() { categoryList.innerHTML = categories.map(([name, icon]) => `<button class="category ${currentCategory === name ? 'active' : ''}" data-category="${name}"><span class="icon">${icon}</span><strong>${name}</strong></button>`).join('') }
function card(p) { return `<article class="card"><span class="badge">${p.badge}</span><button class="favorite ${isFavorite(p.id) ? 'active' : ''}" data-favorite="${p.id}" aria-label="Favoritar ${p.name}">${isFavorite(p.id) ? '♥' : '♡'}</button><img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy"><div class="card-body"><span class="product-category">${p.category}</span><h3 class="product-title">${p.name}</h3><div class="rating">★ ${p.rating} <small>(${p.reviews})</small></div><div class="prices"><span class="old-price">${money(p.oldPrice)}</span><strong class="price">${money(p.price)}</strong></div><div class="card-actions"><button class="details-button" data-detail="${p.id}">Detalhes</button><a class="shopee-button" href="${p.affiliateLink}" target="_blank" rel="noopener sponsored">Ver na Shopee</a></div></div></article>` }
function render() { const visible = products.filter(p => (currentCategory === 'Todos' || p.category === currentCategory) && p.name.toLowerCase().includes(searchTerm.toLowerCase())); grid.innerHTML = visible.map(card).join(''); document.querySelector('#emptyState').hidden = visible.length > 0; document.querySelector('#resultsInfo').textContent = `${visible.length} produto${visible.length !== 1 ? 's' : ''}`; document.querySelector('#clearFilter').hidden = currentCategory === 'Todos' && !searchTerm; categoryMarkup() }
function openModal(id) { const p = products.find(item => item.id === id); document.querySelector('#modalContent').innerHTML = `<div class="modal-product"><img src="${p.image}" alt="${p.name}"><div class="modal-copy"><span class="product-category">${p.category}</span><h2 id="modalTitle">${p.name}</h2><div class="rating">★ ${p.rating} <small>(${p.reviews} avaliações)</small></div><strong class="price">${money(p.price)}</strong><p>${p.description}</p><a class="button button-primary" href="${p.affiliateLink}" target="_blank" rel="noopener sponsored">Ver na Shopee <span>→</span></a></div></div>`; modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false') }
categoryList.addEventListener('click', e => { const button = e.target.closest('[data-category]'); if (button) { currentCategory = button.dataset.category; render() } });
grid.addEventListener('click', e => { const favorite = e.target.closest('[data-favorite]'), detail = e.target.closest('[data-detail]'); if (favorite) { const id = Number(favorite.dataset.favorite); favorites = isFavorite(id) ? favorites.filter(x => x !== id) : [...favorites, id]; saveFavorites(); render() } if (detail) openModal(Number(detail.dataset.detail)) });
document.querySelector('#searchInput').addEventListener('input', e => { searchTerm = e.target.value; render() }); document.querySelector('#clearFilter').onclick = () => { currentCategory = 'Todos'; searchTerm = ''; document.querySelector('#searchInput').value = ''; render() };
document.querySelector('.close-modal').onclick = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true') }; modal.addEventListener('click', e => { if (e.target === modal) e.currentTarget.classList.remove('open') }); document.addEventListener('keydown', e => { if (e.key === 'Escape') modal.classList.remove('open') });
document.querySelector('#favoritesButton').onclick = () => { currentCategory = 'Todos'; searchTerm = ''; document.querySelector('#searchInput').value = ''; grid.innerHTML = products.filter(p => isFavorite(p.id)).map(card).join('') || '<p class="empty-state">Você ainda não salvou nenhum favorito.</p>'; document.querySelector('#resultsInfo').textContent = `${favorites.length} favorito${favorites.length !== 1 ? 's' : ''}`; categoryMarkup() };
document.querySelector('.menu-button').onclick = e => { const menu = document.querySelector('.menu'); menu.classList.toggle('open'); e.currentTarget.setAttribute('aria-expanded', menu.classList.contains('open')) };
saveFavorites(); render();
