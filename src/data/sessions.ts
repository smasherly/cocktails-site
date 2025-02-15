export interface Topic {
  name: string;
  slidesLink: string;
  worksheetLink: string;
  areLinksEnabled: boolean;
}

export const TOPICS: Topic[] = [
  {
    name: 'Intro to HTML',
    slidesLink:
      'https://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/01-glasswork/front-end-html.html#/',
    worksheetLink:
      'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/?id=worksheets',
    areLinksEnabled: true,
  },
  {
    name: 'The Garnish | Introduction to CSS',
    slidesLink:
      'https://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/css-series/css-series-01.html#/',
    worksheetLink:
      'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/?id=worksheets',
    areLinksEnabled: true,
  },
  {
    name: 'The Garnish | Introduction to CSS Grid',
    slidesLink:
      'https://kansascitywomenintechnology.github.io/CodingCocktailsSlideTemplate/css-series/css-series-02-grid.html#/',
    worksheetLink:
      'https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/?id=worksheets',
    areLinksEnabled: true,
  },
];

export interface Session {
  date: string;
  time: string;
  name: string;
  eventbriteLink: string;
  eventbriteIFrameLink: string;
}

export const SESSIONS: Session[] = [
  {
    date: '2022-02-12',
    time: '7-9pm',
    name: 'Coding & Cocktails: Next Level GitHub Profiles - ONLINE EVENT',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-next-level-github-profiles-tickets-236232948107?aff=ccweb',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=236232948107&ref=ccweb',
  },
  {
    date: '2022-03-12',
    time: '7-9pm',
    name: 'Coding & Cocktails: The Glass | Front-end Architecture & HTML - ONLINE EVENT',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-glass-front-end-architecture-html-tickets-278402879507?aff=ccweb',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=278402879507&ref=ccweb',
  },
  {
    date: '2022-04-09',
    time: '7-9pm',
    name: 'Coding & Cocktails: The Bar | Open Source - ONLINE EVENT',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-bar-open-source-tickets-307775664297?aff=ccweb',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=307775664297&ref=ccweb',
  },
  {
    date: '2022-05-14',
    time: '7-9pm',
    name: 'Coding & Cocktails: The Garnish | Introduction to CSS - ONLINE EVENT',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-garnish-introduction-to-css-tickets-331557636817?aff=ccweb',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=331557636817&ref=ccweb',
  },
  {
    date: '2022-06-11',
    time: '7-9pm',
    name: 'Coding & Cocktails: The Garnish | Introduction to CSS Grid - ONLINE EVENT',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-garnish-introduction-to-css-grid-tickets-352130902007?aff=ccweb',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=352130902007&ref=ccweb',
  },
  {
    date: '2022-07-09',
    time: '7-9pm',
    name: 'Coding & Cocktails: The Glass | Front-end Architecture & HTML - ONLINE EVENT',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-glass-front-end-architecture-html-tickets-373882591897?aff=ccweb',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=373882591897&ref=ccweb',
  },
  {
    date: '2022-08-13',
    time: '7-9pm',
    name: 'Coding & Cocktails: The Garnish | Introduction to CSS - ONLINE EVENT',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-garnish-introduction-to-css-tickets-393800195987?aff=ccweb',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=393800195987&ref=ccweb',
  },
  {
    date: '2022-09-10',
    time: '7-9pm',
    name: 'Coding & Cocktails: The Garnish | Introduction to CSS Grid - ONLINE EVENT',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-the-garnish-introduction-to-css-grid-tickets-407782226617?aff=ccweb',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=407782226617&ref=ccweb',
  },
    {
    date: '2022-10-08',
    time: '4-8pm',
    name: 'Coding & Cocktails: Hacktoberfest 2022',
    eventbriteLink:
      'https://www.eventbrite.com/e/coding-cocktails-hacktoberfest-2022-tickets-415734923347?aff=ccweb',
    eventbriteIFrameLink:
      '//eventbrite.com/tickets-external?eid=415734923347&ref=ccweb',
  },
];

// Month to display for upcoming session. Use 7 for July, 8 for Aug, etc
// the minus one is because we skipped July
export const UPCOMING_SESSION_MONTH = 9;
