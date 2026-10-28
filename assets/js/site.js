import '../css/site.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Alpine from 'alpinejs';
import persist from '@alpinejs/persist'

AOS.init({
    once: true
});

window.Alpine = Alpine;

Alpine.plugin(persist);

Alpine.start();