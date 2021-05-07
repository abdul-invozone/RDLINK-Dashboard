// ** Icons Import
import { Heart } from 'react-feather'

const Footer = () => {
  return (
    <p className='clearfix mb-0'>
      <span className='float-md-left d-block d-md-inline-block mt-25' style={{color:'#898995'}}>
        COPYRIGHT © {new Date().getFullYear()}{' '}
        <a href='#' target='_blank' rel='noopener noreferrer' style={{color:'#7668e3'}}>
          LINK RD
        </a>
        <span className='d-none d-sm-inline-block' style={{color:'#898995'}}>, All rights Reserved</span>
      </span>
      <span className='float-md-right d-none d-md-block'>
        {/* Hand-crafted & Made with
        <Heart size={14} /> */}
        <ul>
          <li style={{display:'inline-block', fontSize: '14px', padding:'0 3px'}}><a style={{color:'#898995'}} href="#">Privacy Policy</a></li>
          <li style={{display:'inline-block', fontSize: '14px', padding:'0 3px'}}><a href="#">|</a></li>
          <li style={{display:'inline-block', fontSize: '14px', padding:'0 3px'}}><a style={{color:'#898995'}} href="#">Legal</a></li>
        </ul>
      </span>
    </p>
  )
}

export default Footer
