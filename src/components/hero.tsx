'use client';

import { Button } from '@/components/ui/button';
import { Users, Server, Command } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 "
    >
      <ParticlesBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white">
                Descubra a{' '}
                <span className="bg-gradient-to-r from-emerald-500 via-green-600 to-emerald-700 dark:from-emerald-400 dark:via-green-500 dark:to-emerald-600 bg-clip-text text-transparent font-extrabold">
                  Myra
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-muted-foreground">
                O melhor bot para seu servidor discord, com recursos poderosos e
                fácil de usar. 
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white border-0 w-full sm:w-auto" asChild>
                <a
                  href="LINK OAUTH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  Adicionar ao Discord
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base sm:text-lg px-6 sm:px-8 w-full sm:w-auto"
                asChild
              >
                <a href="/docs" className="cursor-pointer">Documentação</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center">
                  <Server className="w-8 h-8 text-emerald-600 dark:text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">0</div>
                <div className="text-sm text-gray-600 dark:text-muted-foreground">Servidores</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center">
                  <Users className="w-8 h-8 text-emerald-600 dark:text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">0</div>
                <div className="text-sm text-gray-600 dark:text-muted-foreground">Usuários</div>
              </div>
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center">
                  <Command className="w-8 h-8 text-emerald-600 dark:text-primary" />
                </div>
                <div className="text-3xl font-bold text-gray-900 dark:text-white">0</div>
                <div className="text-sm text-gray-600 dark:text-muted-foreground">Comandos</div>
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center -mt-12 order-1 lg:order-2">
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <img
                src="/image.png"
                alt="Myra Bot"
                className="w-full h-auto object-contain relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
