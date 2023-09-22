
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';


function HomePage() {


    const [searchterm, setsearchterm] = useState('')
    function handlechange(e) {
        setsearchterm(e.target.value)

    }
    return (<div>
        <Outlet />
        <div className='header'>
            <Header
                text=' ' />

            <input
                onChange={handlechange}
                type='text'
                placeholder=''
            />
        </div>
        
    </div>

    );

}
export default HomePage