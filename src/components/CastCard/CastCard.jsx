import React, { useState, useEffect } from "react";
import MaleCastImage from "./../../assets/images/male-cast.svg";
import FemaleCastImage from "./../../assets/images/female-cast.svg";
import { Link } from "react-router-dom";
import { GetCredits } from "./../../api";

const CastCard = ({ id, isMovie }) => {
  const [castData, setCastData] = useState([]);
  useEffect(() => {
    GetCredits(id, isMovie).then((response) => setCastData(response.data.cast));
  }, [id, isMovie]);

  return (
    <>
      <div className="bill-section ">
        <section className="bill-section-content position-relative">
          <h3>{isMovie === "movie" ? "Top Bill Cast" : "Series Cast"} </h3>
          <div className="cast-section should_fade">
            <div className="cast-scroll-section">
              {castData &&
                castData.slice(0, 9).map((cast) => {
                  return (
                    <div className="card" key={cast.id}>
                      <Link to="/">
                        <img
                          src={
                            cast.profile_path
                              ? `https://www.themoviedb.org/t/p/w138_and_h175_face${cast.profile_path}`
                              : cast.gender === 1
                              ? FemaleCastImage
                              : MaleCastImage
                          }
                          alt={cast.name}
                        />
                      </Link>
                      <p className="person-name">
                        <Link to="/">{cast.name}</Link>
                      </p>
                      <p className="character-name">{cast.character} </p>
                    </div>
                  );
                })}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CastCard;
