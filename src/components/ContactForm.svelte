<script>
    import Deco from '../svg/3_deco.svelte';
    import Leaves from '../svg/3_leaves.svelte';
    import axios from 'axios';
    import { _ } from 'svelte-i18n';

    let email;
    let errorEmail;
    let name;
    let errorName;
    let message;
    let errorMessage;
    let err;
    let send = $_('contact.button', { default: "Send message" });

    function validateEmail(value) { 
        const regex = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return ( value && regex.test(String(value).toLowerCase()) )
    }

    async function sendSubmitt(){
        err = null;
        errorEmail = false;
        errorMessage = false;
        errorName = false;
        console.log(name)

        if( !name || name == '')
        {
            errorName = true
            err = 'Please insert your name';
            return false;
        }
        
        let booleanSend = validateEmail(email);

        if(  !booleanSend ){
            errorEmail = true;
            err = 'Please, insert a valid email'
            return false;
        }

        if( !message )
        {
            errorMessage = true
            err = 'Please insert a message';
            return false;
        }
            
        try{
        // const response = await axios.post('https://',{})
        }
        catch(err){
            console.error(err)
            error = false;
        }
        error = false;
        send = 'Thank you!'
       

    }
</script>

<form action="" class="form">
    {#if err}
        <p style="color:red !important; margin:0">{err}</p>
    {/if}
    <div class="form__group">
        <input type="text" class="form__control" class:error={errorName} bind:value={name} placeholder="{$_('contact.phName', { default: "Your name" })}">
    </div>
    <div class="form__group">
        <input type="email" class="form__control" class:error={errorEmail} bind:value={email} placeholder="{$_('contact.phEmail', { default: "user@domain.com" })}">
    </div>
    <div class="form__group">
        <textarea class="form__control is-textarea" class:error={errorMessage} bind:value={message} placeholder="{$_('contact.phMessage', { default: "Leave us a message" })}"></textarea>
    </div>
    <button type="submit" on:click|preventDefault={sendSubmitt} class="form__submit">{send}</button>

    <Deco />
    <Leaves />
</form>

<style>
.error{
    border-color: red !important;
    animation-name: fadeInOpacity;
    animation-iteration-count: 1;
    animation-timing-function: ease-in;
    animation-duration: .5s;
    opacity: 1;
}

@keyframes fadeInOpacity {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
.form {
    position: relative;
    width: 100%;
}

.form__group + .form__group {
    margin-top: .5rem;
}

.form__control {
    border-radius: 2px;
    border: 2px solid #fff;
    background-color: #fff;
    box-shadow: none;
    color: #275E5E;
    font-family: Inter;
    font-weight: 400;
    font-size: .875rem;
    line-height: 1.5;
    padding: 1rem;
    width: 100%;
    transition: all .25s;
}

.form__control:focus {
    border-color: #275E5E;
}

.form__control.is-textarea {
    min-height: 15vh;
}

.form__submit {
    background-color: #4C8C40;
    border-radius: 2.5rem;
    padding: 1rem;
    font-size: 1rem 2rem;
    font-family: Inter;
    font-weight: 600;
    color: #fff;
    margin-top: 1rem;
}
</style>