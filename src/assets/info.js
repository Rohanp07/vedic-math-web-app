import { Accordion } from "react-bootstrap";

var information = [
  {
    name:"Nikilam-Sutra",
    textInfo:
      // <h1>"Nikhilam Sutra stipulates subtraction of a number 
      // from the nearest power of 100 ie 10,100,1000,etc. 
      // The powers of 10 from which the difference is calculated is called the Base. 
      // These numbers are considered to be references to find out whether given 
      // number is less or more than the Base. 
      // If the given number is 104,the nearest power of 10 is 100 and is the base.
      // Hence the difference between the base and the number is 4,which is Positive 
      // and it is called NIKHILAM. The value of Nikhilam may be reference base, 
      // the Nikhilam of 87 is -13 and that of 113 is +1314 respectively,
      // Nikhilam Sutra in Vedic Mathematics can be used as shortcuts to multiply numbers, 
      // divide numbers in faster approach. In English it is translated as All 
      // from 9 and last from 10. i.e. subtract last digit from 10 and rest of digits from 9. 
      // Multiplication using Nikhilam Sutra is used when numbers are closer to power 
      // of 10 i.e. 10, 100, 1000, etc.",</h1>,
      <h5>
          <ul>
              <li>This formula is used to find the complement of a number:</li>
              <li>Meaning of the formula : All from nine, Last from 10…</li>
          </ul>
          <h3>
              4356:&nbsp;&nbsp;&nbsp;9 - 4=5
              <br></br>
              &emsp;&emsp;&emsp;&emsp;&emsp; &emsp; &emsp;&nbsp;&nbsp;9 - 3=6 All from 9
              <br></br>
              &emsp; &emsp; &nbsp;&nbsp;&nbsp;9 - 5=4
              <br></br>
              &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; 10 - 6=4 Last from 10
          </h3>
          &emsp;<h3>Complement of no. 1079</h3>
          <br></br>
          <h2>Subtraction number from 10,100 ,10000 </h2>
          <div style={{ display:"flex",marginLeft:"100px" }}>
            <span>
            1000 – 565 = ??
            <br></br>
            On applying Nikhilam
            <br></br>
            sutra on number 8565:
            <br></br>
            9-5 =4
            <br></br>
            9-6=3
            <br></br>
            10-5 =5
            <br></br>
            1000 – 565= 435
            <br></br>
            Complement of no. 435
            </span>
            &emsp; &emsp;
            <span>
              <p>
              Steps:
              <br></br>
                  Count the no. of zeros
                  <br></br>
                  in 1000 and no of digits
                  <br></br>
                  in 565, Both should be
                  equal…
                  <br></br>
                  If not equal, 
                  <br></br>
                  put zero
                  before the number
                  <br></br>
                  which is to be
                  subtracted.
                  <br></br>
              </p>
            </span>
            </div>
            <br></br>
            <br></br>
            <h2>Multiplication by No. 99:</h2>
            <div style={{ marginLeft:"30px" }}>
            <ul style={{  }}>
              <li>Forget 99, remember only other no..</li>
              <li>Divide the answer in two parts : LHS & RHS</li>
              <li>LHS is obtained by subtracting 1 from the no.</li>
              <li>RHS is obtained by finding complement of the
                  no,Means apply Nikhilam sutra, means all from
                  9 & last from 10.</li>
            </ul>
            </div>
      </h5>,
    videoLink: "https://www.youtube.com/watch?v=DzRDRFO2BC0",
    questionSet: "1",
    pracP:"/practiceN"
  },

  {
    name:"Ekadhiken Purvena",
    // textInfo: "Ekadhikena Purvena (One More than the Previous) is a sutra useful in finding squares of numbers (like 25x25, 95x95, 105x105, 992x992 etc) and special divisions like 1 divided by 19, 29, 39, …. 199 etc. just in one step."\
    textInfo:
    <h5>
          <ul>
              <li>Multiplication of
                two numbers,
                whose LHS digits
                are same and sum
                of right hand side
                digits is 10:
                Ekadhiken purven
                formula is used
                </li>
              <li>Meaning of the formula : One More than the Previous</li>
          </ul>
          <h2>Examples </h2>
          <div style={{ display:"flex",marginLeft:"100px" }}>
            <span>
            68*62=??
            <br></br>
            LHS : 6+1=7 
            <br></br>
            6*7 = 42
            <br></br>
            RHS : 8*2 =16
            <br></br>
            Answer:-4216
            </span>
            &emsp; &emsp;
            <span>
              <p>
              Steps:
              <br></br>
                 Divide the answer in two parts.
                  <br></br>
                  Add 1 to the LHS digit,
                  then multiply this by the
                  same LHS digit: LHS
                  answer
                  <br></br>
                  Multiply RHS digits to get
                  the RHS answer.
              </p>
            </span>
            </div>
            <br></br>
            <br></br>
            <h2>Now let's try One more-</h2>
            <div style={{ display:"flex",marginLeft:"260px" }}>
            <span>
            81*89=??
            <br></br>
            LHS : 8+1 =9
            <br></br>
            8*9 = 72 
            <br></br>
            RHS : 1*9 =09
            <br></br>
            Answer:-7209
            </span>
            </div>
      </h5>,
    videoLink: "https://www.youtube.com/watch?v=6TFOSwZBGAg",
    questionSet: "2",
    pracP:"/practiceE"
  },
  {
    name:"Antyayordashkepi",
    textInfo: 
    // "The Sutra simply means - numbers of which the last digits added up give 10.This sutra is helpful in multiplying numbers whose last digits add up to 10(or powers of 10). The remaining digits of the numbers should be identical.",
    <h5>
          <ul>
              <li>This sutra is helpful in multiplying numbers whose last digits add up to 10
              (or powers of 10). The remaining digits of the numbers should be identical
                </li>
              <li>Meaning of the formula : numbers of which the last digits added up give 10</li>
          </ul>
          <h3>Multiplication of numbers RHS are equal and LHS digit sum is 10</h3>
          <h2>Examples </h2>
          <div style={{ display:"flex",marginLeft:"100px" }}>
            <span>
            <br></br>
            27*87 =??
            <br></br>
            LHS:2*8+7=23 
            <br></br>
            RHS : 7*7 =49
            <br></br>
            Answer : 2349
            </span>
            &emsp; &emsp;
            <span>
              <p>
              Steps:
              <br></br>
              Divide the answer in two parts.
                  <br></br>
                  LHS answer: Multiply
                  LHS digits and add the
                  RHS digit
                  <br></br>
                  RHS answer: Multiply
                  RHS digits
              </p>
            </span>
            </div>
            <br></br>
            <br></br>
            <h2>Now lets understand- Antyayordashkepi</h2>
          <h2>Examples </h2>
          <div style={{ display:"flex",marginLeft:"100px" }}>
            <span>
            {/* <br></br> */}
            25*35=??
            <br></br>
            LHS :2*3 +2 =8
            <br></br>
            RHS :75
            <br></br>
            Answer:875
            </span>
            &emsp; &emsp;
            <span>
              <p>
              Steps:
              <br></br>
              Divide the answer in two parts.
                  <br></br>
                  LHS answer: Multiply
                  units place digits and add
                  the smallest of these to
                  the product.
                  <br></br>
                  RHS answer is 75.
              </p>
            </span>
            </div>
      </h5>,
    videoLink: "https://www.youtube.com/watch?v=5aMJQ6HS_DY",
    questionSet: "3",
    pracP:"/practiceA"
  },
];
export default information;
