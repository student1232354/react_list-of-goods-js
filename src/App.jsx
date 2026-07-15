import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';
import cn from 'classnames';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

const SORT_ALPHABETICALLLL = 'alphabetical';
const SORT_LENGTH = 'length';
const SORT_REVERSE = 'reverse';

function sortingoods(goods, sortField) {
  const preparedgood = [...goods];

  if (sortField === SORT_ALPHABETICALLLL) {
    preparedgood.sort((good1, good2) => good1.localeCompare(good2));
  }

  if (sortField === SORT_LENGTH) {
    preparedgood.sort((good1, good2) => good1.length - good2.length);
  }

  if (sortField === SORT_REVERSE) {
    preparedgood.reverse();
  }

  return preparedgood;
}

export const App = () => {
  const [sortField, setSortField] = useState('');

  const visibleGoods = sortingoods(goodsFromServer, sortField);

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className={cn('button is-info', {
            'is-light': sortField !== SORT_ALPHABETICALLLL,
          })}
          onClick={() => setSortField(SORT_ALPHABETICALLLL)}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className={cn('button is-info', {
            'is-light': sortField !== SORT_LENGTH,
          })}
          onClick={() => setSortField(SORT_LENGTH)}
        >
          Sort by length
        </button>

        <button
          type="button"
          className={cn('button is-info', {
            'is-light': sortField !== SORT_REVERSE,
          })}
          onClick={() => setSortField(SORT_REVERSE)}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={() => setSortField('')}
        >
          Reset
        </button>
      </div>

      <ul>
        {visibleGoods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};
