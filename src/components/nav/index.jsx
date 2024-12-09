import { Link } from "react-router-dom";
import { Navegação } from "./style";

export function Nav() {
    return (
            <Navegação>
                <header className="header">
                    <nav className="nav">
                        <ul className="nav-list">
                            <li><Link to="/" className="nav-a-list">Inicio</Link></li>
                            <li><Link to="/about" className="nav-a-list">Sobre</Link></li>
                            <li><Link to ="/experience" className="nav-a-list" >Experiência</Link></li>
                            <li><Link to ="/projects" className="nav-a-list">Projetos</Link></li>
                            <li><Link to="/contact" className="nav-a-list" >Contato</Link></li>
                        </ul>
                    </nav>
                </header>
            </Navegação>
    );
}