<script>
    import Mobility from '../components/svg_Mobility.svelte';
    import Person1 from '../svg/2_person_1.svelte';
    import Person2 from '../svg/2_person_2.svelte';
    import Person3 from '../svg/2_person_3.svelte';
    import Scooter from '../svg/2_scooter.svelte';
    import Biker from '../svg/2_biker.svelte';
    import Bushes1 from '../svg/2_bushes_1.svelte';
    import Bushes2 from '../svg/2_bushes_2.svelte';
    import Bushes3 from '../svg/2_bushes_3.svelte';
    import Bus from '../svg/2_bus.svelte';
    import Foreground from '../svg/2_foreground.svelte';
</script>

<div id="mobility" class="scene mobility">
    <div class="clouds">
        <svg width="275" height="52" class="cloud cloud-1">
            <use xlink:href="#svg-cloud"></use>
        </svg>
        <svg width="275" height="52" class="cloud cloud-2">
            <use xlink:href="#svg-cloud"></use>
        </svg>
        <svg width="275" height="52" class="cloud cloud-3">
            <use xlink:href="#svg-cloud"></use>
        </svg>

        <svg width="41" height="10" class="bird bird-1"><use xlink:href="#svg-bird" /></svg>
        <svg width="41" height="10" class="bird bird-2"><use xlink:href="#svg-bird" /></svg>
        <svg width="41" height="10" class="bird bird-3"><use xlink:href="#svg-bird" /></svg>
    </div>
    <div class="buildings">
        <Mobility />
    </div>
    <div class="roads">
        <div class="road road-walk road-1x">
            <Person1 classes="person-1" />
            <Person2 classes="person-2" />
            <Person3 classes="person-3" />
            <Bushes3 classes="bushes" />
        </div>
        <div class="road road-scooter road-1x">
            <Scooter classes="scooter" />
            <Bushes2 classes="bushes" />
        </div>
        <div class="road road-cars road-5x">
            <Bus classes="bus" />
            <Bushes1 classes="bushes" />
        </div>
        <div class="road road-bike road-3x">
            <Biker classes="biker" />
        </div>
    </div>
    <div class="text">
        <div class="text__inside">
            <p class="subtitle"><strong>Gaia Green Tech</strong> is</p>
            <h2 class="title">
                Sustainable<br>
                mobility
            </h2>
            <div class="lead">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor odio sed eros adipiscing commodo. Tempor semper orci, fames neque.</p>
            </div>
        </div>
    </div>
    <Foreground classes="foreground" />
</div>

<style>
.mobility {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
}

/* .mobility::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url(temp/slide_2.png);
    background-repeat: no-repeat;
    background-position: 50% 50%;
    z-index: 9999;
    opacity: .25;
    pointer-events: none;
} */

.buildings {
    flex: 1 1 62vh;
    display: flex;
    align-items: flex-end;
    width: 100%;
    position: relative;
    z-index: 2;
}

.roads {
    flex: 1 1 38vh;
    width: 100%;
    background-color: #dedede;
}

.road {
    width: 100%;
    border-top: 2px solid #275E5E;
    display: flex;
    justify-content: stretch;
    position: relative;
}

.road-1x {
    height: calc(50/345 * 100%);
}

.road-3x {
    height: calc(80/345 * 100%);
}

.road-5x {
    height: calc(165/345 * 100%);
}

.road-walk {
    background-color: #C6C6C6;
    position: relative;
    z-index: 3;
}

.road-walk :global(svg) {
    position: absolute;
}

.road-walk :global(.person-1) {
    right: 15.25vw;
    bottom: 57%;
    width: 3.35vw;
}

.road-walk :global(.person-2) {
    right: 34vw;
    bottom: 50%;
    width: 4vw;
}

.road-walk :global(.person-3) {
    left: 1vw;
    bottom: 73%;
    width: 3vw;
}

.road-walk :global(.bushes) {
    position: absolute;
    height: 64%;
    width: auto;
    bottom: -2px;
    right: 33.25vw;
}

.road-scooter,
.road-bike {
    background-color: #EDEDED;
    position: relative;
    z-index: 4;
}

.road-scooter {
    z-index: 4;
}

.road-scooter :global(.scooter) {
    width: 4.5vw;
    position: absolute;
    bottom: 44%;
    right: 24vw;
}

.road-scooter :global(.bushes) {
    position: absolute;
    height: 123%;
    width: auto;
    bottom: -1px;
    right: 13.25vw;
}

.road-bike {
    z-index: 6;
    border-top-width: 3px;
}

.road-bike :global(.biker) {
    width: 33.5vw;
    position: absolute;
    bottom: 4%;
    left: 1vw;
}

.road-cars {
    background-color: #706F6F;
    position: relative;
    z-index: 5;
}

.road-cars :global(.bus) {
    position: absolute;
    bottom: 68%;
    width: 61vw;
    left: 2.8vw;
}

.road-cars :global(.bushes) {
    position: absolute;
    width: 36vw;
    bottom: -5px;
    left: -4vw;
}

/* CLOUDS & SKY */
@keyframes move-clouds-1 {
    to {
        transform: translateX(60vw);
    }
}

@keyframes move-clouds-2 {
    to {
        transform: translateX(-80vw);
    }
}

@keyframes move-clouds-3 {
    from {
        transform: translateX(50vw) scaleX(-1);
    }

    to {
        transform: translateX(0) scaleX(-1);
    }
}
.clouds {
    z-index: 1;
}

.cloud-1 {
    width: calc(100vw * 127/1440);
    top: calc(64vh * 59/555);
    left: 20vw;
    animation-name: move-clouds-1;
    animation-duration: 90s;
}

.cloud-2 {
    width: calc(100vw * 104/1440);
    top: calc(64vh * 131/555);
    right: calc(100vw * 108/1440);
    animation-name: move-clouds-2;
    animation-duration: 240s;
}

.cloud-3 {
    width: calc(100vw * 156/1440);
    top: calc(64vh * 213/555);
    left: calc(100vw * 246/1440);
    transform: translateX(0) scaleX(-1);
    animation-name: move-clouds-3;
    animation-duration: 100s;
    animation-direction: alternate-reverse;
}

.bird-1 {
    top: calc(64vh * 70/555);
    left: calc(100vw * 35/1440);
}

.bird-2 {
    top: calc(64vh * 121/555);
    left: calc(100vw * 490/1440);
}

.bird-3 {
    width: 1.85rem;
    top: calc(64vh * 185/555);
    right: 7.5vw;
    opacity: .8;
}

/* TEXT */
.text {
    display: flex;
    justify-content: flex-end;
    top: 15.75vh;
    z-index: 10;
}

.text__inside {
    margin-right: calc(100vw * 305/1440); /* adds a margin to the building */
    min-width: calc(100vw * 340/1440);
}

/* FOREGROUND */
.mobility :global(.foreground) {
    width: 73vw;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10;
}

</style>