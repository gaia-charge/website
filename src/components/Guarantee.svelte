<script>
  export let image;
  export let title;
  export let description;
</script>

<div class="card">
  <img src={image} alt={title} />
  <h3 class="title">{title}</h3>
  <p class="sub-title">{description}</p>
</div>

<style lang="postcss">
 .title {
  font-size: calc(21 / var(--ratio));
  line-height: calc(28 / var(--ratio));
  font-weight: 600;
 } 
 .sub-title {
  font-size: calc(18 / var(--ratio));
  line-height: calc(28 / var(--ratio));
  font-weight: 400;
 }
.card {
    display: grid;
    grid-template-rows: 50% 20% 30%;
    justify-content: flex-start;
    background-color: white;
    padding: calc(40 / var(--ratio)) calc(29 / var(--ratio));
    min-width: calc(334 / var(--ratio));
    min-height: calc(390 / var(--ratio));
    border-radius: 20px;
    scroll-snap-align: start;
  }

</style>