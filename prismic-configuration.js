import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://cambridgedoughnut.cdn.prismic.io/api/v2';

export const Client = () => Prismic.client(apiEndpoint);
