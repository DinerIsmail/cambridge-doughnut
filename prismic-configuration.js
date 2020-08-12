import Prismic from 'prismic-javascript';

export const apiEndpoint = 'https://cambridge-doughnut.cdn.prismic.io/api/v2';

export const Client = () => Prismic.client(apiEndpoint);
