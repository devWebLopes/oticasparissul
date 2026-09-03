import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowDownRight, ArrowRight, Check, Clock3, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const assetSrc = (filename: string) => `${import.meta.env.BASE_URL}${filename}`;
const logoSrc = assetSrc('oticas-paris-sul-logo.png');
const whatsappLogoSrc = assetSrc('whatsapp-icon.png');

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Contato', href: '#lojas' },
  { label: 'Encontre Seu Pedido', href: '#pedido' },
  { label: 'Área Restrita', href: '#restrict' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`} data-testid="site-header">
      <div className="nav-shell">
        <a className="brand" href="#inicio" onClick={closeMenu} data-testid="link-brand">
          <img className="brand-logo" src={logoSrc} alt="" aria-hidden="true" />
          <span className="brand-text">
            <strong>Óticas Paris Sul</strong>
            <span>São Leopoldo · RS</span>
          </span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => <a key={item.href} href={item.href} data-testid={`link-nav-${item.label.toLowerCase()}`}>{item.label}</a>)}
        </nav>
        <a className="button button-primary nav-cta" href="#lojas" data-testid="link-nav-agendar">Fale com a loja <ArrowRight size={15} aria-hidden="true" /></a>
        <button className={`menu-toggle ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Fechar menu' : 'Abrir menu'} data-testid="button-mobile-menu">
          <span aria-hidden="true" />
        </button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Navegação móvel">
        {navItems.map((item) => <a key={item.href} href={item.href} onClick={closeMenu} data-testid={`link-mobile-${item.label.toLowerCase()}`}>{item.label}</a>)}
        <a className="button button-primary" href="#lojas" onClick={closeMenu} data-testid="link-mobile-contato">Fale com a loja <ArrowRight size={15} aria-hidden="true" /></a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="hero-inner">
        <Reveal>
          <div className="eyebrow">Óticas Paris Sul</div>
          <h1 id="hero-title">Sua visão merece o <em>melhor cuidado.</em></h1>
          <p className="hero-copy">Na Óticas Paris Sul, combinamos tecnologia de ponta com atendimento personalizado para oferecer a melhor experiência em saúde ocular.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pedido" data-testid="link-hero-pedido">Encontre seu pedido <ArrowDownRight size={17} aria-hidden="true" /></a>
            <a className="button button-quiet" href="#servicos" data-testid="link-hero-servicos">Conheça nossos serviços</a>
          </div>
          <div className="hero-note" data-testid="text-hero-note">
            <span className="hero-note-mark" aria-hidden="true">PS</span>
            <span>Há um jeito certo de cuidar do seu olhar.</span>
          </div>
        </Reveal>
        <div className="hero-art" aria-hidden="true">
          <div className="lens-orbit" />
          <div className="lens-center">
            <img className="hero-logo" src={logoSrc} alt="" />
          </div>
          <span className="art-label">Olhar atento</span>
        </div>
        <a className="hero-scroll" href="#cuidado" data-testid="link-scroll-cuidado">Deslize</a>
      </div>
    </section>
  );
}

function CareSection() {
  return (
    <section className="section story-section" id="cuidado" aria-labelledby="care-title">
      <div className="section-inner story-layout">
        <Reveal>
          <div className="eyebrow">O nosso jeito</div>
          <h2 id="care-title">Precisão para os seus olhos. Presença para você.</h2>
          <p>Escolher uma lente ou uma armação é também escolher como você quer se sentir todos os dias. Por isso, cada conversa importa — da primeira medida ao último ajuste.</p>
        </Reveal>
        <Reveal className="story-aside" delay={180}>
          <div className="stat" data-testid="stat-atendimento"><strong>01</strong><span>escuta antes da escolha</span></div>
          <div className="stat" data-testid="stat-cuidado"><strong>02</strong><span>cuidado em cada detalhe</span></div>
        </Reveal>
      </div>
    </section>
  );
}

const services = [
  { number: '01', title: 'Lentes Especiais', description: 'Lentes fotossensíveis, anti-reflexo, blue light e até lentes de contato para melhorar sua visão.' },
  { number: '02', title: 'Armações Exclusivas', description: 'Oferecemos uma ampla seleção de armações das melhores marcas para todos os estilos e necessidades.' },
  { number: '03', title: 'Montagens em suas armações', description: 'Podemos colocar as melhores lentes em armações que você possua.' },
  { number: '04', title: 'Gravações', description: 'Personalizamos canetas e outros itens com gravações a laser.' },
];

