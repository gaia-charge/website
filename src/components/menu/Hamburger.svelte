<script>
	export let open = false
</script>

<button class="text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none" class:open on:click={() => open = !open}>
	<svg width=32 height=24>
		<line id="top" x1=4 y1=2  x2=32 y2=2/>
		<line id="middle" x1=0 y1=10 x2=28 y2=10/>
		<line id="bottom" x1=4 y1=18 x2=32 y2=18/>
	</svg>
</button>

<style>
	svg {
		min-height: 24px;
		transition: transform 0.3s ease-in-out;
        color: #044348;
	}
	
	svg line {
		stroke: currentColor;
		stroke-width: 3;
		transition: transform 0.3s ease-in-out
	}
	
	button {
		z-index: 20;
	}
	
	.open svg {

        color: white !important;
	}
	
	.open #top {
		transform: translate(2px, 0px) rotate(45deg)
	}
	
	.open #middle {
		opacity: 0;
	}
	
  .open #bottom {
		transform: translate(-12px, 13px) rotate(-45deg)
	}
</style>