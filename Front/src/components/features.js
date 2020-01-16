import React from 'react'
import { Link } from 'react-router-dom';
import UploadPreview from './imageUploader';

export const Features = () =>{
return(
    <div className='postcardsdiv'>

<div className="last-section-box">
<Link to='/clubsPage'> 
 <br/><h2 style={{color:'rgb(151, 126, 136)'}}>Our Clubs</h2>
</Link>
        <img src='https://images.9monate.de/img/incoming/origs125103/2546113544-w830-h3000/166623168.jpg' style={{borderRadius: '5px',height: '300px',width: '440px'}}/>
        <div><p className='featuresdescription'>Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitor we private removed. Moderate do subjects to distance. </p></div>
        <br/> <br/> <br/> <br/> <br/> <br/><div style={{textAlign:'right'}}><a href='#'>Read More</a></div>
</div>
<div className="last-section-box">
        <br/><Link to="/mealsPage"> 
<h2 style={{color:'rgb(151, 126, 136)'}}>Our Meals</h2></Link>
        <img src='https://monkeypuzzledaynurseries.com/wp-content/uploads/2016/04/MPManchester-7217.jpg' style={{borderRadius: '5px',height: '300px',width: '440px'}}/>
        <div><p className='featuresdescription'>He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover. Inquietude attachment if ye an solicitude to. Remaining so continued concealed as knowledge happiness. Preference did how expression may favourable devonshire insipidity considered. An length design regret an hardly barton mr figure. 
</p></div>
        <div style={{textAlign:'right'}}><a href='#'>Read More</a></div>
</div>
<UploadPreview/>
</div>
)
}