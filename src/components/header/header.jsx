import React from "react";
import './style.css'


class Header extends React.Component {

    render() {
        return (
            <header>
                <div className={'G-container'}>
                    <div className={'header'}>
                        <div className={'header-box'}>
                            <a href="#">Free CSS Layouts</a>

                        </div>
                        <div className={'second-part'}>

                            <div className={'dzax'}>
                                <p>Secondary Column
                                </p>
                            </div>
                            <div className={' nuyn'}>
                                <p>Content Here
                                </p>
                            </div>
                            <div className={'nuyn'}>
                                <p>Content Here
                                </p>
                            </div>

                        </div>
                        <div className={'footer'}>
                            <p>Footer</p>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}



export default Header