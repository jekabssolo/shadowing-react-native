// eslint-disable-next-line no-unused-vars
const OFF = 0
// eslint-disable-next-line no-unused-vars
const WARNING = 1
const ERROR = 2

module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier'],
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: '@(react|react-native)',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['internal'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'react/jsx-sort-props': [
      ERROR,
      {
        ignoreCase: true,
        callbacksLast: true,
        reservedFirst: true,
        shorthandFirst: true,
        noSortAlphabetically: true,
      },
    ],
  },
}
