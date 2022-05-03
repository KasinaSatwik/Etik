import { useState } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import  "./styles.css";

const Option = () => {
	// return (
    //     <div className="bg-image" style={{
    //         backgroundImage: "url(/concertimage.jpg)",
    //         height: '100vh',
    //         width: '100vw',
    //         backgroundSize: 'cover',
    //         backgroundPosition: 'center',
    //         backgroundRepeat: 'no-repeat',
    //         }}>

        

	// 	<div className="root-container">
    //         <div className="container-opt" >
    //         < h1 style={{color:'gray'}}> Login as</h1 >            
            
    //         <div className='button'>
    //             <Link to="/loginuser">
	// 				<button className="btn1">
	// 					USER
	// 				</button>
	// 			</Link>
    //             <Link to="/loginorganizer">
	// 					<button className='btn2'>
	// 						ORGANIZER
	// 					</button>
	// 			</Link>
    //         </div>
            
    //         </div>
            
    //     </div>
    //     </div>
	// );
     return (
        <div>
            <div className="bg-image" style={{
            backgroundImage: "url(/concertimage.jpg)",
            height: '100vh',
            width: '100vw',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}>
            <div className="container-opt" >
            < h1 style={{color:'white'}}> Login as</h1 >            
            
            <div className='button'>

            <Link to="/loginuser">
	 				<button className="btn1">
	 					USER
					</button>
	 			</Link>

                 <Link to="/loginorganizer">
	 				<button className="btn1">
	 					ORGANIZER
					</button>
	 			</Link>
               
            </div>
            
            </div>
            </div>
            
        </div>

);
};


export default Option;