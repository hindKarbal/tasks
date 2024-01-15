import React from 'react';
import './SearchBar.css';

 // In a separate file or in the same file as your components, create an object called sortByOptions

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
  };
  class SearchBar extends React.Component{

    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
            const sortByOptionValue = sortByOptions[sortByOption];

            // Step 40: Return a <li> element
            return (
              <li key={sortByOptionValue}>{sortByOption}</li>
            );
        });
      }
      render(){
        return (
            <div className="SearchBar">
            <div className="SearchBar-sort-options">
              <ul>
               
                {this.renderSortByOptions()}
              </ul>
            </div>
            <div className="SearchBar-fields">
              <input placeholder="Search Businesses" />
              <input placeholder="Where?" />
            </div>
            <div className="SearchBar-submit">
              <a>Let's Go</a>
            </div>
          </div>
        );

        }
  }

  
  export default SearchBar;
  