import { Navegação } from "./style";

export function Nav() {
    return (
            <Navegação>
                <header class="header">
                    <nav class="nav">
                        <ul class="nav-list">
                            <li><a class="nav-a-list" href="#home">Inicio</a></li>
                            <li><a class="nav-a-list" href="#about">Sobre</a></li>
                            <li><a class="nav-a-list" href="#">Experiências</a></li>
                            <li><a class="nav-a-list" href="#project">Projetos</a></li>
                            <li><a class="nav-a-list" href="#contact">Contato</a></li>
                        </ul>
                    </nav>
                </header>
            </Navegação>
    );
}