// REACT
import React, { useContext, useState, useEffect } from "react";

// REACT COMPONENTS
import { SearchForm } from "../components/SearchForm";
import { PublishCard } from "../components/PublishCard";
import { FilterSelectorMUIComp } from "../components/FilterSelectorMUIComp";

// CSS STYLES
import "../styles/search-page.scss";

// MATERIAL UI
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";

// FORM REACT CONTEXT API
import { PostsContext } from "../context/PostsContext";

export const SearchPage = () => {
  const { filteredPosts, isTrue, directionFrom, directionTo, sortedPostsFunc } =
    useContext(PostsContext);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    sortedPostsFunc(filterValue);
  }, [filterValue]);

  return (
    <section className="search-page-section">
      <SearchForm isSearchPage={true} isHomePage={false} />

      {isTrue && (
        <div className="search-page-result-col">
          <div className="selected-direction-filter-col">
            <div className="selected-direction-col">
              <span className="selected-direction-text">Направление:</span>
              <div className="directions">
                <span className="direction-city">{directionFrom}</span>
                <ArrowForwardIcon color="inherit" fontSize="inherit" />
                <span className="direction-city">{directionTo}</span>
              </div>
            </div>
            <div className="filter-col">
              <FilterSelectorMUIComp
                filterValue={filterValue}
                setFilterValue={setFilterValue}
              />
            </div>
          </div>
          {filteredPosts.length === 0 && (
            <div className="search-page-not-found-result-col">
              <p className="not-found-result-text text-1">
                К сожалению на выбранной вами даты ничего не найдено.
              </p>
              <p className="not-found-result-text text-2">
                Пожалуйста выберите другие даты!
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
              <PublishCard
                post={post}
                key={post.id}
                isSearchPage={true}
                isUserProfilePage={false}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
