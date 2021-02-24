import { YouTubeChannel } from './publishers/YouTubeChannel';
import { Subscriber } from './subscribers/Subscriber';

const YTChannel = new YouTubeChannel();

const user_01 = new Subscriber();
const user_02 = new Subscriber();

// Add subscriptors (observers) to publisher (observable):
YTChannel.attach(user_01);
YTChannel.attach(user_02);

// Force a new event:
// YTChannel.addNewVideo('Tutorial of design patterns');
