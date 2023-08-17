import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useSelector } from 'react-redux';
function Base(props) {
    const isFooter = useSelector((state) => state.footerCondition.value);
    console.log(isFooter)
    return (
        <div id='Base'>
            <Header></Header>
            {props.children}
            {isFooter && (
                <Footer></Footer>
            )}
        </div>
    );
}

export default Base;