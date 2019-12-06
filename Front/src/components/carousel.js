import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
  {
    src: 'https://longfordchildcare.ie/wp-content/uploads/2016/04/CHILD-PLAYING-OUTSIDE.jpg',
    altText: 'Slide 1',
    caption: '',
    header: 'Open Space',
    key: '1'
  },
  {
    src: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F81851673%2F260369423549%2F1%2Foriginal.jpg?w=1000&auto=compress&rect=0%2C290%2C2000%2C1000&s=edf08e46e71adbccf1b6f39db2af0ae8',
    altText: 'Slide 2',
    caption: '',
    header: 'Varity of activities',
    key: '2'
  },
  {
    src: 'https://www.gannett-cdn.com/-mm-/582568e00c17e48a137dbf529626145d89c4861c/c=0-151-3000-1846/local/-/media/2015/09/17/CNYGroup/Binghamton/635780905831027813-20150916-YMCA-0029.jpg?width=1600&height=800&fit=crop',
    altText: 'Slide 3',
    caption: '',
    header: 'Safe Environment',
    key: '3'
  }
];

const Car = () => <UncontrolledCarousel items={items} />;

export default Car;