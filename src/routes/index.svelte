<script>
	import Charging from '../components/Charging.svelte';
	import Mobility from '../components/Mobility.svelte';
	import Bottom from '../components/Bottom.svelte';
</script>

<style>
</style>

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

<Charging />
<Mobility />
<Bottom />