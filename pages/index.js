export default function Home({ pokemon }) {
  return (
    <div>
      Hello
      <a href="/mountain">Mountain</a>
      <a href="/about">About</a>
      <h1>Pokemons</h1>
      {pokemon.map((p) => (
        <div key={p.name}>{p.name}</div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
  const data = await res.json();

  return {
    props: {
      pokemon: data.results,
    },
  };
}