function ServicesSection() {
  return (
    <section className="section services-section" id="servicos" aria-labelledby="services-title">
      <div className="section-inner">
        <Reveal className="section-heading">
          <div className="eyebrow">Feito para você</div>
          <h2 id="services-title">Nossos Serviços</h2>
          <p>Do cuidado técnico à escolha que combina com a sua rotina, conte com a gente para encontrar o que faz sentido para os seus olhos.</p>
        </Reveal>
        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.number} delay={index * 90}>
              <article className="service-card" data-testid={`card-service-${service.number}`}>
                <div>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-arrow" aria-hidden="true"><ArrowDownRight size={23} /></span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const brands = [
  { name: 'Carmim', filename: 'brand-carmim.png' },
  { name: 'Ray-Ban', filename: 'brand-rayban.png' },
  { name: 'Technos', filename: 'brand-technos.png' },
  { name: 'Colcci', filename: 'brand-colcci.png' },
  { name: 'Next', filename: 'brand-next.png' },
  { name: 'Orient', filename: 'brand-orient.png' },
  { name: 'Mormaii', filename: 'brand-mormaii.png' },
  { name: 'Ecko', filename: 'brand-ecko.png' },
];

function BrandsSection() {
  return (
    <section className="section brands-section" id="marcas" aria-labelledby="brands-title">
      <div className="section-inner">
        <Reveal className="section-heading">
          <div className="eyebrow">Escolhas que ficam</div>
          <h2 id="brands-title">Nossas Marcas</h2>
          <p>Uma seleção ampla para encontrar a armação que acompanha sua personalidade — e a sua vida.</p>
        </Reveal>
        <Reveal delay={100}>
          <ul className="brand-strip" aria-label="Marcas disponíveis">
            {brands.map((brand) => (
              <li key={brand.name} className="brand-pill" data-testid={`badge-brand-${brand.name.toLowerCase().replaceAll('-', '')}`}>
                <img src={assetSrc(brand.filename)} alt={brand.name} loading="lazy" />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function OrderSection() {
  const [order, setOrder] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (order.trim()) setSubmitted(true);
  };
  const clear = () => { setOrder(''); setSubmitted(false); };

  return (
    <section className="section order-section" id="pedido" aria-labelledby="order-title">
      <div className="section-inner">
        <Reveal>
          <div className="order-panel">
            <div>
              <div className="eyebrow">Acompanhe de perto</div>
              <h2 id="order-title">Encontre Seu Pedido</h2>
              <p>Digite o número do seu pedido para acompanhar o status de entrega e produção.</p>
            </div>
            <form className="order-form" onSubmit={submit} noValidate>
              <label className="order-label" htmlFor="order-number">Número do Pedido</label>
              <div className="order-row">
                <input id="order-number" className="order-input" value={order} onChange={(event) => { setOrder(event.target.value); setSubmitted(false); }} placeholder="Ex.: 12345" inputMode="numeric" data-testid="input-order-number" />
                <button className="button button-primary" type="submit" data-testid="button-track-order">Acompanhar Pedido <ArrowRight size={16} aria-hidden="true" /></button>
              </div>
              {submitted && <p className="order-message" role="status" data-testid="status-order-lookup"><Check size={14} aria-hidden="true" /> A consulta online não está conectada a um sistema de pedidos. Para um status real, fale diretamente com a loja.</p>}
              <button className="reset-button" type="button" onClick={clear} data-testid="button-clear-order">Limpar Consulta</button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type LocationCardProps = {
  label: string;
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
  whatsapp: string;
  whatsappHref: string;
  email: string;
  hours: string;
  mapHref: string;
};

function LocationCard({ label, name, address, phone, phoneHref, whatsapp, whatsappHref, email, hours, mapHref }: LocationCardProps) {
  return (
    <Reveal>
      <article className="location-card" data-testid={`card-location-${label.toLowerCase().replaceAll(' ', '-')}`}>
        <div className="location-tag">{label}</div>
        <h3>{name}</h3>
        <a className="location-address" href={mapHref} target="_blank" rel="noreferrer" data-testid={`link-map-${label.toLowerCase().replaceAll(' ', '-')}`}><MapPin size={16} aria-hidden="true" /> {address}</a>
        <div className="location-links">
          <a href={`tel:${phoneHref}`} data-testid={`link-phone-${label.toLowerCase().replaceAll(' ', '-')}`}><Phone size={15} aria-hidden="true" /> {phone}</a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" data-testid={`link-whatsapp-${label.toLowerCase().replaceAll(' ', '-')}`}><span aria-hidden="true" className="fab-icon"><img src={whatsappLogoSrc} alt="" /></span> {whatsapp} (WhatsApp)</a>
          <a href={`mailto:${email}`} data-testid={`link-email-${label.toLowerCase().replaceAll(' ', '-')}`}><Mail size={15} aria-hidden="true" /> {email}</a>
        </div>
        <p className="location-hours"><Clock3 size={15} aria-hidden="true" /> {hours}</p>
      </article>
    </Reveal>
  );
}

function LocationsSection() {
  return (
    <section className="section locations-section" id="lojas" aria-labelledby="locations-title">
      <div className="section-inner">
        <Reveal className="section-heading">
          <div className="eyebrow">Estamos por perto</div>
          <h2 id="locations-title">Entre em Contato</h2>
          <p>Duas lojas em São Leopoldo para você experimentar, perguntar e sair com a escolha certa.</p>
        </Reveal>
        <div className="locations-grid">
          <LocationCard label="Matriz" name="Óticas Paris Sul - Matriz" address="Rua Primeiro de Março, 127 - São Leopoldo/RS" phone="(51) 3591-3664" phoneHref="5135913664" whatsapp="(51) 99170-6048" whatsappHref="https://wa.me/5551991706048" email="contato@oticasparissul.com.br" hours="Segunda a Sexta: 9h às 18h · Sábado: 9h às 13h - Loja da Primeiro de Março" mapHref="https://www.google.com/maps/search/?api=1&query=Rua+Primeiro+de+Março+127+São+Leopoldo+RS" />
          <LocationCard label="Filial 01" name="Óticas Paris Sul - Filial 01" address="Rua Independência, 961 - São Leopoldo/RS" phone="(51) 3037-2600 - Filial 01" phoneHref="5130372600" whatsapp="(51) 99324-8789" whatsappHref="https://wa.me/5551993248789" email="parisadm2@oticasparissul.com.br" hours="Segunda a Sexta: 9h às 18h · Sábado: 9h às 16h30 - Loja da Independência" mapHref="https://www.google.com/maps/search/?api=1&query=Rua+Independência+961+São+Leopoldo+RS" />
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section className="section closing-section" aria-labelledby="closing-title">
      <div className="section-inner">
        <Reveal>
          <div className="eyebrow">Seu próximo olhar</div>
          <h2 id="closing-title">A armação certa muda o jeito de olhar.</h2>
          <p>Quando quiser, a gente está aqui para ajudar você a encontrar a sua.</p>
          <div className="closing-actions">
            <a className="button button-primary" href="https://wa.me/5551991706048" target="_blank" rel="noreferrer" data-testid="link-closing-whatsapp">Falar pelo WhatsApp <ArrowRight size={16} aria-hidden="true" /></a>
            <a className="button button-quiet" href="https://www.instagram.com/oticasparissul/" target="_blank" rel="noreferrer" data-testid="link-instagram"><Instagram size={16} aria-hidden="true" /> @oticasparissul</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer" id="restrict">
      <div className="footer-inner">
        <p className="footer-copy" data-testid="text-footer">© Óticas Paris Sul · São Leopoldo, RS</p>
        <div className="footer-links">
          <a href="#inicio" data-testid="link-footer-inicio">Voltar ao início</a>
          <a href="mailto:contato@oticasparissul.com.br" data-testid="link-footer-email">Contato</a>
          <a href="https://www.instagram.com/oticasparissul/" target="_blank" rel="noreferrer" data-testid="link-footer-instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppGlyph() {
  return (
    <svg className="whatsapp-fab-logo" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <path fill="#25D366" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
    </svg>
  );
}

function WhatsAppFab() {
  return (
    <a className="whatsapp-fab" href="https://wa.me/5551991706048" target="_blank" rel="noreferrer" aria-label="Falar com a Óticas Paris Sul pelo WhatsApp" title="Falar com a Óticas Paris Sul pelo WhatsApp" data-testid="link-floating-whatsapp">
      <WhatsAppGlyph />
    </a>
  );
}

function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo" data-testid="link-skip-content">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <CareSection />
        <ServicesSection />
        <BrandsSection />
        <OrderSection />
        <LocationsSection />
        <ClosingSection />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}

function App() {
  return <Home />;
}

export default App;