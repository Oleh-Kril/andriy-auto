import styles from "../../styles/HomePage/BrandBlock.module.css"
import {useEffect, useRef} from "react"

function BrandBlock() {
    const doorRef = useRef(null)
    const upperDoorRef = useRef(null)
    const bottomDoorRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {

            // @ts-ignore
            if (entry.isIntersecting && !upperDoorRef.current.classList.contains(styles.visible)) {

                // @ts-ignore
                upperDoorRef.current.classList.add(styles.visible)
                // @ts-ignore
                bottomDoorRef.current.classList.add(styles.visible)

                console.log("added")
            }
        });

        // @ts-ignore
        observer.observe(doorRef.current);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.door}>
                <div ref={upperDoorRef} className={`${styles.upper_door} ${styles.door_element}`}>
                    <img src="door-grid.svg" alt="|-| |-| |-| |-| |-| |-| |-| |-| |-| |-| |-| |-| "/>
                </div>
                <div ref={bottomDoorRef} className={`${styles.bottom_door} ${styles.door_element}`}>
                    <img ref={doorRef} className={styles.door_teeth} src="door-grid.svg"
                         alt="|-| |-| |-| |-| |-| |-| |-| |-| |-| |-| |-| |-| "/>
                </div>
            </div>

            <div className={styles.content}>
                <h2>Бренд</h2>

                <ul className={styles.brands_container}>
                    <li>
                        <img src="jeep-brand.png" alt="jeep brand"/>
                    </li>

                    <li>
                        <img src="jeep-brand.png" alt="jeep brand"/>
                    </li>

                    <li>
                        <img src="jeep-brand.png" alt="jeep brand"/>
                    </li>

                    <li>
                        <img src="jeep-brand.png" alt="jeep brand"/>
                    </li>

                    <li>
                        <img src="jeep-brand.png" alt="jeep brand"/>
                    </li>

                    <li>
                        <img src="jeep-brand.png" alt="jeep brand"/>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default BrandBlock
