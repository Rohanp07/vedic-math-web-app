import React from 'react'
import '../components/style/about.css'
import Image from '../assets/images/about_img.png'
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
                    <img src = {Image} style = { {width: "100%", height: "100%"}}/>                     
                </div>
                
                <div className = "benefits">
                    <h2 className="head2">Benefits</h2>
                        <ul>
                            <li>Provides an insight into ancient Indian mathematics</li>
                            <li>Eradicates the fear of Mathematics and instils confidence</li>
                            <li>Improves calculation speed and numerical skills</li>
                            <li>Sharpens the brain</li>
                            <li>Facilitates a habit of analytical thinking and measured approach towards any problem</li>
                            <li>Enhances holistic development of human brain through multi-dimensional thinking approach.</li>
                        </ul>
                </div>
                <div className = "sutras">
                    <h2 className = "head3">Sutras</h2>
                    <Table id="table1" bordered responsive>
                        <thead>
                            <tr>
                                <th>S.No.</th>
                                <th>Name of Sutra</th>
                                <th>Meaning</th>
                                <th>Where to Use</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Ekadhikina Purvena</td>
                                <td>By one more than the previous one</td>
                                <td>Squaring of a number ending with 5</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Nikhilam Navatashcaramam Dashatah</td>
                                <td>All from 9 and the last from 10</td>
                                <td>Multiplication of numbers, which are near to base like 10, 100, 1000</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Urdhva-Tiryagbyham</td>
                                <td>Vertically and crosswise</td>
                                <td>It is the general formula, applicable to all cases of multiplication of two large number</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Paraavartya Yojayet</td>
                                <td>Transpose and adjust</td>
                                <td>When divisor greater than 10</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Shunyam Saamyasamuccaye</td>
                                <td>When the sum is the same that sum is zero</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Anurupyena- Sunyamanyat</td>
                                <td>If one is in ratio, the other is zero</td>
                                <td>To find out the product of two number when both are near the common base like 40, 40, etc. (multiples of powers of 10).</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Sankalana-Vyavakalanabhyam</td>
                                <td>By addition and by subtraction</td>
                                <td>It is used to solve simultaneous simple equations which have the co-efficient of the variables interchanged.</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Puranapuranabyham</td>
                                <td>By the completion or Non-completion</td>
                                <td>Used to simplify or solve the algebra problems.</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Chalana-Kalanabyham</td>
                                <td>Differences and Similarities</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Yaavadunam</td>
                                <td>Whatever the extent of its deficiency</td>
                                <td>Applicable to obtain sq. of a number close to bases of powers of 10</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Vyashtisamanstih</td>
                                <td>Part and Whole</td>
                                <td>Help in the factorisation of the quadratic equation of types</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Shesanyankena Charamena</td>
                                <td>The remainders by the last digit</td>
                                <td>It is to express a fraction as a decimal to all its decimal places</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Sopaantyadvayamantyam</td>
                                <td>The ultimate and twice the penultimate</td>
                                <td>-</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>Ekanyunena Purvena</td>
                                <td>By one less than the previous one</td>
                                <td>This sutra is used in case of multiplication by 9, 99…</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>Gunitasamuchyah</td>
                                <td>The product of the sum is equal to the sum of the product</td>
                                <td>Used to verify the correctness of obtained answers in multiplications, divisions and factorizations.</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>Gunakasamuchyah</td>
                                <td>The factors of the sum are equal to the sum of the factors</td>
                                <td>-</td>
                            </tr>
                        </tbody>
                    </Table>
                    <div className = "sub-sutras">
                        <h2 className = "head4">Sub-Sutras</h2>
                        <Table id = "table1" bordered responsive>
                            <thead>
                                <tr>
                                    <th>S.No.</th>
                                    <th>Name of Sub-Sutra</th>
                                    <th>Meaning</th>                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Anurupyena</td>
                                    <td>Proportionately</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Sisyate Sesasamjnah</td>
                                    <td>Remainder remains constant</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Adyamdyenantya-mantye-na</td>
                                    <td>First by first and last by last</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>Kevalaih Saptakam Gunyat</td>
                                    <td>For 7 the Multiplicand is 143</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>Vestanam</td>
                                    <td>By Osculation</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>Yavadunam Tavadunam</td>
                                    <td>Lessen by the Deficiency</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>Yavadunam Tavadunam Varganca Yojayet</td>
                                    <td>Whatever the Deficiency lessen by that amount and set up the Square of the Deficiency</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>Antyayordasake</td>
                                    <td>Last Totalling 10</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>Antyayoreva</td>
                                    <td>Only the Last Terms</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>Samuccayagunitah</td>
                                    <td>The Sum of the coefficients in the product</td>
                                </tr>
                                <tr>
                                    <td>11</td>
                                    <td>Lopanasthapanabhyam</td>
                                    <td>By Alternate Elimination and Retention</td>
                                </tr>
                                <tr>
                                    <td>12</td>
                                    <td>Vilokanam</td>
                                    <td>By Mere Observation</td>
                                </tr>
                                <tr>
                                    <td>13</td>
                                    <td>Gunitasmuccayah Samuccayagunitah</td>
                                    <td>The Product of the Sum is the Sum of the Products</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>

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
