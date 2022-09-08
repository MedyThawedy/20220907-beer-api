import { Link } from 'react-router-dom';
import React from 'react';
import picture1 from '../assets/images/picture1.png';
import picture2 from '../assets/images/picture2.png';
import './Home.css';

const Home = () => {
    return (
        <div className='divHome'>
            <>
                <Link to="/AllProducts">
                    <div className="clsAllBeers" >
                        <div>  <img src={picture1} alt="beer" />
                            <h2 className='clsHeader'>All Beers</h2></div>
                        <div> <p className='pHome'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Consequatur laboriosam mollitia repudiandae provident. Reiciendis, earum?</p></div>
                    </div></Link>
            </>

            <Link key={'radom'} to={`/allproducts/${'random'}`}>
                <div className="clsRandomBeer">
                    <div> <img src={picture2} alt="beer" />
                        <h2 className='clsHeader'>Radom Beer</h2></div>
                    <div> <p className='pHome'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, numquam?</p></div>
                </div></Link>
        </div>
    );
}

export default Home;