<script>
    import Bottom from '../svg/3_bottom.svelte';
    import BottomForm from '../components/BottomForm.svelte';
    import BottomFooter from '../components/BottomFooter.svelte';
</script>

<div id="bottom" class="bottom">
    <Bottom />

    <div id="energy" class="scene energy">
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

    <div id="contact" class="scene contact">
        <div class="text">
            <div class="text__inside">
                <h2 class="title">
                    Let's connect!
                </h2>
                <div class="lead">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Porttitor odio sed eros adipiscing commodo. Tempor semper orci, fames neque.</p>
                </div>

                <BottomForm />
            </div>
        </div>
    </div>

    <BottomFooter />
</div>

<style>
.energy,
.contact {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    background: none;
}

.bottom {
    position: relative;
}

/* energy */
.energy {
    z-index: 5;
}

.energy .text {
    top: 18.7vh;
}

.energy .text .container {
    margin-left: 11vw;
}

/* CONTACT */
.contact {
    z-index: 6;
    height: 80vh;
}

.contact::after {
    content: "";
    display: block;
    height: 50vh;
    width: 100%;
    background-color: #ccf06b;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
}

.contact .text {
    top: 5vh;
    justify-content: flex-end;
}

.contact .text__inside {
    width: 28vw;
    margin-right: 21vw;
}

.lead {
    margin-bottom: 4.5vh;
}
</style>