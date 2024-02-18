<script>
  import Siema from 'siema';
  import { onMount } from 'svelte';
  
  let slider, prev, next, radioSlider
  let select = 0

  onMount(() => {
      slider = new Siema({
              selector: '.siema',
              duration: 200,
              easing: 'ease-in-out',
              perPage: 2,
              startIndex: 0,
              draggable: false,
              multipleDrag: false,
              threshold: 20,
              loop: false,
              rtl: false,
              onInit: () => {},
              onChange: () => {},
          }); //end Siema constructor
      prev = () => {
          slider.prev()
          if (select > 0) {
              select--
          }
      }
      next = () => {
          slider.next()
          if (select >= 0) {
              select++
          }
      }
  }) //end onMount
const images = [
  {
    url: "lib/assets/carousel1.svg",
    description: "image1",
  },
  {
    url: "lib/assets/carousel1.svg",
    description: "image2",
  }
];
</script>

  <div class="siema">
  {#each images as src, imageIndex (src)}
    <div class="slider">
        <img src={src.url} alt={src.description} width={1000} height={600} />
    </div>
  {/each}
  </div>

