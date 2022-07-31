import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from './Button';
import { setUser } from '../../redux/actions/authActions';

const Header = () => {

  const { isAuth }  = useSelector(state => state.auth);
  const dispatch = useDispatch();


  useEffect(() => {
    
    dispatch(setUser());
  
  }, [])
  

  return (
    <div>
      <div className="ui secondary pointing menu" style={{marginBottom: 15 }}>
                <Link className="item" to='/' style={{color: "#3fb9b9"}}>
                    Home
                </Link>
                { isAuth && (
                  <Link className="item" to='/favorites' style={{color: "#3fb9b9"}}>
                    Favorites
                  </Link>
                )}
                
                {
                  !isAuth  && (
                    <div className="right menu">
                      <Button onClick={() => dispatch(setUser())} className={"ui teal small button"} title={"Login"} style={{marginBottom: 5 }}/>
                    </div>
                  )
                }

            </div>
    </div>
  )
}

export default Header