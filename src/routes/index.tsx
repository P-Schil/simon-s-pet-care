import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Bath,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Dog,
  Heart,
  Instagram,
  MapPin,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Truck,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const whatsappUrl =
  "https://wa.me/5511959654713?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20do%20Pet%20Shop%20Amigos%20do%20Simon.";

const services = [
  {
    icon: Bath,
    title: "Banho e Tosa Humanizado",
    description:
      "Cuidados de higiene com atendimento acolhedor, atenção individual e foco no conforto do seu pet.",
  },
  {
    icon: Truck,
    title: "Taxi Dog",
    description:
      "Transporte pensado para facilitar a rotina dos tutores e levar seu pet com praticidade e segurança.",
  },
  {
    icon: Heart,
    title: "Hospedagem",
    description:
      "Um espaço preparado para oferecer cuidado, atenção e tranquilidade durante a estadia.",
  },
  {
    icon: Sparkles,
    title: "Cromoterapia",
    description:
      "Uma experiência complementar de bem-estar integrada ao cuidado humanizado dos animais.",
  },
  {
    icon: PawPrint,
    title: "Banho de Ozônio",
    description:
      "Serviço complementar para uma rotina de higiene e cuidado diferenciada.",
  },
  {
    icon: Dog,
    title: "Produtos e Acessórios",
    description:
      "Rações, acessórios e itens selecionados para apoiar o bem-estar do seu pet no dia a dia.",
  },
];

const testimonials = [
  {
    quote:
      "O atendimento é cuidadoso e transmite muita confiança. Meu pet voltou tranquilo e muito bem cuidado.",
    name: "Cliente Amigos do Simon",
    role: "Tutor de pet",
  },
  {
    quote:
      "Encontrei um atendimento próximo e humanizado. É muito bom saber que meu pet está em boas mãos.",
    name: "Cliente Amigos do Simon",
    role: "Tutora de pet",
  },
  {
    quote:
      "A equipe demonstra carinho pelos animais e atenção aos detalhes desde o primeiro contato.",
    name: "Cliente Amigos do Simon",
    role: "Tutor de pet",
  },
];

const differentials = [
  "Atendimento personalizado e humanizado",
  "Infraestrutura completa para diferentes necessidades",
  "Equipe focada no bem-estar animal",
  "Orientação clara antes de cada serviço",
  "Relacionamento próximo com tutores",
  "Qualidade e ética como valores inegociáveis",
];

