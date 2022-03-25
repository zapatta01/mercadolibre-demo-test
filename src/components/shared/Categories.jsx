import './Categories.scss';

export default function Categories({ categories }) {
  return (
    <ul className='ul-categories'>
      {categories &&
        categories.map((cat, i) => {
          return <li key={i}> {cat}</li>;
        })}
    </ul>
  );
}
