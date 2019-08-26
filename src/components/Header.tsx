import react from 'react';

interface IProps {
  activeTab: string;
  onClick(e: any, tab: string): void;
}

const header: React.FC<IProps> = ({ onClick, activeTab }) => {
  return (
    <div className="header">
      <h1>Kingdom of Animal</h1>
      <div className="animal-buttons">
        <button
          className={
            activeTab === 'dogs'
              ? 'animal-button active-animal-button'
              : 'animal-button'
          }
          onClick={e => onClick(e, 'dogs')}
        >
          강아지
        </button>
        <button
          onClick={e => onClick(e, 'cats')}
          className={
            activeTab === 'cats'
              ? 'animal-button active-animal-button'
              : 'animal-button'
          }
        >
          고양이
        </button>
      </div>
    </div>
  );
};

export default header;
