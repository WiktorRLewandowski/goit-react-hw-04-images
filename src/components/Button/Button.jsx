import css from './Button.module.css'

export const Button = ({onClick}) => {
    return (
        <div className={css.wrapper}>
            <button onClick={onClick} className={css.btn}>Load moar...</button>
        </div>
    )
}