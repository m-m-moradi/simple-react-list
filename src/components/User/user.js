import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import style from './user.module.css'

export default function User({ email, name, phone, website }) {
    return (
        <li className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center p-2`}>
            <div className={style['grid-container']}>
                <div className={`${style['grid-item']}`}><span className='badge badge-primary '>{name}</span></div>
                <div className={`${style['grid-item']}`}><span className='badge badge-secondary '>{website}</span></div>
                <div className={`${style['grid-item']}`}><span className='badge badge-secondary '>{email}</span></div>
                <div className={`${style['grid-item']}`}><span className='badge badge-secondary '>{phone}</span></div>
                {/* <span className="badge badge-info badge-pill">{email}</span> */}
            </div>
        </li>
    );
}
User.defaultProps = {
  email: "",
  name: "",
  phone: "",
  website: ""
}
User.propTypes = {
  email: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string,
}