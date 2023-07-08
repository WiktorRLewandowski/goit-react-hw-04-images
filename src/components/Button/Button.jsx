import css from './Button.module.css'
import PropTypes from 'prop-types'

export const Button = ({onClick}) => {
    return (
        <div className={css.wrapper}>
            <button onClick={onClick} className={css.btn}>Load moar...</button>
        </div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}