import React from "react";

function AboutCont({isOpen}){
    return <div className="about_container" style={{display: isOpen ? 'none' : 'inline-flex'}}>
    <div className="about_text">
        <span className="about_title">A food knowledge sharing community.</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
        labore et dolore magna aliqua. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Sed
         elementum tempus egestas sed sed risus pretium quam. Id donec ultrices tincidunt arcu non sodales. 
         Diam quam nulla porttitor massa id. Dolor purus non enim praesent elementum facilisis. Pellentesque 
         elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Et sollicitudin ac orci phasellus 
         egestas tellus rutrum tellus pellentesque. Nunc faucibus a pellentesque sit.<br></br><br></br>Laoreet suspendisse 
         interdum consectetur libero. Mattis nunc sed blandit libero volutpat sed cras ornare arcu. Ridiculus mus 
         mauris vitae ultricies leo integer malesuada. Amet est placerat in egestas. Donec enim diam vulputate 
         ut. <br></br><br></br>Images take from Pexels.</p>
    </div>
    <div className="about_image">
        <img src="https://images.pexels.com/photos/18332064/pexels-photo-18332064/free-photo-of-dugun-zamani-rhode-island.jpeg?auto=compress&cs=tinysrgb&w=800" />
    </div>
    </div>
}

export default AboutCont;