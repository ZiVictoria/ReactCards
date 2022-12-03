import style from '../Card/card.module.scss'

function Cards(props) {
    const handleClick = () => {
        props.onClick(props.id);
    };
    return (
        <div onClick={handleClick} className={style.container + " " + style[props.styles] + " " + (props.isSelected && style.selected)}>
            <div className={style.title}>{props.title}</div>
            <div>
                <div className={style.info}>
                    <div className={style.currency}>руб</div>
                    <div className={style.prices}>{props.price}</div>
                    <div className={style.period}>/мес</div>
                </div>
                <div className={style.coverage}>{props.coverage}</div>
                <div className={style.text}>Объем включенного трафика не ограничен</div>
            </div>
        </div>
    );
}

export default Cards;