<script>
    import ContactForm from '../components/ContactForm.svelte';
</script>

<div class="scene contact">
    <div class="text">
        <div class="text__inside">
            <h2 class="title">
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
    align-items: flex-start;
    flex-direction: column;
    position: relative;
    background: none;
    z-index: 6;
    width: 100%;
    height: 80vh;
    overflow: hidden;
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
    top: 5vh;
    justify-content: flex-end;
}

.contact .text__inside {
    width: 28vw;
    margin-right: 21vw;
}

.contact .lead {
    margin-bottom: 4.5vh;
}
</style>