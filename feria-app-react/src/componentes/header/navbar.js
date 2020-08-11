import React, {Component} from 'react';
import {menuArray} from './menu.js'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav id="nav-top" className="bg-info">
                    <p className="navbar-brand mt-2" id="icono-menu" style={{cursor:'pointer', margin:'none'}}>
                        <i className="fas fa-store-alt"></i>
                    </p>
                </nav>
                <div className="container-fluid">
                    <div id="menu">
                        {
                            menuArray.map(menu => {
                                if (menu.href === 'index.html') {
                                    return <h4><a href={menu.href}><i className={menu.i}></i>&nbsp;{menu.txt}</a></h4>
                                } else {
                                    if (menu.txt === 'LOGIN') {
                                        return <h6><a data-toggle={'modal'} data-target={'#modal-login'} href={menu.href}><i className={menu.i}></i>&nbsp;{menu.txt}</a></h6>
                                    } else {
                                        return <h6><a href={menu.href}><i className={menu.i}></i>&nbsp;{menu.txt}</a></h6>
                                    }
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar