import styles from "./pageHeader.module.css"

function PageHeader({ title, text, subtext, img }) {

    return (
        <header className={styles.header} style={{ backgroundImage: `url(${img})` }}>
            <div className={styles.headerContent}>
                <h3>{text}</h3>
                <h1>{title}</h1>
                <p>{subtext}</p>
            </div>
        </header>
    )
}

export default PageHeader