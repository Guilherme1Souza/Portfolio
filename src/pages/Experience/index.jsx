import React, { useState } from 'react';
import { ExperienceSection } from '../../components/ExperienceSection';

export function ExperiencePage() {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer',
      description: 'Worked on developing full-stack applications.',
      functions: [
        'Developed front-end features using React.',
        'Collaborated with backend team to integrate APIs.',
        'Ensured responsive design for multiple devices.',
      ],
    },
    {
      id: 2,
      title: 'Product Manager',
      description: 'Led product development teams and managed roadmaps.',
      functions: [
        'Coordinated with design and engineering teams.',
        'Created product roadmaps and timelines.',
        'Reviewed product performance and made improvements.',
      ],
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      description: 'Designed user interfaces with a focus on user experience.',
      functions: [
        'Created wireframes and mockups.',
        'Conducted user research and testing.',
        'Collaborated with developers to implement designs.',
      ],
    },
  ];

  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div>
      <h1>My Experiences</h1>
      <ExperienceSection
        experiences={experiences}
        onExperienceClick={handleExperienceClick}
        selectedExperience={selectedExperience}
      />
    </div>
  );
}
