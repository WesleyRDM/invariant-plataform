"use client";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Globe, Cpu, HelpCircle } from "lucide-react";

export default function InvariantLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* HERO */}
      <section className="relative overflow-hidden px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-10 flex justify-center">
            <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-[2px] shadow-2xl">
              <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                <Cpu className="w-16 h-16 text-purple-400" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            INVARIANT
          </h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto">
            AI Agents & Soluções Inteligentes para Restaurantes, Bares e Negócios Locais.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button className="rounded-2xl px-8 py-6 text-base">
              Solicitar Proposta
            </Button>
            <Button className="rounded-2xl px-8 py-6 text-base">
             Ver Como Funciona
            </Button>
          </div>
        </motion.div>
      </section>

      {/* PRODUTOS */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-pink-500 via-fuchsia-500 via-blue-500 to-violet-500 bg-clip-text text-transparent tracking-tight">
          Nossos Produtos
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <Card className="bg-slate-900/60 border-slate-800 rounded-2xl shadow-xl">
            <CardContent className="p-8">
              <Globe className="w-10 h-10 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 via-blue-500 to-violet-500" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Site Inteligente para Negócios
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Criamos um site moderno, responsivo e otimizado para SEO com
                fotos dos seus produtos, cardápio digital, localização,
                horários e integração com WhatsApp.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900/60 border-slate-800 rounded-2xl shadow-xl">
            <CardContent className="p-8">
              <Globe className="w-10 h-10 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 via-blue-500 to-violet-500" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Combo: Site + Chatbot Whatsapp Business
              </h3>
              <p className="text-slate-400 leading-relaxed">
                Automatize reservas, pedidos e atendimento via WhatsApp com um
                agente de IA treinado para responder clientes 24h por dia.
                Integração completa via Whatsapp Business.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="px-6 py-20 bg-slate-900/40">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-fuchsia-500 via-blue-500 to-violet-500 bg-clip-text text-transparent tracking-tight">
  Como Funciona</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-900 border-slate-800 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-violet-400">
                  1. Coleta de Dados</h4>
                <p className="text-white">
                  Recebemos informações, fotos e detalhes do seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-violet-400">
                  2. Construção & Treino</h4>
                <p className="text-white">
                  Desenvolvemos o site e treinamos o agente com base nas suas
                  regras e produtos.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="text-violet-400">
                  3. Implantação</h4>
                <p className="text-white">
                  Publicamos o site e ativamos o chatbot integrado ao WhatsApp.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SOBRE OS DESENVOLVEDORES */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 via-fuchsia-500 via-blue-500 to-violet-500 bg-clip-text text-transparent tracking-tight">
          Quem Somos</h2>
        <p className="text-slate-400 leading-relaxed">
          Somos desenvolvedores especializados em Inteligência Artificial,
          Machine Learning e construção de agentes autônomos. Nossa missão é
          aplicar tecnologia de ponta para gerar aumento real de receita e
          eficiência operacional para negócios locais.
        </p>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 bg-slate-900/40">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 via-fuchsia-500 via-blue-500 to-violet-500 bg-clip-text text-transparent tracking-tight">
            <HelpCircle className="w-8 h-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 via-blue-500 to-violet-500" /> FAQ
          </h2>

          <div className="space-y-6">
            <Card className="bg-slate-900 border-slate-800 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 text-violet-400">
                 O chatbot realmente responde sozinho?
                </h4>
                <p className="text-white">
               Sim. Ele utiliza IA para interpretar perguntas e responder com base nas informações do seu negócio.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 text-violet-400">
                  Posso atualizar meu cardápio depois?
                </h4>
                <p className="text-white">
                  Sim. Oferecemos manutenção e atualização contínua.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-900 border-slate-800 rounded-2xl">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-2 text-violet-400">
                  Em quanto tempo fica pronto?
                </h4>
                 <p className="text-white">
                  Entre 1 a 5 dias após o envio das informações.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} INVARIANT — AI Agents & Soluções
      </footer>
    </div>
  );
}
