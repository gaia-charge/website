<script>
    import { onMount } from "svelte";
    import ContactSubmitted from './../components/ContactSubmitted.svelte'
    import { _, locale} from 'svelte-i18n';

    let whiteBackground = true;
    let activeContact = false;
    let stopAnimationCharcing = false;
    let stopAnimationMobility = false;
    let stopAnimationEnergy = false;

    export let showPopup = false;

    if( !$locale )
         $locale = 'en';

    const updateVh = () => {
        let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    const updateBackgroundHeader = (visibility) =>{
        whiteBackground = visibility;
    }

    const updateActiveSection = (id)=>{

        document.querySelectorAll('.nav__link').forEach((el) => {
            el.classList.remove('active');
            stopAnimationCharcing = true;
            stopAnimationMobility=true;
            stopAnimationEnergy =true;
        });

        if( id == 'visibleCharging')
            stopAnimationCharcing =false;
        else if( id == 'visibleMobility')
            stopAnimationMobility =false;
        else if( id == 'visibleEnergy')
            stopAnimationEnergy =false;

        if( id == 'visibleContact') 
        {
            activeContact = true;
        }
        else{
            activeContact = false;    
            document.getElementById(`-${id}`).classList.add('active');
        }
        
    }
    
    onMount(async () => {
        ;[...document.querySelectorAll('a[href^="#"]')].map(
            x => (x.href = document.location + new URL(x.href).hash)
        )

        // update active section if the h2 is visible
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');

                if( id == 'scrollMenu'){
                    updateBackgroundHeader(entry.intersectionRatio)
                    return false;
                }
                
                if( entry.intersectionRatio > 0 && document.getElementById(`-${id}`) )
                    updateActiveSection(id)

            });
        });

        // Track all sections
        document.querySelectorAll('h2[id]').forEach((section) => {
            observer.observe(section);
        });
        observer.observe(document.getElementById('scrollMenu'));


        updateVh();
        window.addEventListener('resize', updateVh);
    });

    
    import Charging from '../components/Charging.svelte';
    import Mobility from '../components/Mobility.svelte';
    import Energy from '../components/Energy.svelte';
    import Contact from '../components/Contact.svelte';
    import Footer from '../components/Footer.svelte';

    import Bottom from '../svg/3_bottom.svelte';

    function changeLocale(loc){
        $locale = loc;
    }

    let checkInput = false;
    function handleLiClick(){
        checkInput = false;
        return true;
    }
 
</script>

<svelte:head>
    <title>Gaia Green Tech</title>
</svelte:head>

<!--svelte:window on:scroll={throttle(handleScrollY,100)}/-->

<svg style="display: none" fill="none" xmlns="http://www.w3.org/2000/svg">
    <symbol id="svg-cloud" viewBox="0 0 275 52">
        <path d="M0 51.36c2.84-17.22 17.12-30.33 34.32-30.33A33.7 33.7 0 0156.8 29.7C68.6 11.84 87.4.29 108.6.29c21.2 0 40.03 11.56 51.82 29.42a33.34 33.34 0 0128.24-15.81c13.14 0 24.5 7.74 30.01 19.01 6-4.5 13.6-7.2 21.9-7.2 16.73 0 30.67 10.99 34.1 25.65H0z" fill="#fff" stroke="#79A5AA" stroke-width="2"/>
    </symbol>
    <symbol id="svg-bird" viewBox="0 0 41 10">
        <path d="m1.35 10a.75.75 0 0 1 -.21 0 1 1 0 0 1 -.77-1.25 10.9 10.9 0 0 1 20.16-3.07 10.91 10.91 0 0 1 20.2 3 1 1 0 0 1 -.73 1.19 1 1 0 0 1 -1.19-.77 8.91 8.91 0 0 0 -17.31-.58 1 1 0 0 1 -1 .72 1 1 0 0 1 -1-.72 8.91 8.91 0 0 0 -17.25.65 1 1 0 0 1 -.9.83z" fill="#79a5aa"/>
    </symbol>
</svg>

