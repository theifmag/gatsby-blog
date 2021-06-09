import React, {useState} from 'react';
import {graphql, Link, useStaticQuery} from 'gatsby';
import {useFlexSearch} from 'react-use-flexsearch';
import {StaticImage} from 'gatsby-plugin-image';

import Input from '../../atoms/Input';
import {Author, Category, Title, Excerpt} from '../../molecules/ArticleCard';

import * as styles from './index.module.css';
import Spacer from '../../atoms/Spacer';

const CLOSE_ICON = '../../images/banner/close_icon.svg';

const Search = ({setSearch}) => {
  const data = useStaticQuery(graphql`
    query SearchQuery {
      localSearchPages {
        index
        store
      }
    }
  `);

  const {index, store} = data.localSearchPages;
  const [searchTerm, setSearchTerm] = useState('');
  const results = useFlexSearch(searchTerm, index, store);

  const onTextChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onCloseClick = () => {
    if (searchTerm) {
      setSearchTerm('');
    } else {
      setSearch(false);
    }
  };

  const noSearchText = searchTerm
    ? 'Uh oh! There are no results'
    : 'Start typing to see some results...';

  return (
    <div className={styles.container}>
      <div>
        <Input
          autoFocus
          placeholder="Search articles, categories, authors..."
          value={searchTerm}
          onChange={onTextChange}
        />
        {searchTerm && (
          <StaticImage
            onClick={onCloseClick}
            className={styles.closeIcon}
            objectFit="contain"
            src={CLOSE_ICON}
            height={28}
            width={28}
            alt="empty"
          />
        )}
        <StaticImage
          onClick={onCloseClick}
          objectFit="contain"
          src={CLOSE_ICON}
          height={28}
          width={28}
          alt="empty"
        />
      </div>
      <Spacer y={20} />
      <div className={!!results.length && styles.resultsContainer}>
        {results.map((result, key) => (
          <Link to={result.path} key={key}>
            <Spacer y={30} />
            <div className={styles.resultContainer}>
              <Category category={result.category} />
              <Spacer y={6} />
              <Title title={result.title} />
              <Spacer y={12} />
              <Excerpt excerpt={result.excerpt} />
              <Spacer y={6} />
              <Author author={result.author} />
            </div>
            <Spacer y={20} />
          </Link>
        ))}
      </div>
      {!!results.length || (
        <div className={styles.emptyContainer}>
          <Spacer y={50} />
          <p>{noSearchText}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
