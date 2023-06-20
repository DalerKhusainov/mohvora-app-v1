// REACT
import React, { useState } from "react";
import { useContext } from "react";

// REACT COMPONENTS
import { SearchForm } from "../components/SearchForm";

// CSS STYLES
import "../styles/search-page.scss";

// FROM ASSETS
import user_1 from "../assets/jpg/user-1.jpg";
// import user_2 from "../assets/jpg/user-2.jpg";
// import user_3 from "../assets/jpg/user-3.jpg";

// MATERIAL UI
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SmokeFreeIcon from "@mui/icons-material/SmokeFree";
import PetsIcon from "@mui/icons-material/Pets";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import StarsIcon from "@mui/icons-material/Stars";
import PersonIcon from "@mui/icons-material/Person";

// FORM REACT CONTEXT API
import { PostsContext } from "../context/PostsContext";

export const SearchPage = () => {
  const { posts } = useContext(PostsContext);

  const [newPosts, setNewPosts] = useState({});
  const [isTrue, setIsTrue] = useState(false);

  setTimeout(() => {
    setNewPosts(posts);
  }, 1000);

  setTimeout(() => {
    setIsTrue(true);
  }, 2000);

  return (
    <section className="search-page-section">
      <h2 className="search-page-heading">
        Путешествовать с нами легко и удобно
      </h2>
      <SearchForm />
      <div className="search-page-result-col">
        <div className="selected-date-col">
          <span className="date">14 Июль</span>
          <div className="directions">
            <span className="direction-text">Душанбе</span>
            <ArrowForwardIcon color="inherit" fontSize="inherit" />
            <span className="direction-text">Худжанд</span>
          </div>
        </div>
        <div className="publish-card-col">
          {isTrue &&
            newPosts.map((post) => (
              <>
                <div className="publish-card">
                  <div className="card-container card-container-1">
                    <div className="card-directions-col">
                      <p className="card-direction-text">{post.dirFrom}</p>
                      <div className="location-dots-col">
                        <div className="location-cycle location-cycle--1"></div>
                        <div className="location-line"></div>
                        <div className="location-cycle location-cycle--2"></div>
                      </div>
                      <p className="card-direction-text">{post.dirTo}</p>
                    </div>
                    <p className="card-date">{post.date}</p>
                    <div className="card-icons-col">
                      {!post.isSmoking && (
                        <SmokeFreeIcon color="inherit" fontSize="inherit" />
                      )}
                      {!post.isPets && (
                        <PetsIcon color="inherit" fontSize="inherit" />
                      )}
                      {!post.isMusic && (
                        <MusicOffIcon color="inherit" fontSize="inherit" />
                      )}
                    </div>
                  </div>

                  <div className="card-container card-container-2">
                    <div className="card-user-name-col">
                      <img src={post.photoURL} alt="" />
                      <div className="user-name-rate-col">
                        <p className="user-name">{post.userName}</p>
                        <div className="user-rate-col">
                          <StarsIcon color="inherit" fontSize="inherit" />
                          <p className="rate-text">4.9</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-passenger-amaunt-col">
                      <PersonIcon color="inherit" fontSize="inherit" />
                      <p className="passenger-amaunt-text">
                        {post.amountOfPassengers}
                      </p>
                    </div>
                    <p className="card-price">{`${post.tripPrice}c`}</p>
                  </div>
                </div>
              </>
            ))}
          {/* <div className="publish-card">
            <div className="card-container card-container-1">
              <div className="card-directions-col">
                <p className="card-direction-text">Душанбе</p>
                <div className="location-dots-col">
                  <div className="location-cycle location-cycle--1"></div>
                  <div className="location-line"></div>
                  <div className="location-cycle location-cycle--2"></div>
                </div>
                <p className="card-direction-text">Худжанд</p>
              </div>
              <p className="card-date">14 июль</p>
              <div className="card-icons-col">
                <SmokeFreeIcon color="inherit" fontSize="inherit" />
                <PetsIcon color="inherit" fontSize="inherit" />
                <MusicOffIcon color="inherit" fontSize="inherit" />
              </div>
            </div>

            <div className="card-container card-container-2">
              <div className="card-user-name-col">
                <img src={user_1} alt="" />
                <div className="user-name-rate-col">
                  <p className="user-name">Матин</p>
                  <div className="user-rate-col">
                    <StarsIcon color="inherit" fontSize="inherit" />
                    <p className="rate-text">4.9</p>
                  </div>
                </div>
              </div>
              <div className="card-passenger-amaunt-col">
                <PersonIcon color="inherit" fontSize="inherit" />
                <p className="passenger-amaunt-text">2</p>
              </div>
              <p className="card-price">100c</p>
            </div>
          </div> */}

          {/* <div className="publish-card">
            <div className="card-container card-container-1">
              <div className="card-directions-col">
                <p className="card-direction-text">Душанбе</p>
                <div className="location-dots-col">
                  <div className="location-cycle location-cycle--1"></div>
                  <div className="location-line"></div>
                  <div className="location-cycle location-cycle--2"></div>
                </div>
                <p className="card-direction-text">Худжанд</p>
              </div>
              <p className="card-date">14 июль</p>
              <div className="card-icons-col">
                <SmokeFreeIcon color="inherit" fontSize="inherit" />
                <PetsIcon color="inherit" fontSize="inherit" />
                <MusicOffIcon color="inherit" fontSize="inherit" />
              </div>
            </div>

            <div className="card-container card-container-2">
              <div className="card-user-name-col">
                <img src={user_2} alt="" />
                <div className="user-name-rate-col">
                  <p className="user-name">Гулноза</p>
                  <div className="user-rate-col">
                    <StarsIcon color="inherit" fontSize="inherit" />
                    <p className="rate-text">4.8</p>
                  </div>
                </div>
              </div>
              <div className="card-passenger-amaunt-col">
                <PersonIcon color="inherit" fontSize="inherit" />
                <p className="passenger-amaunt-text">3</p>
              </div>
              <p className="card-price">80c</p>
            </div>
          </div> */}

          {/* <div className="publish-card">
            <div className="card-container card-container-1">
              <div className="card-directions-col">
                <p className="card-direction-text">Душанбе</p>
                <div className="location-dots-col">
                  <div className="location-cycle location-cycle--1"></div>
                  <div className="location-line"></div>
                  <div className="location-cycle location-cycle--2"></div>
                </div>
                <p className="card-direction-text">Худжанд</p>
              </div>
              <p className="card-date">14 июль</p>
              <div className="card-icons-col">
                <SmokeFreeIcon color="inherit" fontSize="inherit" />
                <PetsIcon color="inherit" fontSize="inherit" />
                <MusicOffIcon color="inherit" fontSize="inherit" />
              </div>
            </div>

            <div className="card-container card-container-2">
              <div className="card-user-name-col">
                <img src={user_3} alt="" />
                <div className="user-name-rate-col">
                  <p className="user-name">Имран</p>
                  <div className="user-rate-col">
                    <StarsIcon color="inherit" fontSize="inherit" />
                    <p className="rate-text">5</p>
                  </div>
                </div>
              </div>
              <div className="card-passenger-amaunt-col">
                <PersonIcon color="inherit" fontSize="inherit" />
                <p className="passenger-amaunt-text">1</p>
              </div>
              <p className="card-price">100c</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
