export function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
export const InsightPartsFragmentDoc = gql`
    fragment InsightParts on Insight {
  __typename
  title
  description
  date
  draft
  tag
  heroImage
  body
}
    `;
export const PerspectivePartsFragmentDoc = gql`
    fragment PerspectiveParts on Perspective {
  __typename
  title
  description
  date
  draft
  tag
  heroImage
  body
}
    `;
export const InsightDocument = gql`
    query insight($relativePath: String!) {
  insight(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...InsightParts
  }
}
    ${InsightPartsFragmentDoc}`;
export const InsightConnectionDocument = gql`
    query insightConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: InsightFilter) {
  insightConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...InsightParts
      }
    }
  }
}
    ${InsightPartsFragmentDoc}`;
export const PerspectiveDocument = gql`
    query perspective($relativePath: String!) {
  perspective(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...PerspectiveParts
  }
}
    ${PerspectivePartsFragmentDoc}`;
export const PerspectiveConnectionDocument = gql`
    query perspectiveConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: PerspectiveFilter) {
  perspectiveConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...PerspectiveParts
      }
    }
  }
}
    ${PerspectivePartsFragmentDoc}`;
export function getSdk(requester) {
  return {
    insight(variables, options) {
      return requester(InsightDocument, variables, options);
    },
    insightConnection(variables, options) {
      return requester(InsightConnectionDocument, variables, options);
    },
    perspective(variables, options) {
      return requester(PerspectiveDocument, variables, options);
    },
    perspectiveConnection(variables, options) {
      return requester(PerspectiveConnectionDocument, variables, options);
    }
  };
}
import { createClient } from "tinacms/dist/client";
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
export const ExperimentalGetTinaClient = () => getSdk(
  generateRequester(
    createClient({
      url: "https://content.tinajs.io/2.4/content/46db5683-881d-4e20-a013-9245583e7d2a/github/main",
      queries
    })
  )
);
export const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};
