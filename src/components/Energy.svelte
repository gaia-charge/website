<script>
    import { _ } from "svelte-i18n";
</script>

<div class="scene energy">
    <div class="text">
        <div class="container">
            <div class="text__inside">
                <p class="subtitle">
                    <strong
                        >{$_("subtitle", {
                            default: "Gaia Green Tech is",
                        })}</strong
                    >
                </p>
                <h2 class="title" id="visibleEnergy">
                    {$_("energy.title1", { default: "Clean" })}<br />
                    {$_("energy.title2", { default: "energy supply" })}
                </h2>
                <div class="lead">
                    <p>
                        {$_("energy.lead", {
                            default:
                                "All of this infrastructure is supported by renewable energy sources and strives to be carbon negative.",
                        })}
                    </p>
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
        overflow: hidden;
        z-index: 5;
        height: 96vh;
    }

    .energy .text {
        top: 14.7vh;
    }

    .lead {
        width: 38vw;
    }

    @media only screen and (max-width: 768px) {
        .energy .text {
            top: 0.7vh;
        }

        .energy {
            top: 6vh;
            height: 140vh;
        }

        .lead {
            width: 100vw;
        }
    }

    /* iPhone X */
    @media only screen and (max-width: 411px) and (min-height: 740px) {
        .energy {
            height: 120vh;
            top: 4vh;
        }
    }

    /* Tablet */
    @media only screen and (min-width: 540px) and (max-width: 768px) and (min-height: 720px) {
        .energy {
            top: 12vh;
            height: 160vh;
        }
    }

    @media only screen and (min-width: 1500px) {
        .lead {
            width: 30vw;
        }
    }

    /* Galaxy Fold X */
    @media only screen and (max-width: 300px) and (min-height: 600px) {
        .energy {
            height: 125vh;
        }
    }
</style>
