<template>
    <div class="container">
       <header>
        <img src="https://pbs.twimg.com/media/F_IbH8JawAAfbhv?format=jpg&name=small" alt="">
        <slot name="header">

        </slot>
       </header>

       <main>
        <img src="https://pbs.twimg.com/media/F_dGbrWbUAAy4bt?format=jpg&name=small" alt="">
         <slot >

         </slot>
       </main>

       <footer>

        <img src="https://pbs.twimg.com/media/F_XvyYOaIAAYTS6?format=jpg&name=small" alt="">
         <slot name="footer">

         </slot>
       </footer>
    </div>
</template>



<style>
    footer{
        background-color: #333;
        color: #fff;
        padding: 10px;
    }

    header{
        background-color: #333;
        color: #fff;
        padding: 10px;
    }

    main{
        background-color: #fff;
        color: #333;
        padding: 10px;
    }

</style>