import type { Doc, Resposta } from '../types/typesApi';

export const fetchCohets = async () => {
  const resposta = await fetch('https://api.spacexdata.com/v5/launches/query', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: {},
      options: {
        sort: {
          date_unix: 'asc',
        },
        limit: 12,
      },
    }),
  });

  /* const dades = JSON.stringify(await resposta.json());
	console.log('dades -->', dades); */
  const { docs } = (await resposta.json()) as Resposta;
  //console.log("Docs -->", docs);
  return docs;
};

export const fetchCohetAmbId = async ({ id }: { id: string }) => {
  console.log('IdFetch -->', id);

  const resposta = await fetch(`https://api.spacexdata.com/v5/launches/${id}`);

  /* const dades = JSON.stringify(await resposta.json());
	console.log('dades -->', dades); */
  const cohet = (await resposta.json()) as Doc;
  //console.log(cohet);
  return cohet;
};
