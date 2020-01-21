<script>
    import { onMount } from "svelte";

    let animateScroll;

    onMount(async () => {
        animateScroll = await import("svelte-scrollto");
    });

    import Charging from '../components/Charging.svelte';
    import Mobility from '../components/Mobility.svelte';
    import Energy from '../components/Energy.svelte';
    import Contact from '../components/Contact.svelte';
    import Footer from '../components/Footer.svelte';

    import Bottom from '../svg/3_bottom.svelte';
</script>

<svelte:head>
    <title>Gaia Green Tech</title>
</svelte:head>

<svg style="display: none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <symbol id="svg-cloud" viewBox="0 0 275 52">
        <path d="M0 51.36c2.84-17.22 17.12-30.33 34.32-30.33A33.7 33.7 0 0156.8 29.7C68.6 11.84 87.4.29 108.6.29c21.2 0 40.03 11.56 51.82 29.42a33.34 33.34 0 0128.24-15.81c13.14 0 24.5 7.74 30.01 19.01 6-4.5 13.6-7.2 21.9-7.2 16.73 0 30.67 10.99 34.1 25.65H0z" fill="#fff" stroke="#79A5AA" stroke-width="2"/>
    </symbol>
    <symbol id="svg-bird" viewBox="0 0 41 10">
        <path d="m1.35 10a.75.75 0 0 1 -.21 0 1 1 0 0 1 -.77-1.25 10.9 10.9 0 0 1 20.16-3.07 10.91 10.91 0 0 1 20.2 3 1 1 0 0 1 -.73 1.19 1 1 0 0 1 -1.19-.77 8.91 8.91 0 0 0 -17.31-.58 1 1 0 0 1 -1 .72 1 1 0 0 1 -1-.72 8.91 8.91 0 0 0 -17.25.65 1 1 0 0 1 -.9.83z" fill="#79a5aa"/>
    </symbol>
</svg>

<ul class="nav">
    <li>
        <a href="/" on:click={() => animateScroll.scrollTo({element: '#charging'})}>
            Charging
        </a>
    </li>
    <li>
        <a href="/" on:click={() => animateScroll.scrollTo({element: '#mobility'})}>
            Mobility
        </a>
    </li>
    <li>
        <a href="/" on:click={() => animateScroll.scrollTo({element: '#energy'})}>
            Energy
        </a>
    </li>
    <li class="nav__contact">
        <a href="/" on:click={() => animateScroll.scrollTo({element: '#contact'})}>
            Contact
        </a>
    </li>
</ul>

<section id="charging">
    <Charging />
</section>

<section id="mobility">
    <Mobility />
</section>

<div class="bottom">
    <Bottom />

    <section id="energy">
        <Energy />
    </section>

    <section id="contact">
        <Contact />
    </section>

    <Footer />
</div>

<style>
.nav {
    position: fixed;
    z-index: 100;
}

.bottom {
    position: relative;
    overflow: hidden;
}
</style>
