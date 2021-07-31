import React from 'react'
import '../components/style/about.css'
import Image from '../assets/images/about_img.png'
import Image1 from '../assets/images/Reading.svg'
import { Table } from 'react-bootstrap'


const AboutComponent = () => {
    return (
        <>     
            <h1 className="head">
               About Vedic Maths
            </h1>

            <div className = "container2">
                <div className = "paras">
                    <p>
                        Vedic Mathematics is the name given to a supposedly ancient system of
                        calculation which was "rediscovered" from the Vedas between 1911 and 1918 by
                        Sri Bharati Krishna Tirthaji Maharaj (1884-1960). According to Tirthaji, all of
                        Vedic mathematics is based on sixteen sutras, or wordformulae. For example,
                        "Vertically and crosswise" is one of these Sutras. 
                    </p>
                    <p>
                        These formulae are intended to
                        describe the way the mind naturally works, and are therefore supposed to be a
                        great help in directing the student to the appropriate method of solution. None of
                        these sutras has ever been found in Vedic literature, nor are its methods consistent
                        with known mathematical knowledge from the Vedic era. The simplicity of the
                        Tirthaji system means that calculations can be carried out mentally, though the
                        methods can also be written down.
                    </p> 
                    <p>
                        There are many advantages in using a flexible,
                        mental system. Pupils can invent their own methods; they are not limited to one
                        method. This leads to more creative, interested and intelligent pupils.
                        The real beauty and effectiveness of the
                        Tirthaji system cannot be fully appreciated without practicing the system. One
                        can then see why its enthusiasts claim that it is the most refined and efficient
                        calculating system known. "Vedic Mathematics" refers to a technique of
                        calculation based on a set of 16 Sutras, or aphorisms, as algorithms and their subsutras or corollaries derived from these Sutras. Its enthusiasts advance the claim
                        that any mathematical problem can be solved mentally with these sutras.
                    </p>
                </div>
                <div className = "image">
                    <img src = {Image1} style = { {width: "70%", height: "100%"}}/>                     
                </div>
                
                <div className = "benefits">
                    <h2 className="head">Benefits</h2>
                        <ul>
                            <li>Provides an insight into ancient Indian mathematics</li>
                            <li>Eradicates the fear of Mathematics and instils confidence</li>
                            <li>Improves calculation speed and numerical skills</li>
                            <li>Sharpens the brain</li>
                            <li>Facilitates a habit of analytical thinking and measured approach towards any problem</li>
                            <li>Enhances holistic development of human brain through multi-dimensional thinking approach.</li>
                        </ul>
                </div>
               

            </div>

        </>           
      
    )
}

export default AboutComponent





// import React from 'react'

// const AboutComponent = () => {
//     return (
//         <div>
            
//             <h1>
//                About page
//             </h1>
           
//         </div>
//     )
// }

// export default AboutComponent
