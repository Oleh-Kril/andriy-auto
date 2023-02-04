import styles from "../../styles/ui/RangeSelector.module.scss"
import { useCallback, useEffect, useState, useRef} from "react"

type Props = {
    iconName: string,
    title: string,
    min: number,
    max: number,
    step: number,
    onChange: ({ min, max}: {min: Number, max: Number} ) => any;
}
function RangeSelector({min, max, step, iconName, title, onChange}: Props){
    const [minVal, setMinVal] = useState(min)
    const [maxVal, setMaxVal] = useState(max)
    const minValRef = useRef(min)
    const maxValRef = useRef(max)
    const range = useRef<HTMLDivElement>(null)

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    )
    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal)
        const maxPercent = getPercent(maxValRef.current)

        if (range.current) {
            range.current.style.left = `${minPercent}%`
            range.current.style.width = `${maxPercent - minPercent}%`
        }
    }, [minVal, getPercent])

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current)
        const maxPercent = getPercent(maxVal)

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`
        }
    }, [maxVal, getPercent])

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    return(
        <div className={styles.container}>
            <h3>{title}</h3>

            <div className={styles.slider}>
                <div className={styles.slider__track} />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    step = {step}
                    onChange={(event) => {
                        const value = Math.min(Number(event.target.value), maxVal - step)
                        setMinVal(value)
                        minValRef.current = value
                    }}
                    className={styles.thumb}
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    step = {step}
                    onChange={(event) => {
                        const value = Math.max(Number(event.target.value), minVal + step)
                        setMaxVal(value)
                        maxValRef.current = value
                    }}
                    className={styles.thumb}
                />
            </div>

            <div className={styles.info}>
                <div className={styles.info__value}>{minVal}</div>
                <img src={`icons/${iconName}.svg`} alt={iconName}/>
                <div className={styles.info__value}>{maxVal}</div>
            </div>

        </div>
    )
}

export default RangeSelector
