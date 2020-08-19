import React from 'react'
import useWebAnimations, { fadeInDown, fadeInRight, fadeInLeft } from "@wellyshen/use-web-animations";


//  seprate div for animation 1/3
const Div1_of_1 = () => {
    const { ref } = useWebAnimations({ ...fadeInLeft });
    return <div className='div_1-1' ref={ref}></div>
}

//  seprate div for animation 3/3
const Div1_of_3 = () => {
    const { ref } = useWebAnimations({ ...fadeInRight });
    return <div className='div_1-1' ref={ref}></div>
}

const Div1 = () => {

    // Add a pre-defined effect to the target
    const { ref } = useWebAnimations({ ...fadeInDown });



    // jsx start from here
    return (
        <div className='div_1'>
            {Div1_of_1()}
            <div className='div_1-2' ref={ref}
                data-aos="flip"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-once="false"
                data-aos-anchor-placement="top-center"
            >
                <h1>PROFESSIONAL WORLD</h1>
                <p>Excepteur duis est nisi esse. Magna reprehenderit ad pariatur ea. Eiusmod ut deserunt minim consectetur quis cupidatat aute ut magna.</p>
            </div>
            {Div1_of_3()}
        </div>
    )
}


export default Div1;