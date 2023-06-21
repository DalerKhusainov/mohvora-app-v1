// REACT
import React, { useState, useContext } from "react";

// REACT COMPONENTS
import { SearchForm } from "../components/SearchForm";
import { PublishCard } from "../components/PublishCard";

// CSS STYLES
import "../styles/search-page.scss";

// MATERIAL UI
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// FORM REACT CONTEXT API
import { PostsContext } from "../context/PostsContext";

export const SearchPage = () => {
  const { posts } = useContext(PostsContext);
  const [isTrue, setIsTrue] = useState(false);

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
        <div className="publish-card-list-col">
          {isTrue &&
            posts.map((post) => <PublishCard post={post} key={post.id} />)}
        </div>
      </div>
    </section>
  );
};
