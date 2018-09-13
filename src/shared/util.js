// @flow

// needed because we only have one named export here, can be removed in future
// eslint-disable-next-line import/prefer-default-export
export const isProd = process.env.NODE_ENV === 'production';
