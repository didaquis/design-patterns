/**
 * Proxy.
 *
 * Proxy es un patrón de diseño estructural que te permite proporcionar un sustituto o marcador de posición para otro objeto. Un proxy controla el acceso al objeto original, permitiéndote hacer algo antes o después de que la solicitud llegue al objeto original.
 *
 * Útil para cachear información y evitar consultas que son lentas o simplemente repetidas (incluso puedes implementar una lógica que permita que esa caché tenga un tiempo de vida limitado). Puede ser útil cachear la infromación que retorna una API que tiene límite de peticiones. También podrías utilizar el proxy para hacer validaciones e impedir acceder al objeto final si no se cumplen ciertos criterios.
 *
 * Es similar a Facade, aunque Proxy si comparte la interfaz con su objeto de servicio.
 * Fíjate que Adapter proporciona una interfaz diferente al obketo envuelto. Proxy proporciona la misma interfaz. Y Decorador le proporciona la misma interfaz mejorada.
 */

import { YouTubeAPI } from './videoProviders/YouTubeAPI';
import { VideoProxy } from './VideoProxy';

const proxy = new VideoProxy(new YouTubeAPI());

const searchPlaylist = async (aPlaylist: string): Promise<string> => {
	const startDate = new Date();
	await proxy.getPlaylist(aPlaylist);
	const endDate = new Date();
	return `Latency: ${(endDate.getTime() - startDate.getTime()) / 1000} seconds`;
};

(async () => {
	await searchPlaylist('courses'); // ~4 seconds
	await searchPlaylist('courses'); // ~0 seconds

	await searchPlaylist('funny'); // ~4 seconds
	await searchPlaylist('funny'); // ~0 seconds
})();
