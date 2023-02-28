import React from 'react'
import { Footer,Icon } from 'react-materialize'


export default function Foooter() {
  return (
    <Footer
      className="example"
      copyrights="Phim Điện Ảnh 2023"
      links={
        <ul>
          <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
          <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
        </ul>}

    >
      <h5 className="white-text">
   
      </h5>
      <p className="grey-text text-lighten-4">
        
      </p>
    </Footer>
  );
}