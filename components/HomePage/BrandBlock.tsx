import styles from "../../styles/HomePage/BrandBlock.module.scss"
import {useEffect, useRef, useState} from "react"
import BrandOption from "./BrandOption"

function BrandBlock() {

    const doorRef = useRef(null)
    const upperDoorRef = useRef(null)
    const bottomDoorRef = useRef(null)

    let [brandOptions, setBrandOption] = useState(Array<string>)

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
    }, [])
    useEffect(() => {
        console.log(brandOptions)
    }, [brandOptions])
    return (
        <section className={styles.section}>
            <div className={styles.door}>
                <div ref={upperDoorRef} className={`${styles.upper_door}`}>
                    <img src="door-grid.svg" alt="|-| |-| |-| |-| |-| |-| |-| |-| |-| |-| |-| |-| "/>
                </div>
                <div ref={bottomDoorRef} className={`${styles.bottom_door}`}>
                    <img ref={doorRef} className={styles.door_teeth} src="door-grid.svg"
                         alt="|-| |-| |-| |-| |-| |-| |-| |-| |-| |-| |-| |-| "/>
                </div>
            </div>

            <div className={styles.content}>
                <h2 className={styles.title_box}>
                    <span className={styles.title_text}>Бренд</span>
                </h2>

                <ul className={styles.brands_container}>
                    <BrandOption
                        image="brandLogos/jeep-brand.png"
                        alt="jeep brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/mitsubishi-brand.png"
                        alt="mitsubishi brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/bmw-brand.png"
                        alt="bmw brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/fiat-brand.png"
                        alt="fiat brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/maserati-brand.png"
                        alt="maserati brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/reno-brand.png"
                        alt="reno brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/nissan-brand.png"
                        alt="nissan brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/ford-brand.png"
                        alt="ford brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/reno-brand.png"
                        alt="reno brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/nissan-brand.png"
                        alt="nissan brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/ford-brand.png"
                        alt="ford brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/reno-brand.png"
                        alt="reno brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/nissan-brand.png"
                        alt="nissan brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                    <BrandOption
                        image="brandLogos/ford-brand.png"
                        alt="ford brand"
                        brandOptions={brandOptions}
                        setBrandOption={setBrandOption}
                    />
                </ul>
            </div>
        </section>
    )
}

export default BrandBlock
