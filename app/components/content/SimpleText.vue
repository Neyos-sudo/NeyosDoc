<template>
    <div class="bg-slate-100 p-3 min-h-[200px] text-slate-700 dark:bg-slate-800 dark:shadow dark:text-slate-200 space-y-2">
        
        <section>
            <h1 class="text-2xl font-bold"><slot name="title" /></h1>
            <p><slot name="content" /></p>
        </section>
    </div>
</template>