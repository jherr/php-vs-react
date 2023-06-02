export async function getServerSideProps() {
  const pokemonReq = await fetch(`http://localhost:8080/pokemon-1500.json`, {
    cache: "no-cache",
  });
  const pokemon = await pokemonReq.json();
  return {
    props: {
      pokemon,
    },
  };
}

const Pokemon = ({ pokemon }: { pokemon: Record<string, string> }) => {
  return (
    <>
      {Object.keys(pokemon).map((k) => (
        <div key={[pokemon.id, k].join(",")}>{pokemon[k].toString()}</div>
      ))}
    </>
  );
};

export default function Home({
  pokemon,
}: {
  pokemon: Record<string, string>[];
}) {
  return (
    <main>
      <h1>Pokemon</h1>
      {pokemon.map((p) => (
        <div key={p.id} className="flex flex-row gap-2">
          <Pokemon pokemon={p} />
        </div>
      ))}
    </main>
  );
}