function Index() {
  const [testimonial, setTestimonial] = useState(0);

  const nextTestimonial = () =>
    setTestimonial((current) => (current + 1) % testimonials.length);
  const previousTestimonial = () =>
    setTestimonial(
      (current) => (current - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffdf8] text-[#171717]">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#1100ff] focus:px-5 focus:py-3 focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <header className="absolute left-0 right-0 top-0 z-30">
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10"
        >
          <a href="#" className="flex items-center gap-2" aria-label="Amigos do Simon - início">
            <span className="grid size-11 place-items-center rounded-2xl bg-[#f0f297] text-[#1100ff] shadow-sm">
              <PawPrint size={23} strokeWidth={2.5} />
            </span>
            <span className="text-sm font-black leading-tight text-white sm:text-base">
              AMIGOS DO SIMON
            </span>
          </a>

          <div className="hidden items-center gap-7 rounded-full bg-black/25 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md md:flex">
            <a href="#sobre" className="transition hover:text-[#f0f297]">Sobre</a>
            <a href="#servicos" className="transition hover:text-[#f0f297]">Serviços</a>
            <a href="#diferenciais" className="transition hover:text-[#f0f297]">Diferenciais</a>
            <a href="#depoimentos" className="transition hover:text-[#f0f297]">Depoimentos</a>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[#f0f297] px-5 py-3 text-sm font-extrabold text-[#1100ff] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl sm:flex"
          >
            <MessageCircle size={17} />
            Quero Tirar Dúvidas
          </a>
        </nav>
      </header>

      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#14243a]">
        <img
          src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=2200&q=85"
          alt="Cachorro recebendo cuidados em um ambiente profissional e acolhedor"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071426]/95 via-[#071426]/72 to-[#071426]/25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071426] via-transparent to-black/20" />

        <div id="conteudo" className="mx-auto flex min-h-[760px] max-w-7xl items-end px-5 pb-20 pt-40 sm:px-8 lg:px-10 lg:pb-28">
          <div className="max-w-3xl text-white">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold backdrop-blur">
              <Sparkles size={16} className="text-[#f0f297]" />
              Cuidado animal com carinho e expertise
            </div>
            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              Cuidado que entrega <span className="text-[#f0f297]">tranquilidade.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 sm:text-xl">
              Atendimento especializado, estrutura completa e cuidado humanizado
              para você ter a segurança de saber que seu pet está em boas mãos.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f0f297] px-7 py-4 font-black text-[#1100ff] shadow-xl transition hover:-translate-y-1"
              >
                Quero Falar com Especialista
                <ArrowRight size={18} />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-4 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Conhecer serviços
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#1100ff]">Sobre nós</p>
            <h2 className="max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">
              Mais do que serviços: uma relação de confiança.
            </h2>
            <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-black/65">
              <p>
                O Amigos do Simon nasceu com a proposta de oferecer cuidado completo
                e especializado para animais de estimação, unindo amor pelos animais,
                atendimento personalizado e uma infraestrutura completa.
              </p>
              <p>
                Nosso compromisso é construir relacionamentos duradouros com os
                tutores, com qualidade e ética como valores inegociáveis. Cada
                atendimento é pensado para que o pet seja tratado com respeito e
                como parte da família.
              </p>
            </div>
            <div className="mt-9 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-[#f0f297] p-5">
                <Heart className="mb-3 text-[#1100ff]" size={24} />
                <p className="text-sm font-bold">Cuidado</p>
                <p className="mt-1 text-xs text-black/60">Humanizado</p>
              </div>
              <div className="rounded-3xl bg-[#eef0ff] p-5">
                <ShieldCheck className="mb-3 text-[#1100ff]" size={24} />
                <p className="text-sm font-bold">Confiança</p>
                <p className="mt-1 text-xs text-black/60">Atendimento seguro</p>
              </div>
              <div className="rounded-3xl bg-[#f4f4f4] p-5">
                <Sparkles className="mb-3 text-[#1100ff]" size={24} />
                <p className="text-sm font-bold">Qualidade</p>
                <p className="mt-1 text-xs text-black/60">Foco em resultados</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-5 -z-10 rounded-[3rem] bg-[#f0f297]" />
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=1200&q=85"
              alt="Cachorro em ambiente acolhedor"
              className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-2xl"
              loading="lazy"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/92 p-5 shadow-xl backdrop-blur">
              <p className="text-sm font-black text-[#1100ff]">Nossa promessa</p>
              <p className="mt-1 font-bold">Qualidade, relacionamento e bem-estar em cada cuidado.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-20 bg-[#f3f4f7] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#1100ff]">Serviços</p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Tudo para cuidar do seu pet.</h2>
            <p className="mt-5 text-lg leading-8 text-black/60">
              Soluções pensadas para facilitar a rotina dos tutores e oferecer uma
              experiência de cuidado completa.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="group rounded-[2rem] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="grid size-14 place-items-center rounded-2xl bg-[#1100ff] text-[#f0f297] transition group-hover:scale-105">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-black">{service.title}</h3>
                  <p className="mt-3 min-h-20 leading-7 text-black/60">{service.description}</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-black text-[#1100ff]"
                  >
                    Quero Agendar uma Consulta
                    <ArrowRight size={16} />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="diferenciais" className="scroll-mt-20 px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#1100ff]">Diferenciais</p>
            <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
              O cuidado começa antes do atendimento.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-black/60">
              Nosso diferencial está no atendimento próximo, na atenção aos detalhes
              e na busca constante por uma experiência segura para pets e tutores.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {differentials.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-3xl border border-black/8 bg-white p-6 shadow-sm">
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#f0f297] text-[#1100ff]">
                  {index === 0 ? <Heart size={17} /> : <Check size={17} strokeWidth={3} />}
                </span>
                <div>
                  <p className="font-extrabold leading-6">{item}</p>
                  <p className="mt-1 text-sm leading-6 text-black/50">
                    Pensado para gerar confiança em cada etapa.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="depoimentos" className="scroll-mt-20 bg-[#1100ff] px-5 py-24 text-white sm:px-8 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-[#f0f297]">Prova social</p>
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">Quem conhece, confia.</h2>
          <div className="mt-12 rounded-[2.5rem] bg-white/10 p-7 backdrop-blur sm:p-12">
            <div className="mb-6 flex justify-center gap-1 text-[#f0f297]">
              {Array.from({ length: 5 }).map((_, index) => <Star key={index} size={20} fill="currentColor" />)}
            </div>
            <blockquote className="mx-auto max-w-3xl text-2xl font-bold leading-relaxed sm:text-3xl">
              “{testimonials[testimonial].quote}”
            </blockquote>
            <p className="mt-7 font-black">{testimonials[testimonial].name}</p>
            <p className="mt-1 text-sm text-white/65">{testimonials[testimonial].role}</p>

            <div className="mt-9 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={previousTestimonial}
                aria-label="Depoimento anterior"
                className="grid size-11 place-items-center rounded-full border border-white/25 transition hover:bg-white/10"
              >
                <ChevronLeft size={19} />
              </button>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setTestimonial(index)}
                  aria-label={`Ver depoimento ${index + 1}`}
                  className={`size-2.5 rounded-full transition ${index === testimonial ? "bg-[#f0f297] scale-125" : "bg-white/30"}`}
                />
              ))}
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Próximo depoimento"
                className="grid size-11 place-items-center rounded-full border border-white/25 transition hover:bg-white/10"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f0f297] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <div className="grid size-14 place-items-center rounded-2xl bg-[#1100ff] text-[#f0f297]">
            <MessageCircle size={27} />
          </div>
          <h2 className="mt-7 max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            Quer cuidar do seu pet com mais tranquilidade?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-black/65">
            Fale com o Amigos do Simon, tire suas dúvidas e encontre o serviço mais
            adequado para a sua necessidade.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1100ff] px-7 py-4 font-black text-white shadow-lg transition hover:-translate-y-1"
            >
              Quero Falar com Especialista
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+5511959654713"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#1100ff]/15 bg-white/45 px-7 py-4 font-black text-[#1100ff]"
            >
              (11) 95965-4713
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#071426] px-5 py-14 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-[#f0f297] text-[#1100ff]">
                <PawPrint size={22} />
              </span>
              <span className="font-black">AMIGOS DO SIMON</span>
            </div>
            <p className="mt-5 max-w-md leading-7 text-white/60">
              Cuidado completo, atendimento especializado e uma relação de confiança
              com quem considera o pet parte da família.
            </p>
          </div>

          <div>
            <p className="font-black">Contato</p>
            <div className="mt-4 space-y-3 text-sm text-white/65">
              <a className="flex gap-2 hover:text-white" href={whatsappUrl} target="_blank" rel="noreferrer">
                <MessageCircle size={17} /> (11) 95965-4713
              </a>
              <a className="flex gap-2 hover:text-white" href="mailto:amigosdosimon@gmail.com">
                <MessageCircle size={17} /> amigosdosimon@gmail.com
              </a>
              <p className="flex gap-2">
                <MapPin size={17} className="shrink-0" />
                Rua Uiraçu, 130 - Jardim Alfredo, São Paulo - SP, 04909-130
              </p>
            </div>
          </div>

          <div>
            <p className="font-black">Funcionamento</p>
            <p className="mt-4 flex gap-2 text-sm leading-7 text-white/65">
              <Clock3 size={17} className="mt-1 shrink-0" />
              Terça a sexta: 9h às 18h
              <br />
              Sábado: 8h às 17h
            </p>
            <a
              href="https://www.instagram.com/petshopamigosdosimon"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#f0f297] hover:underline"
            >
              <Instagram size={17} /> @petshopamigosdosimon
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} Amigos do Simon. Todos os direitos reservados.
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com Amigos do Simon pelo WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white"
      >
        <MessageCircle size={27} />
      </a>
    </main>
  );
}
