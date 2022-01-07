import  Launcher from '@aktiv/launcher';
import routes from './config/router';

const launcher = new Launcher({
    routes
})

launcher.start();
