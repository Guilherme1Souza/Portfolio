import { Container, Sidebar, ExperienceContent, ExperienceItem, Title, Description, FunctionList, FunctionItem } from './style';

export function ExperienceSection({ experiences, onExperienceClick, selectedExperience }) {
    return (
        <Container>
            <Sidebar>
                {experiences.map((experience, index) => (
                    <ExperienceItem
                        key={index}
                        onClick={() => onExperienceClick(experience)}
                        isSelected={selectedExperience?.id === experience.id} 
                        >
                        {experience.title}
                    </ExperienceItem>
                ))}
            </Sidebar>

            <ExperienceContent>
                {selectedExperience && (
                    <div>
                        <Title>
                            {selectedExperience.title}
                        </Title>
                        <Description>
                            {selectedExperience.description}
                        </Description>

                        <FunctionList>
                            {selectedExperience.functions.map((func, index) => (
                                <FunctionItem key={index}>{func}</FunctionItem>
                            ))}
                        </FunctionList>
                    </div>
                )}
            </ExperienceContent>
        </Container>
    );
}
