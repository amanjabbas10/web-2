import img1 from './images/oil logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import img2 from './images/oil 2.jpg'
import img3 from './images/p12.webp'
import img4 from './images/p--0.png'
import img9 from './images/all.png'
import img10 from './images/eng 1.webp'
import img11 from './images/eng 2.jpg'
import img12 from './images/eng 3.webp'
import img13 from './images/eng 4.jpg'
function App() {
  return (
   <div>
    <div className='container-flude'>

   
    <nav  className="nav1">
    
    <img src={img1}/>
    <a href='#'><span style={{color:"#f89521"}}>Home</span></a>
    <a href='#about'>About</a>
    <a href='#price'>Price-Oil</a>
    <a href='#servier'>Servier</a>
    <a href='#conflict'>Conflict</a>
    <a href='#Engineering'>Engineering</a>
    <button className='btn1'>
     Search Now
    </button>
    </nav>
    </div>
    <div className='page-1'>
    <div className='page-2'>
    <div className='page-3'>
      <p>
     <span style={{color:"#f89521",fontSize:"60px",textShadow:" 0 0 10px  #f89521"}}>World Oil</span> Reserves: According to Worldometer, there are approximately 1.65 trillion barrels of proven oil reserves globally, with a remaining supply equivalent to 46.6 times annual consumption levels. This translates to about 47 years of oil supply at current consumption rates, excluding unproven reserves.
      Consumption: The world consumes around 35.4 billion barrels of oil annually, equivalent to 97 million barrels per day. Global oil consumption per capita is approximately 5 barrels (197 gallons) per person yearly, or 0.5 gallons per capita per day.
      </p>
    </div>
    </div>
    <img className='img-page-1' src={img2}/>
    </div>
    <h1 style={{marginTop:"8rem"}} className='h1' id='about'>
    Data About Oil World
    </h1>
    <hr className='hr1'/>
    <h3 className='h33'>
    Key Oil-Producing Countries in the Middle East.
    </h3>
    <div className='oil-1'>
    <li style={{marginLeft:"1rem"}}>
   <span style={{color:"#f89521"}}> Saudi Arabia</span>: The world’s largest oil producer, with the Ghawar oil field being the world’s largest in terms of both reserves and daily production.
    </li>

    <li style={{marginLeft:"1rem"}}>
   <span style={{color:"#f89521"}}> Iraq</span>: The second-largest producer in the Middle East, with production increasing since the end of the Iraq War.
    </li>

    <li style={{marginLeft:"1rem"}}>
   <span style={{color:"#f89521"}}> Iran</span>: One of the world’s largest oil producers, but output is below potential due to economic sanctions.
    </li>

    <li style={{marginLeft:"1rem"}}>
   <span style={{color:"#f89521"}}> Kuwait</span>: The world’s ninth-largest producer, with output between 2.5 million and 3 million barrels per day for over a decade.
    </li>

    <li style={{marginLeft:"1rem"}}>
   <span style={{color:"#f89521"}}> United Arab Emirates</span>: A significant oil producer in the Middle East, with the majority of its oil reserves located in the Zakum field.
    </li>
    </div>
    <h2 style={{marginLeft:"6.5rem",marginTop:"2rem"}}>Middle East Oil <span style={{color:"#f89521"}}>2023</span> Data</h2>
     <table>
     
     <tr>
      <th>Country</th>
      <th>Crude Oil Production thousand barrels per day</th>
     </tr>

     <tr>
    <td>Saudi Arabia</td>
    <td>12,300</td>
     </tr>

     <tr>
      <td>Iraq</td>
      <td>4,420</td>
     </tr>

      <tr>
        <td>Iran</td>
        <td>3,800</td>
      </tr>
      
      <tr>
        <td>United Arab Emirates</td>
        <td>3,400</td>
      </tr>

    <tr>
      <td>Kuwait</td>
      <td>2,900</td>
    </tr>

    <tr>
      <td>Qatar</td>
      <td>1,800</td>
    </tr>

    <tr>
      <td>Oman</td>
      <td>1,000</td>
    </tr>

    <tr>
      <td>Yemen</td>
      <td>130</td>
    </tr>

    <tr>
      <td>Bahrain</td>
      <td>50</td>
    </tr>
     </table>

{/* one table  */}
<h2 style={{marginLeft:"17rem",marginTop:"3rem"}}>Middle East Oil <span style={{color:"#f89521"}}>2022</span> Data</h2>
     
<div className='table-2'>
<table> 
     
     <tr>
      <th>Country</th>
      <th>Oil Production million barrels/day</th>
      <th>Global Rank</th>
      <th>Main Export Destinations</th>
     </tr>

     <tr>
    <td>Saudi Arabia</td>
    <td>10.6</td>
    <td>2</td>
    <td>China, India, Japan, South Korea</td>
     </tr>

     <tr>
      <td>Iraq</td>
      <td>4.5</td>
      <td>5</td>
      <td>China, India, South Korea</td>
     </tr>

      <tr>
        <td>UAE</td>
        <td>3.2</td>
        <td>7</td>
        <td>Japan, India, South Korea</td>
      </tr>

    <tr>
      <td>Kuwait</td>
      <td>2.8</td>
      <td>9</td>
      <td>South Korea, India, Japan</td>
    </tr>

    <tr>
      <td>Iran</td>
      <td>3.6 approx., sanctions impacted</td>
      <td>8</td>
      <td>China (mainly), other Asian countries</td>
    </tr>

    <tr>
      <td>Oman</td>
      <td>1.0</td>
      <td>21</td>
      <td>China, Japan</td>
    </tr>

    <tr>
    <td>Qatar</td>
    <td>0.6</td>
    <td>27</td>
    <td>Asia (focus on LNG exports)</td>
    </tr>
    
    <tr>
      <td>Bahrain</td>
      <td>0.2</td>
      <td>47</td>
      <td>Regional neighbors</td>
    </tr>
     </table>
     </div>
     <h2 style={{marginLeft:"22rem",marginTop:"3rem"}}>Middle East Oil <span style={{color:"#f89521"}}>2021</span> <u>COVID-19</u> Data</h2>
     <table className='s1-2'>

    <tr>
      <th>Country</th>
      <th>Oil Production (million barrels/day)</th>
      <th>Global Rank</th>
      <th>Main Export Destinations</th>
    </tr>

    <tr>
      <td>Saudi Arabia</td>
      <td>9.1</td>
      <td>2</td>
      <td>China, India, Japan, South Korea</td>
    </tr>

    <tr>
      <td>Iraq</td>
      <td>4.1</td>
      <td>5</td>
      <td>China, India, South Korea	</td>
    </tr>

    <tr>
      <td>UAE</td>
      <td>2.7</td>
      <td>7</td>
      <td>Japan, India, South Korea</td>
    </tr>

    <tr>
      <td>Kuwait</td>
      <td>2.5</td>
      <td>9</td>
      <td>South Korea, India, Japan</td>
    </tr>

    <tr>
      <td>Iran</td>
      <td>3.1 (approx., sanctions impacted)</td>
      <td>8</td>
      <td>China (clandestinely)	</td>
    </tr>

    <tr>
      <td>Oman</td>
      <td>0.96</td>
      <td>21</td>
      <td>China, Japan</td>
    </tr>

    <tr>
      <td>Qatar</td>
      <td>0.57</td>
      <td>27</td>
      <td>Asia (focus on LNG exports)</td>
    </tr>

    <tr>
      <td>Bahrain</td>
      <td>0.2</td>
      <td>47</td>
      <td>Regional neighbors</td>
    </tr>
     </table>

     <h2 style={{marginLeft:"35rem",marginTop:"3rem"}}>Middle East Oil <span style={{color:"#f89521"}}>2020</span> Data</h2>
     
     <table className='t-111'>

    <tr>
    <th>Country</th>
    <th>Oil Production (million barrels/day)</th>
    <th>Global Rank</th>
    <th>Main Export Destinations</th>
    </tr>

    <tr>
      <td>Saudi Arabia</td>
      <td>9.2</td>
      <td>2</td>
      <td>China, India, Japan, South Korea</td>
    </tr>

    <tr>
      <td>Iraq</td>
      <td>4.1</td>
      <td>5</td>
      <td>China, India, South Korea	</td>
    </tr>

      <tr>
        <td>UAE</td>
        <td>2.7</td>
        <td>7</td>
        <td>Japan, India, South Korea</td>
      </tr>

    <tr>
    <td>Kuwait</td>
    <td>2.4</td>
    <td>9</td>
    <td>South Korea, India, Japan</td>
    </tr>

    <tr>
      <td>Iran</td>
      <td>2.0 (sanctions impacted)</td>
      <td>11</td>
      <td>China (clandestine sales)</td>
    </tr>

    <tr>
      <td>Oman</td>
      <td>0.95</td>
      <td>20</td>
      <td>China, Japan</td>
    </tr>

    <tr>
      <td>Qatar</td>
      <td>0.6</td>
      <td>27</td>
      <td>Asia (focus on LNG exports)</td>
    </tr>

    <tr>
      <td>Bahrain</td>
      <td>0.2</td>
      <td>47</td>
      <td>Regional neighbors</td>
    </tr>
     </table>


     <h1 style={{marginTop:"8rem"}} className='h1' id='price'>
    Price Oil Of Middle East
    </h1>
    <hr className='hr1'/>
<div className='container'>
<div className='row'>

<div className='col-lg-3'>
<div className='service'>
<div className='p-4'>
<img style={{marginLeft:"0.8rem"}} src={img4}/>
<hr/>
<h4>Saudi Arabia</h4>
<p>Gasoline: ~$0.62 USD per liter</p>
</div>
</div>
</div>
<div className='col-lg-3'>
<div className='service'>
<div className='p-4'>
<img style={{marginLeft:"0.8rem"}} src={img4}/>
<hr/>
<h4>United Arab Emirates</h4>
<p>Gasoline: ~$0.82 USD per liter</p>
</div>
</div>
</div>
<div className='col-lg-3'>
<div className='service'>
<div className='p-4'>
<img src={img4}/>
<hr/>
<h4>Kuwait</h4>
<p>Gasoline: ~$0.34 USD per liter</p>
</div>
</div>
</div>
<div className='col-lg-3'>
<div className='service'>
<div className='p-4'>
<img  src={img4}/>
<hr/>
<h4>Qatar</h4>
<p>Gasoline: ~$0.55$0.60 USD per liter</p>
</div>
</div>
</div>
<div className='col-lg-3'>
<div className='service'>
<div className='p-4'>
<img  src={img4}/>
<hr/>
<h4>Oman</h4>
<p>Gasoline: ~$0.63 USD per liter</p>
</div>
</div>
</div>
<div className='col-lg-3'>
<div className='service'>
<div className='p-4'>
<img  src={img4}/>
<hr/>
<h4>Bahrain</h4>
<p>Gasoline: ~$0.53 USD per liter</p>
</div>
</div>
</div>
<div className='col-lg-3'>
<div className='service'>
<div className='p-4'>
<img  src={img4}/>
<hr/>
<h4>Iraq</h4>
<p>Gasoline:$0.50$0.60 USD per liter</p>
</div>
</div>
</div>
<div className='col-lg-3'>
<div className='service'>
<div className='p-4'>
<img  src={img4}/>
<hr/>
<h4>Iran</h4>
<p>Gasoline: ~$0.10 USD per liter</p>
</div>
</div>
</div>

</div>
</div>

<h1 style={{marginTop:"8rem",letterSpacing:"2px"}} className='h1' id='servier'>
  Servier Oil
    </h1>
    <hr className='hr1'/>

<div className='oil-1'>
  <img src={img3}/>
<div className='oil-2'>
<div className='oil-3'>
<h3><span style={{color:"#f89521"}}>Middle East Oil Servers</span></h3>
<p>The Middle East is a significant oil-producing region, accounting for approximately 26% of global oil production. The region’s oil reserves are concentrated in five countries: Saudi Arabia, Iraq, Iran, Kuwait, and the United Arab Emirates (UAE). Here’s a brief summary of each country’s oil production and reserves</p>
<ol>
  <li><b>Saudi Arabia</b>: The world’s largest oil producer, accounting for around 15% of global output. Saudi Arabia has the largest oil reserves, with an estimated 268 billion barrels.</li>
  <li>
  <b>Iraq</b>: The second-largest oil producer in the Middle East, with output ranging from 4-5 million barrels per day. Iraq has an estimated 150 billion barrels of oil reserves.
  </li>
  <li>
  <b>Iran</b>: Despite economic sanctions, Iran remains a significant oil producer, with an estimated 143 billion barrels of reserves. Its output is currently below potential due 
  </li>
  <li>
  <b>Kuwait</b>: A consistent producer of around 2.5-3 million barrels per day, Kuwait has an estimated 101 billion barrels of oil reserves.
  </li>
  <li>
 <b> United Arab Emirates (UAE)</b>: The UAE is a significant oil producer, with an estimated 97 billion barrels of reserves. Its output ranges from 3-4 million barrels per day.
  </li>
  </ol>
<button className='r-oil'>Read More</button>
</div>
</div>
</div>

<h1 style={{marginTop:"8rem",letterSpacing:"2px"}} className='h1' id='conflict'>
What the Middle East Conflict
    </h1>
    <hr className='hr1'/>
    <div className='img-8'>
    <img src={img9}/>
    <div className='img-9'>
    <div className='img-10'>
      <h3>What the Conflict</h3>
    <p>Potentially large, depending on whether infrastructure is targeted. We expect security around key production and processing facilities and ports to be redoubled. To reassure the market, producing countries in the region will seek to ensure production, refining and exports are maintained

Of the big producing countries in the region, Iran – which produces 3.2 million b/d of crude oil of which about 1.4 million b/d is exported – is the most vulnerable to disruption. Israel has reportedly threatened to attack its energy infrastructure. In a wider or prolonged conflict, Iraq – 4.2 million b/d crude and 3.3 million b/d of crude exports – could also be at risk since it is home to Iran-based proxy groups. Iranian retaliation on US energy operations in the region adds to the potential risks to supply disruption..</p>
      </div>
    </div>
    </div>

    <h1 style={{marginTop:"8rem",letterSpacing:"2px"}} className='h1' id='Engineering'>
    Best Engineering
    </h1>
    <hr className='hr1'/>

    <div className='container'>
    <div className='row'>
    
 
   <div className='e-1' style={{width:"13rem"}}>
    <div className='e-2'>
    <div className='e-3'>
    <img src={img10}/>
    <h3>Simon Flowers</h3>
    <p>Chairman, Chief Analyst and author of The Edge

Simon is our Chief Analyst; he provides thought leadership on the trends and innovations . </p>
    </div>
    </div>
   </div>
   <div className='e-1' style={{width:"13rem"}}>
    <div className='e-2'>
    <div className='e-3'>
    <img src={img11}/>
    <h3>Massimo Di</h3>
    <p>Vice President, Gas and LNG Research

Massimo brings extensive knowledge of the entire gas industry value chain to his role .</p>
    </div>
    </div>
   </div>
   <div className='e-1' style={{width:"13rem"}}>
    <div className='e-2'>
    <div className='e-3'>
    <img src={img12}/>
    <h3>Gavin Thompson</h3>
    <p>Vice Chairman, Energy – Europe, Middle East & Africa

Gavin oversees our Europe, Middle East and Africa research.</p>
    </div>
    </div>
   </div>
   <div className='e-1' style={{width:"13rem"}}>
    <div className='e-2'>
    <div className='e-3'>
    <img src={img13}/>
    <h3>Ann-Louise</h3>
    <p>Ann-Louise directs our Macro Oils Service and is a frequent contributor to numerous industry publications.</p>
    </div>
    </div>
   </div>
  
   </div>
    </div>

<footer>

  <img src={img1}/>

  <a href='#'>Home</a>
  <a href='#'>About</a>
  <a href='#'>Price-Oil</a>
  <a href='#'>Servier</a>
  <a href='#'>Conflict</a>
  <a href='#'>Engineering</a>

  <h6>Creaet By Amanj Abbas Akray</h6>
</footer>
   </div>
  );
}

export default App;
