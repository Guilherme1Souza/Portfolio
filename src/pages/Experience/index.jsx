import React, { useState } from 'react';
import { ExperienceSection } from '../../components/ExperienceSection';
import { TitlePrashes } from './style';


export function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      img: '/images/taxcel.png',
      empresa: 'Taxcel Soluções Fiscais S.A',
      date: '  09/2023 - Atual',
      cargo: 'Desenvolvedor Front End Júnior',
      functions: [
        'Realizo a manutenção e sustentação do site oficial da empresa com foco',
        'em melhorias contínuas de UX e na qualidade do código para otimizar a',
        'experiência do usuário  e a eficiência do projeto.',
      ],
    },
    {
      id: 2,
      img: '/images/pacaembu.png',
      empresa: 'Pacaembu Autopecas LTDA',
      date: '  10/2022 - 09/2023',
      cargo: 'Auxiliar de Tecnologia da Informação',
      functions: [
        'Atuei no desenvolvimento e implementação de novas features para a página de produtos, com foco',
        'na criação de interfaces. Além disso, realizei o monitoramento de links, tanto da matriz quanto das ',
        'filiais, utilizando ferramentas como Zabbix e Grafana. Outra parte importante do meu trabalho foi',
        'a coleta e análise de requisitos para projetos, garantindo que as soluções fossem alinhadas com as',
        'necessidades do negócio e do usuário.',
      ],
    },
    {
      id: 3,
      img: '/images/racoes.png',
      empresa: 'Grupo Rações Reis',
      date: ' 06/2020 - 10/2022',
      cargo: 'Auxiliar Fiscal',
      functions: [
        'Realizei o controle de notas de devolução por meio de planilhas em Excel, importando os dados',
        'para o Power BI e apresentando os resultados em reuniões de fechamento, auxiliando a diretoria',
        'na tomada de decisões com base nos resultados mensais.',
      ],
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div>
      <TitlePrashes>
        <h1>Experiências</h1>
        <p>Para obter mais detalhes, selecione a empresa desejada</p>
      </TitlePrashes>
     
      <ExperienceSection
        experiences={experiences}
        onExperienceClick={handleExperienceClick}
        selectedExperience={selectedExperience}
      />

    </div>
  );
}
