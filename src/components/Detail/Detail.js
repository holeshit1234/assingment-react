import React from "react";
import "./Detail.css";
import { Films } from "../../shared/ListOfFilms";
import { useParams } from "react-router-dom";
import { useState } from "react";
import {Icon} from 'react-materialize'
import Modal from "../Modal/Modal";
export default function Detail() {

  const [isOpen, setIsOpen] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const userName = useParams();
  const film = Films.find((obj) => {
    return obj.id == userName.id;
  });

  console.log(userName.id);

  // let cost = film.cost.toLocaleString();

  return (
    <article className="single-tour">
      <img src={`../${film.image}`} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{film.title}</h4>
          <h4 className="film-nation">{film.Nation}</h4>
          <h4 className="film-year">{film.year}</h4>
          {isOpen && <Modal setIsOpen={setIsOpen} film={film} />}
          <a onClick={() => setIsOpen(true)} className="btn-floating halfway-fab waves-effect waves-light red">
            <Icon>ondemand_video</Icon>
          </a>

        </div>
        <p>
          {readMore ? film.info : `${film.info.substring(0, 50)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
      </footer>
    </article>
  );
}
