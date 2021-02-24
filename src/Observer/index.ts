/**
 * Observer.
 *
 * Observer es un patrón de diseño de comportamiento que te permite definir un mecanismo de suscripción para notificar a uno o varios clientes sobre cualquier evento que le suceda al objeto que están observando.
 */

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
