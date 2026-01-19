'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

interface LanyardData {
  discord_user: {
    id: string;
    username: string;
    avatar: string;
    discriminator: string;
    global_name: string | null;
  };
  discord_status: 'online' | 'idle' | 'dnd' | 'offline';
  activities: Array<{
    name: string;
    type: number;
    state?: string;
    details?: string;
  }>;
}

interface TeamMember {
  id: string;
  role: string;
  description: string;
  category: 'leadership' | 'developers';
  link?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1240817297266966572', 
    role: 'Criador',
    description: 'Criador da Myra',
    category: 'leadership',
    link: 'https://discord.com/users/1240817297266966572',
  },
  {
    id: '1294100164503535669', 
    role: 'Administrador Chefe',
    description: 'Administrador Geral',
    category: 'leadership',
    link: 'https://discord.com/users/1294100164503535669',
  },
  {
    id: '1083428777809432606', 
    role: 'Chefe de Desenvolvimento',
    description: 'Desenvolvedor FullStack',
    category: 'leadership',
    link: 'https://discord.com/users/1083428777809432606',
  },
  {
    id: '1397324532565672118',
    role: 'Desenvolvedor',
    description: 'Desenvolvedor',
    category: 'developers',
    link: 'https://discord.com/users/1397324532565672118',
  },
  {
    id: '997210441505841234',
    role: 'Desenvolvedor',
    description: 'Desenvolvedor',
    category: 'developers',
    link: 'https://discord.com/users/997210441505841234',
  },
  {
    id: '310255208758509570',
    role: 'Desenvolvedor',
    description: 'Desenvolvedor FullStack',
    category: 'developers',
    link: 'https://gabriellucasafb.com.br',
  }
];

export function Team() {
  const [membersData, setMembersData] = useState<Map<string, LanyardData>>(new Map());

  useEffect(() => {
    const fetchMemberData = async (id: string) => {
      try {
        const response = await fetch(`https://api.lanyard.rest/v1/users/${id}`);
        const data = await response.json();
        if (data.success) {
          setMembersData((prev) => new Map(prev).set(id, data.data));
        }
      } catch (error) {
        console.error(`Erro ao buscar dados do membro ${id}:`, error);
      }
    };

    teamMembers.forEach((member) => {
      fetchMemberData(member.id);
    });

    const interval = setInterval(() => {
      teamMembers.forEach((member) => {
        fetchMemberData(member.id);
      });
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500';
      case 'idle':
        return 'bg-yellow-500';
      case 'dnd':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online':
        return 'Online';
      case 'idle':
        return 'Ausente';
      case 'dnd':
        return 'Não Perturbe';
      default:
        return 'Offline';
    }
  };

  return (
    <section id="team" className="py-16 min-h-screen pt-24 relative overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-500/20 mb-2">
            <Users className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Conheça a Equipe
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            As pessoas por trás da Myra que tornam tudo possível
          </p>
        </div>

        {/* Liderança */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Liderança
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {teamMembers.filter(m => m.category === 'leadership').map((member) => {
              const lanyardData = membersData.get(member.id);
              const avatarUrl = lanyardData
                ? `https://cdn.discordapp.com/avatars/${lanyardData.discord_user.id}/${lanyardData.discord_user.avatar}.png?size=256`
                : undefined;

              return (
                <Card
                  key={member.id}
                  onClick={() => member.link && window.open(member.link, '_blank')}
                  className={`group hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 border-2 border-emerald-500/30 dark:border-emerald-500/20 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 bg-white dark:bg-black/40 ${member.link ? 'cursor-pointer' : ''}`}
                >
                  <CardContent className="pt-5 text-center space-y-3">
                    <div className="relative inline-block">
                      <Avatar className="w-20 h-20 border-4 border-emerald-500/50 mx-auto">
                        <AvatarImage src={avatarUrl} />
                        <AvatarFallback className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xl">
                          {lanyardData?.discord_user.username.charAt(0).toUpperCase() || 'M'}
                        </AvatarFallback>
                      </Avatar>
                      {lanyardData && (
                        <div
                          className={`absolute bottom-1 right-1 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 ${getStatusColor(
                            lanyardData.discord_status
                          )}`}
                          title={getStatusText(lanyardData.discord_status)}
                        />
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {lanyardData?.discord_user.global_name ||
                          lanyardData?.discord_user.username ||
                          'Carregando...'}
                      </h3>
                      <Badge className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30 text-xs">
                        {member.role}
                      </Badge>
                    </div>

                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Desenvolvedores */}
        {teamMembers.filter(m => m.category === 'developers').length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
              Desenvolvedores
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {teamMembers.filter(m => m.category === 'developers').map((member) => {
                const lanyardData = membersData.get(member.id);
                const avatarUrl = lanyardData
                  ? `https://cdn.discordapp.com/avatars/${lanyardData.discord_user.id}/${lanyardData.discord_user.avatar}.png?size=256`
                  : undefined;

                return (
                  <Card
                    key={member.id}
                    onClick={() => member.link && window.open(member.link, '_blank')}
                    className={`group hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 border-2 border-emerald-500/30 dark:border-emerald-500/20 hover:border-emerald-500/60 dark:hover:border-emerald-500/50 bg-white dark:bg-black/40 ${member.link ? 'cursor-pointer' : ''}`}
                  >
                    <CardContent className="pt-5 text-center space-y-3">
                      <div className="relative inline-block">
                        <Avatar className="w-20 h-20 border-4 border-emerald-500/50 mx-auto">
                          <AvatarImage src={avatarUrl} />
                          <AvatarFallback className="bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xl">
                            {lanyardData?.discord_user.username.charAt(0).toUpperCase() || 'M'}
                          </AvatarFallback>
                        </Avatar>
                        {lanyardData && (
                          <div
                            className={`absolute bottom-1 right-1 w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 ${getStatusColor(
                              lanyardData.discord_status
                            )}`}
                            title={getStatusText(lanyardData.discord_status)}
                          />
                        )}
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {lanyardData?.discord_user.global_name ||
                            lanyardData?.discord_user.username ||
                            'Carregando...'}
                        </h3>
                        <Badge className="bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30 text-xs">
                          {member.role}
                        </Badge>
                      </div>

                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {member.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
