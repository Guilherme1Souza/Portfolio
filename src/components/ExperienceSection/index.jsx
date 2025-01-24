import { Container, Sidebar, ExperienceContent, ExperienceItem, Title, Description, TechsList, FunctionItem, Cargo, Date} from './style';
import { Buttons } from '../../components/hero/style';
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export function ExperienceSection({ experiences, onExperienceClick, selectedExperience }) {
    return (
        <Container>
                  <Buttons>
                          <a href="https://github.com/Guilherme1Souza">
                          <FaGithub />
                          </a>
                          <a href="https://www.linkedin.com/in/guilhermeeduardo/">
                          <FaLinkedin />
                          </a>
                          <a href="mailto:guilhermeeduardo2016@outlook.com">
                          <MdEmail />
                          </a>
        </Buttons>
            <Sidebar>
                {experiences.map((experience, index) => (
                    <ExperienceItem
                        key={index}
                        onClick={() => onExperienceClick(experience)}
                        isSelected={selectedExperience?.id === experience.id}
                    >
                        <img
                            src={experience.img}

                            style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', width: '140px', height: 'auto', objectFit: 'cover' }}
                        />
                    </ExperienceItem>
                ))}
            </Sidebar>

            <ExperienceContent>
                {selectedExperience && (
                    <div>
                        <Title>
                            {selectedExperience.empresa}
                        </Title>
                        <Cargo>
                            {selectedExperience.cargo}
                           
                        </Cargo>
                        <Date>
                        {selectedExperience.date}
                        </Date>
                        <Description>
                        {selectedExperience.functions.map((func, index) => (
                                <FunctionItem key={index}>{func}</FunctionItem>
                            ))}
                        </Description>

                        <TechsList>
                        
                        </TechsList>
                    </div>
                )}
            </ExperienceContent>
        </Container>
    );
}
