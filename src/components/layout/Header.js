import React, { useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from './Button';
import { setUser, logout } from '../../redux/actions/authActions';

const Header = () => {

  
  const { isAuth }  = useSelector(state => state.auth);
  const dispatch = useDispatch();


  useEffect(() => {
    
    login();
  
  }, [])


  const login = () => {
    dispatch(setUser());
  }
  

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
                      <Button onClick={login} className={"ui teal small button"} title={"Login"} style={{marginBottom: 5 }}/>
                    </div>
                  )
                }

                {/* {
                  isAuth  && (
                    <div className="right menu">
                      <Button onClick={() => dispatch(logout())} className={"ui teal small button"} title={"Logout"} style={{marginBottom: 5 }}/>
                    </div>
                  )
                } */}

            </div>
    </div>
  )
}

export default Header