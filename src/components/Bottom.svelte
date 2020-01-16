<script>
    import Bottom from '../svg/3_bottom.svelte';
</script>

<div id="bottom" class="bottom">
    <Bottom />

    <div class="scene clean">
        <div class="text">
            <div class="container">
                <div class="text__inside">
                    <p class="subtitle"><strong>Gaia Green Tech</strong> is</p>
                    <h2 class="title">
                        Clean<br>
                        energy supply
                    </h2>
                    <div class="lead">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Porttitor odio sed eros adipiscing commodo. Tempor semper orci, fames neque.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="scene contact">
        <div class="text">
            <div class="text__inside">
                <h2 class="title">
                    Let's connect
                </h2>
                <div class="lead">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Porttitor odio sed eros adipiscing commodo. Tempor semper orci, fames neque.</p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.clean,
.contact {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
}

.bottom {
    position: relative;
}

.bottom::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-size: 100% auto;
    background-image: url(temp/slide_3.png);
    background-repeat: no-repeat;
    background-position: 0 0;
    z-index: 9999;
    opacity: .25;
    pointer-events: none;
    left: 0;
    top: 0;
}

/* CLEAN */
.clean .text {
    top: 18.7vh;
}

.clean .text .container {
    margin-left: 11vw;
}
</style>