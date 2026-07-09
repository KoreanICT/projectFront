import { Link } from "react-router-dom";
import style from "./floatingButton.module.css";

const FloatingButton = () => {
    return (
        <div className={style.floatingContainer}>
            <Link to="/inquiry" className={style.floatingButton}>
                문의
            </Link>

            <button
                className={style.floatingButton}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                TOP
            </button>
        </div>
    );
};

export default FloatingButton;