import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { ArrowDownRight, ArrowRight, Check, Clock3, Instagram, Mail, MapPin, Phone } from 'lucide-react';

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
          <span className="brand-mark" aria-hidden="true" />
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
          <div className="lens-center" />
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
  { number: '03', title: 'Montagens em suas armações', description: 'Podemos colacar as melhores lentes em armações que você possua.' },
  { number: '04', title: 'Gravações', description: 'Personalizamos canetas e outros itens com gravações a lazer.' },
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

const brands = ['Carmim', 'Rayban', 'Technos', 'Colcci', 'Next', 'Orient', 'Mormaii', 'Ecko'];

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
            {brands.map((brand) => <li key={brand} className="brand-pill" data-testid={`badge-brand-${brand.toLowerCase()}`}>{brand}</li>)}
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
          <a href={whatsappHref} target="_blank" rel="noreferrer" data-testid={`link-whatsapp-${label.toLowerCase().replaceAll(' ', '-')}`}><span aria-hidden="true" className="fab-icon">W</span> {whatsapp} (WhatsApp)</a>
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
          <LocationCard label="Matriz" name="Oticas Paris Sul - Matriz" address="Rua Primeiro de Março, 127 - S. Leopoldo" phone="(51) 3591-3664" phoneHref="5135913664" whatsapp="(51) 99170-6048" whatsappHref="https://wa.me/5551991706048" email="contato@oticasparissul.com.br" hours="Segunda a Sexta: 9h às 18h · Sábado: 9h às 13h - Loja da Primeiro de Março" mapHref="https://www.google.com/maps/search/?api=1&query=Rua+Primeiro+de+Março+127+São+Leopoldo+RS" />
          <LocationCard label="Filial 01" name="Oticas Paris Sul - Filial 01" address="Rua Independência, 961 - S. Leopoldo" phone="(51) 3037-2600 - Filial 01" phoneHref="5130372600" whatsapp="(51) 99324-8789" whatsappHref="https://wa.me/5551993248789" email="parisadm2@oticasparissul.com.br" hours="Segunda a Sexta: 9h às 18h · Sábado: 9h às 16:30h - Loja da Independência" mapHref="https://www.google.com/maps/search/?api=1&query=Rua+Independência+961+São+Leopoldo+RS" />
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

function WhatsAppFab() {
  return (
    <a className="whatsapp-fab" href="https://wa.me/5551991706048" target="_blank" rel="noreferrer" aria-label="Falar com a Óticas Paris Sul pelo WhatsApp" data-testid="link-floating-whatsapp">
      <span className="fab-icon" aria-hidden="true">W</span><span>Fale pelo WhatsApp</span>
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