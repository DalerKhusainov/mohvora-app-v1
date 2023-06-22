// REACT
import React, { useState, useContext, useEffect } from "react";

// REACT COMPONENTS
import { SearchForm } from "../components/SearchForm";
import { PublishCard } from "../components/PublishCard";

// CSS STYLES
import "../styles/search-page.scss";

// MATERIAL UI
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

// FORM REACT CONTEXT API
import { PostsContext } from "../context/PostsContext";

// FUNCTION
import { convertMonths } from "../functions/functions";

export const SearchPage = () => {
  const { filteredPosts, isTrue, selectedDate, cityFrom, cityTo } =
    useContext(PostsContext);

  return (
    <section className="search-page-section">
      <h2 className="search-page-heading">
        Путешествовать с нами легко и удобно
      </h2>
      <SearchForm isHomePage={false} />
      {isTrue && (
        <div className="search-page-result-col">
          <div className="selected-date-col">
            <span className="date">{convertMonths(selectedDate)}</span>
            <div className="directions">
              <span className="direction-text">{cityFrom}</span>
              <ArrowForwardIcon color="inherit" fontSize="inherit" />
              <span className="direction-text">{cityTo}</span>
            </div>
          </div>
          {filteredPosts.length === 0 && (
            <div className="search-page-not-found-result-col">
              <p className="not-found-result-text text-1">
                К сожалению выбранной вами дате ничего не найдено.
              </p>
              <p className="not-found-result-text text-2">
                Пожалуйста выберите другую дату!
              </p>
              <div className="not-found-result-icon">
                <SentimentVeryDissatisfiedIcon
                  color="inherit"
                  fontSize="inherit"
                />
              </div>
            </div>
          )}
          <div className="publish-card-list-col">
            {filteredPosts.map((post) => (
              <PublishCard post={post} key={post.id} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
