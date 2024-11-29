import { HeroContainer, Buttons } from "./style"
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";


export function Hero() {
    return (
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
        </HeroContainer>
    );
}
