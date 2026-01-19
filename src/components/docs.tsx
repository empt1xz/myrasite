'use client';

import { useState, useMemo } from 'react';
import { Search, Shield, Wrench, Sparkles, Gamepad2, Coins, Info, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

// Tipos
interface Command {
  name: string;
  permission: string;
  description: string;
  usage: string;
  example: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  commands: Command[];
}

// Dados dos comandos
const categories: Category[] = [
  {
    id: 'admin',
    name: 'Administração',
    icon: <Shield className="w-5 h-5" />,
    commands: [
      {
        name: '/embed criar',
        permission: 'MANAGE_MESSAGES',
        description: 'Cria uma mensagem embed personalizada com título, descrição e cores.',
        usage: '/embed criar título:"Título" descrição:"Descrição" cor:#00ff00',
        example: '/embed criar título:"Bem-vindo!" descrição:"Bem-vindo ao servidor!" cor:#00ff00'
      },
      {
        name: '/ban',
        permission: 'BAN_MEMBERS',
        description: 'Bane um membro do servidor permanentemente.',
        usage: '/ban usuário:@membro motivo:"Violação das regras"',
        example: '/ban usuário:@spammer motivo:"Spam repetido"'
      },
      {
        name: '/kick',
        permission: 'KICK_MEMBERS',
        description: 'Remove um membro do servidor temporariamente.',
        usage: '/kick usuário:@membro motivo:"Motivo do kick"',
        example: '/kick usuário:@usuário motivo:"Comportamento inadequado"'
      },
      {
        name: '/mute',
        permission: 'MANAGE_ROLES',
        description: 'Silencia um membro em todos os canais de texto e voz.',
        usage: '/mute usuário:@membro tempo:1h motivo:"Motivo"',
        example: '/mute usuário:@usuário tempo:30m motivo:"Spam"'
      },
      {
        name: '/warn',
        permission: 'MANAGE_MESSAGES',
        description: 'Adiciona um aviso ao histórico de um membro.',
        usage: '/warn usuário:@membro motivo:"Motivo do aviso"',
        example: '/warn usuário:@usuário motivo:"Linguagem inadequada"'
      }
    ]
  },
  {
    id: 'utilities',
    name: 'Utilidades',
    icon: <Wrench className="w-5 h-5" />,
    commands: [
      {
        name: '/avatar',
        permission: 'Nenhuma',
        description: 'Mostra o avatar de um usuário em alta resolução.',
        usage: '/avatar usuário:@membro',
        example: '/avatar usuário:@Myra'
      },
      {
        name: '/serverinfo',
        permission: 'Nenhuma',
        description: 'Exibe informações detalhadas sobre o servidor.',
        usage: '/serverinfo',
        example: '/serverinfo'
      },
      {
        name: '/userinfo',
        permission: 'Nenhuma',
        description: 'Mostra informações sobre um usuário específico.',
        usage: '/userinfo usuário:@membro',
        example: '/userinfo usuário:@Myra'
      },
      {
        name: '/poll',
        permission: 'MANAGE_MESSAGES',
        description: 'Cria uma enquete com múltiplas opções.',
        usage: '/poll pergunta:"Pergunta?" opções:"Opção 1, Opção 2, Opção 3"',
        example: '/poll pergunta:"Qual sua cor favorita?" opções:"Vermelho, Azul, Verde"'
      },
      {
        name: '/remind',
        permission: 'Nenhuma',
        description: 'Define um lembrete para você mesmo.',
        usage: '/remind tempo:1h mensagem:"Lembrar de fazer algo"',
        example: '/remind tempo:30m mensagem:"Verificar emails"'
      }
    ]
  },
  {
    id: 'ai',
    name: 'Inteligência Artificial',
    icon: <Sparkles className="w-5 h-5" />,
    commands: [
      {
        name: '/chat',
        permission: 'Nenhuma',
        description: 'Conversa com a IA do Myra Bot usando inteligência artificial avançada.',
        usage: '/chat mensagem:"Sua pergunta ou mensagem"',
        example: '/chat mensagem:"Explique o que é inteligência artificial"'
      },
      {
        name: '/image',
        permission: 'Nenhuma',
        description: 'Gera uma imagem usando IA baseada em uma descrição.',
        usage: '/image prompt:"Descrição da imagem"',
        example: '/image prompt:"Um gato astronauta no espaço"'
      },
      {
        name: '/translate',
        permission: 'Nenhuma',
        description: 'Traduz texto para diferentes idiomas usando IA.',
        usage: '/translate texto:"Texto a traduzir" para:"inglês"',
        example: '/translate texto:"Olá, como você está?" para:"inglês"'
      },
      {
        name: '/summarize',
        permission: 'Nenhuma',
        description: 'Resume textos longos usando inteligência artificial.',
        usage: '/summarize texto:"Texto longo para resumir"',
        example: '/summarize texto:"Artigo ou texto extenso aqui..."'
      }
    ]
  },
  {
    id: 'fun',
    name: 'Diversão',
    icon: <Gamepad2 className="w-5 h-5" />,
    commands: [
      {
        name: '/meme',
        permission: 'Nenhuma',
        description: 'Gera um meme aleatório para alegrar o dia.',
        usage: '/meme',
        example: '/meme'
      },
      {
        name: '/joke',
        permission: 'Nenhuma',
        description: 'Conta uma piada aleatória.',
        usage: '/joke',
        example: '/joke'
      },
      {
        name: '/8ball',
        permission: 'Nenhuma',
        description: 'Faz uma pergunta para a bola 8 mágica.',
        usage: '/8ball pergunta:"Sua pergunta"',
        example: '/8ball pergunta:"Vou ter sucesso hoje?"'
      },
      {
        name: '/ship',
        permission: 'Nenhuma',
        description: 'Calcula a compatibilidade entre dois usuários.',
        usage: '/ship usuário1:@membro1 usuário2:@membro2',
        example: '/ship usuário1:@Alice usuário2:@Bob'
      },
      {
        name: '/rps',
        permission: 'Nenhuma',
        description: 'Joga pedra, papel ou tesoura contra o bot.',
        usage: '/rps escolha:"pedra" ou "papel" ou "tesoura"',
        example: '/rps escolha:"pedra"'
      }
    ]
  },
  {
    id: 'economy',
    name: 'Economia',
    icon: <Coins className="w-5 h-5" />,
    commands: [
      {
        name: '/balance',
        permission: 'Nenhuma',
        description: 'Verifica seu saldo de moedas no servidor.',
        usage: '/balance usuário:@membro',
        example: '/balance usuário:@Myra'
      },
      {
        name: '/daily',
        permission: 'Nenhuma',
        description: 'Recebe sua recompensa diária de moedas.',
        usage: '/daily',
        example: '/daily'
      },
      {
        name: '/pay',
        permission: 'Nenhuma',
        description: 'Transfere moedas para outro usuário.',
        usage: '/pay usuário:@membro quantidade:100',
        example: '/pay usuário:@amigo quantidade:500'
      },
      {
        name: '/shop',
        permission: 'Nenhuma',
        description: 'Abre a loja do servidor para comprar itens.',
        usage: '/shop',
        example: '/shop'
      },
      {
        name: '/buy',
        permission: 'Nenhuma',
        description: 'Compra um item da loja.',
        usage: '/buy item:"Nome do item"',
        example: '/buy item:"Cargo VIP"'
      }
    ]
  },
  {
    id: 'info',
    name: 'Informações',
    icon: <Info className="w-5 h-5" />,
    commands: [
      {
        name: '/help',
        permission: 'Nenhuma',
        description: 'Mostra a lista de comandos disponíveis ou ajuda sobre um comando específico.',
        usage: '/help comando:"nome do comando"',
        example: '/help comando:"embed criar"'
      },
      {
        name: '/ping',
        permission: 'Nenhuma',
        description: 'Verifica a latência do bot e do servidor Discord.',
        usage: '/ping',
        example: '/ping'
      },
      {
        name: '/stats',
        permission: 'Nenhuma',
        description: 'Mostra estatísticas do bot e do servidor.',
        usage: '/stats',
        example: '/stats'
      },
      {
        name: '/invite',
        permission: 'Nenhuma',
        description: 'Gera um link de convite para adicionar o bot em outros servidores.',
        usage: '/invite',
        example: '/invite'
      }
    ]
  }
];

export function Docs() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrar comandos baseado na busca
  const filteredCommands = useMemo(() => {
    const category = categories.find(cat => cat.id === selectedCategory);
    if (!category) return [];

    if (!searchQuery.trim()) {
      return category.commands;
    }

    const query = searchQuery.toLowerCase();
    return category.commands.filter(cmd =>
      cmd.name.toLowerCase().includes(query) ||
      cmd.description.toLowerCase().includes(query) ||
      cmd.permission.toLowerCase().includes(query)
    );
  }, [selectedCategory, searchQuery]);

  const selectedCategoryData = categories.find(cat => cat.id === selectedCategory);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSearchQuery('');
  };

  return (
    <main className="container mx-auto px-4 py-8 md:py-12">
      {/* Header da Documentação */}
      <div className="mb-8 md:mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
          Myra Bot Documentação
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6">
          Explore todos os comandos e recursos disponíveis
        </p>
        
        {/* Campo de Busca */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            type="text"
            placeholder="Pesquisar comandos…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-12 h-12 text-base bg-card border-2 border-border focus:border-emerald-500 dark:focus:border-emerald-400 rounded-lg"
          />
        </div>
      </div>

      {/* Layout em Duas Colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Coluna Esquerda - Categorias */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-2">
            <h2 className="text-lg font-semibold mb-4 text-foreground">Categorias</h2>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.id)}
                className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-200 text-left cursor-pointer ${
                  selectedCategory === category.id
                    ? 'bg-emerald-500/20 dark:bg-emerald-500/10 border-2 border-emerald-500/50 dark:border-emerald-400/30 shadow-lg shadow-emerald-500/10'
                    : 'bg-card border-2 border-border hover:border-emerald-500/30 dark:hover:border-emerald-400/20 hover:shadow-md'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`${selectedCategory === category.id ? 'text-emerald-500 dark:text-emerald-400' : 'text-muted-foreground'}`}>
                    {category.icon}
                  </div>
                  <span className={`font-medium ${selectedCategory === category.id ? 'text-emerald-600 dark:text-emerald-400' : 'text-foreground'}`}>
                    {category.name}
                  </span>
                </div>
                <Badge 
                  variant="secondary" 
                  className={`${selectedCategory === category.id ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400' : ''}`}
                >
                  {category.commands.length}
                </Badge>
              </button>
            ))}
          </div>
        </aside>

        {/* Coluna Direita - Conteúdo */}
        <div className="lg:col-span-3">
          {selectedCategoryData && (
            <>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  {selectedCategoryData.icon}
                  <h2 className="text-3xl font-bold text-foreground">
                    {selectedCategoryData.name}
                  </h2>
                </div>
                <p className="text-muted-foreground">
                  {filteredCommands.length} {filteredCommands.length === 1 ? 'comando disponível' : 'comandos disponíveis'}
                </p>
              </div>

              {filteredCommands.length === 0 ? (
                <Card className="border-2 border-dashed">
                  <CardContent className="py-12 text-center">
                    <p className="text-muted-foreground text-lg">
                      Nenhum comando encontrado para "{searchQuery}"
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {filteredCommands.map((command, index) => (
                    <Card 
                      key={index}
                      className="border-2 border-border hover:border-emerald-500/50 dark:hover:border-emerald-400/30 transition-all duration-200 hover:shadow-lg hover:shadow-emerald-500/10 bg-card"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4 flex-wrap">
                          <div className="flex-1">
                            <CardTitle className="text-xl md:text-2xl mb-2">
                              <code className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">
                                {command.name}
                              </code>
                            </CardTitle>
                            <CardDescription className="text-base mt-2">
                              {command.description}
                            </CardDescription>
                          </div>
                          <Badge 
                            variant="outline" 
                            className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 dark:border-emerald-400/20 font-mono text-xs"
                          >
                            {command.permission}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {/* Seção Uso */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                            Uso
                          </h4>
                          <div className="bg-muted dark:bg-muted/50 rounded-lg p-4 border border-border">
                            <code className="text-sm text-foreground font-mono break-all">
                              {command.usage}
                            </code>
                          </div>
                        </div>

                        {/* Seção Exemplo */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                            <ChevronRight className="w-4 h-4 text-emerald-500 dark:text-emerald-400" />
                            Exemplo
                          </h4>
                          <div className="bg-muted dark:bg-muted/50 rounded-lg p-4 border border-border">
                            <code className="text-sm text-emerald-600 dark:text-emerald-400 font-mono break-all">
                              {command.example}
                            </code>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