<header class="header" class:whiteBackground={!whiteBackground}>
    <div class="container">
        <a href="/" class="header__link">
            <svg class="header__logo" width="122" height="35" viewBox="0 0 122 35" xmlns="http://www.w3.org/2000/svg">
                <path d="m28.38 12.57h-13.14a2.78 2.78 0 0 0 -1.51.45 2.68 2.68 0 0 0 -1 1.2c3.85.7 10.68 2.55 14 7.32a11.2 11.2 0 0 1 1.71 9 2.82 2.82 0 0 0 1.89-.84 2.73 2.73 0 0 0 .77-1.93v-12.44a2.77 2.77 0 0 0 -2.75-2.76z" fill="#4c8c40"/><path d="m14.26 27.77a21.34 21.34 0 0 1 -1.63-3.41 9.54 9.54 0 0 1 3.45-18.44h12.82a2.76 2.76 0 0 0 2-.81 2.78 2.78 0 0 0 0-3.9 2.76 2.76 0 0 0 -2-.81h-12.82a15.06 15.06 0 1 0 0 30.11h.52a11.19 11.19 0 0 1 -2.34-2.74z" fill="#4c8c40"/><path d="m16.06 20.23c10.75 5.09 10.64 10.93 10.64 10.93 3.81-14.16-16.91-15.74-16.91-15.74 3 1.39 3 6.89 5.82 11.54s8.89 5.43 8.89 5.43a6.55 6.55 0 0 1 .36 2.7h1.14c-.22-8.9-9.94-14.86-9.94-14.86z" fill="#98c93f"/><path d="m42 12.21c0-7.73 5.05-12.21 11.17-12.21a9.77 9.77 0 0 1 3.92.75 9.92 9.92 0 0 1 3.32 2.25l-2.74 3.42a5.93 5.93 0 0 0 -4.32-1.86c-3.53 0-6 2.81-6 7.49s2.13 7.57 6.44 7.57a4.12 4.12 0 0 0 2.41-.7v-4h-3.82v-4.3h8.4v10.7a10.9 10.9 0 0 1 -7.56 2.8c-6.29.02-11.22-4.07-11.22-11.91z" fill="#4c8c40"/><path d="m72.31.43h6.2l7.19 23.28h-5.48l-3-11.78c-.64-2.33-1.22-5.09-1.86-7.51h-.14c-.56 2.45-1.17 5.18-1.8 7.51l-3 11.78h-5.31zm-2.46 13.66h11v4.08h-11z" fill="#4c8c40"/><path d="m90.72.43h5.17v23.28h-5.17z" fill="#4c8c40"/><path d="m108.37.43h6.21l7.19 23.28h-5.48l-3-11.78c-.64-2.33-1.25-5.09-1.86-7.51h-.14c-.56 2.45-1.17 5.18-1.81 7.51l-3 11.79h-5.29zm-2.45 13.66h11v4.08h-11z" fill="#4c8c40"/><g fill="#98c93f"><path d="m43.14 31.14a3.61 3.61 0 0 1 3.61-3.95 3.22 3.22 0 0 1 2.34 1l-.88 1.09a2.06 2.06 0 0 0 -.64-.45 2 2 0 0 0 -.76-.15c-1.14 0-2 .91-2 2.42s.69 2.46 2.09 2.46a1.28 1.28 0 0 0 .78-.23v-1.33h-1.17v-1.4h2.71v3.47a3.66 3.66 0 0 1 -6.08-2.94z"/><path d="m52.63 27.34h2.67c1.57 0 2.86.55 2.86 2.34s-1.29 2.48-2.86 2.48h-1v2.71h-1.67zm2.54 3.47c.88 0 1.35-.39 1.35-1.13s-.47-1-1.35-1h-.86v2.1zm-.18.9 1.16-1.09 2.37 4.25h-1.88z"/><path d="m61.48 27.34h4.64v1.43h-3v1.51h2.53v1.43h-2.5v1.75h3.11v1.43h-4.78z"/><path d="m69.59 27.34h4.64v1.43h-3v1.51h2.55v1.43h-2.52v1.75h3.1v1.43h-4.77z"/><path d="m77.7 27.34h1.72l1.93 3.74.73 1.65c-.08-.79-.22-1.85-.22-2.74v-2.65h1.6v7.53h-1.67l-1.94-3.75-.73-1.65c.07.83.21 1.84.21 2.73v2.67h-1.6z"/><path d="m92.74 28.76h-2v-1.42h5.76v1.43h-2v6.1h-1.76z"/><path d="m99.49 27.34h4.65v1.43h-3v1.51h2.53v1.43h-2.53v1.75h3.08v1.43h-4.73z"/><path d="m107.24 31.14c0-2.5 1.62-3.95 3.5-3.95a3 3 0 0 1 1.21.26 3.16 3.16 0 0 1 1 .72l-.89 1.09a1.86 1.86 0 0 0 -1.3-.6c-1 0-1.82.91-1.82 2.42s.71 2.46 1.79 2.46a2 2 0 0 0 .8-.2 2 2 0 0 0 .65-.5l.88 1a3.22 3.22 0 0 1 -1.07.83 3 3 0 0 1 -1.32.27c-1.86.06-3.43-1.26-3.43-3.8z"/><path d="m116.09 27.34h1.68v2.9h2.56v-2.9h1.67v7.53h-1.68v-3.15h-2.55v3.15h-1.67z"/></g>
            </svg>
        </a>
        <nav id="navbar" class="nav">
            <input type="checkbox" id="check" bind:checked={checkInput}>
            <label for="check" class="checkbtn">
                <span></span>
            </label>
            <ul>
                <li on:click={handleLiClick}> 
                    <a
                        id="-visibleCharging"
                        href="/#charging"
                        class="nav__link active">
                        {$_('header.charging', { default: "Charging" })}
                    </a>
                </li>
                <li on:click={handleLiClick}>
                    <a
                        id="-visibleMobility"
                        href="/#mobility"
                        class="nav__link">
                        {$_('header.mobility', { default: "Mobility" })}
                    </a>
                </li>
                <li on:click={handleLiClick}>
                    <a
                        id="-visibleEnergy"
                        href="/#energy"
                        class="nav__link">
                        {$_('header.energy', { default: "Energy" })}
                    </a>
                </li>
                <li on:click={handleLiClick}>
                    <a
                        id="-visibleContact"
                        href="/#contact"
                        class="nav__link is-contact"
                        class:is-contact-active={activeContact}>
                        {$_('header.contact', { default: "Contact" })}
                    </a>
                </li>

                <li on:click={handleLiClick}>
                    <a href="/" class="nav__link" class:is-active={$locale=='en'? true : false} on:click|preventDefault={() => changeLocale('en')}>
                        EN
                    </a>
                    <a href="/" class="nav__link" class:is-active={$locale=='es-ES'? true : false} on:click|preventDefault={() => changeLocale('es-ES')}>
                        ES
                    </a>
                    <a href="/" class="nav__link" class:is-active={$locale=='cat-VAL'? true : false} on:click|preventDefault={() => changeLocale('cat-VAL')}>
                        VAL
                    </a>
                </li>
            </ul>
            
        </nav>
    </div>
