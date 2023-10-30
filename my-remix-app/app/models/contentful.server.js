// import { getPlaiceholder } from "plaiceholder";

import becomeAsponser from "../routes/becomeAsponser";

const SPACE = process.env.CONTENTFUL_SPACE_ID;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;

async function apiCall(query, variables) {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
  const options = {
    method: "POST", //data wat uit de cloud word gehaald met graphql vanuit contentful cms
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({ query, variables }),
  };
  return await fetch(fetchUrl, options);
}

async function getBecomeAsponser() {
  //bevat graphQL query gegevens die gegevens ophaalt uit de json indeling
  const query = `
    {
      becomeAsponserCollection {
        items {
          title
          desc {
            json
          }
          link{
            url
          }
        }
      }
    }`;
  const response = await apiCall(query);
  const json = await response.json();

  const formattedData = await json.data.becomeAsponserCollection.items.map(
    async (BecomeAsponser) => {
      const { title, desc, link } = BecomeAsponser;

      return {
        title,
        desc,
        link,
      };
    }
  );
  return Promise.all(formattedData); //javascript functie die meerdere beloftes tegerlijkertijd uitvoert
}

async function getPromise() {
  const query = `{
        promiseCollection {
            items {
                sys {
                    id
                }
                title
                description {
                    json
                }
                link
                type
                previewImage {
                    description
                    url
                }
            }
        }
    }`;
  const response = await apiCall(query);
  const json = await response.json();
  return await json.data.promiseCollection.items;
}

async function getPage(title) {
  const query = `
    query($title:String) {
        pageCollection(where:{title:$title}){
          items{
            title
            description{
              json
            }
            rolesCollection{
              items{
                roleTitle
              }
            }
            paragraphsCollection{
              items {
                name
                story
              }
            }
           
          }
        }
      }
    `;
  const variables = {
    title: title,
  };
  const response = await apiCall(query, variables);
  const json = await response.json();
  return await json.data.pageCollection.items[0];
}

export const client = {
  getBecomeAsponser,
  getPromise,
  getPage,
};
