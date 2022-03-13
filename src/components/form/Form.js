import { useState } from 'react';
import { shortenLink } from '../../api/services/Shorten';
import './form.scss';

export default function Form({ setIsDone }) {
  const [searchValue, setSearchValue] = useState('');
  const [erorrMessage, setErorrMessage] = useState('Please add a link');
  const [showError, setShowError] = useState(false);
  const [isLoadding, setIsLoadding] = useState(false);

  function submitForm(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const searchValue = Object.fromEntries(formData.entries()).search.trim();

    // validate Input
    if (!validateInput(searchValue)) return;

    // remove erorr class
    setShowError(false);

    // show spinner
    setIsLoadding(true);

    // call the api
    shortenLink(searchValue).then((data) => {
      if (data) setIsLoadding(false); // hide spinner

      // add data to local storage
      const searchData = {
        fullLink: data.result.original_link,
        shortLink: data.result.full_short_link2,
      };

      saveTolocalStorage(searchData);
      setIsDone(true);

      // clear search field
      setSearchValue('');
    });
  }

  function saveTolocalStorage(searchData) {
    let recentLinks = [];

    if (localStorage['recentLinks']) {
      recentLinks = JSON.parse(localStorage['recentLinks']);
    }

    if (recentLinks.length === 5) {
      recentLinks.splice(0, 1);
      recentLinks.push(searchData);
    } else {
      recentLinks.push(searchData);
    }

    localStorage['recentLinks'] = JSON.stringify(recentLinks);
  }

  function validateInput(searchValue) {
    // if field is empty
    if (!searchValue) {
      setErorrMessage('Please add a link');
      setShowError(true);
      return false;
    }

    // validate url
    const urlRegEx = /^(https?|chrome):\/\/[^\s$.?#].[^\s]*$/;
    if (!urlRegEx.test(searchValue)) {
      setErorrMessage('Please enter a valid link');
      setShowError(true);
      return false;
    }

    return true;
  }

  return (
    <section aria-label="Shorten URL">
      <div className="container">
        <form className="form" autoComplete="off" onSubmit={submitForm}>
          <input
            className={`form__input${showError ? ' err' : ''}`}
            type="search"
            name="search"
            value={searchValue}
            onChange={(event) => setSearchValue(event.target.value)}
            placeholder="Shorten a link here..."
          />

          <span className="form__err">{erorrMessage}</span>
          <button className="form__submit" type="submit">
            Shorten It!
          </button>

          {isLoadding && <div className={`form__loading${isLoadding ? ' show' : ''}`}></div>}
        </form>

        <div></div>
      </div>
    </section>
  );
}
