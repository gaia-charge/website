<script>
    import Deco from '../svg/3_deco.svelte';
    import Leaves from '../svg/3_leaves.svelte';
</script>

<form action="" class="form">
    <div class="form__group">
        <input type="text" class="form__control" placeholder="Your name">
    </div>
    <div class="form__group">
        <input type="email" class="form__control" placeholder="user@domain.com">
    </div>
    <div class="form__group">
        <textarea class="form__control is-textarea" placeholder="Leave us a message"></textarea>
    </div>
    <button type="submit" class="form__submit">Send message</button>

    <Deco />
    <Leaves />
</form>

<style>
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