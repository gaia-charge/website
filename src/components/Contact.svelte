<script>
    import ContactForm from '../components/ContactForm.svelte';
</script>

<div class="scene contact">
    <div class="text">
        <div class="text__inside">
            <h2 class="title" id="visibleContact">
                Let's connect!
            </h2>
            <div class="lead">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Porttitor odio sed eros adipiscing commodo. Tempor semper orci, fames neque.</p>
            </div>

            <ContactForm />
        </div>
    </div>
</div>

<style>
.contact {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    flex-direction: column;
    position: relative;
    background: none;
    z-index: 6;
    width: 100%;
    height: 80vh;
    /* min-height: 60rem; */
    min-height: 60vw;
    overflow: hidden;
}

@media (max-aspect-ratio: 1600/1000) {
    .contact {
        justify-content: flex-start;
    }
}

/* .contact::after {
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
} */

.contact .text {
    position: relative;
    top: 0;
    left: 0;
    justify-content: flex-end;
}

.contact .text__inside {
    width: 38vw;
    margin-right: 21vw;
}

.contact .lead {
    margin-bottom: 4.5vh;
}
</style>