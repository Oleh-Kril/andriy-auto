import Head from 'next/head'
import RangeSelector from "../components/ui/RangeSelector"
import {DropDownOptionType} from "../components/ui/DropDown"
import DropDown from "../components/ui/DropDown";

const options = [
    { value: 'chocolate', label: 'Model S' },
    { value: 'strawberry', label: 'Model Y' },
    { value: 'vanilla', label: 'Model X' }
]

function OrderACar() {
    // @ts-ignore
    function RangeHandler({ min, max}){
        console.log(`min = ${min}, max = ${max}`)
    }
    function DropDownHandler({label, value} : DropDownOptionType){
        console.log(`label = ${label}, value = ${value}`)
    }

    return (
        <>
            <Head>
                <title>Andriy Auto</title>
                <meta name="description" content="-" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main style={{"display": "flex"}}>
                <div style={{"width": "50vw", "display": "grid", "background": "white"}}>
                    <h1>Замовити авто у нас :)</h1>

                    <DropDown
                        options={options}
                        iconName="oil-drop"
                        onChange={DropDownHandler}/>

                    <RangeSelector iconName="lightning"
                                   title="Fuel"
                                   min={10}
                                   max={100}
                                   step={5}
                                   onChange={RangeHandler} />
                </div>
            </main>
        </>
    )
}
export default OrderACar