</header>


<div class="base-wrapper">
    <span id="scrollMenu"></span>

    <section class="charging" id="charging">
        <Charging {stopAnimationCharcing}/>
    </section>

    <section class="seam-1-2">
        
    </section>

    <section class="mobility" id="mobility">
        <Mobility {stopAnimationMobility}/>
    </section>
    
    <section class="seam-2-3">
        
        </section>

    <div class="bottom">

        

       
        <section style="z-index: 10 !important;" id="energy">
            <Energy />
        </section>

        <section style="z-index:12;" id="contact">
            <Contact bind:showPopup />
        </section>

        
        
        <Bottom {stopAnimationEnergy}/>
       
        
        
        <div class="bg-green">
        
        </div> 
        
        <Footer/>

        
    </div>

</div>

{#if showPopup}
    <ContactSubmitted bind:showPopup/>
{/if}



<style>

/* HEADER */
.header__link{
    z-index: 2;
}
.whiteBackground{
    background-color: white;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
}
.is-contact-active {

    background-color:white !important;
    color: #6C9B64 !important;
    border: 2px solid #6C9B64 !important;
    font-weight: 800 !important;
}

/* PARALLAX */
.base-wrapper {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 3px;
  position: relative;
}
section{
    position:relative
}

.charging{
    z-index: 2 !important;
    height: 130vh;
    background: linear-gradient(0deg, #DAF9F9, #DAF9F9);
}

.seam-1-2{
    background-image: url(seam-section-1-2.svg);
    background-size: cover;
    height: calc( 53vh + 12vw );
    width: 100vw;
    bottom: -32vh;
    position: absolute;
    z-index: 2 !important;
    -webkit-transform: translateZ(.8px) scale(.8);
    transform: translateZ(.8px) scale(.8);
    overflow-y: hidden;
}

.seam-2-3{
    background-image: url(seam-section-2-3.svg);
    background-size: cover;
    z-index: 2 !important;
    height: calc( 80vh + 10vw );
    width: 100vw;
    bottom: -174vh;
    /* top: calc( -39vw - (250px - 16vw)); */
    /* top: -84vh; */
    position: absolute;
    /* z-index: 6 !important; */
    transform: translateZ(.7px) scale(.8);

    /* transform: translate3d(0,0,0.5px); */
    overflow-y: hidden;
}

.mobility{
    z-index: 2 !important; 
    height: 125vh;
}

.header {
    /* top: 2rem; */
    padding: .5vh 0;
    left: 0;
    right: 0;
    position: fixed;
    z-index: 100;
}

.header .container ,
.nav {
    display: flex;
    align-items: center;
}

.nav {
    margin-left: auto;
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;
    font-family: Inter;
}

.nav__link {
    text-decoration: none;
    color: #385365;
    font-weight: 400;
    /* margin-left: 2rem; */
}

ul li .nav__link + ul li .nav__link {
    margin-left: 2rem;
}
li + li{
    margin-left: 2rem;
}
li a + a{
    margin-left: 1rem ;
}

:global(.nav__link.active) {
    font-weight: 800 !important;
}

:global(.nav__link.is-active) {
    font-weight: 800 !important;
}

.nav__link.is-contact {
    display: block;
    line-height: 1;
    background-color: #4C8C40;
    border-radius: 2.5rem;
    padding: .875rem 1.5rem;
    color: #fff;
}

.bottom {
    position: relative;
    /* overflow: hidden; */
}

.bg-green {
    /* height: calc(100% - (180vh + 6.5rem)); */
    height: 100%;
    background-color: #ccf06b;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
}

/* MOBILE */
nav ul li{
  display: inline-block;
  /* line-height: 80px;
  margin: 0 5px; */
}
.checkbtn{
  /* font-size: 30px;
  color: white; */
  float: right;
  line-height: 80px;
  /* margin-right: 40px; */
  cursor: pointer;
  display: none;
  z-index: 2;
}
.checkbtn span{
    width: 24px;
    height:18px;
    background: url(menu.svg) left top no-repeat;
    display:block;
}
#check{
  display: none;
}
@media only screen and (max-width: 768px) {
    header{
      padding: 1.5vh 0 !important;
    }
    .checkbtn{
        display: block;
    }
    ul{
        position: fixed;
        width: 100%;
        height: 100vh;
        background: white;
        left: calc( 100% + 12px);
        top:0px;
        text-align: center;
        transition: all .5s;
        z-index: 1;
        margin: 0;
        padding: 2rem;
        padding-top: 20vh;
    }
    nav ul li{
        display: block;
        margin: 50px 0;
        line-height: 30px;
    }
    nav ul li a{
        font-size: 20px;
    }
    #check:checked ~ ul{
        left: 0px;
        
    }
    #check:checked ~ label > span{
        background: url(exit-menu.svg) left top no-repeat;
    }
    .nav__link{
        font-size: 22px;
        line-height: 30px;
    }
    /* .seam-1-2{
        top: 53vh !important;
        width: 110vw;
        left: -2vw;
    } */
    .seam-2-3{
        width: 135vw;
        left: -25vw;
        top: 194vh;
        height: calc( 74vh + 10vw );
        -webkit-transform: translateZ(.7px) scale(.8) scaleX(1.2);
        transform: translateZ(.7px) scale(.8) scaleX(1.2);
    }
    .mobility{
        height: 120vh;
    }
}


/* TABLET */
@media only screen and (min-width: 540px) and (max-width: 768px) and (min-height: 720px) {
    .seam-1-2 {
        top: 65vh !important;
        width: 100.5vw;
  }
  header{
      padding: 1.5vh 0 !important;
  }
}

/* iPad Pro */
@media only screen and (min-width: 900px) and (max-width: 1124px) and (min-height: 1150px) {
    /* .seam-1-2 {
        bottom: -67vh;
    }*/
    .seam-2-3{
        height: calc( 97vh + 11vw );
    } 
    .charging{
        height: 110vh;
    }
}
/* @media only screen and (max-width: 380px) and (min-height: 740px) {
    .seam-2-3{
        top: -53vh;
    }
} */
</style>
