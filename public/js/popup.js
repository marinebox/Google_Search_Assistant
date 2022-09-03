'use strict';

const getCurrentTabURL = () => {
  document.getElementById('test_button').addEventListener('click', () => {
    const queryParams = { active: true, currentWindow: true };
    chrome.tabs.query(queryParams, (tab) => {
      const url = new URL(tab[0].url);
      const searchQuery = url.searchParams.has('q');
      console.log(url);
      console.log(url.searchParams.has('q'));
      console.log(url.searchParams.get('q'));
      url.searchParams.delete('rlz');
      console.log(url.searchParams.toString());
      // console.log(url.)
    });
  });
};

const executeGoogleSearch = () => {
  document.getElementById('search_test').addEventListener('click', () => {
    let query = '';
    let queryAND = document.getElementById('and_search').value;
    let queryOR = document.getElementById('or_search').value;
    let url = new URL('https://www.google.com/search');
    if (queryAND.length > 0) {
      query += queryAND.replace(/\s/g, ' + ');
      query += ' ';
      // url.searchParams.set('q', queryAND);
    }
    if (queryOR.length > 0) {
      query += queryOR.replace(/\s/g, ' OR ');
      query += ' ';
      console.log(query);
      // url.searchParams.set('q', queryOR);
    }
    if (query.length > 0) {
      url.searchParams.set('q', query);
    }
    chrome.tabs.create({ url: url.href });
    console.log(url);
  });
};

getCurrentTabURL();
executeGoogleSearch();
