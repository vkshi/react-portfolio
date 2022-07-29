import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import './index.scss'

function Popup(props) {
    return (props.isOpen) ?  (
        <div className='popup'>
            <div className='popup-inner'>
                <button 
                className='close-btn' 
                onClick={props.onClose}>
                    <FontAwesomeIcon icon={faXmark} color='4d4d4e' />
                    </button>
                { props.children }
            </div>
        </div>
    ) : "";
}

export default Popup;