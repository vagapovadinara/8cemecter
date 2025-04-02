import { SortOffersType } from '../../const';
import { useState, useEffect, KeyboardEvent, useRef } from 'react';
import { SortOffer } from '../../types/sort';

type SortPlacesProps = {
  activeSorting: SortOffer;
  onChange: (newSorting: SortOffer) => void;
};

function SortOptions({ activeSorting, onChange }: SortPlacesProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLSpanElement | null>(null);

  const iconStyle = {
    transform: `translateY(-50%) ${isOpen ? 'rotate(180deg)' : ''}`,
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function keyDownHandler(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && isOpen) {
      evt.preventDefault();
      setIsOpen(false);
    }
  }

  function sortingItemClickHandler(type: SortOffer) {
    onChange(type);
    setIsOpen(false);
  }

  return (
    <form
      className="places_sorting"
      action="#"
      method="get"
      onKeyDown={keyDownHandler}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        {activeSorting}
        <svg className="places__sorting-arrow" width={7} height={4} style={iconStyle}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        ref={menuRef}
        className={`places__options ${isOpen ? 'places__options--opened' : ''}`}
      >
        {Object.keys(SortOffersType).map((key) => {
          const type = SortOffersType[key as keyof typeof SortOffersType];
          return (
            <li
              key={type}
              className={`places__option ${type === activeSorting ? 'places__option--active' : ''}`}
              tabIndex={0}
              onClick={() => sortingItemClickHandler(type as SortOffer)}
            >
              {type}
            </li>
          );
        })}
      </ul>
    </form>
  );
}

export { SortOptions };
