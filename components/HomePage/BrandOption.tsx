import styles from "../../styles/HomePage/BrandBlock.module.scss"

type optionProps  = {
    brand: string
    setBrandOption: Function
    brandOptions: Array<string>
}


function BrandOption(props: optionProps){

    function onBrandClickHandler(event: any){
        //give active class to the button
        event.target.parentElement.classList.toggle(styles.active)
        const brand = event.target.alt.split(" ")[0]

        if(!props.brandOptions.includes(brand)){
            props.setBrandOption([
                ...props.brandOptions,
                brand
            ])
        }else{
            props.setBrandOption(props.brandOptions.filter(item => item !== brand))
        }
    }

    return(
        <>
            <li className={styles.brand_option}>
                    <img
                        onClick={onBrandClickHandler}
                        src={`https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/optimized/${props.brand}.png`}
                        alt={props.brand}/>
            </li>
        </>
    )
}

export default BrandOption
