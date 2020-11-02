<script>
    import { _ } from 'svelte-i18n';
</script>

<div class="scene energy">
    <div class="text">
        <div class="container">
            <div class="text__inside">
                <p class="subtitle"><strong>{$_('subtitle', { default: 'Gaia Green Tech is' })}</strong></p>
                <h2 class="title" id="visibleEnergy">
                    {$_('energy.title1', { default: 'Clean' })}<br>
                    {$_('energy.title2', { default: 'energy supply' })}
                </h2>
                <div class="lead">
                    <p>{$_('energy.lead', { default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor odio sed eros adipiscing commodo. Tempor semper orci, fames neque.' })}</p>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.energy {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    position: relative;
   /* background: none;*/
    overflow: hidden;
    z-index: 2;
}

.energy .text {
    top: 14.7vh;
}
.lead{
    width: 38vw;
}

/* .energy .text .container {
    margin-left: 2rem;
} */
</style>