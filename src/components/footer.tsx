'use client';

import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Instagram, HelpCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-white dark:bg-black/60 backdrop-blur-sm border-t border-emerald-200 dark:border-emerald-500/20">
      <div className="container mx-auto px-4 py-12">
        {/* Grid de 4 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Coluna 1 - Branding */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 mb-4">
              <Link href="#inicio" className="cursor-pointer hover:opacity-80 transition-opacity">
                <Avatar className="border-2 border-emerald-600 dark:border-emerald-500/50 w-12 h-12">
                  <AvatarImage src="/image2.png" alt="Myra Bot" />
                  <AvatarFallback className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 font-bold">
                    M
                  </AvatarFallback>
                </Avatar>
              </Link>
              <Link href="#inicio" className="cursor-pointer hover:opacity-80 transition-opacity">
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-50">Myra Bot</h3>
              </Link>
            </div>
            <p className="text-sm text-emerald-700/80 dark:text-emerald-200/70 leading-relaxed max-w-xs">
              Myra Bot é uma assistente virtual com IA avançada desenvolvida pela Myra Team para automatizar e evoluir servidores Discord.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 hover:text-emerald-600 dark:text-emerald-200/70 dark:hover:text-emerald-400 transition-colors duration-300"
                aria-label="Discord"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Coluna 2 - Navegação */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-50 mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="text-sm text-emerald-700 hover:text-emerald-600 dark:text-emerald-200/70 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-emerald-700 hover:text-emerald-600 dark:text-emerald-200/70 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  Documentação
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre"
                  className="text-sm text-emerald-700 hover:text-emerald-600 dark:text-emerald-200/70 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3 - Suporte */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-50 mb-4">Suporte</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-700 hover:text-emerald-600 dark:text-emerald-200/70 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  Servidor de Suporte
                </a>
              </li>
              <li>
                <a
                  href="https://discord.gg/4ATaxCcwvUH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-emerald-700 hover:text-emerald-600 dark:text-emerald-200/70 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  Adicionar ao Discord
                </a>
              </li>
              <li>
                <Link
                  href="#termos"
                  className="text-sm text-emerald-700 hover:text-emerald-600 dark:text-emerald-200/70 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link
                  href="#privacidade"
                  className="text-sm text-emerald-700 hover:text-emerald-600 dark:text-emerald-200/70 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - FAQ Rápido */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-emerald-700 dark:text-emerald-50 mb-4 flex items-center">
              <HelpCircle className="w-5 h-5 mr-2 text-emerald-600 dark:text-emerald-400" />
              FAQ Rápido
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#configurar"
                  className="text-sm text-emerald-700 hover:text-emerald-600 dark:text-emerald-200/70 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  Como configurar o Myra Bot?
                </Link>
              </li>
              <li>
                <Link
                  href="#premium"
                  className="text-sm text-emerald-700 hover:text-emerald-600 dark:text-emerald-200/70 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  Quais são os benefícios Premium?
                </Link>
              </li>
              <li>
                <Link
                  href="#ia"
                  className="text-sm text-emerald-700 hover:text-emerald-600 dark:text-emerald-200/70 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  Como usar os comandos de IA?
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-emerald-700 hover:text-emerald-600 dark:text-emerald-200/70 dark:hover:text-emerald-400 transition-colors duration-300"
                >
                  Preciso de ajuda personalizada
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-emerald-200 dark:border-emerald-500/20 pt-8 mt-8">
          <div className="flex flex-col items-center gap-2">
            <p className="text-center text-sm text-emerald-700/80 dark:text-emerald-200/60">
              © 2026 Myra Team · Todos os direitos reservados.
            </p>
            <p className="text-center text-sm">
              <a
                href="https://discord.com/invite/clube-meia-noite-1186063021051748352"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700/80 dark:text-emerald-200/60 hover:text-green-800 dark:hover:text-green-400 transition-colors duration-300"
              >
                Powered by Rede Meia Noite
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

