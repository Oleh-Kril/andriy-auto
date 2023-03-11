import {useCallback, useEffect, useRef, useState} from "react"

type Props = {
    className?: string,
    headline?: string,
    open: boolean,
    children: any
}

type CallbackType = () => number
function AccordionItem( { className, open, children }: Props){

    const [height, setHeight] = useState(0)
    const [isOver, setOver] = useState(false)
    const bodyRef = useRef<HTMLDivElement>(null)

    const getDivHeight = useCallback<CallbackType>((): number => {
        const  height: number = bodyRef.current ? bodyRef.current.getBoundingClientRect().height : 0

        return height || 0
    }, [])

    // set `auto` to allow an inner content to change
    const handleTransitionEnd = useCallback(
        (e: any) => {
            if (e.propertyName === 'height') {
                // @ts-ignore
                setHeight(open ? 'auto' : 0)
                if (!open) {
                    setOver(true)
                }
            }
        },
        [open]
    )

    useEffect(() => {
        setHeight(getDivHeight())
        setOver(false)

        if (!open) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setHeight(0))
            })
        }

    }, [getDivHeight, open])

    const shouldHide = !open && isOver

    return (
        <div style={{overflow: 'hidden'}}>
            <div
                style={{ height, transition: "height 1s" }}
                onTransitionEnd={handleTransitionEnd}
            >
                <div ref={bodyRef} className={className}>
                    {shouldHide ? null : children}
                </div>
            </div>
        </div>
    )
}

export default AccordionItem
