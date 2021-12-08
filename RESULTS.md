### Environment

- `node v14.17.0`
- `npm 8.1.4`

### Installation and launch

- `npm i`
- `npm run android:dev` or `npm run ios:dev`

### Main features

-   Movies list grouped by genre
-   Movie search by title
-   Movie details screen

### Additional features

-   Landscape orientation support
-   Font scaling basic support
-   Movies bookmarking: users can bookmark movies on the Details screen and bookmarked movies will appear in the Bookmarked row on the Home screen)
-   Loading screen
-   Platform style respect: ripple effect on android and opacity on iOS

### Backlog

-   Cache for images
-   Tests for model
-   Bigger test coverage
-   e2e tests
-   Dark theme support
-   l10n support
-   Skeletons for loading state
-   Splash screen
-   App icon
-   More accessibility support
-   pre-commit hook for linter
-   Micro caching for requests with the same parameters
-   groupByGenre memoization
-   Intl for message formatting
-   Theme service for storing theme colors and related things
-   Fix test warnings
-   Get rid of magic numbers
-   Fix types
-   Layout is broken in some places when font is scaled
