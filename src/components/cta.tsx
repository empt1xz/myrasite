'use client';

import { Button } from './ui/button';

export function CTA() {
  return (
    <section className="relative mt-24 md:mt-32 py-24 md:py-32 overflow-hidden">
      {/* Background com gradiente e padrão de grid */}
      <div className="absolute inset-0">
        {/* Padrão de grid sutil */}
        <div 
          className="absolute inset-0 opacity-10 dark:opacity-30"

        />
        {/* Overlay de gradiente para suavizar */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent dark:from-black/50" />
      </div>

      {/* Conteúdo */}
      <div className="container mx-auto px-4 relative z-10">
        {/* Elementos decorativos sutis */}
        <div className="absolute top-10 left-4 md:left-10 w-20 h-20 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div 
          className="absolute bottom-10 right-4 md:right-10 w-32 h-32 bg-green-400/20 dark:bg-green-500/10 rounded-full blur-3xl animate-pulse" 
          style={{ animationDelay: '1s' }}
        />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white px-4">
            Pronto para{' '}
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 dark:from-emerald-400 dark:via-green-400 dark:to-emerald-500 bg-clip-text text-transparent">
              revolucionar
            </span>{' '}
            seu servidor?
          </h2>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-emerald-100/90 max-w-2xl mx-auto leading-relaxed px-4">
          Pronto para levar seu servidor a outro nível?
          Adicione o Myra Bot agora e experimente na prática.
          </p>

          {/* Botões CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 px-4">
            {/* Botão Primário */}
            <Button
              size="lg"
              className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              asChild
            >
              <a
                href="https://discord.com/oauth2/authorize?client_id=1455017163353096276&permissions=8&integration_type=0&scope=bot"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Adicionar ao Discord
              </a>
            </Button>

            {/* Botão Secundário */}
            <Button
              size="lg"
              variant="outline"
              className="group text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 border-2 border-emerald-600 dark:border-emerald-400/50 text-gray-900 dark:text-white hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:border-emerald-700 dark:hover:border-emerald-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/80 dark:bg-black/20 w-full sm:w-auto"
              asChild
            >
              <a href="/docs" className="cursor-pointer">
                Ver Documentação
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

