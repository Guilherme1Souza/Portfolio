import { ProfileInfo, HeroContainer, Buttons, Profile } from "./style";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


export function Home(){
    return(     
           <>
            <HeroContainer>
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
                <Profile>
                    <ProfileInfo>
                        <div>
                            <h2>Bem vindo</h2>
                            <p>Guilherme Souza</p>
                        </div>
                        <img
                            src="https://github.com/Guilherme1Souza.png"
                            alt="Foto de Guilherme Souza" />
                    </ProfileInfo>
                </Profile>
            </HeroContainer>
            </>
    );
}


   