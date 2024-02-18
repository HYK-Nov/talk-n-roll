import style from "../../style/sidebar.module.scss"

function RightSideBar() {
    return (
        <div className={`border-l ${style.sidebar}`}>
            Right Sidebar
        </div>
    );
}

export default RightSideBar;