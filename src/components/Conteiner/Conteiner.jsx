import s from './consteiner.module.css';

function Conteiner({children}) {
    return <div className={s.conteiner}>{children}</div>
}

export default Conteiner;